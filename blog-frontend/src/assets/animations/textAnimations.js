import gsap from "gsap";

export const textTypingAnimation = (titleRef) => {
  gsap.from(titleRef.current, {
    opacity: 0,
    y: 10,
    duration: 0.8,
    ease: "power2.out",
  });

  const text = titleRef.current.innerText;
  titleRef.current.innerText = ""; // Clear text initially

  let i = 0;
  const typingEffect = setInterval(() => {
    titleRef.current.innerText += text[i];
    i++;
    if (i === text.length) clearInterval(typingEffect);
  }, 50); // Speed of typing effect
};
