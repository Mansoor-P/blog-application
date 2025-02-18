package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Long> {
    List<Blog> findByUserId(Long userId);  // Make sure this query works with the userId
}
