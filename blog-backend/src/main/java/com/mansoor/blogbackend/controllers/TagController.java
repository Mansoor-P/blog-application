package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.TagDTO;
import com.mansoor.blogbackend.service.TagService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tags")
public class TagController {

    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    // Create a new tag
    @PostMapping
    public ResponseEntity<TagDTO> createTag(@RequestBody TagDTO tagDTO) {
        return ResponseEntity.ok(tagService.createTag(tagDTO));
    }

    // Search for tags by name
    @GetMapping
    public ResponseEntity<List<TagDTO>> searchTags(@RequestParam String name) {
        return ResponseEntity.ok(tagService.getTagsByName(name));
    }

    // Get all tags for a specific blog
    @GetMapping("/blog/{blogId}")
    public ResponseEntity<List<TagDTO>> getTagsForBlog(@PathVariable Long blogId) {
        return ResponseEntity.ok(tagService.getTagsForBlog(blogId));
    }

    // Add tags to a blog
    @PostMapping("/blog/{blogId}")
    public ResponseEntity<Void> addTagsToBlog(@PathVariable Long blogId, @RequestBody List<Long> tagIds) {
        tagService.addTagsToBlog(blogId, tagIds);
        return ResponseEntity.noContent().build();
    }
}
