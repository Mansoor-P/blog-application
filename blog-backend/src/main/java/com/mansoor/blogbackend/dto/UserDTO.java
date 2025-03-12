package com.mansoor.blogbackend.dto;

import com.mansoor.blogbackend.models.Role;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String username;
    private String email;
    private String password;
    private String fullName;
    private Role role;
}
