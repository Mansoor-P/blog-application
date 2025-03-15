package com.mansoor.blogbackend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {
    private Long userId;
    private String username;
    private String email;
    private String passwordHash;
    private String profilePictureUrl;
    private String bio;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String displayName;
    private String socialLinks;
    private int followersCount;
    private int followingCount;
    private String accountStatus;
    private List<BlogDTO> blogs;
}
