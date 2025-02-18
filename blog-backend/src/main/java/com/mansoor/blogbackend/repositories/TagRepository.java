package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {

    List<Tag> findByNameContainingIgnoreCase(String name);  // To search tags by name

    Optional<Tag> findByName(String tagName);
}
