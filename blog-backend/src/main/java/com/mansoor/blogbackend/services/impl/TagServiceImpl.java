package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.TagDTO;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.models.Tag;
import com.mansoor.blogbackend.repositories.BlogRepository;
import com.mansoor.blogbackend.repositories.TagRepository;
import com.mansoor.blogbackend.service.TagService;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TagServiceImpl implements TagService {

    private final TagRepository tagRepository;
    private final BlogRepository blogRepository;

    public TagServiceImpl(TagRepository tagRepository, BlogRepository blogRepository) {
        this.tagRepository = tagRepository;
        this.blogRepository = blogRepository;
    }

    @Override
    public TagDTO createTag(TagDTO tagDTO) {
        Tag tag = new Tag(tagDTO.getName());
        Tag savedTag = tagRepository.save(tag);
        return new TagDTO(savedTag.getId(), savedTag.getName());
    }

    @Override
    public List<TagDTO> getTagsByName(String name) {
        return tagRepository.findByNameContainingIgnoreCase(name).stream()
                .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                .collect(Collectors.toList());
    }

    @Override
    public List<TagDTO> getTagsForBlog(Long blogId) {
        Optional<Blog> blog = blogRepository.findById(blogId);
        return blog.map(value -> value.getTags().stream()
                .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                .collect(Collectors.toList())).orElseGet(List::of);
    }

    @Override
    public void addTagsToBlog(Long blogId, List<Long> tagIds) {
        Optional<Blog> blog = blogRepository.findById(blogId);
        if (blog.isPresent()) {
            List<Tag> tags = tagRepository.findAllById(tagIds);
            blog.get().setTags(new HashSet<>(tags));
            blogRepository.save(blog.get());
        }
    }
}
