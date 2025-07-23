// Scroll animation trigger using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view'); // Optional: remove class if out of view
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% is visible
  });

  // Observe all elements with this class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
