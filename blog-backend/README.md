
# Blog Post Application

A full-stack blog application built with **Spring Boot**, **React**, **MySQL**, and **MongoDB**. This application allows users to read, write, update, and delete blog posts. Additionally, it supports comment posting, tagging, and image uploads for each blog post.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Documentation](#api-documentation)
- [Database Setup](#database-setup)
- [Image Handling](#image-handling)
- [Authentication](#authentication)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a simple blog post application where users can:

- View all blog posts (with or without logging in).
- Write, update, and delete blog posts.
- Add comments and tags to blog posts.
- Upload images for blog posts.
- Search and filter blog posts by tags.

The backend is built with **Spring Boot** and supports a REST API for handling blog post management, comments, and user interactions. The frontend is built with **React** and **Tailwind CSS** for a responsive, user-friendly interface.

---

## Tech Stack

- **Frontend**:
    - React.js
    - Tailwind CSS
    - Axios (for API requests)

- **Backend**:
    - Spring Boot
    - MySQL (for storing blog metadata and user information)
    - MongoDB (for storing blog content, comments, and tags)

- **Authentication**:
    - JWT (JSON Web Tokens) for user authentication

- **Image Storage**:
    - Local File System (or AWS S3 for cloud storage)

---

## Features

- **Blog Posts**: Create, update, delete, and read blog posts with title, summary, content, and image.
- **Comments**: Post comments linked to blog posts.
- **Tags**: Add tags to blog posts for categorization and filtering.
- **Image Upload**: Upload blog post cover images.
- **Authentication**: JWT-based login and registration system.

---

## Backend Setup

### Requirements

- **Java 17**
- **Spring Boot 2.x**
- **MySQL**
- **MongoDB**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mansoor-P/blog-app.git
   cd blog-post-app
   ```

2. Set up MySQL and MongoDB databases:
    - Create a MySQL database for user and blog metadata.
    - Set up MongoDB for storing blog content, comments, and tags.

3. Configure application properties in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/blog_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   spring.data.mongodb.uri=mongodb://localhost:27017/blog-content-db
   ```

4. Build and run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

---

## Frontend Setup

### Requirements

- **Node.js** (v16 or higher)
- **NPM/Yarn**

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

---

## API Documentation

### Blog Endpoints

- **GET /api/blogs**: Get all blog posts.
- **GET /api/blogs/{id}**: Get a single blog post by ID.
- **POST /api/blogs**: Create a new blog post.
- **PUT /api/blogs/{id}**: Update an existing blog post.
- **DELETE /api/blogs/{id}**: Delete a blog post.

### Comment Endpoints

- **GET /api/blogs/{id}/comments**: Get all comments for a blog post.
- **POST /api/blogs/{id}/comments**: Add a comment to a blog post.

### Image Upload

- **POST /api/blogs/upload-image**: Upload a blog image (returns image URL).

---

## Database Setup

### MySQL Database

1. Create the `blog_db` database.
2. The `blog_db` database will store metadata such as:
    - Users
    - Blog Post Information

### MongoDB Database

1. Create the `blog-content-db` database in MongoDB.
2. MongoDB will store:
    - Blog Content (with HTML structure)
    - Comments
    - Tags

---


## Authentication

The application uses **JWT (JSON Web Tokens)** for user authentication.

### Authentication Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in and obtain a JWT.
- **POST /api/auth/logout**: Log out and invalidate the JWT.

### JWT Authentication

- Store JWT token in `localStorage` on the frontend.
- Attach JWT token as `Authorization: Bearer <token>` in the header for protected API requests.

---

## Testing

- Unit tests are written using **JUnit 5** for backend logic.
- For frontend, use **Jest** and **React Testing Library**.

---

## Contributing

We welcome contributions! If you would like to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
