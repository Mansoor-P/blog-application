package com.mansoor.blogbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager; // For simplicity in this basic example
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Only if truly stateless and you accept the risks
                .authorizeHttpRequests(requests -> requests
                        .anyRequest().authenticated()) // All requests require authentication
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .httpBasic(withDefaults()); // Or use JWT (see below)
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        // In-memory user details for this *basic* example.  NEVER DO THIS IN PRODUCTION!
        UserDetails user = User.withDefaultPasswordEncoder() // Important: Use password encoder!
                .username("user") // Replace with your username
                .password("password") // Replace with a STRONG password
                .build();
        return new InMemoryUserDetailsManager(user);
    }
}