package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.UserDTO;
import com.mansoor.blogbackend.exceptions.UserNotFoundException;
import com.mansoor.blogbackend.models.Role;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.repositories.UserRepository;
import com.mansoor.blogbackend.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registerUser(UserDTO userDTO) {
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setFullName(userDTO.getFullName()); // Add this
        user.setRole(userDTO.getRole() != null ? userDTO.getRole() : Role.USER);

        return userRepository.save(user);
    }


    @Override
    public User loginUser(String username, String password) {
        log.info("Logging in user: {}", username);

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException("User with username '" + username + "' not found."));

        // Simple password check (no hashing)
        if (!user.getPassword().equals(password)) {
            throw new UserNotFoundException("Invalid username or password.");
        }

        return user;
    }
}
