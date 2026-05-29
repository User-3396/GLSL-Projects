const svg = document.getElementById('mapSvg');
const viewport = document.getElementById('viewport');

let zoom = 1;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let startX, startY;

// Função que aplica as transformações visuais no grupo principal
function updateTransform() {
    viewport.setAttribute('transform', `translate(${offsetX}, ${offsetY}) scale(${zoom})`);
}

// --- Eventos de Mover (Pan) ---
svg.addEventListener('mousedown', (e) => {
    // Evita arrastar o mapa se clicar diretamente em um componente interno
    if (e.target !== svg && e.target.transform === undefined) return; 

    isDragging = true;
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
});

svg.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    offsetX = e.clientX - startX;
    offsetY = e.clientY - startY;
    updateTransform();
});

window.addEventListener('mouseup', () => isDragging = false);

// --- Evento de Zoom (Scroll) ---
svg.addEventListener('wheel', (e) => {
    e.preventDefault();

    const zoomIntensity = 0.1;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calcula coordenadas do mundo antes do zoom
    const worldX = (mouseX - offsetX) / zoom;
    const worldY = (mouseY - offsetY) / zoom;

    // Ajusta o nível de aproximação
    if (e.deltaY < 0) {
        zoom += zoomIntensity;
    } else {
        zoom -= zoomIntensity;
    }

    // Limites de zoom
    zoom = Math.min(Math.max(0.3, zoom), 4);

    // Recalcula a posição para o zoom focar no mouse
    offsetX = mouseX - worldX * zoom;
    offsetY = mouseY - worldY * zoom;

    updateTransform();
});
