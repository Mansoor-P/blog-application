package com.mansoor.blogbackend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubCategoryDTO {
    private Long id;
    private String name;
    private boolean isActive;
}
