// Función para el efecto de typing en el elemento #typing-text
function typingEffect() {
    const words = ["Ethical Hacker", "Software Tester", "Backend Developer"];
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

  typingEffect();
  