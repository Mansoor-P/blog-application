package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.UserDTO;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.users}")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<UserDTO> getCurrentUser() {
        return ResponseEntity.ok(userService.getCurrentUser());
    }

    @PutMapping("/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long userId, @RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.updateUser(userId, userDTO));
    }

    @DeleteMapping("/{userId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{userId}/upgrade")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> upgradeToPremium(@PathVariable Long userId) {
        userService.upgradeToPremium(userId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/search")
    public ResponseEntity<List<User>> searchUsersByUsername(@RequestParam String username) {
        return ResponseEntity.ok(userService.searchUsersByUsername(username));
    }

    @GetMapping("/premium")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> getPremiumUsers() {
        return ResponseEntity.ok(userService.findPremiumUsers());
    }
}
