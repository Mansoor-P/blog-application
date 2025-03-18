package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.LikeDTO;

import java.util.List;

public interface LikeService {

    List<LikeDTO> getLikesByBlogId(Long blogId);

    LikeDTO createLike(LikeDTO likeDTO);

    void removeLike(Long userId, Long blogId);
}
