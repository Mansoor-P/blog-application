package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.services.BlogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/blogs")
@Slf4j
@Tag(name = "Blog API", description = "Endpoints for managing blogs")
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    /**
     * Create a new blog post
     */
    @Operation(summary = "Create a new blog post")
    @PostMapping
    public ResponseEntity<BlogDTO> createBlog(@Valid @RequestBody BlogDTO blog) {
        log.info("Creating a new blog post");
        return ResponseEntity.status(201).body(blogService.createBlog(blog));
    }

    /**
     * Get all blog posts
     */
    @Operation(summary = "Retrieve all blogs")
    @GetMapping
    public ResponseEntity<List<BlogDTO>> getAllBlogs() {
        List<BlogDTO> blogs = blogService.getAllBlogs();
        log.info("Fetched {} blog posts", blogs.size());
        return ResponseEntity.ok(blogs);
    }

    /**
     * Get a blog post by ID
     */
    @Operation(summary = "Retrieve a blog by ID")
    @GetMapping("/{id}")
    public ResponseEntity<BlogDTO> getBlogById(@PathVariable Long id) {
        log.info("Fetching blog post with ID: {}", id);
        return ResponseEntity.ok(blogService.getBlogById(id));
    }

    /**
     * Get all blogs by a specific user
     */
    @Operation(summary = "Retrieve blogs by user ID")
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<BlogDTO>> getBlogsByUser(@PathVariable Long userId) {
        List<BlogDTO> blogs = blogService.getBlogsByUserId(userId);
        log.info("Fetched {} blogs for user ID: {}", blogs.size(), userId);
        return ResponseEntity.ok(blogs);
    }

    /**
     * Update a blog post
     */
    @Operation(summary = "Update an existing blog post")
    @PutMapping("/{id}")
    public ResponseEntity<BlogDTO> updateBlog(@PathVariable Long id, @Valid @RequestBody BlogDTO blog) {
        return ResponseEntity.ok(blogService.updateBlog(id, blog));
    }

    /**
     * Delete a blog post
     */
    @Operation(summary = "Delete a blog post by ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable Long id) {
        blogService.deleteBlog(id);
        log.info("Deleted blog post with ID: {}", id);
        return ResponseEntity.noContent().build(); // HTTP 204 No Content
    }
}
