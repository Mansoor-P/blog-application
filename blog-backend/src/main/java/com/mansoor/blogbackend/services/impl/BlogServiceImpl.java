package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.exceptions.BlogNotFoundException;
import com.mansoor.blogbackend.exceptions.UserNotFoundException;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.models.BlogStatus;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.repositories.BlogRepository;
import com.mansoor.blogbackend.repositories.UserRepository;
import com.mansoor.blogbackend.services.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class BlogServiceImpl implements BlogService {

    private final BlogRepository blogRepository;
    private final UserRepository userRepository;

    @Override
    public BlogDTO createBlog(BlogDTO blogDTO) {
        User author = userRepository.findById(blogDTO.getAuthorId())
                .orElseThrow(() -> new UserNotFoundException("Author not found with ID: " + blogDTO.getAuthorId()));

        Blog blog = new Blog();
        blog.setTitle(blogDTO.getTitle());
        blog.setSlug(blogDTO.getSlug());
        blog.setContent(blogDTO.getContent());
        blog.setCoverImageUrl(blogDTO.getCoverImageUrl());
        blog.setPublishedAt(blogDTO.getPublishedAt());
        blog.setStatus(BlogStatus.valueOf(blogDTO.getStatus()));
        blog.setReadTime(blogDTO.getReadTime());
        blog.setTags(blogDTO.getTags());
        blog.setAuthor(author);

        return convertToDTO(blogRepository.save(blog));
    }

    @Override
    public BlogDTO getBlogById(Long postId) {
        return blogRepository.findById(postId)
                .map(this::convertToDTO)
                .orElseThrow(() -> new BlogNotFoundException("Blog not found with ID: " + postId));
    }

    @Override
    public BlogDTO getBlogBySlug(String slug) {
        return blogRepository.findBySlug(slug)
                .map(this::convertToDTO)
                .orElseThrow(() -> new BlogNotFoundException("Blog not found with slug: " + slug));
    }

    @Override
    public List<BlogDTO> getAllBlogs() {
        return blogRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BlogDTO> getBlogsByAuthor(Long authorId) {
        User author = userRepository.findById(authorId)
                .orElseThrow(() -> new UserNotFoundException("Author not found with ID: " + authorId));

        return blogRepository.findByAuthor(author)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BlogDTO> searchBlogsByTitle(String title) {
        return blogRepository.findByTitleContainingIgnoreCase(title)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BlogDTO updateBlog(Long postId, BlogDTO blogDTO) {
        Blog blog = blogRepository.findById(postId)
                .orElseThrow(() -> new BlogNotFoundException("Blog not found with ID: " + postId));

        blog.setTitle(blogDTO.getTitle());
        blog.setSlug(blogDTO.getSlug());
        blog.setContent(blogDTO.getContent());
        blog.setCoverImageUrl(blogDTO.getCoverImageUrl());
        blog.setStatus(BlogStatus.valueOf(blogDTO.getStatus()));
        blog.setReadTime(blogDTO.getReadTime());
        blog.setTags(blogDTO.getTags());

        return convertToDTO(blogRepository.save(blog));
    }

    @Override
    public void deleteBlog(Long postId) {
        if (!blogRepository.existsById(postId)) {
            throw new BlogNotFoundException("Blog not found with ID: " + postId);
        }
        blogRepository.deleteById(postId);
    }

    private BlogDTO convertToDTO(Blog blog) {
        return BlogDTO.builder()
                .postId(blog.getPostId())
                .title(blog.getTitle())
                .slug(blog.getSlug())
                .content(blog.getContent())
                .coverImageUrl(blog.getCoverImageUrl())
                .publishedAt(blog.getPublishedAt())
                .createdAt(blog.getCreatedAt())
                .updatedAt(blog.getUpdatedAt())
                .status(blog.getStatus().name())
                .readTime(blog.getReadTime())
                .tags(blog.getTags())
                .likesCount(blog.getLikesCount())
                .commentsCount(blog.getCommentsCount())
                .viewsCount(blog.getViewsCount())
                .isFeatured(blog.isFeatured())
                .authorId(blog.getAuthor().getUserId())
                .authorUsername(blog.getAuthor().getUsername())
                .build();
    }
}
