package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.models.Post;
import com.mansoor.blogbackend.services.impl.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    // Get all posts
    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    // Get a post by ID
    @GetMapping("/{id}")
    public Optional<Post> getPostById(@PathVariable Long id) {
        return postService.getPostById(id);
    }

    // Create a new post
    @PostMapping
    public Post createPost(@RequestBody Post post) {
        // Generate slug if not present
        if (post.getSlug() == null || post.getSlug().isEmpty()) {
            post.setSlug(postService.generateSlug(post.getTitle()));
        }
        return postService.createPost(post);
    }

    // Update an existing post
    @PutMapping("/{id}")
    public Post updatePost(@PathVariable Long id, @RequestBody Post post) {
        // Generate slug if not present
        if (post.getSlug() == null || post.getSlug().isEmpty()) {
            post.setSlug(postService.generateSlug(post.getTitle()));
        }
        return postService.updatePost(id, post);
    }

    // Delete a post by ID
    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id) {
        postService.deletePost(id);
    }
}
