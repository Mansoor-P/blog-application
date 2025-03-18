package com.mansoor.blogbackend.utils;

import com.mansoor.blogbackend.dto.UserDTO;
import com.mansoor.blogbackend.models.User;
import org.springframework.stereotype.Component;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    public UserDTO toDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .displayName(user.getDisplayName())
                .profileImageUrl(user.getProfileImageUrl())
                .bio(user.getBio())
                .accountStatus(user.getAccountStatus())
                .role(user.getRole())
                .websiteUrl(user.getWebsiteUrl())
                .followersCount(user.getFollowersCount())
                .followingCount(user.getFollowingCount())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .lastLoginAt(user.getLastLoginAt())
                .totalLikesReceived(user.getTotalLikesReceived())
                .totalViewsReceived(user.getTotalViewsReceived())
                .location(user.getLocation())
                .verified(user.isVerified())
                .premiumUser(user.isPremiumUser())
                .preferences(user.getPreferences())
                .socialLinks(user.getSocialLinks())
                .blogIds(user.getBlogs().stream().map(blog -> blog.getId()).collect(Collectors.toList()))
                .commentIds(user.getComments().stream().map(comment -> comment.getId()).collect(Collectors.toList()))
                .likeIds(user.getLikes().stream().map(like -> like.getId()).collect(Collectors.toList()))
                .build();
    }
}
