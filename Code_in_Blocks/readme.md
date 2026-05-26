## Vertex Shader

```html
<script id="vertexShader" type="x-shader/x-vertex">
```

- Altera a malha do objeto e calcula atributos que serão passados para o Fragment Shader

- 

```cpp
attribute vec4 position; 

void main(void) {

    gl_Position = position; // Posição final do vértice
}
```

## Fragment Shader (ou Pixel Shader)

```html
<script id="shader-fs" type="x-shader/x-fragment">
```

- O _Fragment Shader_ executa para cada pixel individual coberto por um objeto na tela. 

- Ele é responsável por pintar, iluminar e texturizar a superfície. 

```cpp

void main (){
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
} 
```

## Estrutura Básica do GLSL (Sintaxe)

A linguagem GLSL é fortemente baseada em __C/C++__, operando em tempo de compilação

### Vetores: 

- `vec2` `vec3` `vec4` 

### Matrizes: 

- `mat3` `mat4` 

### Modificadores (Qualificadores):

- `uniform`: Variáveis globais que __não mudam durante a renderização__ (ex: tempo, resolução, cor base).

- `in`: Dados de entrada (passados do Vertex Shader para o Fragment Shader).

- `out`: Dados de saída. 

## Raymarching: 

Técnica que dispensa malhas geométricas tradicionais, usando fórmulas matemáticas (distâncias assinadas - SDFs) para renderizar formas 3D complexas direto no Fragment Shader.



### Referencias

https://www.youtube.com/watch?v=04fUhE9gmA8

