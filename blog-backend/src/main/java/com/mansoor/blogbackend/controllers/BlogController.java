package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.services.BlogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

@RestController
@RequestMapping("/api/v1/blogs")
@Slf4j
@Tag(name = "Blog API", description = "Endpoints for managing blogs") // Swagger Tag
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @Operation(summary = "Create a new blog", description = "This API allows users to create a new blog post.")
    @PostMapping
    public ResponseEntity<BlogDTO> createBlog(@Valid @RequestBody BlogDTO blog) {
        return ResponseEntity.status(201).body(blogService.createBlog(blog));
    }

    @Operation(summary = "Get all blogs", description = "Retrieve all blog posts from the database.")
    @GetMapping
    public ResponseEntity<List<BlogDTO>> getAllBlogs() {
        return ResponseEntity.ok(blogService.getAllBlogs());
    }

    @Operation(summary = "Get blog by ID", description = "Fetch a blog post by its unique ID.")
    @GetMapping("/{id}")
    public ResponseEntity<BlogDTO> getBlogById(@PathVariable Long id) {
        return ResponseEntity.ok(blogService.getBlogById(id));
    }

    @Operation(summary = "Search blogs", description = "Search blog posts by title (case-insensitive).")
    @GetMapping("/search")
    public ResponseEntity<List<BlogDTO>> searchBlogs(@RequestParam String title) {
        return ResponseEntity.ok(blogService.searchBlogsByTitle(title));
    }

    @Operation(summary = "Update a blog", description = "Modify an existing blog post by providing a valid ID and new content.")
    @PutMapping("/{id}")
    public ResponseEntity<BlogDTO> updateBlog(@PathVariable Long id, @Valid @RequestBody BlogDTO blog) {
        return ResponseEntity.ok(blogService.updateBlog(id, blog));
    }

    @Operation(summary = "Delete a blog", description = "Remove a blog post permanently using its ID.")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable Long id) {
        blogService.deleteBlog(id);
        return ResponseEntity.noContent().build();
    }
}
