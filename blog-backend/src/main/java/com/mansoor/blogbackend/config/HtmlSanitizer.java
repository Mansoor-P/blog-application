package com.mansoor.blogbackend.config;

import org.jsoup.Jsoup;
import org.jsoup.safety.Safelist;

public class HtmlSanitizer {
    public static String sanitize(String content) {
        return Jsoup.clean(content, Safelist.basic());
    }
}
