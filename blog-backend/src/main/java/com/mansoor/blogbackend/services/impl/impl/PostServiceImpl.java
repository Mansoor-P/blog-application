package com.mansoor.blogbackend.services.impl.impl;

import com.mansoor.blogbackend.models.Post;
import com.mansoor.blogbackend.repositories.PostRepository;
import com.mansoor.blogbackend.services.impl.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Optional<Post> getPostById(Long id) {
        return postRepository.findById(id);
    }

    @Override
    public Post createPost(Post post) {
        // Generate a slug if not provided
        if (post.getSlug() == null || post.getSlug().isEmpty()) {
            post.setSlug(generateSlug(post.getTitle()));  // Generate slug using the title
        }
        return postRepository.save(post);
    }

    @Override
    public Post updatePost(Long id, Post post) {
        Optional<Post> existingPost = postRepository.findById(id);

        if (existingPost.isPresent()) {
            Post updatedPost = existingPost.get();
            updatedPost.setTitle(post.getTitle()); // Set other fields as needed
            updatedPost.setContent(post.getContent());
            updatedPost.setAuthor(post.getAuthor());

            // Generate a new slug if the title changes
            if (post.getTitle() != null && !post.getTitle().equals(updatedPost.getTitle())) {
                updatedPost.setSlug(generateSlug(post.getTitle()));
            }

            return postRepository.save(updatedPost);
        }
        return null; // Or throw a custom exception if not found
    }

    @Override
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public String generateSlug(String title) {
        // Generate the slug based on the title
        String slug = title.toLowerCase().replaceAll("[^a-z0-9 ]", "").replaceAll(" ", "-");
        return slug;
    }
}
