package com.mansoor.blogbackend.exceptions;

public class UserNotFoundException extends RuntimeException {

    private static final String DEFAULT_MESSAGE = "User not found";

    // Default constructor with a predefined message
    public UserNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    // Constructor with a custom message
    public UserNotFoundException(String message) {
        super(message);
    }

    // Constructor with a custom message and cause
    public UserNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
