package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.UserDTO;
import com.mansoor.blogbackend.dto.auth.LoginRequest;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.repositories.UserRepository;
import com.mansoor.blogbackend.services.AuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    @Override
    public String register(UserDTO userDTO) {
        if (userDTO.getEmail() == null || userDTO.getUsername() == null || userDTO.getPassword() == null) {
            throw new IllegalArgumentException("Email, Username, and Password are required.");
        }

        if (userRepository.findByEmail(userDTO.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists.");
        }

        if (userRepository.findByUsername(userDTO.getUsername()).isPresent()) {
            throw new RuntimeException("Username already taken.");
        }

        String encodedPassword = passwordEncoder.encode(userDTO.getPassword());

        User newUser = User.builder()
                .username(userDTO.getUsername())
                .email(userDTO.getEmail())
                .passwordHash(encodedPassword)
                .displayName(userDTO.getDisplayName())
                .profileImageUrl(userDTO.getProfileImageUrl())
                .bio(userDTO.getBio())
                .accountStatus(userDTO.getAccountStatus())
                .role(userDTO.getRole())
                .websiteUrl(userDTO.getWebsiteUrl())
                .followersCount(0)
                .followingCount(0)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .lastLoginAt(null)
                .totalLikesReceived(0)
                .totalViewsReceived(0)
                .location(userDTO.getLocation())
                .verified(false)
                .premiumUser(false)
                .preferences(new ArrayList<>())
                .socialLinks(new ArrayList<>())
                .blogs(new ArrayList<>())
                .comments(new ArrayList<>())
                .likes(new ArrayList<>())
                .build();

        userRepository.save(newUser);
        return "User registered successfully!";
    }

    @Transactional
    @Override
    public String login(LoginRequest loginRequest, HttpSession session) {
        if (loginRequest.getEmail() == null || loginRequest.getPassword() == null) {
            throw new IllegalArgumentException("Email and Password are required.");
        }

        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password."));

        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPasswordHash())) {
            throw new RuntimeException("Invalid email or password.");
        }

        user.setLastLoginAt(LocalDateTime.now());
        userRepository.save(user);

        // Store user session details
        session.setAttribute("userId", user.getId());
        session.setAttribute("username", user.getUsername());

        return "Login successful!";
    }

    @Override
    public String logout(HttpSession session) {
        session.invalidate();  // Destroy session
        return "Logout successful!";
    }
}
