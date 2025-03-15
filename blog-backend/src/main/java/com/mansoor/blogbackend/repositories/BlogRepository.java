package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {
    List<Blog> findByAuthor(User author);
    Optional<Blog> findBySlug(String slug);
    List<Blog> findByStatus(String status);
    List<Blog> findByTitleContainingIgnoreCase(String title);
}
