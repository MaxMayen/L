/* =========================================================
   ✏️  AQUÍ EDITAS TODO EL CONTENIDO
   ========================================================= */

const CONFIG = {
  para: "Para ti, mi amor",          // Se ve debajo del título de la portada
  firma: "",                         // Opcional: frase final bajo el resumen (vacío = no se muestra)
};

// Versión corta: cada elemento es un párrafo
const RESUMEN = [
  "Hay personas que llegan a nuestras vidas de forma casual, y otras que simplemente se convierten en nuestro hogar. Tú eres sin duda lo segundo. Desde que estás en mi vida, cada día tiene un matiz diferente, una razón más para sonreír y un propósito más bonito por el cual avanzar.",
  "Amo de ti absolutamente todo. Amo tus pequeños detalles, la forma en la que brillas cuando hablas de lo que te apasiona. Amo tu risa, tu complicidad y la paz que me transmite tu mirada. Contigo aprendí que el amor no se trata de perfección, sino de esa conexión sincera donde podemos ser exactamente quienes somos, sin filtros ni miedos.",
  "Gracias por cada risa compartida, por cada charla interminable, por tu apoyo incondicional y por elegir caminar de mi mano. Eres mi refugio favorito, mi persona de confianza y mi mayor alegría.",
  "Quiero seguir coleccionando momentos contigo y construyendo un futuro lleno de momentos inolvidables. Te amo hoy, mañana y siempre.",
];

// Lista larga: cada razón tiene un título y un texto.
// Cuando llega al final, vuelve a empezar para que sea "interminable".
const RAZONES = [
  { titulo: "Tu sonrisa", texto: "Esa luz que tienes en el rostro y que logra cambiar mi estado de ánimo al instante sin importar qué tan pesado haya sido el día." },
  { titulo: "La paz que me transmites", texto: "La sensación de calma absoluta que siento cuando estoy cerca de ti, como si el ruido del mundo exterior desapareciera por completo." },
  { titulo: "Tu forma de escucharme", texto: "La atención genuina que pones cuando te cuento algo, haciéndome sentir que mis palabras, mis miedos y mis emociones siempre importan." },
  { titulo: "Tu sentido del humor", texto: "La facilidad con la que me haces reír a carcajadas, incluso en los momentos en los que menos ganas tengo de hacerlo." },
  { titulo: "Tu paciencia", texto: "Cómo sabes entender mis tiempos, mis días nublados y mis momentos de estrés sin juzgarme nunca." },
  { titulo: "La complicidad entre nosotros", texto: "Esas miradas que nos damos en medio de un lugar lleno de gente y con las que decimos todo sin pronunciar una sola palabra." },
  { titulo: "Tu autenticidad", texto: "Que seas una persona real, transparente y sin máscaras, que no tiene miedo de mostrarse tal cual es." },
  { titulo: "Cómo te emocionas", texto: "El brillo en tus ojos cuando hablas de algo que te gusta, de un proyecto o de una idea que te ilusiona." },
  { titulo: "Tus abrazos", texto: "Ese refugio seguro donde siento que todo está bien y que no necesito estar en ningún otro lugar del mundo." },
  { titulo: "Nuestras conversaciones interminables", texto: "Poder pasar horas hablando contigo de temas profundos, de la vida, de sueños o de las cosas más absurdas sin aburrirnos jamás." },
  { titulo: "Tu apoyo incondicional", texto: "Saber que siempre estás ahí para animarme, creer en mí y recordarme de lo que soy capaz cuando dudo de mí mismo." },
  { titulo: "Tu bondad", texto: "La forma tan noble y empática en la que tratas a las personas que te rodean y el corazón tan grande que tienes." },
  { titulo: "La seguridad que me das", texto: "Poder ser completamente yo mismo a tu lado, sin temor al rechazo, a las críticas ni a tener que fingir algo que no soy." },
  { titulo: "Los pequeños detalles", texto: "Esas cosas chiquitas que haces todos los días para demostrarme que me tienes presente y que te importo." },
  { titulo: "Nuestros chistes internos", texto: "Ese lenguaje propio que hemos ido construyendo y que hace que cualquier situación cotidiana se vuelva especial." },
  { titulo: "Tu inteligencia", texto: "La manera tan interesante en la que ves la vida, resuelves problemas y me haces reflexionar sobre cosas que antes no veía." },
  { titulo: "Cómo compartimos el silencio", texto: "Poder estar juntos sin hacer nada, simplemente existiendo en el mismo espacio, y que se sienta completamente cómodo y natural." },
  { titulo: "Tu forma de cuidar de mí", texto: "Estar al pendiente de si ya comí, de si llegué bien o de si necesito algo cuando no me siento al cien." },
  { titulo: "Los planes sencillos contigo", texto: "Que ir por algo de comer, caminar sin rumbo o ver una serie se sienta como la mejor cita del mundo solo porque estás tú." },
  { titulo: "La confianza que construimos", texto: "Saber que puedo contarte absolutamente cualquier cosa con la certeza de que siempre estarás de mi lado." },
  { titulo: "Tu valentía", texto: "La fuerza con la que enfrentas tus propios retos y cómo sales adelante a pesar de las dificultades." },
  { titulo: "Cómo me inspiras a crecer", texto: "El impulso natural que me das para querer ser una mejor persona cada día, no por obligación, sino porque tú sacas lo mejor de mí." },
  { titulo: "Tu voz", texto: "Escucharte hablar, reír o simplemente decir mi nombre tiene un efecto inmediato que me tranquiliza y me alegra el corazón." },
  { titulo: "Los recuerdos que estamos creando", texto: "Cada foto, cada anécdota y cada momento guardado que se convierte en mi historia favorita." },
  { titulo: "La emoción por el futuro", texto: "Lo bonito que se siente imaginar todo lo que nos falta por vivir, conocer y construir juntos." },
  { titulo: "El amor tan sano que me das", texto: "Haber aprendido contigo que querer a alguien se siente ligero, bonito, seguro y lleno de respeto." },
];

/* =========================================================
   FUNCIONAMIENTO (no hace falta tocar de aquí para abajo)
   ========================================================= */

const vistas = document.querySelectorAll(".vista");
const VISTAS_VALIDAS = ["inicio", "elegir", "resumen", "lista"];

function mostrarVista(nombre) {
  if (!VISTAS_VALIDAS.includes(nombre)) nombre = "inicio";
  vistas.forEach((v) => v.classList.toggle("activa", v.dataset.vista === nombre));
  window.scrollTo({ top: 0 });
  if (nombre === "lista") cargarMas();
}

function irA(nombre) {
  // Cambiar el hash permite usar el botón "atrás" del celular o navegador
  location.hash = nombre === "inicio" ? "" : nombre;
}

document.querySelectorAll("[data-ir]").forEach((btn) => {
  btn.addEventListener("click", () => irA(btn.dataset.ir));
});

window.addEventListener("hashchange", () => {
  mostrarVista(location.hash.replace("#", ""));
});

/* ---------- Textos ---------- */
document.getElementById("para").textContent = CONFIG.para;
document.getElementById("firma").textContent = CONFIG.firma;

const listaResumen = document.getElementById("resumen-lista");
RESUMEN.forEach((texto) => {
  const p = document.createElement("p");
  p.textContent = texto;
  listaResumen.appendChild(p);
});

/* ---------- Lista interminable ---------- */
const listaRazones = document.getElementById("razones-lista");
const contador = document.getElementById("contador");
const centinela = document.getElementById("centinela");
const TAMANO_LOTE = 12;
let total = 0;

function cargarMas() {
  if (!RAZONES.length) return;
  const fragmento = document.createDocumentFragment();
  for (let i = 0; i < TAMANO_LOTE; i++) {
    const li = document.createElement("li");
    const razon = RAZONES[total % RAZONES.length];
    const titulo = document.createElement("strong");
    titulo.className = "razon-titulo";
    titulo.textContent = razon.titulo;
    const texto = document.createElement("span");
    texto.className = "razon-texto";
    texto.textContent = razon.texto;
    const caja = document.createElement("div");
    caja.append(titulo, texto);
    li.appendChild(caja);
    fragmento.appendChild(li);
    total++;
  }
  listaRazones.appendChild(fragmento);
  contador.textContent = total + (total === 1 ? " razón" : " razones");
}

if ("IntersectionObserver" in window) {
  new IntersectionObserver(
    (entradas) => {
      if (entradas[0].isIntersecting) cargarMas();
    },
    { rootMargin: "400px" }
  ).observe(centinela);
}

/* ---------- Corazones flotando de fondo ---------- */
const contenedorCorazones = document.getElementById("corazones");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  for (let i = 0; i < 14; i++) {
    const c = document.createElement("span");
    c.textContent = "♥";
    c.style.left = Math.random() * 100 + "%";
    c.style.fontSize = 0.8 + Math.random() * 1.4 + "rem";
    c.style.animationDuration = 12 + Math.random() * 14 + "s";
    c.style.animationDelay = -Math.random() * 20 + "s";
    contenedorCorazones.appendChild(c);
  }
}

/* ---------- Arranque ---------- */
mostrarVista(location.hash.replace("#", ""));
