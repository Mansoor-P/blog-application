package com.mansoor.blogbackend.services;

import com.mansoor.blogbackend.dto.SubCategoryDTO;

import java.util.List;

public interface SubCategoryService {

    List<SubCategoryDTO> getSubCategoriesByCategoryId(Long categoryId);

    SubCategoryDTO createSubCategory(SubCategoryDTO subCategoryDTO);
}
