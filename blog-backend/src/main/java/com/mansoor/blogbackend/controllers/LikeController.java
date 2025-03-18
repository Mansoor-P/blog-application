package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.LikeDTO;
import com.mansoor.blogbackend.services.LikeService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.base}/likes") // Dynamically injects the API base from application.yml
public class LikeController {

    private final LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @GetMapping("/blog/{blogId}")
    public List<LikeDTO> getLikesByBlogId(@PathVariable Long blogId) {
        return likeService.getLikesByBlogId(blogId);
    }

    @PostMapping
    public LikeDTO createLike(@RequestBody LikeDTO likeDTO) {
        return likeService.createLike(likeDTO);
    }

    @DeleteMapping("/remove")
    public void removeLike(@RequestParam Long userId, @RequestParam Long blogId) {
        likeService.removeLike(userId, blogId);
    }
}
