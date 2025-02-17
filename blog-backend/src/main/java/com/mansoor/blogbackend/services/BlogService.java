package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.models.Blog;

import java.util.List;

public interface BlogService {

    Blog createBlog(BlogDTO blogDTO, Long userId);

    Blog updateBlog(Long id, BlogDTO blogDTO, Long userId);

    void deleteBlog(Long id, Long userId);

    Blog getBlogById(Long id);

    List<Blog> getAllBlogs();

    List<Blog> getBlogsByUser(Long userId);
}
