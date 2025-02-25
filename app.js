document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      
      // Verificamos si el enlace es "Habilidades"
      if (targetId === "skills") {
          document.getElementById(targetId).scrollIntoView({
              behavior: 'smooth'
          });
      } else {
          // Redirige normalmente si no es "Habilidades"
          document.getElementById(targetId).scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden"); // Encuentra todos los elementos con .hidden
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { // Si el elemento es visible en pantalla
          entry.target.classList.add("show"); // Agrega la clase .show para activar la animación
        }
      });
    }, { threshold: 0.3 }); // Se activa cuando el 30% del texto es visible
  
    elements.forEach((el) => observer.observe(el)); // Aplica el efecto a todos los elementos con .hidden
  });
  

  const checkbox = document.getElementById('checkbox');
const navbar = document.querySelector('.navbar');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        navbar.style.display = 'flex';  // Muestra el menú
    } else {
        navbar.style.display = 'none';  // Oculta el menú
    }
});