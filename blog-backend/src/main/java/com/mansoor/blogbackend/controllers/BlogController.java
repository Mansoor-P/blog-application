package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.services.BlogService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    // 🔹 Create a new blog post
    @PostMapping
    public ResponseEntity<BlogDTO> createBlog(@RequestBody BlogDTO blogDTO, HttpSession session) {
        BlogDTO createdBlog = blogService.createBlog(blogDTO, session);
        return ResponseEntity.ok(createdBlog);
    }

    // 🔹 Update an existing blog post
    @PutMapping("/{postId}")
    public ResponseEntity<BlogDTO> updateBlog(
            @PathVariable Long postId,
            @RequestBody BlogDTO blogDTO,
            HttpSession session) {
        BlogDTO updatedBlog = blogService.updateBlog(postId, blogDTO, session);
        return ResponseEntity.ok(updatedBlog);
    }

    // 🔹 Delete a blog post
    @DeleteMapping("/{postId}")
    public ResponseEntity<String> deleteBlog(@PathVariable Long postId, HttpSession session) {
        blogService.deleteBlog(postId, session);
        return ResponseEntity.ok("Blog deleted successfully!");
    }

    // 🔹 Get a blog by ID
    @GetMapping("/{postId}")
    public ResponseEntity<BlogDTO> getBlogById(@PathVariable Long postId) {
        Optional<BlogDTO> blog = blogService.getBlogById(postId);
        return blog.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // 🔹 Get a blog by slug
    @GetMapping("/slug/{slug}")
    public ResponseEntity<BlogDTO> getBlogBySlug(@PathVariable String slug) {
        Optional<BlogDTO> blog = blogService.getBlogBySlug(slug);
        return blog.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // 🔹 Get all blogs by an author
    @GetMapping("/author/{authorId}")
    public ResponseEntity<List<BlogDTO>> getBlogsByAuthor(@PathVariable Long authorId) {
        List<BlogDTO> blogs = blogService.getBlogsByAuthor(authorId);
        return ResponseEntity.ok(blogs);
    }

    // 🔹 Get blogs by category
    @GetMapping("/category/{category}")
    public ResponseEntity<List<BlogDTO>> getBlogsByCategory(@PathVariable String category) {
        List<BlogDTO> blogs = blogService.getBlogsByCategory(category);
        return ResponseEntity.ok(blogs);
    }

    // 🔹 Get blogs by subcategory
    @GetMapping("/subcategory/{subCategory}")
    public ResponseEntity<List<BlogDTO>> getBlogsBySubCategory(@PathVariable String subCategory) {
        List<BlogDTO> blogs = blogService.getBlogsBySubCategory(subCategory);
        return ResponseEntity.ok(blogs);
    }

    // 🔹 Get trending blogs
    @GetMapping("/trending")
    public ResponseEntity<List<BlogDTO>> getTrendingBlogs() {
        List<BlogDTO> blogs = blogService.getTrendingBlogs();
        return ResponseEntity.ok(blogs);
    }

    // 🔹 Get premium blogs
    @GetMapping("/premium")
    public ResponseEntity<List<BlogDTO>> getPremiumBlogs() {
        List<BlogDTO> blogs = blogService.getPremiumBlogs();
        return ResponseEntity.ok(blogs);
    }

    // 🔹 Search blogs by title
    @GetMapping("/search")
    public ResponseEntity<List<BlogDTO>> searchBlogsByTitle(@RequestParam String title) {
        List<BlogDTO> blogs = blogService.searchBlogsByTitle(title);
        return ResponseEntity.ok(blogs);
    }

    // 🔹 Get the latest blogs
    @GetMapping("/latest")
    public ResponseEntity<List<BlogDTO>> getLatestBlogs() {
        List<BlogDTO> blogs = blogService.getLatestBlogs();
        return ResponseEntity.ok(blogs);
    }
}
