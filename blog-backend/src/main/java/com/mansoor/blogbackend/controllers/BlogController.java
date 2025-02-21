package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.services.BlogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173") // Allow frontend access
@RestController
@RequestMapping("/api/v1/blogs")
@Slf4j
@Tag(name = "Blog API", description = "Endpoints for managing blogs")
public class BlogController {

    private final BlogService blogService;
    private static final Logger log = LoggerFactory.getLogger(BlogController.class);

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    /**
     * Create a new blog post
     */
    @Operation(summary = "Create a new blog post")
    @PostMapping
    public ResponseEntity<BlogDTO> createBlog(@RequestBody BlogDTO blog) {
        log.info("Received request to create a new blog post");
        BlogDTO createdBlog = blogService.createBlog(blog);
        log.info("Successfully created blog post with ID: {}", createdBlog.getId());
        return ResponseEntity.status(201).body(createdBlog);
    }

    /**
     * Get all blog posts
     */
    @Operation(summary = "Retrieve all blogs")
    @GetMapping
    public ResponseEntity<List<BlogDTO>> getAllBlogs() {
        log.info("Fetching all blog posts");
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
        BlogDTO blog = blogService.getBlogById(id);
        return ResponseEntity.ok(blog);
    }

    /**
     * Get all blogs by a specific user
     */
    @Operation(summary = "Retrieve blogs by user ID")
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<BlogDTO>> getBlogsByUser(@PathVariable Long userId) {
        log.info("Fetching blogs for user ID: {}", userId);
        List<BlogDTO> blogs = blogService.getBlogsByUserId(userId);
        log.info("Fetched {} blog posts for user ID: {}", blogs.size(), userId);
        return ResponseEntity.ok(blogs);
    }

    /**
     * Update a blog post
     */
    @Operation(summary = "Update an existing blog post")
    @PutMapping("/{id}")
    public ResponseEntity<BlogDTO> updateBlog(@PathVariable Long id, @RequestBody BlogDTO blog) {
        log.info("Updating blog post with ID: {}", id);
        BlogDTO updatedBlog = blogService.updateBlog(id, blog);
        log.info("Successfully updated blog post with ID: {}", id);
        return ResponseEntity.ok(updatedBlog);
    }

    /**
     * Delete a blog post
     */
    @Operation(summary = "Delete a blog post by ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBlog(@PathVariable Long id) {
        log.info("Deleting blog post with ID: {}", id);
        blogService.deleteBlog(id);
        return ResponseEntity.ok("Blog deleted successfully");
    }
}
