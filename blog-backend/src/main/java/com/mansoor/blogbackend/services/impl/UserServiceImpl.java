package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.UserDTO;
import com.mansoor.blogbackend.exceptions.UserNotFoundException;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.repositories.UserRepository;
import com.mansoor.blogbackend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public UserDTO registerUser(UserDTO userDTO) {
        if (userDTO.getPasswordHash() == null || userDTO.getPasswordHash().isEmpty()) {
            throw new IllegalArgumentException("Password cannot be empty");
        }
        if (userRepository.existsByUsername(userDTO.getUsername())) {
            throw new IllegalArgumentException("Username already exists.");
        }
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            throw new IllegalArgumentException("Email already exists.");
        }

        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setPasswordHash(userDTO.getPasswordHash()); // **Directly storing password (not recommended)**
        user.setProfilePictureUrl(userDTO.getProfilePictureUrl());
        user.setBio(userDTO.getBio());
        user.setDisplayName(userDTO.getDisplayName());
        user.setSocialLinks(userDTO.getSocialLinks());

        return convertToDTO(userRepository.save(user));
    }

    @Override
    public UserDTO loginUser(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User with email '" + email + "' not found."));

        // **Check password directly**
        if (!user.getPasswordHash().equals(password)) {
            throw new UserNotFoundException("Invalid email or password.");
        }

        return convertToDTO(user);
    }

    @Override
    public UserDTO getUserById(Long userId) {
        return userRepository.findById(userId)
                .map(this::convertToDTO)
                .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + userId));
    }

    @Override
    public UserDTO getUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .map(this::convertToDTO)
                .orElseThrow(() -> new UserNotFoundException("User not found with username: " + username));
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO updateUser(Long userId, UserDTO userDTO) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + userId));

        user.setProfilePictureUrl(userDTO.getProfilePictureUrl());
        user.setBio(userDTO.getBio());
        user.setDisplayName(userDTO.getDisplayName());
        user.setSocialLinks(userDTO.getSocialLinks());

        return convertToDTO(userRepository.save(user));
    }

    @Override
    public void deleteUser(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new UserNotFoundException("User not found with ID: " + userId);
        }
        userRepository.deleteById(userId);
    }

    private UserDTO convertToDTO(User user) {
        return UserDTO.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .email(user.getEmail())
                .profilePictureUrl(user.getProfilePictureUrl())
                .bio(user.getBio())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .displayName(user.getDisplayName())
                .socialLinks(user.getSocialLinks())
                .followersCount(user.getFollowersCount())
                .followingCount(user.getFollowingCount())
                .accountStatus(user.getAccountStatus().name())
                .build();
    }
}
