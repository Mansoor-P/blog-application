package com.mansoor.blogbackend.services.impl;


import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.repositories.BlogRepository;
import com.mansoor.blogbackend.repositories.UserRepository;
import com.mansoor.blogbackend.services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogServiceImpl implements BlogService {

    private final BlogRepository blogRepository;
    private final UserRepository userRepository;

    @Autowired
    public BlogServiceImpl(BlogRepository blogRepository, UserRepository userRepository) {
        this.blogRepository = blogRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Blog createBlog(BlogDTO blogDTO, Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        Blog blog = new Blog(
                blogDTO.getTitle(),
                blogDTO.getSummary(),
                blogDTO.getContent(),
                blogDTO.getAuthor(),
                user.get()
        );
        return blogRepository.save(blog);
    }

    @Override
    public Blog updateBlog(Long id, BlogDTO blogDTO, Long userId) {
        Blog blog = blogRepository.findByIdAndUserId(id, userId);
        if (blog == null) {
            throw new RuntimeException("Blog not found or unauthorized");
        }

        blog.setTitle(blogDTO.getTitle());
        blog.setSummary(blogDTO.getSummary());
        blog.setContent(blogDTO.getContent());
        blog.setUpdatedAt(new java.util.Date());

        return blogRepository.save(blog);
    }

    @Override
    public void deleteBlog(Long id, Long userId) {
        Blog blog = blogRepository.findByIdAndUserId(id, userId);
        if (blog == null) {
            throw new RuntimeException("Blog not found or unauthorized");
        }
        blogRepository.delete(blog);
    }

    @Override
    public Blog getBlogById(Long id) {
        return blogRepository.findById(id).orElseThrow(() -> new RuntimeException("Blog not found"));
    }

    @Override
    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    @Override
    public List<Blog> getBlogsByUser(Long userId) {
        return blogRepository.findByUserId(userId);
    }
}
