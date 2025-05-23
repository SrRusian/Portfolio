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

function openContactModal() {
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

function updateNavbarOnScroll() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Adjust offset for better accuracy
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });
}

function scrollToTopButton() {
  const scrollToTopBtn = document.getElementById("scroll-to-top");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to the Home section when the button is clicked
  scrollToTopBtn.addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });
}

function enableAutoScroll() {
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = link.getAttribute("href").substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    });
  });
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // entry.intersectionRatio va de 0 (no visible) a 1 (totalmente visible)
        entry.target.style.opacity = entry.intersectionRatio;
        entry.target.style.transform = `translateY(${40 * (1 - entry.intersectionRatio)}px)`;
        if (entry.intersectionRatio > 0.05) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    },
    {
      threshold: Array.from({ length: 201 }, (_, i) => i * 0.005), // [0, 0.005, ..., 1]
    }
  );
  reveals.forEach((el) => observer.observe(el));
}
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Inicializa las funciones
navbar();
typingEffect();
openContactModal();
updateNavbarOnScroll();
scrollToTopButton();
enableAutoScroll();
