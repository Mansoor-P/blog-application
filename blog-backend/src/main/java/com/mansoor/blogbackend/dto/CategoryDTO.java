package com.mansoor.blogbackend.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryDTO {
    private Long id;
    private String name;
    private List<SubCategoryDTO> subcategories; // Only subcategory names or IDs
}
