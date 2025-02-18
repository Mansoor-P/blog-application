package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.repositories.BlogRepository;
import com.mansoor.blogbackend.services.BlogService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BlogServiceImpl implements BlogService {

    private final BlogRepository blogRepository;

    public BlogServiceImpl(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @Override
    public BlogDTO createBlog(BlogDTO blogDTO) {
        Blog blog = new Blog(blogDTO.getTitle(), blogDTO.getSummary(), blogDTO.getContent(), blogDTO.getAuthor(), blogDTO.getUserId());
        blog.setCreatedAt(new java.util.Date());
        blog.setUpdatedAt(new java.util.Date());
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
        return null; // Return null if blog doesn't exist
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
                blog.getUserId(),
                blog.getCreatedAt(),
                blog.getUpdatedAt()
        );
    }
}
