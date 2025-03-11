package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {

    // Find all blogs by userId
    List<Blog> findByUserId(Long userId);

    // Find all blogs sorted by latest created date
    List<Blog> findAllByOrderByCreatedAtDesc();

    // Paginated search for blogs by userId
    Page<Blog> findByUserId(Long userId, Pageable pageable);

    // Case-insensitive title search
    List<Blog> findByTitleContainingIgnoreCase(String title);
}
