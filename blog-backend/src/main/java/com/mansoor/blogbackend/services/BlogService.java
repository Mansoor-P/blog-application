package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.BlogDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BlogService {

    // Create a new blog
    BlogDTO createBlog(BlogDTO blogDTO);

    // Update an existing blog
    BlogDTO updateBlog(Long id, BlogDTO blogDTO);

    // Delete a blog by ID
    void deleteBlog(Long id);

    // Retrieve a blog by ID
    BlogDTO getBlogById(Long id);

    // Retrieve all blogs
    List<BlogDTO> getAllBlogs();

    // Retrieve all blogs by a specific user
    List<BlogDTO> getBlogsByUserId(Long userId);

    // Retrieve paginated blogs
    Page<BlogDTO> getAllBlogsPaged(Pageable pageable);

    // Search blogs by title (case insensitive)
    List<BlogDTO> searchBlogsByTitle(String title);
}
