package com.mansoor.blogbackend.exceptions;

public class BlogNotFoundException extends RuntimeException {

    private static final String DEFAULT_MESSAGE = "Blog post not found";

    // Default message constructor
    public BlogNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    // Custom message constructor
    public BlogNotFoundException(String message) {
        super(message);
    }

    // Custom message with cause
    public BlogNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
