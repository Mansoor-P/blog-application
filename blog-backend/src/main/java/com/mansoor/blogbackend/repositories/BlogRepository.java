package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {

    List<Blog> findByUserId(Long userId);
    List<Blog> findAllByOrderByCreatedAtDesc();
    Page<Blog> findByUserId(Long userId, Pageable pageable);
    List<Blog> findByTitleContainingIgnoreCase(String title);
}
