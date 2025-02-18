package com.mansoor.blogbackend.service;

import com.mansoor.blogbackend.dto.TagDTO;
import com.mansoor.blogbackend.models.Tag;

import java.util.List;

public interface TagService {

    TagDTO createTag(TagDTO tagDTO);
    List<TagDTO> getTagsByName(String name);
    List<TagDTO> getTagsForBlog(Long blogId);
    void addTagsToBlog(Long blogId, List<Long> tagIds);
}
