package com.mansoor.blogbackend;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@Slf4j
@OpenAPIDefinition(
		info = @Info(title = "Blog API", version = "1.0", description = "API Documentation for Blog Management")
)
public class BlogBackendApplication {
	private static final Logger log = LoggerFactory.getLogger(BlogBackendApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(BlogBackendApplication.class, args);
		log.info("🚀 Blog Backend Service Started Successfully!");
	}
}
