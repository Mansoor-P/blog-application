package com.mansoor.blogbackend.utils;

import java.text.Normalizer;
import java.util.regex.Pattern;

public class SlugGenerator {

    public static String generateSlug(String title) {
        // Convert to lowercase
        String slug = title.toLowerCase();

        // Remove any unwanted characters (non-alphanumeric characters except for spaces)
        slug = Normalizer.normalize(slug, Normalizer.Form.NFD);
        slug = Pattern.compile("[^\\p{ASCII}]").matcher(slug).replaceAll("");

        // Replace spaces with hyphens
        slug = slug.replaceAll("\\s+", "-");

        // Remove leading and trailing hyphens
        slug = slug.replaceAll("^-+|-+$", "");

        return slug;
    }
}
