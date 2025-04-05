import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-black text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="text-white text-2xl font-bold">📝</div>
            <span className="text-xl font-bold text-white">Blogify</span>
          </div>
          <p className="max-w-sm text-sm text-gray-400">
            A modern platform for writers and readers to connect, share ideas,
            and explore new perspectives.
          </p>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {[
            {
              title: "Platform",
              links: ["About", "Features", "Pricing", "Careers", "Help"],
            },
            {
              title: "Content",
              links: [
                "Technology",
                "Business",
                "Design",
                "Health",
                "Lifestyle",
              ],
            },
            {
              title: "Resources",
              links: ["Docs", "Guides", "API", "Support"],
            },
            {
              title: "Legal",
              links: ["Terms", "Privacy", "Cookies", "Contact"],
            },
          ].map((section, i) => (
            <div key={i}>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-all hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Blogify. All rights reserved.
          </p>
          <div className="flex gap-4 text-lg">
            <a
              href="#"
              className="hover:text-white text-gray-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-white text-gray-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-white text-gray-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-white text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
