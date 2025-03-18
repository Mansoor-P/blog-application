package com.mansoor.blogbackend.utils;

import com.mansoor.blogbackend.dto.CategoryDTO;
import com.mansoor.blogbackend.dto.CommentDTO;
import com.mansoor.blogbackend.dto.LikeDTO;
import com.mansoor.blogbackend.dto.SubCategoryDTO;
import com.mansoor.blogbackend.models.*;
import java.util.stream.Collectors;

public class DTOMapper {

    public static CategoryDTO toCategoryDTO(Category category) {
        return CategoryDTO.builder()
                .id(category.getId())
                .name(category.getName())
                .subcategories(category.getSubCategories().stream()
                        .map(DTOMapper::toSubCategoryDTO)
                        .collect(Collectors.toList()))
                .build();
    }

    public static SubCategoryDTO toSubCategoryDTO(SubCategory subCategory) {
        return SubCategoryDTO.builder()
                .id(subCategory.getId())
                .name(subCategory.getName())
                .isActive(subCategory.isActive())  // Map the isActive field from SubCategory
                .build();
    }

    public static CommentDTO toCommentDTO(Comment comment) {
        return CommentDTO.builder()
                .id(comment.getId())
                .content(comment.getContent())
                .username(comment.getUser().getUsername()) // Assuming User has `getUsername()`
                .likesCount(comment.getLikesCount())
                .createdAt(comment.getCreatedAt())
                .build();
    }

    public static LikeDTO toLikeDTO(Like like) {
        return LikeDTO.builder()
                .id(like.getId())
                .userId(like.getUser().getId())
                .blogId(like.getBlog().getId())
                .build();
    }
}
