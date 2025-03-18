package com.mansoor.blogbackend.repositories;

import com.mansoor.blogbackend.models.User;
import com.mansoor.blogbackend.models.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    Optional<User> findByUsername(String username);

    List<User> findByRole(Role role);

    List<User> findByUsernameContaining(String username);

    List<User> findTop10ByOrderByCreatedAtDesc();  // Fetch the most recent users
}
