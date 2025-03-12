package com.mansoor.blogbackend.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BlogDTO {
    private Long id;
    private String title;
    private String summary;
    private String content;
    private String author;
    private Long userId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
