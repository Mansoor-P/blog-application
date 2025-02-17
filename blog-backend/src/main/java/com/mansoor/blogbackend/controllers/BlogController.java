package com.mansoor.blogbackend.controllers;



import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blogs")
public class BlogController {

    private final BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @PostMapping
    public ResponseEntity<Blog> createBlog(@RequestBody BlogDTO blogDTO, @RequestHeader("userId") Long userId) {
        Blog blog = blogService.createBlog(blogDTO, userId);
        return ResponseEntity.ok(blog);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Blog> updateBlog(@PathVariable Long id, @RequestBody BlogDTO blogDTO, @RequestHeader("userId") Long userId) {
        Blog blog = blogService.updateBlog(id, blogDTO, userId);
        return ResponseEntity.ok(blog);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable Long id, @RequestHeader("userId") Long userId) {
        blogService.deleteBlog(id, userId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable Long id) {
        Blog blog = blogService.getBlogById(id);
        return ResponseEntity.ok(blog);
    }

    @GetMapping
    public ResponseEntity<List<Blog>> getAllBlogs() {
        List<Blog> blogs = blogService.getAllBlogs();
        return ResponseEntity.ok(blogs);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Blog>> getBlogsByUser(@PathVariable Long userId) {
        List<Blog> blogs = blogService.getBlogsByUser(userId);
        return ResponseEntity.ok(blogs);
    }
}
