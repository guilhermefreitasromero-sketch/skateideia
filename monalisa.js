// Canvas e contexto
const canvas = document.getElementById('monalisaCanvas');
const ctx = canvas.getContext('2d');

// Variáveis para rastrear posição do mouse
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Cores originais da Monalisa
const cores = {
    pele: '#d4a574',
    peloMais: '#c98a4f',
    sombraPele: '#a67c52',
    olho: '#5c3d2e',
    brancoDosOlhos: '#f5f5dc',
    sobrancelha: '#8b6f47',
    cabelo: '#6b5344',
    fundo: '#9ba891',
    roupa: '#6b4423',
    roupaMais: '#4a2e1a'
};

// Rastrear posição do mouse
document.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

// Rastrear toque para dispositivos móveis
canvas.addEventListener('touchmove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.touches[0].clientX - rect.left;
    mouseY = e.touches[0].clientY - rect.top;
});

// Função para desenhar a Monalisa
function desenharMonalisa() {
    // Limpar canvas
    ctx.fillStyle = cores.fundo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar fundo suavizado
    const gradienteFundo = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradienteFundo.addColorStop(0, '#a8b896');
    gradienteFundo.addColorStop(1, '#8ba789');
    ctx.fillStyle = gradienteFundo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ===== CORPO E ROUPA =====
    ctx.fillStyle = cores.roupaMais;
    ctx.beginPath();
    ctx.ellipse(250, 480, 120, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = cores.roupa;
    ctx.beginPath();
    ctx.ellipse(250, 470, 110, 70, 0, 0, Math.PI * 2);
    ctx.fill();

    // Detalhe da roupa (sombra)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.beginPath();
    ctx.ellipse(210, 480, 50, 60, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // ===== PESCOÇO =====
    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.moveTo(220, 420);
    ctx.lineTo(280, 420);
    ctx.lineTo(270, 460);
    ctx.lineTo(230, 460);
    ctx.closePath();
    ctx.fill();

    // ===== CABEÇA (base) =====
    ctx.fillStyle = cores.peloMais;
    ctx.beginPath();
    ctx.ellipse(250, 280, 95, 120, 0, 0, Math.PI * 2);
    ctx.fill();

    // Adicionar sombra na cabeça
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.beginPath();
    ctx.ellipse(210, 300, 50, 100, -0.2, 0, Math.PI * 2);
    ctx.fill();

    // ===== CABELO =====
    ctx.fillStyle = cores.cabelo;
    
    // Cabelo topo
    ctx.beginPath();
    ctx.arc(250, 170, 85, Math.PI, 0, false);
    ctx.lineTo(335, 280);
    ctx.lineTo(165, 280);
    ctx.closePath();
    ctx.fill();

    // Cabelo esquerda
    ctx.beginPath();
    ctx.arc(160, 280, 40, 0, Math.PI * 2);
    ctx.fill();

    // Cabelo direita
    ctx.beginPath();
    ctx.arc(340, 280, 40, 0, Math.PI * 2);
    ctx.fill();

    // Cabelo atrás (lateral)
    ctx.fillStyle = cores.peloMais;
    ctx.beginPath();
    ctx.ellipse(155, 300, 25, 60, 0.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(345, 300, 25, 60, -0.5, 0, Math.PI * 2);
    ctx.fill();

    // ===== ROSTO =====
    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.ellipse(250, 290, 90, 110, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sombreado do rosto (pele mais escura)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.beginPath();
    ctx.ellipse(210, 320, 60, 80, -0.15, 0, Math.PI * 2);
    ctx.fill();

    // ===== ORELHAS =====
    ctx.fillStyle = cores.pele;
    
    // Orelha esquerda
    ctx.beginPath();
    ctx.ellipse(155, 280, 20, 35, 0, 0, Math.PI * 2);
    ctx.fill();

    // Orelha direita
    ctx.beginPath();
    ctx.ellipse(345, 280, 20, 35, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sombra das orelhas
    ctx.fillStyle = cores.sombraPele;
    ctx.beginPath();
    ctx.ellipse(155, 280, 10, 30, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(345, 280, 10, 30, 0, 0, Math.PI * 2);
    ctx.fill();

    // ===== OLHOS (INTERATIVOS) =====
    desenharOlho(210, 250, mouseX, mouseY); // Olho esquerdo
    desenharOlho(290, 250, mouseX, mouseY); // Olho direito

    // ===== SOBRANCELHAS =====
    ctx.strokeStyle = cores.sobrancelha;
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';

    // Sobrancelha esquerda
    ctx.beginPath();
    ctx.arc(210, 230, 25, 0.3, Math.PI * 0.7, false);
    ctx.stroke();

    // Sobrancelha direita
    ctx.beginPath();
    ctx.arc(290, 230, 25, Math.PI * 0.3, Math.PI * 0.7, false);
    ctx.stroke();

    // ===== NARIZ =====
    ctx.strokeStyle = cores.sombraPele;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    // Linha central do nariz
    ctx.beginPath();
    ctx.moveTo(250, 260);
    ctx.lineTo(250, 310);
    ctx.stroke();

    // Asa do nariz esquerda
    ctx.beginPath();
    ctx.moveTo(250, 305);
    ctx.quadraticCurveTo(240, 315, 230, 310);
    ctx.stroke();

    // Asa do nariz direita
    ctx.beginPath();
    ctx.moveTo(250, 305);
    ctx.quadraticCurveTo(260, 315, 270, 310);
    ctx.stroke();

    // ===== BOCA (Sorriso característico) =====
    ctx.strokeStyle = '#a67c52';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Linha superior da boca
    ctx.beginPath();
    ctx.moveTo(230, 360);
    ctx.quadraticCurveTo(250, 375, 270, 360);
    ctx.stroke();

    // Linha inferior da boca (sorriso)
    ctx.beginPath();
    ctx.moveTo(230, 360);
    ctx.quadraticCurveTo(250, 372, 270, 360);
    ctx.stroke();

    // Preenchimento do sorriso
    ctx.fillStyle = '#c9957a';
    ctx.beginPath();
    ctx.moveTo(230, 360);
    ctx.quadraticCurveTo(250, 372, 270, 360);
    ctx.quadraticCurveTo(250, 365, 230, 360);
    ctx.fill();

    // ===== DETALHE FINAL: Destaque nas maçãs do rosto =====
    ctx.fillStyle = 'rgba(255, 200, 180, 0.3)';
    ctx.beginPath();
    ctx.ellipse(190, 310, 30, 20, 0.2, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(310, 310, 30, 20, -0.2, 0, Math.PI * 2);
    ctx.fill();
}

// Função para desenhar olhos interativos
function desenharOlho(olhoX, olhoY, mouseX, mouseY) {
    const raioExterior = 18;
    const raioIris = 10;
    const raioPupila = 5;

    // Desenhar branco do olho
    ctx.fillStyle = cores.brancoDosOlhos;
    ctx.beginPath();
    ctx.arc(olhoX, olhoY, raioExterior, 0, Math.PI * 2);
    ctx.fill();

    // Contorno do olho
    ctx.strokeStyle = cores.olho;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(olhoX, olhoY, raioExterior, 0, Math.PI * 2);
    ctx.stroke();

    // Calcular ângulo e distância para a pupila seguir o mouse
    const dx = mouseX - olhoX;
    const dy = mouseY - olhoY;
    const distancia = Math.sqrt(dx * dx + dy * dy);
    const angulo = Math.atan2(dy, dx);

    // Limitar a distância que a pupila pode mover
    const distanciaMaxima = raioExterior - raioPupila - 2;
    const pupilaX = olhoX + Math.cos(angulo) * Math.min(distancia / 100, distanciaMaxima);
    const pupilaY = olhoY + Math.sin(angulo) * Math.min(distancia / 100, distanciaMaxima);

    // Desenhar íris
    ctx.fillStyle = cores.olho;
    ctx.beginPath();
    ctx.arc(pupilaX, pupilaY, raioIris, 0, Math.PI * 2);
    ctx.fill();

    // Desenhar pupila
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(pupilaX, pupilaY, raioPupila, 0, Math.PI * 2);
    ctx.fill();

    // Adicionar brilho no olho
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(pupilaX - 2, pupilaY - 2, 2, 0, Math.PI * 2);
    ctx.fill();
}

// Loop de animação
function animar() {
    desenharMonalisa();
    requestAnimationFrame(animar);
}

// Iniciar animação
animar();

// Desenhar inicial quando a página carrega
window.addEventListener('load', () => {
    desenharMonalisa();
});