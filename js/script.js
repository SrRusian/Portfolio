// Función para el efecto de typing
function typingEffect() {
    const words = ["an Ethical Hacker", "a Software Tester", "a Backend Developer", "a Pentester", "a Linux Enthusiast", "a Security Researcher"]; // Array de palabras a mostrar
    let wordIndex = 0; 
    let letterIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const pauseBetweenWords = 2000;
  
    const typingTextElement = document.getElementById("typing-text"); // Selecciona el elemento donde se mostrará el texto
  
    function type() {
      const currentWord = words[wordIndex]; // Obtiene la palabra actual del array
      //DELETING
      if (isDeleting) {
        typingTextElement.textContent = currentWord.substring(0, letterIndex - 1); // Muestra la palabra actual hasta el índice de letra
        letterIndex--; // Disminuye el índice de letra para eliminar la palabra
        
        // Si se ha eliminado toda la palabra, pasa a la siguiente palabra
        if (letterIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length; // Cambia al siguiente índice de palabra
          setTimeout(type, typingSpeed); // Espera un tiempo antes de comenzar a escribir la siguiente palabra
        } else {
          setTimeout(type, typingSpeed / 2); // Acelera la eliminación de letras
        }
      } else {
        //WRITTING
        typingTextElement.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++; // Aumenta el índice de letra para escribir la palabra
        
        // Si se ha escrito toda la palabra, espera un tiempo antes de comenzar a eliminarla
        if (letterIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, pauseBetweenWords); // Espera un tiempo antes de comenzar a eliminar la palabra
        } else {
          setTimeout(type, typingSpeed); // Espera un tiempo antes de escribir la siguiente letra
        }
      }
    }
  
    type();
};

function navbar() {
  const menuIcon = document.querySelector('#menu-icon'); // Selecciona el icono del menú
  const navbar = document.querySelector('.navbar'); // Selecciona la barra de navegación
  const navLinks = document.querySelectorAll('.navbar a'); // Selecciona todos los enlaces dentro de la barra de navegación
  
  // Actualiza la clase activa en el enlace seleccionado y desactiva los demás
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(link => link.classList.remove('active')); // Elimina la clase activa de todos los enlaces
      link.classList.add('active'); // Agrega la clase activa al enlace seleccionado
  
      // Cierra el menú en dispositivos pequeños después de seleccionar una opción
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active'); // Cierra el menú
        menuIcon.classList.remove('bx-x'); // Cambia el icono del menú
      }
    });
   });
  
  // Activa/desactiva el menú móvil al hacer clic en el icono
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Restaura el icono del menú
    navbar.classList.toggle('active'); // Desactiva la barra de navegación
  };
}

function openModal() {
  // Modal Contact Form
  const openContact = document.getElementById("open-contact");
  const closeContact = document.getElementById("close-contact");
  const contactModal = document.getElementById("contact-modal");

  // Abrir el modal
  openContact.addEventListener("click", (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace
    contactModal.style.display = "flex"; // Muestra el modal
  });

  // Cerrar el modal
  closeContact.addEventListener("click", () => {
    contactModal.style.display = "none"; // Oculta el modal
  });

  // Cerrar el modal al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.style.display = "none";
    }
  });
}

navbar();
typingEffect();
openModal();

