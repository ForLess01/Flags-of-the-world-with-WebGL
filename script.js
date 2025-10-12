        // Shaders simplificados
const vertexShader = `
    attribute vec2 a_position;
    attribute vec3 a_color;
    varying vec3 v_color;
    uniform vec2 u_resolution;
    void main() {
        vec2 clipSpace = (a_position / u_resolution * 2.0 - 1.0) * vec2(1, -1);
        gl_Position = vec4(clipSpace, 0, 1);
        v_color = a_color;
    }
`;

const fragmentShader = `
    precision mediump float;
    varying vec3 v_color;
    void main() { gl_FragColor = vec4(v_color, 1.0); }
`;

// Setup WebGL simplificado
function setupGL(canvas) {
    const gl = canvas.getContext('webgl');
    const program = gl.createProgram();
    [vertexShader, fragmentShader].forEach((src, i) => {
        const shader = gl.createShader(i ? gl.FRAGMENT_SHADER : gl.VERTEX_SHADER);
        gl.shaderSource(shader, src);
        gl.compileShader(shader);
        gl.attachShader(program, shader);
    });
    gl.linkProgram(program);
    return { gl, program };
}

// Dibujar bandera de Perú
function drawFlag(canvas, width) {
    const { gl, program } = setupGL(canvas);
    const height = width * 0.625; // Relación de aspecto
    const x = (canvas.width - width) / 2;
    const y = (canvas.height - height) / 2;
    const w3 = width / 3;

    // Vértices: 3 rectángulos (rojo, blanco, rojo)
    const positions = [
        x,y, x+w3,y, x,y+height, x+w3,y, x+w3,y+height, x,y+height,
        x+w3,y, x+w3*2,y, x+w3,y+height, x+w3*2,y, x+w3*2,y+height, x+w3,y+height,
        x+w3*2,y, x+width,y, x+w3*2,y+height, x+width,y, x+width,y+height, x+w3*2,y+height
    ];

    const colors = new Array(18).fill(0).map((_, i) => 
        Math.floor(i/6) === 1 ? [1,1,1] : [0.8,0,0]
    ).flat();

    gl.useProgram(program);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    ['a_position', 'a_color'].forEach((attr, i) => {
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(i ? colors : positions), gl.STATIC_DRAW);
        const loc = gl.getAttribLocation(program, attr);
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, i ? 3 : 2, gl.FLOAT, false, 0, 0);
    });

    gl.uniform2f(gl.getUniformLocation(program, 'u_resolution'), canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 18);
    
    return { x, y, width, height }; // Retornar dimensiones para control de esquina
}

// Inicializar bandera en galería
drawFlag(document.getElementById('peruFlag'), 320);

// Variables de fullscreen
let canvas, isResizing = false, flagWidth = 560, startX, startY, startWidth;

function showFullscreen(country) {
    canvas = document.getElementById('fullscreenCanvas');
    document.getElementById('fullscreenView').style.display = 'flex';
    document.getElementById('fullscreenTitle').textContent = 'Bandera de Perú';
    drawFlag(canvas, flagWidth);
    
    canvas.onmousemove = (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left, my = e.clientY - rect.top;
        
        if (isResizing) {
            // Calcular nuevo ancho basado en la distancia desde el punto inicial
            const dx = mx - startX;
            flagWidth = Math.max(200, Math.min(700, startWidth + dx * 2));
            drawFlag(canvas, flagWidth);
        } else {
            // Solo verificar esquina cuando NO se está redimensionando
            const flag = { 
                x: (canvas.width - flagWidth) / 2,
                y: (canvas.height - flagWidth * 0.625) / 2,
                width: flagWidth,
                height: flagWidth * 0.625
            };
            const corner = { x: flag.x + flag.width, y: flag.y + flag.height };
            canvas.style.cursor = (Math.abs(mx - corner.x) < 20 && Math.abs(my - corner.y) < 20) 
                ? 'nwse-resize' : 'default';
        }
    };
    
    canvas.onmousedown = (e) => {
        if (canvas.style.cursor === 'nwse-resize') {
            isResizing = true;
            const rect = canvas.getBoundingClientRect();
            startX = e.clientX - rect.left;
            startY = e.clientY - rect.top;
            startWidth = flagWidth;
        }
    };
    
    canvas.onmouseup = () => isResizing = false;
    document.onmouseup = () => isResizing = false; // Por si sueltas fuera del canvas
}

function closeFullscreen() {
    document.getElementById('fullscreenView').style.display = 'none';
    canvas.onmousemove = canvas.onmousedown = canvas.onmouseup = null;
    document.onmouseup = null;
}

document.onkeydown = (e) => e.key === 'Escape' && closeFullscreen();