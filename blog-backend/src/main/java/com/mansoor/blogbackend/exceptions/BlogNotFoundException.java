package com.mansoor.blogbackend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND) // Automatically returns 404 status
public class BlogNotFoundException extends RuntimeException {

    private static final String DEFAULT_MESSAGE = "Blog post not found";

    // Default constructor with standard message
    public BlogNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    // Constructor with custom message
    public BlogNotFoundException(String message) {
        super(message);
    }

    // Constructor with custom message and cause
    public BlogNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
