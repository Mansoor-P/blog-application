package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.SubCategoryDTO;
import com.mansoor.blogbackend.models.SubCategory;
import com.mansoor.blogbackend.repositories.SubCategoryRepository;
import com.mansoor.blogbackend.services.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Override
    public List<SubCategoryDTO> getSubCategoriesByCategoryId(Long categoryId) {
        List<SubCategory> subCategories = subCategoryRepository.findByCategoryId(categoryId);
        return subCategories.stream()
                .map(subCategory -> new SubCategoryDTO(subCategory.getId(), subCategory.getName(), subCategory.isActive()))  // Include isActive field
                .collect(Collectors.toList());
    }

    @Override
    public SubCategoryDTO createSubCategory(SubCategoryDTO subCategoryDTO) {
        SubCategory subCategory = new SubCategory();
        subCategory.setName(subCategoryDTO.getName());
        subCategory.setActive(subCategoryDTO.isActive());  // Set the isActive value
        subCategory = subCategoryRepository.save(subCategory);
        return new SubCategoryDTO(subCategory.getId(), subCategory.getName(), subCategory.isActive());  // Include isActive field
    }
}
