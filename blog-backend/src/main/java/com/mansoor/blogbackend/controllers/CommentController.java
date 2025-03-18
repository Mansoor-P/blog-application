package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.CommentDTO;
import com.mansoor.blogbackend.services.CommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.base}/comments") // Dynamically injects the API base from application.yml
public class CommentController {

    private final CommentService commentService;

    // Constructor injection for CommentService
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    // Get comments for a specific blog post
    @GetMapping("/blog/{blogId}")
    public List<CommentDTO> getCommentsByBlogId(@PathVariable Long blogId) {
        return commentService.getCommentsByBlogId(blogId);
    }

    // Create a new comment
    @PostMapping
    public CommentDTO createComment(@RequestBody CommentDTO commentDTO) {
        return commentService.createComment(commentDTO);
    }

    // Update an existing comment
    @PutMapping("/{id}")
    public CommentDTO updateComment(@PathVariable Long id, @RequestBody CommentDTO commentDTO) {
        return commentService.updateComment(id, commentDTO);
    }

    // Delete a comment
    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable Long id) {
        commentService.deleteComment(id);
    }
}
