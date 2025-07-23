// Scroll animation logic
document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll('.animate-on-scroll');

  const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight - 50 && rect.bottom >= 0;
  };

  const animateOnScroll = () => {
    animatedItems.forEach(item => {
      if (isInView(item)) {
        item.classList.add('in-view'); // triggers animation
      } else {
        item.classList.remove('in-view'); // optional: repeat animation
      }
    });
  };

  // Run on scroll and load
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('resize', animateOnScroll);
  animateOnScroll(); // initial check
});
