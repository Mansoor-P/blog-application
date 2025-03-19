import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

// Smooth scrolling for all pages
export const enableSmoothScroll = () => {
  // Scroll to top on page load
  gsap.to(window, {
    scrollTo: { y: 0, autoKill: false },
    duration: 1,
    ease: "power2.inOut",
  });

  // Handle mouse wheel & touchpad scrolling
  const handleScroll = (e) => {
    e.preventDefault();
    gsap.to(window, {
      scrollTo: { y: window.scrollY + e.deltaY, autoKill: false },
      duration: 0.5,
      ease: "power2.out",
    });
  };

  // Handle keyboard arrow key scrolling
  const handleKeyScroll = (e) => {
    const scrollAmount = 80; // Adjust for smoother movement
    if (e.key === "ArrowDown") {
      e.preventDefault();
      gsap.to(window, {
        scrollTo: { y: window.scrollY + scrollAmount, autoKill: false },
        duration: 0.5,
        ease: "power2.out",
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      gsap.to(window, {
        scrollTo: { y: window.scrollY - scrollAmount, autoKill: false },
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  // Add event listeners
  window.addEventListener("wheel", handleScroll, { passive: false });
  window.addEventListener("keydown", handleKeyScroll);
};
