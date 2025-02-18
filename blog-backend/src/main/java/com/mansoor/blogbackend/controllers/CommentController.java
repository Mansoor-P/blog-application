package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.CommentDTO;
import com.mansoor.blogbackend.services.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    // Add a comment to a blog
    @PostMapping("/{blogId}/comments")
    public ResponseEntity<CommentDTO> addComment(@PathVariable Long blogId, @RequestParam Long userId, @RequestBody CommentDTO commentDTO) {
        return ResponseEntity.ok(commentService.addComment(blogId, userId, commentDTO));
    }

    // Get all comments for a blog
    @GetMapping("/{blogId}/comments")
    public ResponseEntity<List<CommentDTO>> getCommentsByBlogId(@PathVariable Long blogId) {
        return ResponseEntity.ok(commentService.getCommentsByBlogId(blogId));
    }

    // Get all comments by a user
    @GetMapping("/user/{userId}/comments")
    public ResponseEntity<List<CommentDTO>> getCommentsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(commentService.getCommentsByUserId(userId));
    }

    // Delete a comment
    @DeleteMapping("/comments/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.noContent().build();
    }
}
