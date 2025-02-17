package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByBlogId(Long blogId);
    List<Comment> findByUserId(Long userId);
}
