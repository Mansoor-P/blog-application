package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.UserDTO;
import com.mansoor.blogbackend.dto.auth.LoginRequest;
import jakarta.servlet.http.HttpSession;

public interface AuthService {

    String register(UserDTO userDTO);

    String login(LoginRequest loginRequest, HttpSession session);

    String logout(HttpSession session);
}
