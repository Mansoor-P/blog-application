package com.mansoor.blogbackend.dto;

import com.mansoor.blogbackend.models.enums.BlogStatus;
import com.mansoor.blogbackend.models.enums.CommentPolicy;
import com.mansoor.blogbackend.models.enums.ReadingLevel;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogDTO {
    private Long id;
    private String title;
    private String slug;
    private String content;
    private String coverImage;
    private LocalDateTime publishedAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private BlogStatus status;
    private int readTime;
    private List<String> tags;
    private String category;
    private String subCategory;
    private int likesCount;
    private int commentsCount;
    private int viewsCount;
    private boolean featured;
    private Long authorId;   // Reference to User ID instead of full User object
    private boolean premiumContent;
    private boolean trending;
    private boolean pinned;
    private Long seriesId;
    private ReadingLevel readingLevel;
    private String language;
    private String canonicalUrl;
    private int sharedCount;
    private int bookmarkedCount;
    private int reportCount;
    private List<String> editHistory;
    private List<Long> relatedBlogIds;
    private List<String> polls;
    private List<String> attachments;
    private CommentPolicy commentPolicy;
}
