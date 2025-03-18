package com.mansoor.blogbackend.models.enums;

public enum BlogStatus {
    DRAFT,            // Not published yet
    PUBLISHED,        // Visible to all
    ARCHIVED,         // Old post, not visible in main feed
    UNDER_REVIEW      // Pending admin or editorial approval
}