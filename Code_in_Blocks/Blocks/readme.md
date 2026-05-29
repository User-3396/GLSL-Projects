### SVG (Scalable Vector Graphics)

`<svg>`: A tag principal que delimita a área de desenho. Ela define o "espaço de trabalho".

`<g>`: Abreviação de Group (Grupo). Agrupa vários elementos para que eles funcionem como um só. No exemplo do mapa, usamos o `<g id="viewport">` para mover e dar zoom em todo o circuito de uma só vez.

`<defs>`: Abreviação de Definitions (Definições). Guarda elementos que não aparecem diretamente na tela, mas que serão reutilizados depois, como gradientes, padrões de grade ou filtros.

## Path

`<path>`: A tag mais poderosa do SVG. Ela permite desenhar qualquer forma imaginável ligando pontos por retas ou curvas (Curvas de Bézier). 
É a tag usada para fazer os fios (wires) que conectam os componentes.
Atributo principal: `d` (dados do caminho). Ele usa comandos como `M` (mover para), `L` (linha até), e `H`/`V` (linhas horizontais/verticais rápidas).

## Exemplo Visual de Sintaxe

Veja como essas tags conversam entre si na prática:

```html
<svg width="200" height="200">
<!-- Um quadrado com cantos arredondados (Chip) -->
<rect x="20" y="20" width="100" height="100" rx="10" fill="#333" stroke="#555" stroke-width="3" />

<!-- Um pino de conexão (Círculo) -->
<circle cx="20" cy="70" r="8" fill="#ffcc00" />

<!-- Um fio que sai do pino (Caminho) -->
<!-- M 20 70 (Começa no centro do círculo) L 0 70 (Desenha linha para a esquerda) -->
<path d="M 20 70 L 0 70" stroke="#ffcc00" stroke-width="4" fill="none" />

<!-- Texto identificador -->
<text x="70" y="75" fill="white" font-family="sans-serif" text-anchor="middle">IC 1</text>
</svg>
```