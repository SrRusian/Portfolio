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

// Desplazamiento automático al siguiente apartado
function autoScroll() {
  const sections = document.querySelectorAll("section"); // Selecciona todas las secciones
  const navLinks = document.querySelectorAll(".navbar a"); // Selecciona los enlaces de la navbar
  let isScrolling = false;
  let lastScrollPosition = window.scrollY; // Guarda la posición del scroll anterior
  let manualScroll = false; // Bandera para detectar scroll manual (clic en navbar)
  let animationInProgress = false; // Bandera para evitar animaciones superpuestas

  // Detectar clic en los enlaces de la navbar
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (animationInProgress) return; // Evita múltiples animaciones
      manualScroll = true; // Activa la bandera de scroll manual
      animationInProgress = true; // Marca que una animación está en curso

      const targetId = link.getAttribute("href").substring(1); // Obtiene el ID de la sección objetivo
      const targetSection = document.getElementById(targetId); // Selecciona la sección objetivo

      if (targetSection) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        targetSection.scrollIntoView({ behavior: "smooth" }); // Desplázate suavemente a la sección objetivo

        setTimeout(() => {
          animationInProgress = false; // Permite nuevas animaciones después de un tiempo
          manualScroll = false; // Desactiva la bandera de scroll manual
        }, 1000); // Ajusta el tiempo según la duración de la animación
      }
    });
  });

  // Actualizar la clase activa en la navbar según la sección visible
  function updateActiveNav() {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop; // Posición superior de la sección
      const sectionHeight = section.offsetHeight; // Altura de la sección
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Posición del scroll (ajustada al centro del viewport)

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const sectionId = section.getAttribute("id"); // Obtiene el ID de la sección
        navLinks.forEach((link) => {
          link.classList.remove("active"); // Elimina la clase activa de todos los enlaces
          if (link.getAttribute("href").substring(1) === sectionId) {
            link.classList.add("active"); // Agrega la clase activa al enlace correspondiente
          }
        });
      }
    });
  }

  window.addEventListener("scroll", () => {
    if (isScrolling || manualScroll || animationInProgress) return; // Evita múltiples ejecuciones o interferencias
    isScrolling = true;

    setTimeout(() => {
      const currentScrollPosition = window.scrollY; // Posición actual del scroll
      const viewportHeight = window.innerHeight; // Altura de la ventana
      let targetSection = null;

      if (currentScrollPosition > lastScrollPosition) {
        // Desplazamiento hacia abajo
        sections.forEach((section) => {
          const sectionTop = section.offsetTop; // Posición superior de la sección
          if (currentScrollPosition < sectionTop && sectionTop < currentScrollPosition + viewportHeight) {
            targetSection = section; // Encuentra la siguiente sección
          }
        });
      } else {
        // Desplazamiento hacia arriba
        sections.forEach((section) => {
          const sectionTop = section.offsetTop; // Posición superior de la sección
          if (currentScrollPosition > sectionTop && sectionTop + section.offsetHeight > currentScrollPosition) {
            targetSection = section; // Encuentra la sección anterior
          }
        });
      }

      // Si hay una sección objetivo, desplázate hacia ella
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      updateActiveNav(); // Actualiza la clase activa en la navbar
      lastScrollPosition = currentScrollPosition; // Actualiza la posición del scroll
      isScrolling = false;
    }, 200); // Tiempo de espera para evitar activaciones rápidas
  });

  // Llama a updateActiveNav al cargar la página para establecer la sección activa inicial
  updateActiveNav();
}

//Deshabilitar el desplazamiento automático en dispositivos móviles
if (window.innerWidth > 768) {
  autoScroll();
}

// Inicializa las funciones
navbar();
typingEffect();
openContactModal();
 
