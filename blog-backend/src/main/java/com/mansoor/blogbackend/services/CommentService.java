package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.CommentDTO;

import java.util.List;

public interface CommentService {

    List<CommentDTO> getCommentsByBlogId(Long blogId);

    CommentDTO createComment(CommentDTO commentDTO);

    CommentDTO updateComment(Long id, CommentDTO commentDTO);

    void deleteComment(Long id);
}
