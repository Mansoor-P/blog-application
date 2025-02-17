package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.CommentDTO;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.models.Comment;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.repositories.BlogRepository;
import com.mansoor.blogbackend.repositories.CommentRepository;
import com.mansoor.blogbackend.repositories.UserRepository;
import com.mansoor.blogbackend.services.CommentService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;

    private final BlogRepository blogRepository;
    private final UserRepository userRepository;

    public CommentServiceImpl(CommentRepository commentRepository, BlogRepository blogRepository, UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.blogRepository = blogRepository;
        this.userRepository = userRepository;
    }

    @Override
    public CommentDTO addComment(Long blogId, Long userId, CommentDTO commentDTO) {
        Blog blog = blogRepository.findById(blogId).orElseThrow(() -> new RuntimeException("Blog not found"));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        Comment comment = new Comment(commentDTO.getContent(), blog, user);
        Comment savedComment = commentRepository.save(comment);

        return convertToDTO(savedComment);
    }

    @Override
    public List<CommentDTO> getCommentsByBlogId(Long blogId) {
        return commentRepository.findByBlogId(blogId).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public List<CommentDTO> getCommentsByUserId(Long userId) {
        return commentRepository.findByUserId(userId).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }

    private CommentDTO convertToDTO(Comment comment) {
        return new CommentDTO(
                comment.getId(),
                comment.getContent(),
                comment.getUser().getId(),
                comment.getUser().getUsername(), // Optional, can be modified to return only user name
                comment.getCreatedAt()
        );
    }
}
