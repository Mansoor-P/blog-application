package com.mansoor.blogbackend.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlogDTO {
    private Long postId;
    private String title;
    private String slug;
    private String content;
    private String coverImageUrl;
    private LocalDateTime publishedAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String status;
    private int readTime;
    private String tags;
    private int likesCount;
    private int commentsCount;
    private int viewsCount;
    private boolean isFeatured;
    private Long authorId;
    private String authorUsername;
}
