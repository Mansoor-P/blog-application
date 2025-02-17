package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Long> {

    // Find blogs by the author's user ID
    List<Blog> findByUserId(Long userId);

    // Find a blog by its ID and the author's user ID (for authorization check)
    Blog findByIdAndUserId(Long id, Long userId);

}
