package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.models.Tag;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.repositories.BlogRepository;
import com.mansoor.blogbackend.repositories.TagRepository;
import com.mansoor.blogbackend.repositories.UserRepository;
import com.mansoor.blogbackend.services.BlogService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class BlogServiceImpl implements BlogService {

    private final BlogRepository blogRepository;
    private final UserRepository userRepository;
    private final TagRepository tagRepository;

    public BlogServiceImpl(BlogRepository blogRepository, UserRepository userRepository, TagRepository tagRepository) {
        this.blogRepository = blogRepository;
        this.userRepository = userRepository;
        this.tagRepository = tagRepository;
    }

    @Override
    public BlogDTO createBlog(BlogDTO blogDTO) {
        User user = userRepository.findById(blogDTO.getUserId()).orElseThrow(() -> new RuntimeException("User not found"));

        Blog blog = new Blog(blogDTO.getTitle(), blogDTO.getSummary(), blogDTO.getContent(), blogDTO.getAuthor(), user);

        // Convert tag names to Tag entities
        Set<Tag> tags = blogDTO.getTags().stream()
                .map(tagName -> tagRepository.findByName(tagName).orElseGet(() -> new Tag(tagName)))
                .collect(Collectors.toSet());

        blog.setTags(tags);
        Blog savedBlog = blogRepository.save(blog);
        return convertToDTO(savedBlog);
    }

    @Override
    public BlogDTO updateBlog(Long id, BlogDTO blogDTO) {
        Optional<Blog> existingBlog = blogRepository.findById(id);
        if (existingBlog.isPresent()) {
            Blog blog = existingBlog.get();
            blog.setTitle(blogDTO.getTitle());
            blog.setSummary(blogDTO.getSummary());
            blog.setContent(blogDTO.getContent());
            blog.setUpdatedAt(new java.util.Date());

            Blog updatedBlog = blogRepository.save(blog);
            return convertToDTO(updatedBlog);
        }
        return null;
    }

    @Override
    public void deleteBlog(Long id) {
        blogRepository.deleteById(id);
    }

    @Override
    public BlogDTO getBlogById(Long id) {
        return blogRepository.findById(id).map(this::convertToDTO).orElse(null);
    }

    @Override
    public List<BlogDTO> getAllBlogs() {
        return blogRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public List<BlogDTO> getBlogsByUserId(Long userId) {
        return blogRepository.findByUserId(userId).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private BlogDTO convertToDTO(Blog blog) {
        return new BlogDTO(
                blog.getId(),
                blog.getTitle(),
                blog.getSummary(),
                blog.getContent(),
                blog.getAuthor(),
                blog.getCreatedAt(),
                blog.getUpdatedAt(),
                blog.getUser().getId(),
                blog.getTags().stream().map(Tag::getName).collect(Collectors.toSet()),
                null // We will handle comments separately
        );
    }
}
