// Menu mobile toggle avec accessibilité
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('nav-list--visible');
  navToggle.classList.toggle('nav-toggle--open');

  

  // Mise à jour d'aria-expanded
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
});

// Formulaire contact
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Merci de remplir tous les champs.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }

    // Simuler l’envoi du formulaire
    form.style.display = 'none';
    formMessage.style.display = 'block';
    form.reset();
  });
}



