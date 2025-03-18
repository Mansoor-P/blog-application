package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.models.enums.BlogStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {

    Optional<Blog> findBySlug(String slug);

    List<Blog> findByAuthor_Id(Long authorId); // Updated to use correct field reference

    List<Blog> findByStatus(BlogStatus status);

    List<Blog> findByCategory_NameIgnoreCase(String categoryName); // Case-insensitive search

    List<Blog> findBySubCategory_NameIgnoreCase(String subCategoryName); // Case-insensitive search

    List<Blog> findByTitleContainingIgnoreCase(String title); // Case-insensitive search for better UX

    List<Blog> findTop10ByOrderByCreatedAtDesc();

    List<Blog> findByIsPremiumContentTrue(); // Updated method name to match standard naming conventions

    List<Blog> findByIsTrendingTrue(); // Added method for fetching trending blogs

    List<Blog> findByIsFeaturedTrue(); // Added method for fetching featured blogs
}
