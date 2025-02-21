# Blog Post Application

A full-stack blog application built with **Spring Boot**, **MySQL**, . This application allows users to read, write, update, and delete blog posts.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Backend Setup](#backend-setup)
- [API Documentation](#api-documentation)
- [Database Setup](#database-setup)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a simple blog post application where users can:

- View all blog posts (with or without logging in).
- Write, update, and delete blog posts.
- Add comments and tags to blog posts.
- Search and filter blog posts by tags.

The backend is built with **Spring Boot** and supports a REST API for handling blog post management.

---

## Tech Stack
- **Backend**:
    - Spring Boot
    - MySQL (for storing blog metadata and user information)

---

## Features

- **Blog Posts**: Create, update, delete, and read blog posts with title, summary, and content.
---

## Backend Setup

### Requirements

- **Java 17**
- **Spring Boot 3.x**
- **MySQL**
- **MongoDB**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mansoor-P/blog-application.git
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
   ```

4. Build and run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

---


## API Documentation

### Blog Endpoints

- **GET /api/blogs**: Get all blog posts.
- **GET /api/blogs/{id}**: Get a single blog post by ID.
- **POST /api/blogs**: Create a new blog post.
- **PUT /api/blogs/{id}**: Update an existing blog post.
- **DELETE /api/blogs/{id}**: Delete a blog post.

---

## Database Setup

### MySQL Database

1. Create the `blog_db` database.
2. The `blog_db` database will store metadata such as:
    - Users
    - Blog Post Information

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