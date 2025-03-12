package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.services.BlogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @Operation(summary = "Create a new blog", description = "This API allows users to create a new blog post.")
    @ApiResponse(responseCode = "201", description = "Blog created successfully")
    @PostMapping
    public ResponseEntity<BlogDTO> createBlog(@Valid @RequestBody BlogDTO blog) {
        return ResponseEntity.status(201).body(blogService.createBlog(blog));
    }

    @Operation(summary = "Get all blogs", description = "Retrieve all blog posts from the database.")
    @ApiResponse(responseCode = "200", description = "Blogs retrieved successfully")
    @GetMapping
    public ResponseEntity<List<BlogDTO>> getAllBlogs() {
        return ResponseEntity.ok(blogService.getAllBlogs());
    }

    @Operation(summary = "Get paginated blogs", description = "Retrieve paginated blog posts.")
    @ApiResponse(responseCode = "200", description = "Blogs retrieved successfully")
    @GetMapping("/paged")
    public ResponseEntity<Page<BlogDTO>> getPaginatedBlogs(Pageable pageable) {
        return ResponseEntity.ok(blogService.getAllBlogsPaged(pageable));
    }

    @Operation(summary = "Get blog by ID", description = "Fetch a blog post by its unique ID.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Blog found"),
            @ApiResponse(responseCode = "404", description = "Blog not found")
    })
    @GetMapping("/{id}")
    public ResponseEntity<BlogDTO> getBlogById(@PathVariable Long id) {
        return ResponseEntity.ok(blogService.getBlogById(id));
    }

    @Operation(summary = "Search blogs", description = "Search blog posts by title (case-insensitive).")
    @ApiResponse(responseCode = "200", description = "Blogs retrieved successfully")
    @GetMapping("/search")
    public ResponseEntity<List<BlogDTO>> searchBlogs(@RequestParam String title) {
        return ResponseEntity.ok(blogService.searchBlogsByTitle(title));
    }

    @Operation(summary = "Update a blog", description = "Modify an existing blog post by providing a valid ID and new content.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Blog updated successfully"),
            @ApiResponse(responseCode = "404", description = "Blog not found")
    })
    @PutMapping("/{id}")
    public ResponseEntity<BlogDTO> updateBlog(@PathVariable Long id, @Valid @RequestBody BlogDTO blog) {
        return ResponseEntity.ok(blogService.updateBlog(id, blog));
    }

    @Operation(summary = "Delete a blog", description = "Remove a blog post permanently using its ID.")
    @ApiResponses({
            @ApiResponse(responseCode = "204", description = "Blog deleted successfully"),
            @ApiResponse(responseCode = "404", description = "Blog not found")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable Long id) {
        blogService.deleteBlog(id);
        return ResponseEntity.noContent().build();
    }
}
