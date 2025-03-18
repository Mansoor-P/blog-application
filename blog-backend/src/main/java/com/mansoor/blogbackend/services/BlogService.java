package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.BlogDTO;

import java.util.List;
import java.util.Optional;

public interface BlogService {

    BlogDTO createBlog(BlogDTO blogDTO);

    BlogDTO updateBlog(Long postId, BlogDTO blogDTO);

    void deleteBlog(Long postId);

    Optional<BlogDTO> getBlogById(Long postId);

    Optional<BlogDTO> getBlogBySlug(String slug);

    List<BlogDTO> getBlogsByAuthor(Long authorId);

    List<BlogDTO> getBlogsByCategory(String category);

    List<BlogDTO> getBlogsBySubCategory(String subCategory);

    List<BlogDTO> getTrendingBlogs();

    List<BlogDTO> getPremiumBlogs();

    List<BlogDTO> searchBlogsByTitle(String title);

    List<BlogDTO> getLatestBlogs();
}
