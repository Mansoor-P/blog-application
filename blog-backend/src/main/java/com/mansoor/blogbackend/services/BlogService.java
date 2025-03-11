package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.BlogDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BlogService {
    BlogDTO createBlog(BlogDTO blogDTO);
    BlogDTO updateBlog(Long id, BlogDTO blogDTO);
    void deleteBlog(Long id);
    BlogDTO getBlogById(Long id);
    List<BlogDTO> getAllBlogs();
    List<BlogDTO> getBlogsByUserId(Long userId);
    Page<BlogDTO> getAllBlogsPaged(Pageable pageable);
    List<BlogDTO> searchBlogsByTitle(String title);
}
