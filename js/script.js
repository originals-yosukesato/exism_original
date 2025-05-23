//GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const historyContainer = document.querySelector(".history-container");

gsap.to(historyContainer, {
  x: () => -(historyContainer.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".c-s-history",
    start: "top top",
    end: () => "+=" + (historyContainer.scrollWidth * 1.2),
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});
