package com.mansoor.blogbackend.dto;

import java.util.Date;

public class CommentDTO {

    private Long id;
    private String content;
    private Long userId;
    private String userName; // Optional: User's name
    private Date createdAt;

    public CommentDTO() {
    }

    public CommentDTO(Long id, String content, Long userId, String userName, Date createdAt) {
        this.id = id;
        this.content = content;
        this.userId = userId;
        this.userName = userName;
        this.createdAt = createdAt;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
