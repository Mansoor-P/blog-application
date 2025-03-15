package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.services.BlogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/blogs")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "Blog API", description = "Endpoints for managing blog posts")
public class BlogController {

    private final BlogService blogService;

    @Operation(summary = "Create a new blog post")
    @PostMapping
    public ResponseEntity<BlogDTO> createBlog(@RequestBody BlogDTO blogDTO) {
        log.info("Creating a new blog: {}", blogDTO.getTitle());
        return ResponseEntity.status(201).body(blogService.createBlog(blogDTO));
    }

    @Operation(summary = "Get a blog by ID")
    @GetMapping("/{postId}")
    public ResponseEntity<BlogDTO> getBlogById(@PathVariable Long postId) {
        log.info("Fetching blog with ID: {}", postId);
        return ResponseEntity.ok(blogService.getBlogById(postId));
    }

    @Operation(summary = "Get a blog by Slug")
    @GetMapping("/slug/{slug}")
    public ResponseEntity<BlogDTO> getBlogBySlug(@PathVariable String slug) {
        log.info("Fetching blog with slug: {}", slug);
        return ResponseEntity.ok(blogService.getBlogBySlug(slug));
    }

    @Operation(summary = "Get all blogs")
    @GetMapping
    public ResponseEntity<List<BlogDTO>> getAllBlogs() {
        log.info("Fetching all blogs");
        return ResponseEntity.ok(blogService.getAllBlogs());
    }

    @Operation(summary = "Get all blogs by Author ID")
    @GetMapping("/author/{authorId}")
    public ResponseEntity<List<BlogDTO>> getBlogsByAuthor(@PathVariable Long authorId) {
        log.info("Fetching blogs for author ID: {}", authorId);
        return ResponseEntity.ok(blogService.getBlogsByAuthor(authorId));
    }

    @Operation(summary = "Search blogs by title")
    @GetMapping("/search")
    public ResponseEntity<List<BlogDTO>> searchBlogs(@RequestParam String title) {
        log.info("Searching blogs with title: {}", title);
        return ResponseEntity.ok(blogService.searchBlogsByTitle(title));
    }

    @Operation(summary = "Update a blog post")
    @PutMapping("/{postId}")
    public ResponseEntity<BlogDTO> updateBlog(@PathVariable Long postId, @RequestBody BlogDTO blogDTO) {
        log.info("Updating blog with ID: {}", postId);
        return ResponseEntity.ok(blogService.updateBlog(postId, blogDTO));
    }

    @Operation(summary = "Delete a blog post")
    @DeleteMapping("/{postId}")
    public ResponseEntity<Void> deleteBlog(@PathVariable Long postId) {
        log.info("Deleting blog with ID: {}", postId);
        blogService.deleteBlog(postId);
        return ResponseEntity.noContent().build();
    }
}
