package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.BlogDTO;
import java.util.List;

public interface BlogService {
    BlogDTO createBlog(BlogDTO blogDTO);
    BlogDTO updateBlog(Long id, BlogDTO blogDTO);
    void deleteBlog(Long id);
    BlogDTO getBlogById(Long id);
    List<BlogDTO> getAllBlogs();
    List<BlogDTO> getBlogsByUserId(Long userId);
}
