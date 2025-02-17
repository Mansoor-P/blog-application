package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.CommentDTO;
import java.util.List;

public interface CommentService {

    CommentDTO addComment(Long blogId, Long userId, CommentDTO commentDTO);
    List<CommentDTO> getCommentsByBlogId(Long blogId);
    List<CommentDTO> getCommentsByUserId(Long userId);
    void deleteComment(Long commentId);
}
