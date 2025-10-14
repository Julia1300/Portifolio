// Animação de aparecer ao rolar
const sections = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      sec.classList.add('visible');
    }
  });
});

// Pequeno toque de interação: título reage ao mouse
const titulo = document.querySelector('header h1');
titulo.addEventListener('mouseover', () => titulo.style.color = '#fff');
titulo.addEventListener('mouseout', () => titulo.style.color = '#ffeb70');
s