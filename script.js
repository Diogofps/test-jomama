const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transition = 'all 0.3s ease-out';
    link.style.paddingRight = '48px';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transition = 'all 0.3s ease-out';
    link.style.paddingRight = '24px';
  });
});