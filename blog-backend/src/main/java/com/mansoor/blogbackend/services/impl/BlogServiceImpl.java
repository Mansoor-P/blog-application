package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.BlogBackendApplication;
import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.exceptions.BlogNotFoundException;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.repositories.BlogRepository;
import com.mansoor.blogbackend.services.BlogService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class BlogServiceImpl implements BlogService {

    private final BlogRepository blogRepository;
    private static final Logger log = LoggerFactory.getLogger(BlogServiceImpl.class);

    public BlogServiceImpl(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @Override
    public BlogDTO getBlogById(Long id) {
        log.info("Fetching blog with ID: {}", id);
        return blogRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new BlogNotFoundException("Blog not found with ID: " + id));
    }

    @Override
    public List<BlogDTO> getAllBlogs() {
        log.info("Fetching all blogs");
        return blogRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Page<BlogDTO> getAllBlogsPaged(Pageable pageable) {
        log.info("Fetching paginated blogs");
        return blogRepository.findAll(pageable).map(this::convertToDTO);
    }

    @Override
    public List<BlogDTO> getBlogsByUserId(Long userId) {
        log.info("Fetching blogs for user ID: {}", userId);
        return blogRepository.findByUserId(userId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BlogDTO> searchBlogsByTitle(String title) {
        log.info("Searching blogs with title: {}", title);
        return blogRepository.findByTitleContainingIgnoreCase(title).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BlogDTO createBlog(BlogDTO blogDTO) {
        log.info("Creating a new blog with title: {}", blogDTO.getTitle());
        Blog blog = new Blog(
                null,
                blogDTO.getTitle(),
                blogDTO.getSummary(),
                blogDTO.getContent(),
                blogDTO.getAuthor(),
                blogDTO.getUserId(),
                new java.util.Date(),
                new java.util.Date()
        );
        Blog savedBlog = blogRepository.save(blog);
        return convertToDTO(savedBlog);
    }

    @Override
    public BlogDTO updateBlog(Long id, BlogDTO blogDTO) {
        log.info("Updating blog with ID: {}", id);
        Blog blog = blogRepository.findById(id)
                .orElseThrow(() -> new BlogNotFoundException("Blog not found with ID: " + id));

        blog.setTitle(blogDTO.getTitle());
        blog.setSummary(blogDTO.getSummary());
        blog.setContent(blogDTO.getContent());
        blog.setUpdatedAt(new java.util.Date());

        Blog updatedBlog = blogRepository.save(blog);
        return convertToDTO(updatedBlog);
    }

    @Override
    public void deleteBlog(Long id) {
        log.info("Deleting blog with ID: {}", id);
        if (!blogRepository.existsById(id)) {
            throw new BlogNotFoundException("Blog not found with ID: " + id);
        }
        blogRepository.deleteById(id);
    }

    private BlogDTO convertToDTO(Blog blog) {
        return new BlogDTO(
                blog.getId(),
                blog.getTitle(),
                blog.getSummary(),
                blog.getContent(),
                blog.getAuthor(),
                blog.getUserId(),
                blog.getCreatedAt(),
                blog.getUpdatedAt()
        );
    }
}
