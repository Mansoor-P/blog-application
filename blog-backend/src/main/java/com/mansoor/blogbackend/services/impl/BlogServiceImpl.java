package com.mansoor.blogbackend.services.impl;

import com.mansoor.blogbackend.dto.BlogDTO;
import com.mansoor.blogbackend.models.Blog;
import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.repositories.BlogRepository;
import com.mansoor.blogbackend.services.BlogService;
import com.mansoor.blogbackend.utils.SlugGenerator;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BlogServiceImpl implements BlogService {

    private final BlogRepository blogRepository;

    // Fetch authenticated user using Spring Security
    private User getAuthenticatedUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            return (User) principal; // Assuming UserDetails is implemented in User entity
        }
        throw new IllegalStateException("User not authenticated");
    }

    @Transactional
    @Override
    public BlogDTO createBlog(BlogDTO blogDTO) {
        User author = getAuthenticatedUser();

        // Validate essential fields
        if (blogDTO.getTitle() == null || blogDTO.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("Blog title cannot be empty");
        }
        if (blogDTO.getContent() == null || blogDTO.getContent().trim().isEmpty()) {
            throw new IllegalArgumentException("Blog content cannot be empty");
        }

        // Generate slug if not provided
        String slug = blogDTO.getSlug() != null ? blogDTO.getSlug() : SlugGenerator.generateSlug(blogDTO.getTitle());

        Blog blog = Blog.builder()
                .title(blogDTO.getTitle())
                .slug(slug)
                .content(blogDTO.getContent())
                .coverImage(blogDTO.getCoverImage())
                .publishedAt(blogDTO.getPublishedAt())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .status(blogDTO.getStatus())
                .readTime(blogDTO.getReadTime())
                .tags(blogDTO.getTags())
                .category(blogDTO.getCategory())
                .subCategory(blogDTO.getSubCategory())
                .likesCount(blogDTO.getLikesCount())
                .commentsCount(blogDTO.getCommentsCount())
                .viewsCount(blogDTO.getViewsCount())
                .isFeatured(blogDTO.isFeatured())
                .author(author)
                .isPremiumContent(blogDTO.isPremiumContent())
                .isTrending(blogDTO.isTrending())
                .isPinned(blogDTO.isPinned())
                .seriesId(blogDTO.getSeriesId())
                .readingLevel(blogDTO.getReadingLevel())
                .language(blogDTO.getLanguage())
                .canonicalUrl(blogDTO.getCanonicalUrl())
                .sharedCount(blogDTO.getSharedCount())
                .bookmarkedCount(blogDTO.getBookmarkedCount())
                .reportCount(blogDTO.getReportCount())
                .editHistory(blogDTO.getEditHistory())
                .relatedBlogs(blogDTO.getRelatedBlogIds())
                .polls(blogDTO.getPolls())
                .attachments(blogDTO.getAttachments())
                .commentPolicy(blogDTO.getCommentPolicy())
                .build();

        blogRepository.save(blog);
        return convertToDTO(blog);
    }

    @Transactional
    @Override
    public BlogDTO updateBlog(Long postId, BlogDTO blogDTO) {
        Blog blog = blogRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("Blog with ID " + postId + " not found"));

        // Generate slug if updated or not provided
        String updatedSlug = blogDTO.getSlug() != null ? blogDTO.getSlug() : SlugGenerator.generateSlug(blogDTO.getTitle());

        blog.setTitle(blogDTO.getTitle());
        blog.setSlug(updatedSlug);
        blog.setContent(blogDTO.getContent());
        blog.setCoverImage(blogDTO.getCoverImage());
        blog.setUpdatedAt(LocalDateTime.now());
        blog.setStatus(blogDTO.getStatus());
        blog.setReadTime(blogDTO.getReadTime());
        blog.setTags(blogDTO.getTags());
        blog.setCategory(blogDTO.getCategory());
        blog.setSubCategory(blogDTO.getSubCategory());
        blog.setLikesCount(blogDTO.getLikesCount());
        blog.setCommentsCount(blogDTO.getCommentsCount());
        blog.setViewsCount(blogDTO.getViewsCount());
        blog.setFeatured(blogDTO.isFeatured());
        blog.setPremiumContent(blogDTO.isPremiumContent());
        blog.setTrending(blogDTO.isTrending());
        blog.setPinned(blogDTO.isPinned());
        blog.setSeriesId(blogDTO.getSeriesId());
        blog.setReadingLevel(blogDTO.getReadingLevel());
        blog.setLanguage(blogDTO.getLanguage());
        blog.setCanonicalUrl(blogDTO.getCanonicalUrl());
        blog.setSharedCount(blogDTO.getSharedCount());
        blog.setBookmarkedCount(blogDTO.getBookmarkedCount());
        blog.setReportCount(blogDTO.getReportCount());
        blog.setEditHistory(blogDTO.getEditHistory());
        blog.setRelatedBlogs(blogDTO.getRelatedBlogIds());
        blog.setPolls(blogDTO.getPolls());
        blog.setAttachments(blogDTO.getAttachments());
        blog.setCommentPolicy(blogDTO.getCommentPolicy());

        blogRepository.save(blog);
        return convertToDTO(blog);
    }

    @Transactional
    @Override
    public void deleteBlog(Long postId) {
        Blog blog = blogRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("Blog with ID " + postId + " not found"));

        blogRepository.delete(blog);
    }

    @Override
    public Optional<BlogDTO> getBlogById(Long postId) {
        return blogRepository.findById(postId).map(this::convertToDTO);
    }

    @Override
    public Optional<BlogDTO> getBlogBySlug(String slug) {
        return blogRepository.findBySlug(slug).map(this::convertToDTO);
    }

    @Override
    public List<BlogDTO> getBlogsByAuthor(Long authorId) {
        return blogRepository.findByAuthorId(authorId)
                .stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public List<BlogDTO> getBlogsByCategory(String category) {
        return blogRepository.findByCategory(category)
                .stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public List<BlogDTO> getBlogsBySubCategory(String subCategory) {
        return blogRepository.findBySubCategory(subCategory)
                .stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public List<BlogDTO> getTrendingBlogs() {
        return blogRepository.findTop10ByOrderByCreatedAtDesc()
                .stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public List<BlogDTO> getPremiumBlogs() {
        return blogRepository.findByIsPremiumContentTrue()
                .stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public List<BlogDTO> searchBlogsByTitle(String title) {
        return blogRepository.findByTitleContaining(title)
                .stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public List<BlogDTO> getLatestBlogs() {
        return blogRepository.findTop10ByOrderByCreatedAtDesc()
                .stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private BlogDTO convertToDTO(Blog blog) {
        return BlogDTO.builder()
                .id(blog.getId())
                .title(blog.getTitle())
                .slug(blog.getSlug())
                .content(blog.getContent())
                .coverImage(blog.getCoverImage())
                .publishedAt(blog.getPublishedAt())
                .createdAt(blog.getCreatedAt())
                .updatedAt(blog.getUpdatedAt())
                .status(blog.getStatus())
                .readTime(blog.getReadTime())
                .tags(blog.getTags())
                .category(blog.getCategory())
                .subCategory(blog.getSubCategory())
                .likesCount(blog.getLikesCount())
                .commentsCount(blog.getCommentsCount())
                .viewsCount(blog.getViewsCount())
                .featured(blog.isFeatured())
                .authorId(blog.getAuthor().getId())
                .premiumContent(blog.isPremiumContent())
                .trending(blog.isTrending())
                .pinned(blog.isPinned())
                .seriesId(blog.getSeriesId())
                .readingLevel(blog.getReadingLevel())
                .language(blog.getLanguage())
                .canonicalUrl(blog.getCanonicalUrl())
                .sharedCount(blog.getSharedCount())
                .bookmarkedCount(blog.getBookmarkedCount())
                .reportCount(blog.getReportCount())
                .editHistory(blog.getEditHistory())
                .relatedBlogIds(blog.getRelatedBlogs())
                .polls(blog.getPolls())
                .attachments(blog.getAttachments())
                .commentPolicy(blog.getCommentPolicy())
                .build();
    }
}
