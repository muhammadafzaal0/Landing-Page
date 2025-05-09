const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const currentlyOpen = document.querySelector('.accordion-content.show');
    const content = header.nextElementSibling;

    if (currentlyOpen && currentlyOpen !== content) {
      currentlyOpen.classList.remove('show');
    }

    content.classList.toggle('show');
  });
});
