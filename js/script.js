// Menu mobile toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('nav-list--visible');
  navToggle.classList.toggle('nav-toggle--open');
});

// Formulaire contact
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // validation simple
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Merci de remplir tous les champs.');
      return;
    }
    

    // validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }

    // Simuler envoi du formulaire (ex: via fetch)
    // Ici juste confirmation visuelle
    form.style.display = 'none';
    formMessage.style.display = 'block';
  });

  
}
