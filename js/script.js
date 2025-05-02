// Función para el efecto de typing en el elemento #typing-text
function typingEffect() {
    const words = ["an Ethical Hacker", "a Software Tester", "a Backend Developer", "a Pentester", "a Linux Enthusiast", "a Security Researcher"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const pauseBetweenWords = 2000;
  
    const typingTextElement = document.getElementById("typing-text");
  
    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typingTextElement.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
  
        if (letterIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(type, typingSpeed / 2);
        }
      } else {
        typingTextElement.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
  
        if (letterIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, pauseBetweenWords);
        } else {
          setTimeout(type, typingSpeed);
        }
      }
    }
  
    type();
  }

  function navbar() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
  
    // Actualiza la clase activa en el enlace seleccionado y desactiva los demás
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
  
        // Cierra el menú en dispositivos pequeños después de seleccionar una opción
        if (navbar.classList.contains('active')) {
          navbar.classList.remove('active');
          menuIcon.classList.remove('bx-x');
        }
      });
    });
  
    // Activa/desactiva el menú móvil al hacer clic en el icono
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };
  }  

  navbar();
  typingEffect(); 
  
