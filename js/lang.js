const translations = {
  en: {
    nav_home: "Home",
    nav_education: "Professional Development",
    nav_services: "Services",
    nav_certificates: "Certifications",
    nav_portfolio: "Portfolio",
    nav_docs: "Docs",
    home_title: "Hi, I'm <span>Emmanuel</span>",
    home_p1: "Hello! I'm <strong>Emmanuel Camacho</strong>, passionate about <strong>offensive cybersecurity</strong> and <strong>secure backend development</strong>.",
    home_p2: "I am currently in a stage of <strong>continuous learning</strong>, deeply exploring the world of ethical hacking, penetration testing, and automation of tools for Linux environments.",
    home_p3: "I specialize in vulnerability analysis, designing custom solutions, and implementing security best practices. Although I am still expanding my knowledge in this vast field, every day I strengthen my skills by participating in <strong>labs, CTF platforms, and audits in controlled environments</strong>.",
    home_phrase: "🔒 “My goal is to create more secure systems through a deep understanding of their flaws.”",
    contact_button: "CONTACT",
    contact_header: "Contact <span>Me</span>",
    input_name: "Full Name",
    input_email: "Email",
    input_phone: "Phone Number",
    input_subject: "Subject",
    input_message: "Your Message",
    education_header: "Professional Development",
    education_t1: "UNIVERSITY OF COLIMA (SOFTWARE ENGINEERING)",
    education_p1: "Currently in the final stage of my degree, focused on backend development and agile methodologies. Throughout my studies, I have gained practical experience in Linux environments, relational databases (MySQL and PostgreSQL), Docker containers, and web development fundamentals with HTML, CSS, and JavaScript.",
    education_p2: "I have also worked with tools such as basic Node.js, and game development engines like Unity and Godot. My education includes solid knowledge of software development life cycles, object-oriented programming, digital systems, and software engineering principles.",
    education_p3: "(Estimated graduation: July 2025)",
    education_t2: "Self-taught Entry into Cybersecurity",
    education_p4: "<strong>Focus:</strong> ethical hacking, OWASP vulnerability testing, and pentesting in controlled environments.",
    education_p5: "<li>Platforms: HackTheBox, TryHackMe, PortSwigger Labs.</li><li>Tools: Burp Suite, Nmap, SQLmap, Linux.</li><li>Studies: technical documentation, CVEs, blogs, and practical courses.</li>",
    education_t3: "Social Service - Distance Education Directorate (EDUC)",
    education_p6: "<strong>Role:</strong> Applied IT security for an educational platform.",
    education_p7: "<li>Technical audits of EDUC functionalities.</li><li>Vulnerability testing: XSS, IDOR, misconfigured JWT.</li><li>Use of Burp Suite, Postman, OWASP Testing Guide.</li>",
    education_t4: "Professional Internship – Distance Education Directorate (EDUC)",
    education_p8: "<strong>Role:</strong> Cybersecurity analysis and testing on the EDUC platform.",
    education_p9: "<li>Technical audits of APIs and critical functionalities.</li><li>Vulnerability testing: SQL Injection, IDOR, XSS, JWT.</li><li>Implementation of automated tests with Postman and Newman.</li><li>Preparation of technical reports with findings and recommendations.</li>",
    services_header: "Services",
    services_h1: "🔐 Ethical Hacker",
    services_p1:"Identification and exploitation of vulnerabilities in controlled environments, with proficiency in tools such as Burp Suite, Nmap, SQLmap, and Dirb. Hands-on experience on platforms like TryHackMe, HackTheBox, and PortSwigger Labs. Familiar with the OWASP Top 10 and offensive testing methodologies. Basic knowledge of CVEs and common attack vectors.",
    services_h2: "🧪 Software Tester",
    services_p2:"Execution of manual and semi-automated tests on APIs and web platforms. Use of Postman and Newman for functional, regression, and basic security validation. Test design based on critical system paths. Knowledge of JWT, XSS, IDOR, CSRF, and common misconfiguration errors. Preparation of reports with findings and technical suggestions.",
    services_h3: "🛠 Backend Developer",
    services_p3:"Development of REST APIs using Node.js, management of relational databases (MySQL, PostgreSQL), and backend security principles. Familiar with token-based authentication, access control, and business logic. Use of Docker for portable environments and backend service structuring. Application of best development practices and version control with Git.",
    services_h4: "🔧 Other",
    services_p4:"Knowledge in HTML, CSS, JS, responsive design, and semantic structure. Basic experience in Linux systems, bash commands, and local server management. Game development in Unity and Godot as personal projects. Mastery of concepts such as software life cycle, agile methodologies, and technical documentation.",
    certifications_header: "🎓 Certifications & Awards",
    certificate_t6: "Jr Penetration Tester",
    certificate_i6: "<strong>Issued by:</strong> TryHackMe",
    certificate_d6: "<strong>Date:</strong> Jun 28, 2025",
    certificate_id6: "<strong>ID:</strong> THM-IUUHEHXQLB",
    certificate_btn6: "View Certificate",
    certificate_t1: "API Hacking",
    certificate_i1: "<strong>Issued by:</strong> Terrabyte Academy",
    certificate_d1: "<strong>Date:</strong> February 5, 2025",
    certificate_id1: "<strong>ID:</strong> oo8tkfs57d",
    certificate_btn1: "View Certificate",
    certificate_t2: "Introduction to Emerging Technologies",
    certificate_i2: "<strong>Issued by:</strong> Santander Open Academy",
    certificate_d2: "<strong>Date:</strong> July 31, 2024",
    certificate_id2: "<strong>ID:</strong> 1t8njtssid",
    certificate_btn2: "View Certificate",
    certificate_t3: "THM Pre-Security Learning Path",
    certificate_i3: "<strong>Issued by:</strong> TryHackMe",
    certificate_d3: "<strong>Date:</strong> May 24, 2025",
    certificate_id3: "<strong>ID:</strong> THM-59VQQ5ZCES",
    certificate_btn3: "View Certificate",
    certificate_t4: "THM CYBER SECURITY 101",
    certificate_i4: "<strong>Issued by:</strong> TryHackMe",
    certificate_d4: "<strong>Date:</strong> Jun 11, 2025",
    certificate_id4: "<strong>ID:</strong> THM-LM7KF5TRST",
    certificate_btn4: "View Certificate",
    certificate_t5: "Python Introduction",
    certificate_i5: "<strong>Issued by:</strong> Santander Open Academy",
    certificate_d5: "<strong>Date:</strong> Jun 19, 2025",
    certificate_id5: "<strong>ID:</strong> OA-2025-0619001255061",
    certificate_btn5: "View Certificate",
    portfolio_header: "Portfolio",
    projects_header: "Projects",
    labs_header: "Labs",
    scripts_header: "Scripts",
    docs_header: "My Documents",
    doc_title: "Knowledge Repository",
    doc_description: "Personal technical documentation on offensive cybersecurity, analysis tools, Linux commands, OWASP Top 10, testing in controlled environments, and more.",
    doc_list: "<li>🛡️ Pentesting in APIs and web</li> <li>🔧 Tools: Burp, ZAP, Metasploit</li> <li>🧪 Practical labs</li> <li>💻 Essential Linux commands</li> <li>📚 OWASP Top 10 explained</li> <li>🔍 Analysis of common vulnerabilities</li>",
    doc_btn: "View Full Guide",
    doc_updated: "📅 Last updated: May 2025",
    copyright: "© Emmanuel Camacho | All Rights Reserved",

  },
  es: {
    nav_home: "Inicio",
    nav_education: "Desarrollo Profesional",
    nav_services: "Servicios",
    nav_certificates: "Certificaciones",
    nav_portfolio: "Portafolio",
    nav_docs: "Docs",
    home_title: "Hola, soy <span>Emmanuel</span>",
    home_p1: "¡Hola! Soy <strong>Emmanuel Camacho</strong>, apasionado por <strong>la ciberseguridad ofensiva</strong> y <strong>el desarrollo seguro de backend</strong>.",
    home_p2: "Actualmente me encuentro en una etapa de <strong>aprendizaje continuo</strong>, explorando a fondo el mundo del hacking ético, las pruebas de penetración y la automatización de herramientas para entornos Linux.",
    home_p3: "Me especializo en el análisis de vulnerabilidades, el diseño de soluciones personalizadas y la implementación de buenas prácticas de seguridad. Aunque todavía estoy ampliando mis conocimientos en este vasto campo, cada día fortalezco mis habilidades participando en <strong>laboratorios, plataformas CTF y auditorías en entornos controlados</strong>.",
    home_phrase: "🔒 “Mi objetivo es crear sistemas más seguros a través de un profundo entendimiento de sus fallas.”",
    contact_button: "CONTACTO",
    contact_header: "Contáctame",
    input_name: "Nombre Completo",
    input_email: "Correo Electrónico",
    input_phone: "Número de Teléfono",
    input_subject: "Asunto",
    input_message: "Tu Mensaje",
    education_header: "Desarrollo Profesional",
    education_t1: "UNIVERSIDAD DE COLIMA (INGENIERÍA EN SOFTWARE)",
    education_p1: "Actualmente en la etapa final de mi carrera, enfocado en el desarrollo de backend y metodologías ágiles. A lo largo de mis estudios, he adquirido experiencia práctica en entornos Linux, bases de datos relacionales (MySQL y PostgreSQL), contenedores Docker y fundamentos del desarrollo web con HTML, CSS y JavaScript.",
    education_p2: "También he trabajado con herramientas como Node.js básico, y motores de desarrollo de juegos como Unity y Godot. Mi educación incluye un sólido conocimiento de los ciclos de vida del desarrollo de software, la programación orientada a objetos, los sistemas digitales y los principios de ingeniería de software.",
    education_p3: "(Graduación estimada: Julio 2025)",
    education_t2: "Ingreso autodidacta a la Ciberseguridad",
    education_p4: "<strong>Enfoque:</strong> hacking ético, pruebas de vulnerabilidades OWASP y pentesting en entornos controlados.",
    education_p5: "<li>Plataformas: HackTheBox, TryHackMe, PortSwigger Labs.</li><li>Herramientas: Burp Suite, Nmap, SQLmap, Linux.</li><li>Estudios: documentación técnica, CVEs, blogs y cursos prácticos.</li>",
    education_t3: "Servicio Social - Dirección General de Educación a Distancia (EDUC)",
    education_p6: "<strong>Rol:</strong> Seguridad informática aplicada a una plataforma educativa.",
    education_p7: "<li>Auditorías técnicas de las funcionalidades de EDUC.</li><li>Pruebas de vulnerabilidad: XSS, IDOR, JWT mal configurado.</li><li>Uso de Burp Suite, Postman, OWASP Testing Guide.</li>",
    education_t4: "Prácticas Profesionales - Dirección General de Educación a Distancia (EDUC)",
    education_p8: "<strong>Rol:</strong> Análisis y pruebas de ciberseguridad en la plataforma EDUC.",
    education_p9: "<li>Auditorías técnicas de APIs y funcionalidades críticas.</li><li>Pruebas de vulnerabilidad: SQL Injection, IDOR, XSS, JWT.</li><li>Implementación de pruebas automatizadas con Postman y Newman.</li><li>Preparación de informes técnicos con hallazgos y recomendaciones.</li>",
    services_header: "Servicios",
    services_h1: "🔐 Hacker Ético",
    services_p1:"Identificación y explotación de vulnerabilidades en entornos controlados, con dominio de herramientas como Burp Suite, Nmap, SQLmap y Dirb. Experiencia práctica en plataformas como TryHackMe, HackTheBox y PortSwigger Labs. Familiaridad con el OWASP Top 10 y metodologías de pruebas ofensivas. Conocimientos básicos de CVEs y vectores de ataque comunes.",
    services_h2: "🧪 Tester de Software",
    services_p2:"Ejecución de pruebas manuales y semi-automatizadas en APIs y plataformas web. Uso de Postman y Newman para validación funcional, regresión y seguridad básica. Diseño de pruebas basado en rutas críticas del sistema. Conocimientos de JWT, XSS, IDOR, CSRF y errores de configuración comunes. Preparación de informes con hallazgos y sugerencias técnicas.",
    services_h3: "🛠 Desarrollador Backend",
    services_p3:"Desarrollo de APIs REST utilizando Node.js, gestión de bases de datos relacionales (MySQL, PostgreSQL) y principios de seguridad en backend. Familiaridad con autenticación basada en tokens, control de acceso y lógica de negocio. Uso de Docker para entornos portátiles y estructuración de servicios backend. Aplicación de mejores prácticas de desarrollo y control de versiones con Git.",
    services_h4: "🔧 Otros",
    services_p4:"Conocimientos en HTML, CSS, JS, diseño responsivo y estructura semántica. Experiencia básica en sistemas Linux, comandos bash y gestión de servidores locales. Desarrollo de juegos en Unity y Godot como proyectos personales. Dominio de conceptos como ciclo de vida del software, metodologías ágiles y documentación técnica.",
    certifications_header: "🎓 Certificaciones & Premios",
    certificate_t6: "Jr Penetration Tester",
    certificate_i6: "<strong>Emitido por:</strong> TryHackMe",
    certificate_d6: "<strong>Fecha:</strong> 28 de junio de 2025",
    certificate_id6: "<strong>ID:</strong> THM-IUUHEHXQLB",
    certificate_btn6: "Ver Certificado",
    certificate_t1: "Hacking de APIs",
    certificate_i1: "<strong>Emitido por:</strong> Terrabyte Academy",
    certificate_d1: "<strong>Fecha:</strong> 5 de febrero de 2025",
    certificate_id1: "<strong>ID:</strong> oo8tkfs57d",
    certificate_btn1: "Ver Certificado",
    certificate_t2: "Introducción a Tecnologías Emergentes",
    certificate_i2: "<strong>Emitido por:</strong> Santander Open Academy",
    certificate_d2: "<strong>Fecha:</strong> 31 de julio de 2024",
    certificate_id2: "<strong>ID:</strong> 1t8njtssid",
    certificate_btn2: "Ver Certificado",
    certificate_t3: "THM Ruta de Aprendizaje pre-Seguridad",
    certificate_i3: "<strong>Emitido por:</strong> TryHackMe",
    certificate_d3: "<strong>Fecha:</strong> 24 de mayo de 2025",
    certificate_id3: "<strong>ID:</strong> THM-59VQQ5ZCES",
    certificate_btn3: "Ver Certificado",
    certificate_t4: "THM CIBERSEGURIDAD 101",
    certificate_i4: "<strong>Emitido por:</strong> TryHackMe",
    certificate_d4: "<strong>Fecha:</strong> 11 de junio de 2025",
    certificate_id4: "<strong>ID:</strong> THM-LM7KF5TRST",
    certificate_btn4: "Ver Certificado",
    certificate_t5: "Introducción a Python",
    certificate_i5: "<strong>Emitido por:</strong> Santander Open Academy",
    certificate_d5: "<strong>Fecha:</strong> 19 de junio de 2025",
    certificate_id5: "<strong>ID:</strong> OA-2025-0619001255061",
    certificate_btn5: "Ver Certificado",
    portfolio_header: "Portafolio",
    projects_header: "Proyectos",
    labs_header: "Laboratorios",
    scripts_header: "Scripts",
    docs_header: "Mis Documentos",
    doc_title: "Repositorio de Conocimientos",
    doc_description: "Documentación técnica personal sobre ciberseguridad ofensiva, herramientas de análisis, comandos de Linux, OWASP Top 10, pruebas en entornos controlados y más.",
    doc_list: "<li>🛡️ Pentesting en APIs y web</li> <li>🔧 Herramientas: Burp, ZAP, Metasploit</li> <li>🧪 Laboratorios prácticos</li> <li>💻 Comandos esenciales de Linux</li> <li>📚 OWASP Top 10 explicado</li> <li>🔍 Análisis de vulnerabilidades comunes</li>",
    doc_btn: "Ver Guía Completa",
    doc_updated: "📅 Última actualización: mayo 2025",
    copyright: "© Emmanuel Camacho | Todos los Derechos Reservados",

  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  // Traduce textos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Traduce placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Traduce botones input con data-i18n_button (si usas)
  document.querySelectorAll("[data-i18n_button]").forEach(el => {
    const key = el.getAttribute("data-i18n_button");
    if (translations[lang][key]) {
      el.value = translations[lang][key];
    }
  });

  // Actualiza el estado visual de los botones de idioma
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
  const btn = document.getElementById(`lang-${lang}`);
  if (btn) btn.classList.add("active");

  // Guarda preferencia
  localStorage.setItem("lang", lang);
}

// Eventos para los botones de idioma
const btnEn = document.getElementById("lang-en");
const btnEs = document.getElementById("lang-es");
if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));
if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));

// Al cargar la página, usa el idioma guardado o el del navegador
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || (navigator.language.startsWith("es") ? "es" : "en");
  setLanguage(savedLang);
});