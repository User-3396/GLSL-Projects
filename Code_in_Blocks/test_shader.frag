precision mediump float;
uniform float uTime;
uniform vec2 uResolution;

void main (){
    vec2 uv =gl_FragCoord.xy;

    float cube =max(max(uv.x, uv.y), 1.0);
    vec3 col =vec3(0.5,0.0,cube);

    gl_FragColor =vec4(col,1.0);
}