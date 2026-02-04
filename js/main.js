window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h2", {
  y: 120,
  opacity: 0,
  duration: 1.4,
  ease: "power4.out"
});

gsap.from(".hero p", {
  y: 80,
  opacity: 0,
  delay: 0.3,
  duration: 1.2
});

gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 80,
    duration: 1.1,
    ease: "power2.out"
  });
});
