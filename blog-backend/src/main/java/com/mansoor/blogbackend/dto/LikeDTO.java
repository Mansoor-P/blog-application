package com.mansoor.blogbackend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LikeDTO {
    private Long id;
    private Long userId; // Avoid sending full User entity
    private Long blogId; // Avoid sending full Blog entity
}
