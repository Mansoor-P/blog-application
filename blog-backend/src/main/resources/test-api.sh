#!/bin/bash

# Define the registration URL
REGISTER_URL="http://localhost:8080/api/v1/auth/register"

# Create a new user with some test data (e.g., username, password, email)
USER_DATA='{
             "id": 1234567890123456,
             "username": "mansoor_dev",
             "email": "mansoor@example.com",
             "password": "SecurePass123!",
             "displayName": "Mansoor Pathikonda",
             "profileImageUrl": "https://example.com/profile/mansoor.jpg",
             "bio": "Passionate software developer specializing in Java, Spring Boot, and microservices.",
             "accountStatus": "ACTIVE",
             "role": "USER",
             "websiteUrl": "https://mansoor.dev",
             "followersCount": 2500,
             "followingCount": 300,
             "createdAt": "2023-07-15T10:30:00.000Z",
             "updatedAt": "2025-03-18T09:37:50.227Z",
             "lastLoginAt": "2025-03-18T08:20:15.500Z",
             "totalLikesReceived": 50000,
             "totalViewsReceived": 120000,
             "location": "Hyderabad, India",
             "verified": true,
             "premiumUser": true,
             "preferences": ["Technology", "Programming", "Microservices"],
             "socialLinks": [
               "https://github.com/mansoor",
               "https://linkedin.com/in/mansoor",
               "https://twitter.com/mansoor_dev"
             ],
             "blogIds": [101, 102, 103],
             "commentIds": [201, 202, 203],
             "likeIds": [301, 302, 303]
           }
'

# Send a POST request to the registration endpoint
response=$(curl -s -w "%{http_code}" -o response.txt -X POST $REGISTER_URL \
  -H "Content-Type: application/json" \
  -d "$USER_DATA")

# Check the HTTP response code
if [[ "$response" -eq 201 ]]; then
  echo "User registered successfully!"
  cat response.txt
else
  echo "Failed to register user. Response Code: $response"
  cat response.txt
fi
