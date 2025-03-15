package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.UserDTO;
import com.mansoor.blogbackend.models.User;

import java.util.List;

public interface UserService {
    UserDTO registerUser(UserDTO userDTO);
    UserDTO loginUser(String email, String password);
    UserDTO getUserById(Long userId);
    UserDTO getUserByUsername(String username);
    List<UserDTO> getAllUsers();
    UserDTO updateUser(Long userId, UserDTO userDTO);
    void deleteUser(Long userId);
}
