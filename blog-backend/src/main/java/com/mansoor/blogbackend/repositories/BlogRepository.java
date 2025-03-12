package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {

    // Find blogs by a specific user
    List<Blog> findByUserId(Long userId);

    // Get all blogs sorted by creation date (latest first)
    List<Blog> findAllByOrderByCreatedAtDesc();

    // Paginated blogs for a specific user
    Page<Blog> findByUserId(Long userId, Pageable pageable);

    // Search blogs by title (case insensitive)
    List<Blog> findByTitleContainingIgnoreCase(String title);
}
