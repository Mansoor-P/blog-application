package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.CategoryDTO;
import com.mansoor.blogbackend.dto.SubCategoryDTO;
import com.mansoor.blogbackend.models.Category;
import com.mansoor.blogbackend.models.SubCategory;
import com.mansoor.blogbackend.repositories.CategoryRepository;
import com.mansoor.blogbackend.repositories.SubCategoryRepository;
import com.mansoor.blogbackend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Override
    public List<CategoryDTO> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public CategoryDTO getCategoryById(Long id) {
        Category category = categoryRepository.findById(id).orElse(null);
        return category != null ? convertToDTO(category) : null;
    }

    @Override
    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setName(categoryDTO.getName());
        category = categoryRepository.save(category);
        return convertToDTO(category);
    }

    @Override
    public CategoryDTO updateCategory(Long id, CategoryDTO categoryDTO) {
        Category category = categoryRepository.findById(id).orElse(null);
        if (category != null) {
            category.setName(categoryDTO.getName());
            category = categoryRepository.save(category);
            return convertToDTO(category);
        }
        return null;
    }

    @Override
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    private CategoryDTO convertToDTO(Category category) {
        List<SubCategoryDTO> subCategoryDTOs = category.getSubCategories().stream()
                .map(subCategory -> new SubCategoryDTO(subCategory.getId(), subCategory.getName(), subCategory.isActive()))  // Add the isActive field
                .collect(Collectors.toList());

        return new CategoryDTO(category.getId(), category.getName(), subCategoryDTOs);
    }

}
