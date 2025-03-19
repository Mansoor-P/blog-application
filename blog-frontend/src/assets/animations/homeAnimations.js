import gsap from "gsap";

export const homeAnimations = (textRef, imageRef, titleRef) => {
  const tl = gsap.timeline({ delay: 0.5 });

  tl.from(textRef.current, {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
  }).from(
    imageRef.current,
    {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );
};
