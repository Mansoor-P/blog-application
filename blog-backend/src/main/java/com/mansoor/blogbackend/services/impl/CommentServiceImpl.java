package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.CommentDTO;
import com.mansoor.blogbackend.models.Comment;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.repositories.CommentRepository;
import com.mansoor.blogbackend.repositories.BlogRepository;
import com.mansoor.blogbackend.repositories.UserRepository;
import com.mansoor.blogbackend.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<CommentDTO> getCommentsByBlogId(Long blogId) {
        List<Comment> comments = commentRepository.findByBlog_Id(blogId);
        return comments.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CommentDTO createComment(CommentDTO commentDTO) {
        Comment comment = new Comment();
        comment.setContent(commentDTO.getContent());

        // Fetch the Blog entity based on the blog ID from the DTO
        Blog blog = blogRepository.findById(commentDTO.getBlogId())
                .orElseThrow(() -> new RuntimeException("Blog not found"));

        comment.setBlog(blog);

        // Fetch the User entity based on the user ID from the DTO
        User user = userRepository.findById(commentDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        comment.setUser(user);

        comment.setLikesCount(0); // Initialize likesCount to 0
        comment = commentRepository.save(comment);
        return convertToDTO(comment);
    }

    @Override
    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }

    @Override
    public CommentDTO updateComment(Long id, CommentDTO commentDTO) {
        Comment comment = commentRepository.findById(id).orElse(null);
        if (comment != null) {
            comment.setContent(commentDTO.getContent());
            comment.setLikesCount(commentDTO.getLikesCount());
            comment = commentRepository.save(comment);
            return convertToDTO(comment);
        }
        return null;
    }

    private CommentDTO convertToDTO(Comment comment) {
        // Fetching the username from the User entity associated with the comment
        String username = comment.getUser() != null ? comment.getUser().getUsername() : "unknown";

        // Using the builder to create CommentDTO
        return CommentDTO.builder()
                .id(comment.getId())
                .content(comment.getContent())
                .username(username)
                .likesCount(comment.getLikesCount())
                .createdAt(comment.getCreatedAt())
                .updatedAt(comment.getUpdatedAt())
                .build();
    }

}
