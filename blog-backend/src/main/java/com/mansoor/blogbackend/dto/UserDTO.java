package com.mansoor.blogbackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.models.enums.AccountStatus;
import com.mansoor.blogbackend.models.enums.Role;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String displayName;
    private String profileImageUrl;
    private String bio;

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private AccountStatus accountStatus;

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Role role;

    private String websiteUrl;
    private int followersCount;
    private int followingCount;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "UTC")
    private LocalDateTime createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "UTC")
    private LocalDateTime updatedAt;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone = "UTC")
    private LocalDateTime lastLoginAt;

    private int totalLikesReceived;
    private int totalViewsReceived;
    private String location;
    private boolean verified;
    private boolean premiumUser;
    private List<String> preferences;
    private List<String> socialLinks;
    private List<Long> blogIds;
    private List<Long> commentIds;
    private List<Long> likeIds;

    public UserDTO(User user) {
    }
}
