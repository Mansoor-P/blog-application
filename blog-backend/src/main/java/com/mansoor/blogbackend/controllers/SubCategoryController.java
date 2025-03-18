package com.mansoor.blogbackend.controllers;

import com.mansoor.blogbackend.dto.SubCategoryDTO;
import com.mansoor.blogbackend.services.SubCategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.base}/categories/subcategories")
public class SubCategoryController {

    @Autowired
    private SubCategoryService subCategoryService;

    @GetMapping("/category/{categoryId}")
    public List<SubCategoryDTO> getSubCategoriesByCategoryId(@PathVariable Long categoryId) {
        return subCategoryService.getSubCategoriesByCategoryId(categoryId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SubCategoryDTO createSubCategory(@Valid @RequestBody SubCategoryDTO subCategoryDTO) {
        return subCategoryService.createSubCategory(subCategoryDTO);
    }

}
