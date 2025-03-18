package com.mansoor.blogbackend.models;

import com.mansoor.blogbackend.models.enums.BlogStatus;
import com.mansoor.blogbackend.models.enums.CommentPolicy;
import com.mansoor.blogbackend.models.enums.ReadingLevel;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "blogs")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String title;

    @Column(nullable = false, unique = true, length = 150)
    private String slug;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(length = 255)
    private String coverImage;

    private LocalDateTime publishedAt;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BlogStatus status = BlogStatus.DRAFT;

    private int readTime;

    @ElementCollection
    @CollectionTable(name = "blog_tags", joinColumns = @JoinColumn(name = "blog_id"))
    @Column(name = "tag")
    private List<String> tags;

    @Column(length = 100)
    private String category;

    @Column(length = 100)
    private String subCategory;

    private int likesCount = 0;

    private int commentsCount = 0;

    private int viewsCount = 0;

    private boolean isFeatured = false;

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private User author;

    private boolean isPremiumContent = false;

    private boolean isTrending = false;

    private boolean isPinned = false;

    private Long seriesId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ReadingLevel readingLevel = ReadingLevel.BEGINNER;

    @Column(length = 10)
    private String language = "EN";

    @Column(length = 255)
    private String canonicalUrl;

    private int sharedCount = 0;

    private int bookmarkedCount = 0;

    private int reportCount = 0;

    @ElementCollection
    @CollectionTable(name = "blog_edit_history", joinColumns = @JoinColumn(name = "blog_id"))
    @Column(name = "edit_entry", columnDefinition = "TEXT")
    private List<String> editHistory;

    @ElementCollection
    @CollectionTable(name = "related_blogs", joinColumns = @JoinColumn(name = "blog_id"))
    @Column(name = "related_blog_id")
    private List<Long> relatedBlogs;

    @ElementCollection
    @CollectionTable(name = "blog_polls", joinColumns = @JoinColumn(name = "blog_id"))
    @Column(name = "poll_entry")
    private List<String> polls;

    @ElementCollection
    @CollectionTable(name = "blog_attachments", joinColumns = @JoinColumn(name = "blog_id"))
    @Column(name = "attachment_url", length = 255)
    private List<String> attachments;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CommentPolicy commentPolicy = CommentPolicy.OPEN;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
