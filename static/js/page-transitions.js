document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in class on page load
  document.body.classList.add('fade-in');
  
  // Intercept all internal links
  const links = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
  
  links.forEach(link => {
    // Skip if it's an anchor link (same page)
    if (link.getAttribute('href').startsWith('#')) return;
    
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Check if it's an external link or special link
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }
      
      e.preventDefault();
      
      // Add fade-out class
      document.body.classList.add('fade-out');
      
      // Navigate after fade completes
      setTimeout(() => {
        window.location.href = href;
      }, 300); // Match this to your CSS transition duration
    });
  });
});