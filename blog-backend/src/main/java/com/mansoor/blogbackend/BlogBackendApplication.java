package com.mansoor.blogbackend;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication(scanBasePackages = "com.mansoor.blogbackend")
@EnableJpaAuditing
@Slf4j
@OpenAPIDefinition(
		info = @Info(title = "Blog API", version = "1.0", description = "API Documentation for Blog Management")
)
public class BlogBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogBackendApplication.class, args);
		log.info("🚀 Blog Backend Service Started Successfully!");
	}
}
