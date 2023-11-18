
function setupIntersectionObserver(selector) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));
  }
  
  setupIntersectionObserver('.hidden');