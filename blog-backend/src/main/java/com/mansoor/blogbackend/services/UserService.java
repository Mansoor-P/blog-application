package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.UserDTO;
import com.mansoor.blogbackend.models.User;

public interface UserService {
    User registerUser(UserDTO userDTO);
    User loginUser(String username, String password);
}
