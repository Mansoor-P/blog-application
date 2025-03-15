package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.BlogDTO;

import java.util.List;

public interface BlogService {
    BlogDTO createBlog(BlogDTO blogDTO);
    BlogDTO getBlogById(Long postId);
    BlogDTO getBlogBySlug(String slug);
    List<BlogDTO> getAllBlogs();
    List<BlogDTO> getBlogsByAuthor(Long authorId);
    List<BlogDTO> searchBlogsByTitle(String title);
    BlogDTO updateBlog(Long postId, BlogDTO blogDTO);
    void deleteBlog(Long postId);
}
