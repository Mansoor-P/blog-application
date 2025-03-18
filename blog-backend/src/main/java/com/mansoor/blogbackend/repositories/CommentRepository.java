package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    // Fetch all comments by Blog ID
    List<Comment> findByBlogId(Long blogId);

    // Fetch all comments by User ID
    List<Comment> findByUserId(Long userId);
}
