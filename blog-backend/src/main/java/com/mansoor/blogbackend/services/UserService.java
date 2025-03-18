package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.UserDTO;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.models.enums.Role;

import java.util.List;

public interface UserService {

    User findByEmail(String email);

    boolean existsByEmail(String email);

    User findByUsername(String username);

    List<User> findByRole(Role role);

    List<User> findPremiumUsers();

    List<User> findRecentUsers();

    List<User> findAllAdmins();

    List<User> searchUsersByUsername(String username);

    UserDTO getCurrentUser();

    UserDTO updateUser(Long userId, UserDTO userDTO);

    void deleteUser(Long userId);

    void upgradeToPremium(Long userId);

    List<UserDTO> getAllUsers();
}
