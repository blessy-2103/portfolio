document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio engine dynamically launched successfully 🚀");

  // Soft reveal transition script for project cards on cursor proximity
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = '#3b82f6';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '#e2e8f0';
    });
  });
});