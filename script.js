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

// Función genérica para dibujar banderas
function drawFlag(canvas, width, flagData) {
    const { gl, program } = setupGL(canvas);
    const height = width * 0.625;
    const x = (canvas.width - width) / 2;
    const y = (canvas.height - height) / 2;

    const { positions, colors } = flagData(x, y, width, height);

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
    gl.drawArrays(gl.TRIANGLES, 0, positions.length / 2);
    
    return { x, y, width, height };
}

// Definiciones de banderas (solo geometría y colores)
const flags = {
    peru: (x, y, w, h) => {
        const w3 = w / 3;
        return {
            positions: [
                x,y, x+w3,y, x,y+h, x+w3,y, x+w3,y+h, x,y+h,
                x+w3,y, x+w3*2,y, x+w3,y+h, x+w3*2,y, x+w3*2,y+h, x+w3,y+h,
                x+w3*2,y, x+w,y, x+w3*2,y+h, x+w,y, x+w,y+h, x+w3*2,y+h
            ],
            colors: new Array(18).fill(0).map((_, i) => 
                Math.floor(i/6) === 1 ? [1,1,1] : [0.8,0,0]
            ).flat()
        };
    },
    
    northKorea: (x, y, w, h) => {
        const h5 = h / 5;
        return {
            positions: [
                // Franjas azules (superior e inferior)
                x,y, x+w,y, x,y+h5, x+w,y, x+w,y+h5, x,y+h5,
                x,y+h5*4, x+w,y+h5*4, x,y+h, x+w,y+h5*4, x+w,y+h, x,y+h,
                // Franjas blancas
                x,y+h5, x+w,y+h5, x,y+h5*1.2, x+w,y+h5, x+w,y+h5*1.2, x,y+h5*1.2,
                x,y+h5*3.8, x+w,y+h5*3.8, x,y+h5*4, x+w,y+h5*3.8, x+w,y+h5*4, x,y+h5*4,
                // Franja roja central
                x,y+h5*1.2, x+w,y+h5*1.2, x,y+h5*3.8, x+w,y+h5*1.2, x+w,y+h5*3.8, x,y+h5*3.8
            ],
            colors: [
                ...new Array(12).fill([0.17,0.38,0.71]).flat(),  // Azul
                ...new Array(12).fill([1,1,1]).flat(),            // Blanco
                ...new Array(6).fill([0.93,0.16,0.22]).flat()     // Rojo
            ]
        };
    },

    turkey: (x, y, w, h) => {
        // Fondo rojo
        const positions = [x,y, x+w,y, x,y+h, x+w,y, x+w,y+h, x,y+h];
        const colors = new Array(6).fill([0.89,0.15,0.21]).flat();
        // TODO: Añadir luna y estrella con círculos
        return { positions, colors };
    }
};

// Inicializar banderas en galería
drawFlag(document.getElementById('peruFlag'), 320, flags.peru);
drawFlag(document.getElementById('NorthKoreaFlag'), 320, flags.northKorea);
drawFlag(document.getElementById('turkeyFlag'), 320, flags.turkey);
drawFlag(document.getElementById('saintKittsFlag'), 320, flags.saintKitts);
drawFlag(document.getElementById('malaysiaFlag'), 320, flags.malaysia);
drawFlag(document.getElementById('mongoliaFlag'), 320, flags.mongolia);
drawFlag(document.getElementById('marshallIslandsFlag'), 320, flags.marshallIslands);
drawFlag(document.getElementById('algeriaFlag'), 320, flags.algeria);
drawFlag(document.getElementById('southAfricaFlag'), 320, flags.southAfrica);
drawFlag(document.getElementById('spainFlag'), 320, flags.spain);
drawFlag(document.getElementById('nauruFlag'), 320, flags.nauru);
drawFlag(document.getElementById('hondurasFlag'), 320, flags.honduras);

// Nombres de banderas para fullscreen
const flagNames = {
    peru: 'Bandera de Perú',
    northKorea: 'Bandera de Corea del Norte',
    turkey: 'Bandera de Turquía',
    saintKitts: 'Bandera de San Cristóbal y Nieves',
    malaysia: 'Bandera de Malasia',
    mongolia: 'Bandera de Mongolia',
    marshallIslands: 'Bandera de Islas Marshall',
    algeria: 'Bandera de Argelia',
    southAfrica: 'Bandera de Sudáfrica',
    spain: 'Bandera de España',
    nauru: 'Bandera de Nauru',
    honduras: 'Bandera de Honduras'
    //Primeras 11
};

// Variables de fullscreen
let canvas, isResizing = false, flagWidth = 560, startX, startY, startWidth, currentFlag;

function showFullscreen(country) {
    currentFlag = country;
    canvas = document.getElementById('fullscreenCanvas');
    document.getElementById('fullscreenView').style.display = 'flex';
    document.getElementById('fullscreenTitle').textContent = flagNames[country] || 'Bandera';
    
    if (flags[country]) {
        drawFlag(canvas, flagWidth, flags[country]);
    }
    
    canvas.onmousemove = (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left, my = e.clientY - rect.top;
        
        if (isResizing) {
            // Calcular nuevo ancho basado en la distancia desde el punto inicial
            const dx = mx - startX;
            flagWidth = Math.max(200, Math.min(700, startWidth + dx * 2));
            drawFlag(canvas, flagWidth, flags[currentFlag]);
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