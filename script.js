// ── STARFIELD ──
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < 280; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4,
      alpha: Math.random(),
      speed: Math.random() * 0.004 + 0.001,
      phase: Math.random() * Math.PI * 2
    });
  }
}

function drawStars(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    const a = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed + s.phase));
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${a})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

resizeCanvas();
createStars();
requestAnimationFrame(drawStars);
window.addEventListener('resize', () => { resizeCanvas(); createStars(); });

// ── PLANET DATA ──
const planets = {
  sol: {
    name: "SOL",
    emoji: "☀️",
    color: "#ffd740",
    desc: "Nuestra estrella. Una enorme esfera de plasma ardiente que constituye el 99.8% de toda la masa del sistema solar.",
    stats: {
      "Diámetro": "1,392,700 km",
      "Temperatura": "5,500 °C",
      "Edad": "4,600 M años",
      "Tipo": "Enana Amarilla"
    },
    fun: "Cada segundo, el Sol convierte 600 millones de toneladas de hidrógeno en helio mediante fusión nuclear.",
    size: 90,
    bg: "radial-gradient(circle at 35% 35%, #fff8e1 0%, #ffd740 40%, #ff8f00 80%, #e65100 100%)",
    shadow: "#ffd74088"
  },
  mercurio: {
    name: "MERCURIO",
    emoji: "🪨",
    color: "#c2b5a0",
    desc: "El planeta más pequeño y el más cercano al Sol. No tiene atmósfera, lo que provoca temperaturas extremas entre el día y la noche.",
    stats: {
      "Diámetro": "4,879 km",
      "Año": "88 días",
      "Temperatura": "-180 a 430°C",
      "Lunas": "0"
    },
    fun: "A pesar de ser el planeta más cercano al Sol, no es el más caliente — ese récord lo tiene Venus.",
    size: 50,
    bg: "radial-gradient(circle at 35% 35%, #c2b5a0, #6b5e52)",
    shadow: "#c2b5a044"
  },
  venus: {
    name: "VENUS",
    emoji: "🌋",
    color: "#f5c842",
    desc: "El planeta más caliente del sistema solar por su densa atmósfera de CO₂ que atrapa el calor. Gira al revés comparado con la mayoría.",
    stats: {
      "Diámetro": "12,104 km",
      "Año": "225 días",
      "Temperatura": "465 °C",
      "Lunas": "0"
    },
    fun: "Un día en Venus dura más que un año completo en Venus — rota tan lento que da una vuelta al Sol antes de girar sobre sí mismo.",
    size: 72,
    bg: "radial-gradient(circle at 35% 35%, #f5e6a0, #c8960a, #9a6800)",
    shadow: "#f5c84255"
  },
  tierra: {
    name: "TIERRA",
    emoji: "🌍",
    color: "#4488ff",
    desc: "Nuestro hogar. El único planeta conocido con vida, agua líquida en la superficie y una atmósfera que protege a sus habitantes.",
    stats: {
      "Diámetro": "12,742 km",
      "Año": "365 días",
      "Temperatura": "-88 a 58°C",
      "Lunas": "1"
    },
    fun: "La Tierra tiene más de 4,500 millones de años, pero los humanos llevamos solo 300,000 años — un 0.007% del tiempo total.",
    size: 72,
    bg: "radial-gradient(circle at 35% 35%, #88ccff, #1a5fb4, #2d8a3e)",
    shadow: "#4488ff55"
  },
  marte: {
    name: "MARTE",
    emoji: "🔴",
    color: "#e8724a",
    desc: "El Planeta Rojo. Tiene el volcán más alto del sistema solar y una atmósfera muy delgada. Es el principal candidato para la colonización humana.",
    stats: {
      "Diámetro": "6,779 km",
      "Año": "687 días",
      "Temperatura": "-125 a 20°C",
      "Lunas": "2"
    },
    fun: "El Monte Olimpo en Marte es el volcán más alto del sistema solar con 22 km de altura — casi 3 veces el Everest.",
    size: 58,
    bg: "radial-gradient(circle at 35% 35%, #e8724a, #c04020, #9e2a0a)",
    shadow: "#e8724a55"
  },
  jupiter: {
    name: "JÚPITER",
    emoji: "🌀",
    color: "#f0c860",
    desc: "El gigante del sistema solar. Su masa es mayor que todos los demás planetas juntos. La Gran Mancha Roja es una tormenta que lleva siglos activa.",
    stats: {
      "Diámetro": "139,820 km",
      "Año": "12 años",
      "Temperatura": "-110 °C",
      "Lunas": "95"
    },
    fun: "La Gran Mancha Roja de Júpiter es una tormenta tan grande que dentro cabrían 3 planetas Tierra.",
    size: 100,
    bg: "radial-gradient(circle at 35% 35%, #f0d080, #c8844a, #8b5a2b)",
    shadow: "#f0c86055"
  },
  saturno: {
    name: "SATURNO",
    emoji: "💍",
    color: "#f5e096",
    desc: "El señor de los anillos. Sus famosos anillos están hechos de hielo y roca. Es tan poco denso que podría flotar en el agua.",
    stats: {
      "Diámetro": "116,460 km",
      "Año": "29 años",
      "Temperatura": "-140 °C",
      "Lunas": "146"
    },
    fun: "Saturno es el planeta menos denso del sistema solar — si existiera un océano suficientemente grande, ¡flotaría en él!",
    size: 90,
    bg: "radial-gradient(circle at 35% 35%, #f5e8b0, #c8a44a, #8b7030)",
    shadow: "#f5e09655"
  },
  urano: {
    name: "URANO",
    emoji: "🧊",
    color: "#4aacb8",
    desc: "El gigante de hielo que gira de lado. Su eje de rotación está inclinado casi 98°, lo que hace que sus polos reciban más sol que su ecuador.",
    stats: {
      "Diámetro": "50,724 km",
      "Año": "84 años",
      "Temperatura": "-195 °C",
      "Lunas": "28"
    },
    fun: "Urano gira de lado — probablemente por el impacto de un objeto enorme hace miles de millones de años.",
    size: 76,
    bg: "radial-gradient(circle at 35% 35%, #c0f0f8, #4aacb8, #226a72)",
    shadow: "#4aacb855"
  },
  neptuno: {
    name: "NEPTUNO",
    emoji: "🌊",
    color: "#4060e0",
    desc: "El planeta más lejano y ventoso. Sus vientos superan los 2,100 km/h. Tardó 165 años en completar su primera órbita desde su descubrimiento.",
    stats: {
      "Diámetro": "49,244 km",
      "Año": "165 años",
      "Temperatura": "-200 °C",
      "Lunas": "16"
    },
    fun: "Los vientos de Neptuno son los más rápidos del sistema solar — alcanzan 2,100 km/h, más rápido que el sonido en la Tierra.",
    size: 72,
    bg: "radial-gradient(circle at 35% 35%, #8090f8, #4060e0, #1a2ea0)",
    shadow: "#4060e055"
  }
};

// ── PANEL ──
function openPanel(key) {
  const p = planets[key];
  if (!p) return;

  // Big planet display
  const wrap = document.getElementById('panelPlanetWrap');
  wrap.innerHTML = '';
  if (key === 'saturno') {
    wrap.innerHTML = `
      <div style="position:relative;display:flex;align-items:center;justify-content:center;width:${p.size+40}px;height:${p.size+40}px">
        <div style="position:absolute;width:${p.size+40}px;height:${(p.size+40)*0.35}px;border:4px solid rgba(200,170,80,0.5);border-radius:50%;transform:rotateX(72deg);z-index:1"></div>
        <div class="display-planet" style="width:${p.size}px;height:${p.size}px;background:${p.bg};box-shadow:0 0 40px ${p.shadow};z-index:2"></div>
      </div>`;
  } else {
    wrap.innerHTML = `<div class="display-planet" style="width:${p.size}px;height:${p.size}px;background:${p.bg};box-shadow:0 0 40px ${p.shadow}"></div>`;
  }

  document.getElementById('panelEmoji').textContent = p.emoji;
  document.getElementById('panelName').textContent = p.name;
  document.getElementById('panelDesc').textContent = p.desc;
  document.getElementById('panelFun').textContent = p.fun;

  // Stats
  const statsEl = document.getElementById('panelStats');
  statsEl.innerHTML = Object.entries(p.stats).map(([label, val]) => `
    <div class="stat-box">
      <div class="stat-label">${label}</div>
      <div class="stat-value" style="color:${p.color}">${val}</div>
    </div>
  `).join('');

  // Border accent
  document.getElementById('panel').style.borderColor = `${p.color}33`;

  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePanel() {
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function closeOnOverlay(e) {
  if (e.target === document.getElementById('overlay')) closePanel();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePanel();
});
