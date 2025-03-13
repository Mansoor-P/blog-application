-- Insert sample blog data
INSERT INTO blogs (title, summary, content, author, user_id, created_at, updated_at)
VALUES
    ('Introduction to Microservices', 'A brief intro to microservices architecture.', 'Detailed content about microservices...', 'Mansoor Pathikonda', 1, NOW(), NOW()),
    ('Spring Boot Best Practices', 'Learn best practices for Spring Boot development.', 'Best practices include modularity, logging, exception handling...', 'Mansoor Pathikonda', 1, NOW(), NOW()),
    ('Understanding REST APIs', 'How REST APIs work and their importance.', 'REST APIs follow principles such as statelessness...', 'Mansoor Pathikonda', 2, NOW(), NOW());
