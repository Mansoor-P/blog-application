package com.mansoor.blogbackend.models.enums;

public enum AccountStatus {
    ACTIVE,           // Account is active
    SUSPENDED,        // Temporarily restricted
    DEACTIVATED,      // Permanently deactivated
    PENDING_VERIFICATION // Awaiting email or admin approval
}