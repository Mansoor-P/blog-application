package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.LikeDTO;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.models.Like;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.repositories.LikeRepository;
import com.mansoor.blogbackend.services.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LikeServiceImpl implements LikeService {

    @Autowired
    private LikeRepository likeRepository;

    @Override
    public List<LikeDTO> getLikesByBlogId(Long blogId) {
        List<Like> likes = likeRepository.findByBlogId(blogId);
        return likes.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public LikeDTO createLike(LikeDTO likeDTO) {
        Like like = new Like();
        like.setUser(new User()); // Assign the user from DTO or service
        like.setBlog(new Blog()); // Assign the blog from DTO or service
        like = likeRepository.save(like);
        return convertToDTO(like);
    }

    @Override
    public void removeLike(Long userId, Long blogId) {
        Like like = likeRepository.findByUserIdAndBlogId(userId, blogId).stream().findFirst().orElse(null);
        if (like != null) {
            likeRepository.delete(like);
        }
    }

    private LikeDTO convertToDTO(Like like) {
        return new LikeDTO(like.getId(), like.getUser().getId(), like.getBlog().getId());
    }
}
