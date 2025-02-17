package com.mansoor.blogbackend.services;
import com.mansoor.blogbackend.models.User;

public interface UserService {

    User registerUser(User user);

    User getUserByUsername(String username);

    User getUserByEmail(String email);
}
