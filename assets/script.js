// Scroll reveal using IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Typing indicator placeholder
function showTyping(element) {
  let dotCount = 0;
  return setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    element.textContent = 'Your assistant is replying' + '.'.repeat(dotCount);
  }, 500);
}

// Example usage (uncomment when integrating with chatbot)
// const typingEl = document.querySelector('.typing-indicator');
// const typingInterval = showTyping(typingEl);
