(function () {
  emailjs.init("53iBlUltfpnHwns8b");
})();

function showToast(
  message,
  type = "success",
  duration = 3000,
  showSpinner = false
) {
  const toast = document.getElementById("toast");
  toast.className = `toast ${type} show`;
  toast.innerHTML = `${
    showSpinner ? '<span class="toast-spinner"></span>' : ""
  }${message}`;
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const phoneInput = this.querySelector('input[name="phone"]');
    const phoneValue = phoneInput.value.trim();

    // Si el campo no está vacío, valida el formato
    if (phoneValue && !validatePhoneNumber(phoneValue)) {
      showToast(
        "Por favor ingresa un teléfono válido con lada internacional (ej: +521234567890).",
        "error",
        4000
      );
      phoneInput.focus();
      return;
    }

    const btn = this.querySelector('input[type="submit"]');
    btn.value = "Sending...";
    btn.disabled = true;

    showToast("Enviando mensaje...", "success", 10000, true);

    emailjs.sendForm("service_hvd0fxc", "template_vpikmqw", this).then(
      () => {
        showToast("¡Mensaje enviado correctamente!", "success", 3500);
        document.getElementById("contact-form").reset();
        document.getElementById("contact-modal").style.display = "none";
        btn.value = "Send Message";
        btn.disabled = false;
      },
      () => {
        showToast(
          "Hubo un error al enviar. Intenta de nuevo.",
          "error",
          4000
        );
        btn.value = "Send Message";
        btn.disabled = false;
      }
    );
  });

function validatePhoneNumber(phone) {
  // Debe empezar con + y al menos 1 dígito de país, seguido de 10 a 14 dígitos
  // Ejemplo válido: +521234567890, +341234567890, +11234567890
  const regex = /^\+\d{1,4}\d{10,14}$/;
  return regex.test(phone.replace(/\s+/g, ""));
}