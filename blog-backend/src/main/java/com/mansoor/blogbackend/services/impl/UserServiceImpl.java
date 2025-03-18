package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.UserDTO;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.models.enums.Role;
import com.mansoor.blogbackend.repositories.UserRepository;
import com.mansoor.blogbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username).orElse(null);
    }

    @Override
    public List<User> findByRole(Role role) {
        return userRepository.findByRole(role);
    }

    @Override
    public List<User> findPremiumUsers() {
        return userRepository.findByRole(Role.PREMIUM_USER);
    }

    @Override
    public List<User> findRecentUsers() {
        return userRepository.findTop10ByOrderByCreatedAtDesc();
    }

    @Override
    public List<User> findAllAdmins() {
        return userRepository.findByRole(Role.ADMIN);
    }

    @Override
    public List<User> searchUsersByUsername(String username) {
        return userRepository.findByUsernameContaining(username);
    }

    @Override
    public UserDTO getCurrentUser() {
        // Simulated current user retrieval logic (Replace with actual authentication logic)
        User user = userRepository.findByEmail("test@example.com").orElse(null);
        return user != null ? new UserDTO() : null;
    }

    @Override
    public UserDTO updateUser(Long userId, UserDTO userDTO) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            user.setUsername(userDTO.getUsername());
            user.setEmail(userDTO.getEmail());
            user.setRole(userDTO.getRole());
            userRepository.save(user);
            return new UserDTO();
        }
        return null;
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public void upgradeToPremium(Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        userOpt.ifPresent(user -> {
            user.setRole(Role.PREMIUM_USER);
            userRepository.save(user);
        });
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream().map(UserDTO::new).collect(Collectors.toList());
    }
}
