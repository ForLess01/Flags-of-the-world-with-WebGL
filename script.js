const CANVAS_CONFIG = {
    gallery: { width: 380, height: 250, flagWidth: 320 },
    fullscreen: { width: 1600, height: 1000, flagWidth: 1200 }
};

// Lista de Bandera A Z
const FLAGS_CONFIG = [
    // A
    { key: 'afghanistan', name: 'Afganistán', emoji: '🇦🇫' },
    { key: 'albania', name: 'Albania', emoji: '🇦🇱' },
    { key: 'germany', name: 'Alemania', emoji: '🇩🇪' },
    { key: 'andorra', name: 'Andorra', emoji: '🇦🇩' },
    { key: 'angola', name: 'Angola', emoji: '🇦🇴' },
    { key: 'antiguaAndBarbuda', name: 'Antigua y Barbuda', emoji: '🇦🇬' },
    { key: 'saudiArabia', name: 'Arabia Saudita', emoji: '🇸🇦' },
    { key: 'algeria', name: 'Argelia', emoji: '🇩🇿' },
    { key: 'argentina', name: 'Argentina', emoji: '🇦🇷' },
    { key: 'armenia', name: 'Armenia', emoji: '🇦🇲' },
    { key: 'australia', name: 'Australia', emoji: '🇦🇺' },
    { key: 'austria', name: 'Austria', emoji: '🇦🇹' },
    { key: 'azerbaijan', name: 'Azerbaiyán', emoji: '🇦🇿' },
    
    // B
    { key: 'bahamas', name: 'Bahamas', emoji: '🇧🇸' },
    { key: 'bangladesh', name: 'Bangladés', emoji: '🇧🇩' },
    { key: 'barbados', name: 'Barbados', emoji: '🇧🇧' },
    { key: 'bahrain', name: 'Baréin', emoji: '🇧🇭' },
    { key: 'belgium', name: 'Bélgica', emoji: '🇧🇪' },
    { key: 'belize', name: 'Belice', emoji: '🇧🇿' },
    { key: 'benin', name: 'Benín', emoji: '🇧🇯' },
    { key: 'belarus', name: 'Bielorrusia', emoji: '🇧🇾' },
    { key: 'myanmar', name: 'Birmania (Myanmar)', emoji: '🇲🇲' },
    { key: 'bolivia', name: 'Bolivia', emoji: '🇧🇴' },
    { key: 'bosniaAndHerzegovina', name: 'Bosnia y Herzegovina', emoji: '🇧🇦' },
    { key: 'botswana', name: 'Botsuana', emoji: '🇧🇼' },
    { key: 'brazil', name: 'Brasil', emoji: '🇧🇷' },
    { key: 'brunei', name: 'Brunéi', emoji: '🇧🇳' },
    { key: 'bulgaria', name: 'Bulgaria', emoji: '🇧🇬' },
    { key: 'burkinaFaso', name: 'Burkina Faso', emoji: '🇧🇫' },
    { key: 'burundi', name: 'Burundi', emoji: '🇧🇮' },
    { key: 'bhutan', name: 'Bután', emoji: '🇧🇹' },
    
    // C
    { key: 'capeVerde', name: 'Cabo Verde', emoji: '🇨🇻' },
    { key: 'cambodia', name: 'Camboya', emoji: '🇰🇭' },
    { key: 'cameroon', name: 'Camerún', emoji: '🇨🇲' },
    { key: 'canada', name: 'Canadá', emoji: '🇨🇦' },
    { key: 'qatar', name: 'Catar', emoji: '🇶🇦' },
    { key: 'chad', name: 'Chad', emoji: '🇹🇩' },
    { key: 'czechia', name: 'Chequia (República Checa)', emoji: '🇨🇿' },
    { key: 'chile', name: 'Chile', emoji: '🇨🇱' },
    { key: 'china', name: 'China', emoji: '🇨🇳' },
    { key: 'cyprus', name: 'Chipre', emoji: '🇨🇾' },
    { key: 'colombia', name: 'Colombia', emoji: '🇨🇴' },
    { key: 'comoros', name: 'Comoras', emoji: '🇰🇲' },
    { key: 'congo', name: 'Congo', emoji: '🇨🇬' },
    { key: 'congoDRC', name: 'Congo, República Democrática del', emoji: '🇨🇩' },
    { key: 'northKorea', name: 'Corea del Norte', emoji: '🇰🇵' },
    { key: 'southKorea', name: 'Corea del Sur', emoji: '🇰🇷' },
    { key: 'ivoryCoast', name: 'Costa de Marfil', emoji: '🇨🇮' },
    { key: 'costaRica', name: 'Costa Rica', emoji: '🇨🇷' },
    { key: 'croatia', name: 'Croacia', emoji: '🇭🇷' },
    { key: 'cuba', name: 'Cuba', emoji: '🇨🇺' },
    
    // D
    { key: 'denmark', name: 'Dinamarca', emoji: '🇩🇰' },
    { key: 'dominica', name: 'Dominica', emoji: '🇩🇲' },
    { key: 'djibouti', name: 'Yibuti (Djibouti)', emoji: '🇩🇯' },
    
    // E
    { key: 'ecuador', name: 'Ecuador', emoji: '🇪🇨' },
    { key: 'egypt', name: 'Egipto', emoji: '🇪🇬' },
    { key: 'elSalvador', name: 'El Salvador', emoji: '🇸🇻' },
    { key: 'uae', name: 'Emiratos Árabes Unidos', emoji: '🇦🇪' },
    { key: 'eritrea', name: 'Eritrea', emoji: '🇪🇷' },
    { key: 'slovakia', name: 'Eslovaquia', emoji: '🇸🇰' },
    { key: 'slovenia', name: 'Eslovenia', emoji: '🇸🇮' },
    { key: 'spain', name: 'España', emoji: '🇪🇸' },
    { key: 'usa', name: 'Estados Unidos', emoji: '🇺🇸' },
    { key: 'estonia', name: 'Estonia', emoji: '🇪🇪' },
    { key: 'ethiopia', name: 'Etiopía', emoji: '🇪🇹' },
    
    // F
    { key: 'philippines', name: 'Filipinas', emoji: '🇵🇭' },
    { key: 'finland', name: 'Finlandia', emoji: '🇫🇮' },
    { key: 'fiji', name: 'Fiyi', emoji: '🇫🇯' },
    { key: 'france', name: 'Francia', emoji: '🇫🇷' },
    
    // G
    { key: 'gabon', name: 'Gabón', emoji: '🇬🇦' },
    { key: 'gambia', name: 'Gambia', emoji: '🇬🇲' },
    { key: 'georgia', name: 'Georgia', emoji: '🇬🇪' },
    { key: 'ghana', name: 'Ghana', emoji: '🇬🇭' },
    { key: 'grenada', name: 'Granada', emoji: '🇬🇩' },
    { key: 'greece', name: 'Grecia', emoji: '🇬🇷' },
    { key: 'guatemala', name: 'Guatemala', emoji: '🇬🇹' },
    { key: 'guinea', name: 'Guinea', emoji: '🇬🇳' },
    { key: 'guineaBissau', name: 'Guinea-Bisáu', emoji: '🇬🇼' },
    { key: 'equatorialGuinea', name: 'Guinea Ecuatorial', emoji: '🇬🇶' },
    { key: 'guyana', name: 'Guyana', emoji: '🇬🇾' },
    
    // H
    { key: 'haiti', name: 'Haití', emoji: '🇭🇹' },
    { key: 'honduras', name: 'Honduras', emoji: '🇭🇳' },
    { key: 'hungary', name: 'Hungría', emoji: '🇭🇺' },
    
    // I
    { key: 'india', name: 'India', emoji: '🇮🇳' },
    { key: 'indonesia', name: 'Indonesia', emoji: '🇮🇩' },
    { key: 'iraq', name: 'Irak', emoji: '🇮🇶' },
    { key: 'iran', name: 'Irán', emoji: '🇮🇷' },
    { key: 'ireland', name: 'Irlanda', emoji: '🇮🇪' },
    { key: 'iceland', name: 'Islandia', emoji: '🇮🇸' },
    { key: 'marshallIslands', name: 'Islas Marshall', emoji: '🇲🇭' },
    { key: 'solomonIslands', name: 'Islas Salomón', emoji: '🇸🇧' },
    { key: 'israel', name: 'Israel', emoji: '🇮🇱' },
    { key: 'italy', name: 'Italia', emoji: '🇮🇹' },
    
    // J
    { key: 'jamaica', name: 'Jamaica', emoji: '🇯🇲' },
    { key: 'japon', name: 'Japón', emoji: '🇯🇵' },
    { key: 'jordan', name: 'Jordania', emoji: '🇯🇴' },
    
    // K
    { key: 'kazakhstan', name: 'Kazajistán', emoji: '🇰🇿' },
    { key: 'kenya', name: 'Kenia', emoji: '🇰🇪' },
    { key: 'kyrgyzstan', name: 'Kirguistán', emoji: '🇰🇬' },
    { key: 'kiribati', name: 'Kiribati', emoji: '🇰🇮' },
    { key: 'kuwait', name: 'Kuwait', emoji: '🇰🇼' },
    
    // L
    { key: 'laos', name: 'Laos', emoji: '🇱🇦' },
    { key: 'lesotho', name: 'Lesoto', emoji: '🇱🇸' },
    { key: 'latvia', name: 'Letonia', emoji: '🇱🇻' },
    { key: 'lebanon', name: 'Líbano', emoji: '🇱🇧' },
    { key: 'liberia', name: 'Liberia', emoji: '🇱🇷' },
    { key: 'libya', name: 'Libia', emoji: '🇱🇾' },
    { key: 'liechtenstein', name: 'Liechtenstein', emoji: '🇱🇮' },
    { key: 'lithuania', name: 'Lituania', emoji: '🇱🇹' },
    { key: 'luxembourg', name: 'Luxemburgo', emoji: '🇱🇺' },
    
    // M
    { key: 'northMacedonia', name: 'Macedonia del Norte', emoji: '🇲🇰' },
    { key: 'madagascar', name: 'Madagascar', emoji: '🇲🇬' },
    { key: 'malaysia', name: 'Malasia', emoji: '🇲🇾' },
    { key: 'malawi', name: 'Malaui', emoji: '🇲🇼' },
    { key: 'maldives', name: 'Maldivas', emoji: '🇲🇻' },
    { key: 'mali', name: 'Malí', emoji: '🇲🇱' },
    { key: 'malta', name: 'Malta', emoji: '🇲🇹' },
    { key: 'morocco', name: 'Marruecos', emoji: '🇲🇦' },
    { key: 'mauritius', name: 'Mauricio', emoji: '🇲🇺' },
    { key: 'mauritania', name: 'Mauritania', emoji: '🇲🇷' },
    { key: 'mexico', name: 'México', emoji: '🇲🇽' },
    { key: 'micronesia', name: 'Micronesia', emoji: '🇫🇲' },
    { key: 'moldova', name: 'Moldavia', emoji: '🇲🇩' },
    { key: 'monaco', name: 'Mónaco', emoji: '🇲🇨' },
    { key: 'mongolia', name: 'Mongolia', emoji: '🇲🇳' },
    { key: 'montenegro', name: 'Montenegro', emoji: '🇲🇪' },
    { key: 'mozambique', name: 'Mozambique', emoji: '🇲🇿' },
    
    // N
    { key: 'namibia', name: 'Namibia', emoji: '🇳🇦' },
    { key: 'nauru', name: 'Nauru', emoji: '🇳🇷' },
    { key: 'nepal', name: 'Nepal', emoji: '🇳🇵' },
    { key: 'nicaragua', name: 'Nicaragua', emoji: '🇳🇮' },
    { key: 'niger', name: 'Níger', emoji: '🇳🇪' },
    { key: 'nigeria', name: 'Nigeria', emoji: '🇳🇬' },
    { key: 'norway', name: 'Noruega', emoji: '🇳🇴' },
    { key: 'newZealand', name: 'Nueva Zelanda', emoji: '🇳🇿' },
    
    // O
    { key: 'oman', name: 'Omán', emoji: '🇴🇲' },
    
    // P
    { key: 'netherlands', name: 'Países Bajos', emoji: '🇳🇱' },
    { key: 'pakistan', name: 'Pakistán', emoji: '🇵🇰' },
    { key: 'palau', name: 'Palaos', emoji: '🇵🇼' },
    { key: 'palestine', name: 'Palestina', emoji: '🇵🇸' },
    { key: 'panama', name: 'Panamá', emoji: '🇵🇦' },
    { key: 'papuaNewGuinea', name: 'Papúa Nueva Guinea', emoji: '🇵🇬' },
    { key: 'paraguay', name: 'Paraguay', emoji: '🇵🇾' },
    { key: 'peru', name: 'Perú', emoji: '🇵🇪' },
    { key: 'poland', name: 'Polonia', emoji: '🇵🇱' },
    { key: 'portugal', name: 'Portugal', emoji: '🇵🇹' },
    
    // R
    { key: 'uk', name: 'Reino Unido', emoji: '🇬🇧' },
    { key: 'centralAfricanRepublic', name: 'República Centroafricana', emoji: '🇨🇫' },
    { key: 'dominicanRepublic', name: 'República Dominicana', emoji: '🇩🇴' },
    { key: 'rwanda', name: 'Ruanda', emoji: '🇷🇼' },
    { key: 'romania', name: 'Rumania', emoji: '🇷🇴' },
    { key: 'russia', name: 'Rusia', emoji: '🇷🇺' },
    
    // S
    { key: 'samoa', name: 'Samoa', emoji: '🇼🇸' },
    { key: 'saintKitts', name: 'San Cristóbal y Nieves', emoji: '🇰🇳' },
    { key: 'sanMarino', name: 'San Marino', emoji: '🇸🇲' },
    { key: 'saintVincent', name: 'San Vicente y las Granadinas', emoji: '🇻🇨' },
    { key: 'saintLucia', name: 'Santa Lucía', emoji: '🇱🇨' },
    { key: 'vatican', name: 'Santa Sede (Vaticano)', emoji: '🇻🇦' },
    { key: 'saoTome', name: 'Santo Tomé y Príncipe', emoji: '🇸🇹' },
    { key: 'senegal', name: 'Senegal', emoji: '🇸🇳' },
    { key: 'serbia', name: 'Serbia', emoji: '🇷🇸' },
    { key: 'seychelles', name: 'Seychelles', emoji: '🇸🇨' },
    { key: 'sierraLeone', name: 'Sierra Leona', emoji: '🇸🇱' },
    { key: 'singapore', name: 'Singapur', emoji: '🇸🇬' },
    { key: 'syria', name: 'Siria', emoji: '🇸🇾' },
    { key: 'somalia', name: 'Somalia', emoji: '🇸🇴' },
    { key: 'sriLanka', name: 'Sri Lanka', emoji: '🇱🇰' },
    { key: 'eswatini', name: 'Suazilandia (Esuatini)', emoji: '🇸🇿' },
    { key: 'southAfrica', name: 'Sudáfrica', emoji: '🇿🇦' },
    { key: 'sudan', name: 'Sudán', emoji: '🇸🇩' },
    { key: 'southSudan', name: 'Sudán del Sur', emoji: '🇸🇸' },
    { key: 'sweden', name: 'Suecia', emoji: '🇸🇪' },
    { key: 'switzerland', name: 'Suiza', emoji: '🇨🇭' },
    { key: 'suriname', name: 'Surinam', emoji: '🇸🇷' },
    
    // T
    { key: 'thailand', name: 'Tailandia', emoji: '🇹🇭' },
    { key: 'tanzania', name: 'Tanzania', emoji: '🇹🇿' },
    { key: 'tajikistan', name: 'Tayikistán', emoji: '🇹🇯' },
    { key: 'eastTimor', name: 'Timor Oriental', emoji: '🇹🇱' },
    { key: 'togo', name: 'Togo', emoji: '🇹🇬' },
    { key: 'tonga', name: 'Tonga', emoji: '🇹🇴' },
    { key: 'trinidadAndTobago', name: 'Trinidad y Tobago', emoji: '🇹🇹' },
    { key: 'tunisia', name: 'Túnez', emoji: '🇹🇳' },
    { key: 'turkmenistan', name: 'Turkmenistán', emoji: '🇹🇲' },
    { key: 'turkey', name: 'Turquía', emoji: '🇹🇷' },
    { key: 'tuvalu', name: 'Tuvalu', emoji: '🇹🇻' },
    
    // U
    { key: 'ukraine', name: 'Ucrania', emoji: '🇺🇦' },
    { key: 'uganda', name: 'Uganda', emoji: '🇺🇬' },
    { key: 'uruguay', name: 'Uruguay', emoji: '🇺🇾' },
    { key: 'uzbekistan', name: 'Uzbekistán', emoji: '🇺🇿' },
    
    // V
    { key: 'vanuatu', name: 'Vanuatu', emoji: '🇻🇺' },
    { key: 'venezuela', name: 'Venezuela', emoji: '🇻🇪' },
    { key: 'vietnam', name: 'Vietnam', emoji: '🇻🇳' },
    
    // Y
    { key: 'yemen', name: 'Yemen', emoji: '🇾🇪' },
    
    // Z
    { key: 'zambia', name: 'Zambia', emoji: '🇿🇲' },
    { key: 'zimbabwe', name: 'Zimbabue', emoji: '🇿🇼' }
];

// ==============
// SHADERS WEBGL
// ==============

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

// ================
// FUNCIONES WEBGL 
// ================

let offscreenCanvas = null;
let sharedGL = null;
let sharedProgram = null;

function initSharedWebGL() {
    if (sharedGL) return { gl: sharedGL, program: sharedProgram };
    
    offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = CANVAS_CONFIG.gallery.width;
    offscreenCanvas.height = CANVAS_CONFIG.gallery.height;
    
    sharedGL = offscreenCanvas.getContext('webgl', {
        preserveDrawingBuffer: true,
        antialias: true
    });
    
    if (!sharedGL) {
        console.error('WebGL no disponible');
        return null;
    }
    
    sharedProgram = sharedGL.createProgram();

    // Compilar y verificar vertex shader
    const vShader = sharedGL.createShader(sharedGL.VERTEX_SHADER);
    sharedGL.shaderSource(vShader, vertexShader);
    sharedGL.compileShader(vShader);
    if (!sharedGL.getShaderParameter(vShader, sharedGL.COMPILE_STATUS)) {
        console.error('Vertex shader compile error:', sharedGL.getShaderInfoLog(vShader));
        sharedGL.deleteShader(vShader);
        return null;
    }

    // Compilar y verificar fragment shader
    const fShader = sharedGL.createShader(sharedGL.FRAGMENT_SHADER);
    sharedGL.shaderSource(fShader, fragmentShader);
    sharedGL.compileShader(fShader);
    if (!sharedGL.getShaderParameter(fShader, sharedGL.COMPILE_STATUS)) {
        console.error('Fragment shader compile error:', sharedGL.getShaderInfoLog(fShader));
        sharedGL.deleteShader(fShader);
        sharedGL.deleteShader(vShader);
        return null;
    }

    // Adjuntar y enlazar programa
    sharedGL.attachShader(sharedProgram, vShader);
    sharedGL.attachShader(sharedProgram, fShader);
    sharedGL.linkProgram(sharedProgram);
    if (!sharedGL.getProgramParameter(sharedProgram, sharedGL.LINK_STATUS)) {
        console.error('Program link error:', sharedGL.getProgramInfoLog(sharedProgram));
        sharedGL.deleteProgram(sharedProgram);
        sharedGL.deleteShader(vShader);
        sharedGL.deleteShader(fShader);
        sharedProgram = null;
        return null;
    }
    
    return { gl: sharedGL, program: sharedProgram };
}

function drawFlagToCanvas(targetCanvas, width, flagData) {
    const context = initSharedWebGL();
    if (!context) return;
    
    const { gl, program } = context;
    
    if (offscreenCanvas.width !== targetCanvas.width || 
        offscreenCanvas.height !== targetCanvas.height) {
        offscreenCanvas.width = targetCanvas.width;
        offscreenCanvas.height = targetCanvas.height;
    }
    
    const height = width * 0.625;
    const x = (offscreenCanvas.width - width) / 2;
    const y = (offscreenCanvas.height - height) / 2;
    const { positions, colors } = flagData(x, y, width, height);

    gl.useProgram(program);
    gl.viewport(0, 0, offscreenCanvas.width, offscreenCanvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Configurar atributos de posición y color
    ['a_position', 'a_color'].forEach((attr, i) => {
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        const data = i ? colors : positions;
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
        
        const location = gl.getAttribLocation(program, attr);
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(location, i ? 3 : 2, gl.FLOAT, false, 0, 0);
    });

    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    gl.uniform2f(resolutionLoc, offscreenCanvas.width, offscreenCanvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, positions.length / 2);
    gl.flush();
    
    // Copiar resultado al canvas target
    const ctx2d = targetCanvas.getContext('2d');
    ctx2d.clearRect(0, 0, targetCanvas.width, targetCanvas.height);
    ctx2d.drawImage(offscreenCanvas, 0, 0);

    // Overlay opcional (detalles complejos o imágenes)
    if (typeof flagData.overlay === 'function') {
        try {
            flagData.overlay(ctx2d, x, y, width, height);
        } catch (e) {
            console.warn('Overlay draw failed:', e);
        }
    }
    
    return { x, y, width, height };
}

// =========================
// AQUI DEFINIR BANDERAS def name flags minusculas
// =========================

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


     // Japón: fondo blanco con círculo rojo centrado (diámetro 60% de la altura)
    japon: (x, y, w, h) => {
        const cx = x + w / 2;
        const cy = y + h / 2;
        const radius = h * 0.3; // diámetro = 0.6 * h
        const segments = 64; // suavidad del círculo

        // Fondo blanco (rectángulo completo)
        const positionsBG = [
            x, y,  x + w, y,  x, y + h,
            x + w, y,  x + w, y + h,  x, y + h
        ];
        const white = [1, 1, 1];
        const colorsBG = new Array(6).fill(white).flat();

        // Círculo rojo (triángulos en abanico)
        const red = [188/255, 0/255, 45/255]; // #BC002D
        const positionsCircle = [];
        const colorsCircle = [];
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            const x1 = cx + radius * Math.cos(a1);
            const y1 = cy + radius * Math.sin(a1);
            const x2 = cx + radius * Math.cos(a2);
            const y2 = cy + radius * Math.sin(a2);

            // triángulo: centro, punto i, punto i+1
            positionsCircle.push(
                cx, cy,
                x1, y1,
                x2, y2
            );
            colorsCircle.push(...red, ...red, ...red);
        }

        return {
            positions: [...positionsBG, ...positionsCircle],
            colors: [...colorsBG, ...colorsCircle]
        };
    },
    
    northKorea: (x, y, w, h) => {
        const h5 = h / 5;
        return {
            positions: [
                x,y, x+w,y, x,y+h5, x+w,y, x+w,y+h5, x,y+h5,
                x,y+h5*4, x+w,y+h5*4, x,y+h, x+w,y+h5*4, x+w,y+h, x,y+h,
                x,y+h5, x+w,y+h5, x,y+h5*1.2, x+w,y+h5, x+w,y+h5*1.2, x,y+h5*1.2,
                x,y+h5*3.8, x+w,y+h5*3.8, x,y+h5*4, x+w,y+h5*3.8, x+w,y+h5*4, x,y+h5*4,
                x,y+h5*1.2, x+w,y+h5*1.2, x,y+h5*3.8, x+w,y+h5*1.2, x+w,y+h5*3.8, x,y+h5*3.8
            ],
            colors: [
                ...new Array(12).fill([0.17,0.38,0.71]).flat(),
                ...new Array(12).fill([1,1,1]).flat(),
                ...new Array(6).fill([0.93,0.16,0.22]).flat()
            ]
        };
    },

    turkey: (x, y, w, h) => {
        const positions = [x,y, x+w,y, x,y+h, x+w,y, x+w,y+h, x,y+h];
        const colors = new Array(6).fill([0.89,0.15,0.21]).flat();
        return { positions, colors };
    },

    algeria: (x, y, w, h) => {
        const w2 = w / 2;
        return {
            positions: [
                x,y, x+w2,y, x,y+h, x+w2,y, x+w2,y+h, x,y+h,
                x+w2,y, x+w,y, x+w2,y+h, x+w,y, x+w,y+h, x+w2,y+h
            ],
            colors: [...new Array(6).fill([0,0.5,0.2]).flat(), ...new Array(6).fill([1,1,1]).flat()]
        };
    },

    spain: (x, y, w, h) => {
        const h4 = h / 4;
        return {
            positions: [
                x,y, x+w,y, x,y+h4, x+w,y, x+w,y+h4, x,y+h4,
                x,y+h4, x+w,y+h4, x,y+h4*3, x+w,y+h4, x+w,y+h4*3, x,y+h4*3,
                x,y+h4*3, x+w,y+h4*3, x,y+h, x+w,y+h4*3, x+w,y+h, x,y+h
            ],
            colors: [
                ...new Array(6).fill([0.8,0.1,0.1]).flat(),
                ...new Array(6).fill([1,0.8,0]).flat(),
                ...new Array(6).fill([0.8,0.1,0.1]).flat()
            ]
        };
    },

    honduras: (x, y, w, h) => {
        const h3 = h / 3;
        return {
            positions: [
                x,y, x+w,y, x,y+h3, x+w,y, x+w,y+h3, x,y+h3,
                x,y+h3, x+w,y+h3, x,y+h3*2, x+w,y+h3, x+w,y+h3*2, x,y+h3,
                x,y+h3*2, x+w,y+h3*2, x,y+h, x+w,y+h3*2, x+w,y+h, x,y+h
            ],
            colors: [
                ...new Array(6).fill([0,0.4,0.8]).flat(),
                ...new Array(6).fill([1,1,1]).flat(),
                ...new Array(6).fill([0,0.4,0.8]).flat()
            ]
        };
    },
     israel: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        const white = [1, 1, 1];
        const blue = [0 / 255, 56 / 255, 184 / 255]; // #0038B8

        // Fondo blanco
        positions.push(
            x, y, x + w, y, x, y + h,
            x + w, y, x + w, y + h, x, y + h
        );
        colors.push(...new Array(6).fill(white).flat());

        // Franjas según SVG: y=15 y y=120; altura=25 (viewBox 220x160)
        const margin = h * (15 / 160);
        const stripe = h * (25 / 160);
        // Superior
        positions.push(
            x, y + margin, x + w, y + margin, x, y + margin + stripe,
            x + w, y + margin, x + w, y + margin + stripe, x, y + margin + stripe
        );
        colors.push(...new Array(6).fill(blue).flat());
        // Inferior
        const bottomY = y + h - margin - stripe;
        positions.push(
            x, bottomY, x + w, bottomY, x, bottomY + stripe,
            x + w, bottomY, x + w, bottomY + stripe, x, bottomY + stripe
        );
        colors.push(...new Array(6).fill(blue).flat());

        // Estrella de David con cuerpo transparente: dos triángulos solo borde
        const cx = x + w / 2;
        const cy = y + h / 2;
        const S = h / 160;
        const p1 = [cx + 0 * S, cy + (-29.1410161513775421 * S)];
        const p2 = [cx + (-25.2368602791855814 * S), cy + (14.5705080756887710 * S)];
        const p3 = [cx + (25.2368602791855814 * S), cy + (14.5705080756887710 * S)];
        const q1 = [cx + 0 * S, cy + (29.1410161513775421 * S)];
        const q2 = [cx + (25.2368602791855814 * S), cy + (-14.5705080756887710 * S)];
        const q3 = [cx + (-25.2368602791855814 * S), cy + (-14.5705080756887710 * S)];
        const t = h * (5.5 / 160);

        function offsetTriangle(a, b, c, d) {
            function orientation(A, B, C) {
                return Math.sign((B[0]-A[0])*(C[1]-A[1]) - (B[1]-A[1])*(C[0]-A[0])) || 1;
            }
            const s = orientation(a,b,c); // +1 CCW, -1 CW
            function edgeData(P, Q) {
                const ex = Q[0]-P[0], ey = Q[1]-P[1];
                const l = Math.hypot(ex, ey);
                const ux = ex / l, uy = ey / l;
                // inward normal = rotate -s*90°
                const nx = s === 1 ? -uy : uy;
                const ny = s === 1 ? ux : -ux;
                return { P: [P[0] + nx * d, P[1] + ny * d], dir: [ux, uy] };
            }
            const L1 = edgeData(a, b);
            const L2 = edgeData(b, c);
            const L3 = edgeData(c, a);
            function intersect(P1, d1, P2, d2) {
                const perp = [-d2[1], d2[0]];
                const denom = d1[0]*perp[0] + d1[1]*perp[1];
                const num = (P2[0]-P1[0])*perp[0] + (P2[1]-P1[1])*perp[1];
                const u = num / denom;
                return [P1[0] + u*d1[0], P1[1] + u*d1[1]];
            }
            const A1 = intersect(L3.P, L3.dir, L1.P, L1.dir);
            const B1 = intersect(L1.P, L1.dir, L2.P, L2.dir);
            const C1 = intersect(L2.P, L2.dir, L3.P, L3.dir);
            return [A1, B1, C1];
        }

        function addRingEdge(A, B, Ai, Bi, color) {
            // Quad: A-B-Bi-Ai (triangulado en dos)
            positions.push(A[0],A[1], B[0],B[1], Bi[0],Bi[1]);
            positions.push(A[0],A[1], Bi[0],Bi[1], Ai[0],Ai[1]);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        }

        // Arriba: bordes del triángulo superior
        const [ip1, ip2, ip3] = offsetTriangle(p1, p2, p3, t);
        addRingEdge(p1, p2, ip1, ip2, blue);
        addRingEdge(p2, p3, ip2, ip3, blue);
        addRingEdge(p3, p1, ip3, ip1, blue);

        // Abajo: bordes del triángulo inferior (rotado 180°)
        const [iq1, iq2, iq3] = offsetTriangle(q1, q2, q3, t);
        addRingEdge(q1, q2, iq1, iq2, blue);
        addRingEdge(q2, q3, iq2, iq3, blue);
        addRingEdge(q3, q1, iq3, iq1, blue);

        return { positions, colors };
    },

     jamaica: (x, y, w, h) => {
           const positions = [];
           const colors = [];
           const green = [0/255, 150/255, 57/255]; // #009639
           const black = [0, 0, 0];
           const gold = [252/255, 209/255, 22/255]; // #FCD116

           function tri(A, B, C, color) {
               positions.push(A[0], A[1], B[0], B[1], C[0], C[1]);
               colors.push(...color, ...color, ...color);
           }

           // 1) Fondo verde (rectángulo como dos triángulos)
           tri([x, y], [x + w, y], [x, y + h], green);
           tri([x + w, y], [x + w, y + h], [x, y + h], green);

           const cx = x + w / 2, cy = y + h / 2;

           // 2) Triángulos negros (asta y vuelo)
           tri([x, y], [x, y + h], [cx, cy], black);
           tri([x + w, y], [x + w, y + h], [cx, cy], black);

           // --- Clipping poligonal al rectángulo para bandas doradas ---
           function clipPolyToRect(poly) {
               const x0 = x, y0 = y, x1 = x + w, y1 = y + h;
               function clipEdge(points, inside, intersect) {
                   const out = [];
                   for (let i = 0; i < points.length; i++) {
                       const A = points[i];
                       const B = points[(i + 1) % points.length];
                       const iA = inside(A);
                       const iB = inside(B);
                       if (iA && iB) {
                           out.push(B);
                       } else if (iA && !iB) {
                           out.push(intersect(A, B));
                       } else if (!iA && iB) {
                           out.push(intersect(A, B));
                           out.push(B);
                       }
                   }
                   return out;
               }
               let pts = poly.slice();
               // izquierda
               pts = clipEdge(pts, p => p[0] >= x0, (A, B) => {
                   const t = (x0 - A[0]) / (B[0] - A[0]);
                   return [x0, A[1] + t * (B[1] - A[1])];
               });
               // derecha
               pts = clipEdge(pts, p => p[0] <= x1, (A, B) => {
                   const t = (x1 - A[0]) / (B[0] - A[0]);
                   return [x1, A[1] + t * (B[1] - A[1])];
               });
               // arriba
               pts = clipEdge(pts, p => p[1] >= y0, (A, B) => {
                   const t = (y0 - A[1]) / (B[1] - A[1]);
                   return [A[0] + t * (B[0] - A[0]), y0];
               });
               // abajo
               pts = clipEdge(pts, p => p[1] <= y1, (A, B) => {
                   const t = (y1 - A[1]) / (B[1] - A[1]);
                   return [A[0] + t * (B[0] - A[0]), y1];
               });
               return pts;
           }

           function addBand(A, B, width, color) {
               const dx = B[0] - A[0];
               const dy = B[1] - A[1];
               const len = Math.hypot(dx, dy);
               const nx = -(dy / len) * (width / 2);
               const ny = (dx / len) * (width / 2);
               const poly = [
                   [A[0] + nx, A[1] + ny],
                   [A[0] - nx, A[1] - ny],
                   [B[0] - nx, B[1] - ny],
                   [B[0] + nx, B[1] + ny]
               ];
               const clipped = clipPolyToRect(poly);
               if (clipped.length >= 3) {
                   const p0 = clipped[0];
                   for (let i = 1; i < clipped.length - 1; i++) {
                       tri(p0, clipped[i], clipped[i + 1], color);
                   }
               }
           }

           const bandWidth = w / 6; // ancho oficial ~ 1/6 del largo
           addBand([x, y], [x + w, y + h], bandWidth, gold); // TL->BR
           addBand([x + w, y], [x, y + h], bandWidth, gold); // TR->BL

           return { positions, colors };
       },

       jordan: (x, y, w, h) => {
           const positions = [];
           const colors = [];
           const black = [0, 0, 0];
           const white = [1, 1, 1];
           const green = [0/255, 122/255, 61/255]; // #007A3D
           const red = [206/255, 17/255, 38/255]; // #CE1126

           function tri(A, B, C, color) {
               positions.push(A[0], A[1], B[0], B[1], C[0], C[1]);
               colors.push(...color, ...color, ...color);
           }
           function rect(x0, y0, x1, y1, color) {
               positions.push(x0, y0, x1, y0, x0, y1,
                               x1, y0, x1, y1, x0, y1);
               colors.push(...new Array(6).fill(color).flat());
           }

           // Franjas horizontales iguales: negro, blanco, verde
           const h3 = h / 3;
           rect(x, y, x + w, y + h3, black);
           rect(x, y + h3, x + w, y + 2*h3, white);
           rect(x, y + 2*h3, x + w, y + h, green);

           // Triángulo rojo (asta) con vértice en el centro del pabellón
           const apex = [x + w/2, y + h/2];
           tri([x, y], [x, y + h], apex, red);

           // Estrella blanca de 7 puntas dentro del triángulo (ajuste de proporciones y posición)
             const cx = x + w * 0.20; // ligeramente más hacia el asta
             const cy = y + h * 0.5;
             const R = h * 0.10;     // tamaño exterior más contenido
             const r = R * 0.50;     // proporción interior para puntas más simétricas
             const rotation = Math.PI; // punta principal hacia la izquierda
             const step = 2 * Math.PI / 7;
 
             // Construir vértices exteriores e interiores alternados
             const outer = [], inner = [];
             for (let i = 0; i < 7; i++) {
                 const aOut = rotation + i * step;
                 const aIn = rotation + i * step + step / 2;
                 outer.push([cx + R * Math.cos(aOut), cy + R * Math.sin(aOut)]);
                 inner.push([cx + r * Math.cos(aIn), cy + r * Math.sin(aIn)]);
             }
 
             // Triángulos de las 7 puntas: cada punta une un vértice exterior con sus dos interiores adyacentes
             for (let i = 0; i < 7; i++) {
                 const prev = (i + 6) % 7;
                 tri(outer[i], inner[i], inner[prev], white);
             }
             // Relleno del heptágono interior para evitar huecos
             for (let i = 1; i < 6; i++) {
                  tri(inner[0], inner[i], inner[i + 1], white);
              }

           return { positions, colors };
       },

       kazakhstan: (() => {
        const img = new Image();
        img.src = 'RecursosAndree/Flag_of_Kazakhstan.svg.png';

        const fn = (x, y, w, h) => {
            return { positions: [], colors: [] };
        };

        fn.overlay = (ctx, x, y, w, h) => {
            const drawIt = () => {
                const iw = img.naturalWidth || 1;
                const ih = img.naturalHeight || 1;
                const imgRatio = iw / ih;
                const flagRatio = w / h;
                let targetW, targetH, dx, dy;
                if (imgRatio > flagRatio) {
                    // imagen más "ancha" que el área de la bandera: ajustar por ancho
                    targetW = w;
                    targetH = targetW / imgRatio;
                    dx = x;
                    dy = y + (h - targetH) / 2;
                } else {
                    // imagen más "alta" o igual: ajustar por alto
                    targetH = h;
                    targetW = targetH * imgRatio;
                    dx = x + (w - targetW) / 2;
                    dy = y;
                }
                ctx.save();
                ctx.beginPath();
                ctx.rect(x, y, w, h);
                ctx.clip();
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(img, dx, dy, targetW, targetH);
                ctx.restore();
            };
            if (img.complete && img.naturalWidth > 0) {
                drawIt();
            } else {
                img.onload = () => drawIt();
            }
        };

        return fn;
    })(),

    // Kenia (convertido desde SVG al formato del proyecto)
    kenya: (() => {
        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            const white = [1, 1, 1];
            const black = [0, 0, 0];
            const red = [176 / 255, 0, 0];
            const green = [0, 96 / 255, 0];

            // Fondo blanco
            positions.push(
                x, y, x + w, y, x, y + h,
                x + w, y, x + w, y + h, x, y + h
            );
            colors.push(...new Array(6).fill(white).flat());

            const vh = 160; // Altura del viewBox del SVG
            const blackH = h * (48 / vh);
            const thinH  = h * (8  / vh);
            const redH   = h * (48 / vh);
            const greenH = h * (48 / vh);

            // Franja negra superior
            positions.push(
                x, y,
                x + w, y,
                x, y + blackH,
                x + w, y,
                x + w, y + blackH,
                x, y + blackH
            );
            colors.push(...new Array(6).fill(black).flat());

            // Separador blanco superior
            positions.push(
                x, y + blackH,
                x + w, y + blackH,
                x, y + blackH + thinH,
                x + w, y + blackH,
                x + w, y + blackH + thinH,
                x, y + blackH + thinH
            );
            colors.push(...new Array(6).fill(white).flat());

            // Franja roja central
            positions.push(
                x, y + blackH + thinH,
                x + w, y + blackH + thinH,
                x, y + blackH + thinH + redH,
                x + w, y + blackH + thinH,
                x + w, y + blackH + thinH + redH,
                x, y + blackH + thinH + redH
            );
            colors.push(...new Array(6).fill(red).flat());

            // Separador blanco inferior
            positions.push(
                x, y + blackH + thinH + redH,
                x + w, y + blackH + thinH + redH,
                x, y + blackH + 2 * thinH + redH,
                x + w, y + blackH + thinH + redH,
                x + w, y + blackH + 2 * thinH + redH,
                x, y + blackH + 2 * thinH + redH
            );
            colors.push(...new Array(6).fill(white).flat());

            // Franja verde inferior
            positions.push(
                x, y + h - greenH,
                x + w, y + h - greenH,
                x, y + h,
                x + w, y + h - greenH,
                x + w, y + h,
                x, y + h
            );
            colors.push(...new Array(6).fill(green).flat());

            return { positions, colors };
        };

        // Detalles centrales (lanzas y escudo) usando Path2D del SVG
        fn.overlay = (ctx, x, y, w, h) => {
            const vbW = 240, vbH = 160;
            const s = Math.min(w / vbW, h / vbH); // Escalado uniforme
            ctx.save();
            ctx.translate(x + w / 2, y + h / 2);
            ctx.scale(s, s);
            ctx.miterLimit = 10;
            ctx.lineJoin = 'miter';
            ctx.lineCap = 'butt';

            // Lanzas (al fondo, 30° y espejo)
            const spearPath = new Path2D('M -1,55.4256258422040733928782829281879157421699 H 2 V -38 C 3,-40 3,-43 3,-46 C 3,-48 3,-56 0,-64.6632301492380856250246634162192350325315 C 3,-56 -3,-48 -3,-46 C -3,-43 -3,-40 -1,-38 z');
            ctx.save();
            ctx.rotate(Math.PI / 6);
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.stroke(spearPath);
            ctx.fillStyle = '#fff';
            ctx.fill(spearPath);
            ctx.restore();
            ctx.save();
            ctx.scale(-1, 1);
            ctx.rotate(Math.PI / 6);
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.stroke(spearPath);
            ctx.fillStyle = '#fff';
            ctx.fill(spearPath);
            ctx.restore();

            // Banda roja central tomada del SVG
            const redBand = new Path2D('M -120,-24 V 24 H -19 c 3,8 13,24 19,24 s 16,-16 19,-24 H 120 V -24 H 19 c -3,-8 -13,-24 -19,-24 s -16,16 -19,24 z');
            ctx.fillStyle = '#b00';
            ctx.fill(redBand);

            // Solo ajuste pedido: líneas blancas más cortas dentro de la banda
            ctx.save();
            ctx.clip(redBand);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(-2, -18);
            ctx.lineTo(-2, 18);
            ctx.moveTo(2, -18);
            ctx.lineTo(2, 18);
            ctx.stroke();
            ctx.restore();

            // Curva decorativa blanca (derecha e izquierda espejo)
            const decoR = new Path2D('M 19,24 c 3,-8 5,-16 5,-24 s 2,-16 -2,-5 C -5,24 5,2 5,-16 s 2,-16 2,-24');
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke(decoR);
            ctx.save(); ctx.scale(-1, 1); ctx.stroke(decoR); ctx.restore();

            // Óvalo blanco central
            ctx.beginPath();
            ctx.ellipse(0, 0, 4, 6, 0, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();

            // Pétalos blancos simplificados
            const decoBR = new Path2D('M 1.5,85 C 0,0 4,8 4,21 s -4,-4,21 z');
            ctx.fill(decoBR);
            ctx.save(); ctx.scale(-1, 1); ctx.fill(decoBR); ctx.restore();
            ctx.save(); ctx.scale(1, -1); ctx.fill(decoBR); ctx.restore();
            ctx.save(); ctx.scale(-1, -1); ctx.fill(decoBR); ctx.restore();

            ctx.restore();
        };

        return fn;
    })(),

    kyrgyzstan: (() => {
        const img = new Image();
        img.src = 'RecursosAndree/Flag_of_Kyrgyzstan.svg.png';

        const fn = (x, y, w, h) => {
            return { positions: [], colors: [] };
        };

        fn.overlay = (ctx, x, y, w, h) => {
            const drawIt = () => {
                const iw = img.naturalWidth || 1;
                const ih = img.naturalHeight || 1;
                const imgRatio = iw / ih;
                const flagRatio = w / h;
                let targetW, targetH, dx, dy;
                if (imgRatio > flagRatio) {
                    // imagen más "ancha" que el área de la bandera: ajustar por ancho
                    targetW = w;
                    targetH = targetW / imgRatio;
                    dx = x;
                    dy = y + (h - targetH) / 2;
                } else {
                    // imagen más "alta" o igual: ajustar por alto
                    targetH = h;
                    targetW = targetH * imgRatio;
                    dx = x + (w - targetW) / 2;
                    dy = y;
                }
                ctx.save();
                ctx.beginPath();
                ctx.rect(x, y, w, h);
                ctx.clip();
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(img, dx, dy, targetW, targetH);
                ctx.restore();
            };
            if (img.complete && img.naturalWidth > 0) {
                drawIt();
            } else {
                img.onload = () => drawIt();
            }
        };

        return fn;
    })(),

    kiribati: (() => {
        const img = new Image();
        img.src = 'RecursosAndree/Flag_of_Kiribati.svg.png';

        const fn = (x, y, w, h) => {
            return { positions: [], colors: [] };
        };

        fn.overlay = (ctx, x, y, w, h) => {
            const drawIt = () => {
                const iw = img.naturalWidth || 1;
                const ih = img.naturalHeight || 1;
                const imgRatio = iw / ih;
                const flagRatio = w / h;
                let targetW, targetH, dx, dy;
                if (imgRatio > flagRatio) {
                    targetW = w;
                    targetH = targetW / imgRatio;
                    dx = x;
                    dy = y + (h - targetH) / 2;
                } else {
                    targetH = h;
                    targetW = targetH * imgRatio;
                    dx = x + (w - targetW) / 2;
                    dy = y;
                }
                ctx.save();
                ctx.beginPath();
                ctx.rect(x, y, w, h);
                ctx.clip();
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(img, dx, dy, targetW, targetH);
                ctx.restore();
            };
            if (img.complete && img.naturalWidth > 0) {
                drawIt();
            } else {
                img.onload = () => drawIt();
            }
        };

        return fn;
    })(),

    kuwait: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        const green = [0/255, 122/255, 61/255]; // #007A3D
        const white = [1, 1, 1];
        const red = [206/255, 17/255, 38/255]; // #CE1126
        const black = [0, 0, 0];

        const h3 = h / 3;

        // Franjas horizontales superior (verde), media (blanca), inferior (roja)
        positions.push(
            x, y, x + w, y, x, y + h3,
            x + w, y, x + w, y + h3, x, y + h3
        );
        colors.push(...new Array(6).fill(green).flat());

        positions.push(
            x, y + h3, x + w, y + h3, x, y + 2 * h3,
            x + w, y + h3, x + w, y + 2 * h3, x, y + 2 * h3
        );
        colors.push(...new Array(6).fill(white).flat());

        positions.push(
            x, y + 2 * h3, x + w, y + 2 * h3, x, y + h,
            x + w, y + 2 * h3, x + w, y + h, x, y + h
        );
        colors.push(...new Array(6).fill(red).flat());

        // Trapecio negro al asta (≈ 1/4 del ancho)
        const t = w * 0.25;
        positions.push(
            x, y,
            x + t, y + h / 3,
            x, y + h
        );
        positions.push(
            x + t, y + h / 3,
            x + t, y + 2 * h / 3,
            x, y + h
        );
        colors.push(...new Array(6).fill(black).flat());

        return { positions, colors };
    },

    laos: (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const red = [206/255, 17/255, 38/255]; // #CE1126
        const blue = [0/255, 42/255, 143/255]; // #002A8F
        const white = [1, 1, 1];

        // Band ratios: 1:2:1 (top red, middle blue, bottom red)
        const topH = h * 0.25;
        const midH = h * 0.5;
        const botH = h * 0.25;

        // Helper to push a rectangle (two triangles)
        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0,
                x1, y0,
                x0, y1,
                x0, y1,
                x1, y0,
                x1, y1
            );
            for (let i = 0; i < 6; i++) colors.push(...color);
        };

        // Top red
        pushRect(x, y, x + w, y + topH, red);
        // Middle blue
        pushRect(x, y + topH, x + w, y + topH + midH, blue);
        // Bottom red
        pushRect(x, y + topH + midH, x + w, y + h, red);

        // White disc centered in flag; diameter = 0.8 of blue band height
        const cx = x + w / 2;
        const cy = y + h / 2;
        const radius = (midH * 0.8) / 2; // 0.4 * h since midH = 0.5 * h
        const segments = 96;

        for (let i = 0; i < segments; i++) {
            const t0 = (i / segments) * Math.PI * 2;
            const t1 = ((i + 1) / segments) * Math.PI * 2;
            const x0 = cx + Math.cos(t0) * radius;
            const y0 = cy + Math.sin(t0) * radius;
            const x1 = cx + Math.cos(t1) * radius;
            const y1 = cy + Math.sin(t1) * radius;

            positions.push(
                cx, cy,
                x0, y0,
                x1, y1
            );
            colors.push(...white, ...white, ...white);
        }

        return { positions, colors };
    },


    lesotho: (() => {
        // Bandera de Lesoto: azul‑blanco‑verde con el mokorotlo centrado.
        const mokorotloImg = new Image();
        mokorotloImg.src = 'RecursosAndree/Lesotho_Mokorotlo.svg.png';

        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            const blue = [0/255, 32/255, 159/255]; // #00209F
            const white = [1, 1, 1];
            const green = [0/255, 149/255, 67/255]; // #009543

            const bandH = h / 3; // franjas iguales

            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };

            // Azul superior
            pushRect(x, y, x + w, y + bandH, blue);
            // Blanco medio
            pushRect(x, y + bandH, x + w, y + bandH * 2, white);
            // Verde inferior
            pushRect(x, y + bandH * 2, x + w, y + h, green);

            return { positions, colors };
        };

        // Overlay: dibujar el mokorotlo negro dentro de la franja blanca.
        fn.overlay = (ctx, x, y, w, h) => {
            const bandH = h / 3;
            const targetH = bandH * 0.80; // ocupa ~80% de la franja blanca

            ctx.save();
            ctx.beginPath();
            ctx.rect(x, y + bandH, w, bandH);
            ctx.clip();

            const drawHat = () => {
                const ratio = (mokorotloImg.naturalWidth || 1) / (mokorotloImg.naturalHeight || 1);
                const targetW = targetH * ratio;
                const cx = x + w / 2;
                const dx = cx - targetW / 2;
                const dy = y + bandH + (bandH - targetH) / 2;
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(mokorotloImg, dx, dy, targetW, targetH);
            };

            if (mokorotloImg.complete && mokorotloImg.naturalWidth > 0) {
                drawHat();
            } else {
                mokorotloImg.onload = () => {
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(x, y + bandH, w, bandH);
                    ctx.clip();
                    drawHat();
                    ctx.restore();
                };
            }

            ctx.restore();
        };

        return fn;
    })(),


    latvia: (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Latvian red (approx Pantone 201C): #9D2235
        const red = [157/255, 34/255, 53/255];
        const white = [1, 1, 1];

        // Stripe heights: 2:1:2 ratio
        const topH = h * (2/5);
        const midH = h * (1/5);

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0,
                x1, y0,
                x0, y1,
                x1, y0,
                x1, y1,
                x0, y1
            );
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };

        // Top maroon band
        pushRect(x, y, x + w, y + topH, red);
        // Middle white band
        pushRect(x, y + topH, x + w, y + topH + midH, white);
        // Bottom maroon band
        pushRect(x, y + topH + midH, x + w, y + h, red);

        return { positions, colors };
    },

    


    italy: (x, y, w, h) => {
         const w3 = w / 3;
         const positions = [
             // Verde (izquierda)
             x, y, x + w3, y, x, y + h, x + w3, y, x + w3, y + h, x, y + h,
             // Blanco (centro)
             x + w3, y, x + 2*w3, y, x + w3, y + h, x + 2*w3, y, x + 2*w3, y + h, x + w3, y + h,
             // Rojo (derecha)
             x + 2*w3, y, x + w, y, x + 2*w3, y + h, x + w, y, x + w, y + h, x + 2*w3, y + h
         ];
         const green = [0/255, 146/255, 70/255]; // #009246
         const white = [1, 1, 1];
         const red = [206/255, 43/255, 55/255]; // #CE2B37
         const colors = [
             ...new Array(6).fill(green).flat(),
             ...new Array(6).fill(white).flat(),
             ...new Array(6).fill(red).flat()
         ];
         return { positions, colors };
     },

    marshallIslands: (x, y, w, h) => ({
        positions: [x,y, x+w,y, x,y+h, x+w,y, x+w,y+h, x,y+h],
        colors: new Array(6).fill([0,0.3,0.6]).flat()
    }),

    malaysia: (x, y, w, h) => ({
        positions: [x,y, x+w,y, x,y+h, x+w,y, x+w,y+h, x,y+h],
        colors: new Array(6).fill([0.8,0.1,0.2]).flat()
    }),

    mongolia: (x, y, w, h) => ({
        positions: [x,y, x+w,y, x,y+h, x+w,y, x+w,y+h, x,y+h],
        colors: new Array(6).fill([0.8,0.1,0.2]).flat()
    }),

    nauru: (x, y, w, h) => ({
        positions: [x,y, x+w,y, x,y+h, x+w,y, x+w,y+h, x,y+h],
        colors: new Array(6).fill([0,0.2,0.6]).flat()
    }),

    saintKitts: (x, y, w, h) => ({
        positions: [x,y, x+w,y, x,y+h, x+w,y, x+w,y+h, x,y+h],
        colors: new Array(6).fill([0.1,0.5,0.2]).flat()
    }),

    southAfrica: (x, y, w, h) => ({
        positions: [x,y, x+w,y, x,y+h, x+w,y, x+w,y+h, x,y+h],
        colors: new Array(6).fill([0.1,0.4,0.2]).flat()
    }),
    lebanon: (() => {
        // Bandera de Líbano: rojo-blanco-rojo (1:2:1) con cedro verde centrado.
        // El cedro se carga desde RecursosAndre/Arms_of_Lebanon.svg.png y se dibuja como overlay.
        const cedarImg = new Image();
        cedarImg.src = 'RecursosAndree/Arms_of_Lebanon.svg.png';

        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            const red = [237/255, 28/255, 36/255]; // #ED1C24 aproximado
            const white = [1, 1, 1];

            const topH = h * 0.25; // 1:2:1
            const midH = h * 0.5;

            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };

            // Franja roja superior
            pushRect(x, y, x + w, y + topH, red);
            // Franja blanca central
            pushRect(x, y + topH, x + w, y + topH + midH, white);
            // Franja roja inferior
            pushRect(x, y + topH + midH, x + w, y + h, red);

            return { positions, colors };
        };

        // Overlay: dibujar el cedro verde centrado en la franja blanca.
        fn.overlay = (ctx, x, y, w, h) => {
            const topH = h * 0.25;
            const midH = h * 0.5;
            const targetH = midH * 0.80; // tamaño del cedro ~80% de la franja blanca

            // Recortar al área de la franja blanca
            ctx.save();
            ctx.beginPath();
            ctx.rect(x, y + topH, w, midH);
            ctx.clip();

            const drawCedar = () => {
                const ratio = cedarImg.naturalWidth / cedarImg.naturalHeight || 1;
                const targetW = targetH * ratio;
                const cx = x + w / 2;
                const dx = cx - targetW / 2;
                const dy = y + topH + (midH - targetH) / 2;
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(cedarImg, dx, dy, targetW, targetH);
            };

            if (cedarImg.complete && cedarImg.naturalWidth > 0) {
                drawCedar();
            } else {
                cedarImg.onload = () => {
                    // Redibujar el cedro cuando la imagen termine de cargar
                    // Usamos el mismo contexto y coordenadas capturadas.
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(x, y + topH, w, midH);
                    ctx.clip();
                    drawCedar();
                    ctx.restore();
                };
            }

            ctx.restore();
        };

        return fn;
    })(),


    libya: (() => {
        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            const red = [200/255, 16/255, 46/255];   // #C8102E approx
            const black = [0, 0, 0];
            const green = [0/255, 122/255, 61/255];  // #007A3D

            const topH = h * 0.25;  // 1:2:1 ratio
            const midH = h * 0.5;

            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };

            // Top red band
            pushRect(x, y, x + w, y + topH, red);
            // Middle black band
            pushRect(x, y + topH, x + w, y + topH + midH, black);
            // Bottom green band
            pushRect(x, y + topH + midH, x + w, y + h, green);

            return { positions, colors };
        };

        // Crescent and star centered in black stripe
        fn.overlay = (ctx, x, y, w, h) => {
            const topH = h * 0.25;
            const midH = h * 0.5;
            const cx = x + w / 2;
            const cy = y + topH + midH / 2;

            // Clip to black stripe to avoid painting over red/green bands
            ctx.save();
            ctx.beginPath();
            ctx.rect(x, y + topH, w, midH);
            ctx.clip();

            // Crescent by subtracting a shifted black circle from a white circle
            const outerR = midH * 0.28;
            const innerR = outerR * 0.82; // thinner crescent
            const offset = outerR * 0.33; // slight tweak for balance

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.arc(cx + offset, cy, innerR, 0, Math.PI * 2);
            ctx.fill();

            // Five-point star to the right of the crescent
            const starOuter = outerR * 0.62;
            const starInner = starOuter * 0.382;
            const sx = cx + outerR + starOuter * 0.6;
            const sy = cy;

            ctx.beginPath();
            for (let i = 0; i < 10; i++) {
                const ang = -Math.PI / 2 + i * (Math.PI / 5);
                const r = (i % 2 === 0) ? starOuter : starInner;
                const px = sx + Math.cos(ang) * r;
                const py = sy + Math.sin(ang) * r;
                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.restore();
        };

        return fn;
    })(),

    liechtenstein: (() => {
        // Bandera de Liechtenstein: azul arriba, rojo abajo, con corona en el cantón.
        const crownImg = new Image();
        crownImg.src = 'RecursosAndree/corono.webp';

        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            const blue = [43/255, 74/255, 148/255]; // #2B4A94 solicitado
            const red = [213/255, 43/255, 30/255]; // #D52B1E aprox

            const bandH = h / 2; // franjas iguales

            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };

            // Azul superior
            pushRect(x, y, x + w, y + bandH, blue);
            // Rojo inferior
            pushRect(x, y + bandH, x + w, y + h, red);

            return { positions, colors };
        };

        // Overlay: dibujar la corona dorada en el cantón (arriba-izquierda), dentro de la franja azul.
        fn.overlay = (ctx, x, y, w, h) => {
            const topH = h / 2;
            const targetH = topH * 0.55; // altura de la corona relativa a la franja azul

            const drawCrown = () => {
                const ratio = (crownImg.naturalWidth || 1) / (crownImg.naturalHeight || 1);
                const targetW = targetH * ratio;
                // Ubicación en el cantón con un margen
                const dx = x + w * 0.08;
                const dy = y + topH * 0.12;

                ctx.save();
                ctx.beginPath();
                ctx.rect(x, y, w, topH); // limitar a la franja azul
                ctx.clip();
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(crownImg, dx, dy, targetW, targetH);
                ctx.restore();
            };

            if (crownImg.complete && crownImg.naturalWidth > 0) {
                drawCrown();
            } else {
                crownImg.onload = () => drawCrown();
            }
        };

        return fn;
    })(),

    solomonIslands: (() => {
        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            const blue = [0/255, 82/255, 180/255]; // approx #0052B4

            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };

            // Blue background; green triangle and stripe via overlay
            pushRect(x, y, x + w, y + h, blue);
            return { positions, colors };
        };

        fn.overlay = (ctx, x, y, w, h) => {
            ctx.save();
            // Lower-right green triangle
            ctx.fillStyle = '#215B33';
            ctx.beginPath();
            ctx.moveTo(x, y + h);
            ctx.lineTo(x + w, y + h);
            ctx.lineTo(x + w, y);
            ctx.closePath();
            ctx.fill();

            // Yellow diagonal band (lower-left to upper-right)
            const t = h * 0.12; // thickness
            const L = Math.sqrt(w*w + h*h);
            const px = (h / L) * (t / 2);
            const py = (w / L) * (t / 2);
            const sx = x, sy = y + h;
            const ex = x + w, ey = y;

            // Clip the stripe to the flag rect so the tip is triangular
            ctx.save();
            ctx.beginPath();
            ctx.rect(x, y, w, h);
            ctx.clip();

            // Extend band beyond corners, then clip -> triangular ends inside
            const dx = w / L, dy = -h / L;
            const ext = Math.max(w, h);
            const sx2 = sx - dx * ext, sy2 = sy - dy * ext;
            const ex2 = ex + dx * ext, ey2 = ey + dy * ext;

            ctx.fillStyle = '#F6D00A';
            ctx.beginPath();
            ctx.moveTo(sx2 + px, sy2 + py);
            ctx.lineTo(ex2 + px, ey2 + py);
            ctx.lineTo(ex2 - px, ey2 - py);
            ctx.lineTo(sx2 - px, sy2 - py);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            // Clip to blue triangle for stars
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + w, y);
            ctx.lineTo(x, y + h);
            ctx.closePath();
            ctx.clip();

            // Draw five white stars (dice-5 layout)
            const drawStar = (cx, cy, R) => {
                const r = R * 0.382;
                ctx.beginPath();
                for (let i = 0; i < 10; i++) {
                    const ang = -Math.PI / 2 + i * (Math.PI / 5);
                    const rr = (i % 2 === 0) ? R : r;
                    const px = cx + Math.cos(ang) * rr;
                    const py = cy + Math.sin(ang) * rr;
                    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.fill();
            };

            ctx.fillStyle = '#ffffff';
            const R = Math.min(w, h) * 0.045;
            const stars = [
                [x + w * 0.10, y + h * 0.16],
                [x + w * 0.24, y + h * 0.16],
                [x + w * 0.17, y + h * 0.28],
                [x + w * 0.10, y + h * 0.40],
                [x + w * 0.24, y + h * 0.40],
            ];
            for (const [sx2, sy2] of stars) drawStar(sx2, sy2, R);

            ctx.restore();
        };

        return fn;
    })(),

    liberia: (() => {
        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            const red = [191/255, 10/255, 48/255];   // #BF0A30
            const white = [1, 1, 1];
            const blue = [0/255, 40/255, 104/255];   // #002868

            const stripeH = h / 11;

            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };

            // 11 stripes, starting with red at the top
            for (let i = 0; i < 11; i++) {
                const y0 = y + i * stripeH;
                const y1 = y0 + stripeH;
                const color = (i % 2 === 0) ? red : white;
                pushRect(x, y0, x + w, y1, color);
            }

            // Blue canton: square with side equal to 5 stripe heights
            const cantonSize = stripeH * 5;
            pushRect(x, y, x + cantonSize, y + cantonSize, blue);

            return { positions, colors };
        };

        // Overlay: centered white star in the canton
        fn.overlay = (ctx, x, y, w, h) => {
            const stripeH = h / 11;
            const s = stripeH * 5; // canton size (square)
            const cx = x + s / 2;
            const cy = y + s / 2;

            const outerR = s * 0.38;
            const innerR = outerR * 0.382; // geometric relation for a 5-point star
            const startAngle = -Math.PI / 2; // point up

            const pts = [];
            for (let i = 0; i < 10; i++) {
                const angle = startAngle + i * (Math.PI / 5);
                const r = (i % 2 === 0) ? outerR : innerR;
                pts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
            }

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(pts[0][0], pts[0][1]);
            for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
            ctx.closePath();
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.restore();
        };

        return fn;
    })(),

    egypt: (() => {
        // Bandera de Egipto: roja-blanca-negra con escudo nacional centrado
        const escudoImg = new Image();
        escudoImg.src = 'Recursos_Renso/Escudo_Egipto.png';

        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            
            // Colores oficiales de Egipto
            const red = [206/255, 17/255, 38/255];    // #CE1126 - Rojo
            const white = [1, 1, 1];                  // Blanco
            const black = [0, 0, 0];                  // Negro

            // Proporciones de las franjas: roja (1), blanca (1), negra (1)
            const stripeH = h / 3;  // Cada franja ocupa 1/3 de la altura

            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };

            // Franja roja (superior)
            pushRect(x, y, x + w, y + stripeH, red);
            
            // Franja blanca (media)
            pushRect(x, y + stripeH, x + w, y + stripeH * 2, white);
            
            // Franja negra (inferior)
            pushRect(x, y + stripeH * 2, x + w, y + h, black);

            return { positions, colors };
        };

        // Overlay: dibujar el escudo nacional centrado en la franja blanca
        fn.overlay = (ctx, x, y, w, h) => {
            const stripeH = h / 3; // altura de cada franja
            const escudoSize = Math.min(w, stripeH) * 1.0; // tamaño del escudo

            const drawEscudo = () => {
                const ratio = (escudoImg.naturalWidth || 1) / (escudoImg.naturalHeight || 1);
                const escudoW = escudoSize * ratio;
                const escudoH = escudoSize;
                
                // Centrar el escudo horizontalmente y verticalmente en la franja blanca
                const cx = x + w / 2;
                const cy = y + stripeH + stripeH / 2; // Centro de la franja blanca
                const dx = cx - escudoW / 2;
                const dy = cy - escudoH / 2;

                ctx.save();
                // Recortar al área de la franja blanca
                ctx.beginPath();
                ctx.rect(x, y + stripeH, w, stripeH);
                ctx.clip();
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(escudoImg, dx, dy, escudoW, escudoH);
                ctx.restore();
            };

            if (escudoImg.complete && escudoImg.naturalWidth > 0) {
                drawEscudo();
            } else {
                escudoImg.onload = () => {
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(x, y + stripeH, w, stripeH);
                    ctx.clip();
                    drawEscudo();
                    ctx.restore();
                };
            }
        };

        return fn;
    })(),

    elSalvador: (() => {
        // Bandera de El Salvador: azul-blanca-azul con escudo nacional centrado
        const escudoImg = new Image();
        escudoImg.src = 'Recursos_Renso/Escudo_ElSalvador.png';

        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            
            // Colores oficiales de El Salvador
            const blue = [0/255, 56/255, 147/255];     // #003893 - Azul
            const white = [1, 1, 1];                   // Blanco

            // Proporciones de las franjas: azul (1), blanca (1), azul (1)
            const stripeH = h / 3;  // Cada franja ocupa 1/3 de la altura

            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };

            // Franja azul (superior)
            pushRect(x, y, x + w, y + stripeH, blue);
            
            // Franja blanca (media)
            pushRect(x, y + stripeH, x + w, y + stripeH * 2, white);
            
            // Franja azul (inferior)
            pushRect(x, y + stripeH * 2, x + w, y + h, blue);

            return { positions, colors };
        };

        // Overlay: dibujar el escudo nacional centrado en la franja blanca
        fn.overlay = (ctx, x, y, w, h) => {
            const stripeH = h / 3; // altura de cada franja
            const escudoSize = Math.min(w, stripeH) * 0.9; // tamaño del escudo

            const drawEscudo = () => {
                const ratio = (escudoImg.naturalWidth || 1) / (escudoImg.naturalHeight || 1);
                const escudoW = escudoSize * ratio;
                const escudoH = escudoSize;
                
                // Centrar el escudo horizontalmente y verticalmente en la franja blanca
                const cx = x + w / 2;
                const cy = y + stripeH + stripeH / 2; // Centro de la franja blanca
                const dx = cx - escudoW / 2;
                const dy = cy - escudoH / 2;

                ctx.save();
                // Recortar al área de la franja blanca
                ctx.beginPath();
                ctx.rect(x, y + stripeH, w, stripeH);
                ctx.clip();
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(escudoImg, dx, dy, escudoW, escudoH);
                ctx.restore();
            };

            if (escudoImg.complete && escudoImg.naturalWidth > 0) {
                drawEscudo();
            } else {
                escudoImg.onload = () => {
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(x, y + stripeH, w, stripeH);
                    ctx.clip();
                    drawEscudo();
                    ctx.restore();
                };
            }
        };

        return fn;
    })(),

    uae: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        // Colores oficiales de Emiratos Árabes Unidos
        const red = [206/255, 17/255, 38/255];    // #CE1126 - Rojo
        const green = [0/255, 122/255, 61/255];   // #007A3D - Verde
        const white = [1, 1, 1];                  // Blanco
        const black = [0, 0, 0];                  // Negro

        // Proporciones: franja vertical roja (1/4 del ancho) + tres franjas horizontales (1/3 cada una)
        const redW = w * 0.25;  // 25% del ancho para la franja roja vertical
        const stripeH = h / 3;  // Cada franja horizontal ocupa 1/3 de la altura

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0,
                x1, y0,
                x0, y1,
                x1, y0,
                x1, y1,
                x0, y1
            );
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };

        // Franja vertical roja (asta)
        pushRect(x, y, x + redW, y + h, red);
        
        // Franja horizontal verde (superior)
        pushRect(x + redW, y, x + w, y + stripeH, green);
        
        // Franja horizontal blanca (media)
        pushRect(x + redW, y + stripeH, x + w, y + stripeH * 2, white);
        
        // Franja horizontal negra (inferior)
        pushRect(x + redW, y + stripeH * 2, x + w, y + h, black);

        return { positions, colors };
    },

    eritrea: (() => {
        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
        
            // Colores de Eritrea - verde, azul y rojo
            const green = [0x43/255, 0xB0/255, 0x2A/255];  // Verde
            const blue  = [0x41/255, 0x8F/255, 0xDE/255];  // Azul
        
            // Dos franjas horizontales iguales
            const stripeH = h / 2;

            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };

            // Franja verde (superior)
            pushRect(x, y, x + w, y + stripeH, green);
            
            // Franja azul (inferior)
            pushRect(x, y + stripeH, x + w, y + h, blue);

            return { positions, colors };
        };

        // Overlay: dibujar el triángulo rojo encima
        fn.overlay = (ctx, x, y, w, h) => {
            const triangleW = w * 1; // 50% del ancho para el triángulo
            const red = [0xE4/255, 0x00/255, 0x2B/255];  // Rojo de Eritrea

            ctx.save();
            ctx.fillStyle = `rgb(${Math.round(red[0] * 255)}, ${Math.round(red[1] * 255)}, ${Math.round(red[2] * 255)})`;
            ctx.beginPath();
            ctx.moveTo(x, y);                    // Vértice superior izquierdo
            ctx.lineTo(x, y + h);                // Vértice inferior izquierdo
            ctx.lineTo(x + triangleW, y + h/2);  // Vértice derecho (centro vertical)
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };

        return fn;
    })(),

    slovakia: (() => {
        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
    
            // Colores de la bandera de Eslovaquia
            const white = [1, 1, 1];                // Blanco
            const blue  = [0x00/255, 0x43/255, 0x8C/255]; // Azul oscuro
            const red   = [0xEF/255, 0x33/255, 0x2A/255]; // Rojo brillante
    
            // Altura de cada franja (tres franjas iguales)
            const stripeH = h / 3;
    
            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };
    
            // Franja superior blanca
            pushRect(x, y, x + w, y + stripeH, white);
    
            // Franja del medio azul
            pushRect(x, y + stripeH, x + w, y + 2 * stripeH, blue);
    
            // Franja inferior roja
            pushRect(x, y + 2 * stripeH, x + w, y + h, red);
    
            return { positions, colors };
        };
    
        // Dibuja el escudo sobre la bandera
        fn.overlay = (ctx, x, y, w, h) => {
            const escudo = new Image();
            escudo.src = "Recursos_Renso/Escudo_Eslovaquia.png";
    
            // Cuando la imagen esté lista, dibujarla
            escudo.onload = () => {
                const escudoW = w * 0.25;   // 25% del ancho total
                const escudoH = escudoW * (escudo.height / escudo.width);
                const escudoX = x + w * 0.08;  // Margen izquierdo
                const escudoY = y + h * 0.25;  // Posicionado centrado verticalmente
                ctx.drawImage(escudo, escudoX, escudoY, escudoW, escudoH);
            };
        };
    
        return fn;
    })(),

    slovenia: (() => {
        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
    
            // Colores de la bandera de Eslovenia
            const white = [0xFF/255, 0xFF/255, 0xFF/255]; 
            const blue  = [0x00/255, 0x3D/255, 0xA5/255]; 
            const red   = [0xFF/255, 0x00/255, 0x00/255]; 
    
            const stripeH = h / 3;
    
            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };
    
            // Franja superior: blanco
            pushRect(x, y, x + w, y + stripeH, white);
            // Franja central: azul
            pushRect(x, y + stripeH, x + w, y + 2 * stripeH, blue);
            // Franja inferior: rojo
            pushRect(x, y + 2 * stripeH, x + w, y + h, red);
    
            return { positions, colors };
        };
    
        // Dibuja el escudo nacional sobre la bandera (Canvas)
        fn.overlay = (ctx, x, y, w, h) => {
            const escudo = new Image();
            escudo.src = "Recursos_Renso/Escudo_Eslovenia.png"; 
    
            escudo.onload = () => {
                const escudoW = w * 0.18;   // 🔹 Más grande: ~18% del ancho total
                const escudoH = escudoW * 1.25; // Mantiene proporción real del escudo
                const escudoX = x + w * 0.08;   // Margen izquierdo (ligeramente desplazado)
                const escudoY = y + h * 0.05;   // Posicionado para cruzar blanco y azul
            
                ctx.save();
                ctx.drawImage(escudo, escudoX, escudoY, escudoW, escudoH);
                ctx.restore();
            };
            
        };
    
        return fn;
    })(),

    usa: (() => {
        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
    
            // Colores oficiales
            const red   = [0xB2/255, 0x10/255, 0x1E/255]; // Rojo bandera
            const white = [1, 1, 1];
            const blue  = [0x3C/255, 0x3B/255, 0x6E/255]; // Azul bandera
    
            const stripeH = h / 13; // 13 franjas horizontales
    
            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };
    
            // Alternar 13 franjas rojas y blancas (comenzando con rojo)
            for (let i = 0; i < 13; i++) {
                const color = i % 2 === 0 ? red : white;
                const y0 = y + i * stripeH;
                const y1 = y0 + stripeH;
                pushRect(x, y0, x + w, y1, color);
            }
    
            return { positions, colors };
        };
    
    
        fn.overlay = (ctx, x, y, w, h) => {
            const cantonW = w * 0.4;        // Ancho del cantón
            const cantonH = h * (7 / 13);   // Alto del cantón
            const blue = "#3C3B6E";
    
            ctx.save();
            ctx.fillStyle = blue;
            ctx.fillRect(x, y, cantonW, cantonH);
    
            // Parámetros para las estrellas
            const rows = 9;  // 9 filas alternadas
            const colsOdd = 6; // Filas impares tienen 6 estrellas
            const colsEven = 5; // Filas pares tienen 5 estrellas
    
            const starSize = cantonH / 15; // Tamaño relativo
            const rowSpacing = cantonH / rows;
            const colSpacing = cantonW / colsOdd;
    
            ctx.fillStyle = "#FFFFFF";
    
            // Función para dibujar una estrella de 5 puntas
            const drawStar = (cx, cy, r) => {
                const spikes = 5;
                const outerRadius = r;
                const innerRadius = r * 0.382; // proporción áurea
                let rot = Math.PI / 2 * 3;
                let step = Math.PI / spikes;
    
                ctx.beginPath();
                ctx.moveTo(cx, cy - outerRadius);
                for (let i = 0; i < spikes; i++) {
                    ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
                    rot += step;
                    ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
                    rot += step;
                }
                ctx.lineTo(cx, cy - outerRadius);
                ctx.closePath();
                ctx.fill();
            };
    
            for (let row = 0; row < rows; row++) {
                const isEvenRow = row % 2 === 1;
                const numStars = isEvenRow ? colsEven : colsOdd;
                const xOffset = isEvenRow ? colSpacing / 2 : 0;
    
                for (let col = 0; col < numStars; col++) {
                    const cx = x + xOffset + col * colSpacing + colSpacing / 2.2;
                    const cy = y + row * rowSpacing + rowSpacing / 2;
                    drawStar(cx, cy, starSize);
                }
            }
    
            ctx.restore();
        };
    
        return fn;
    })(),
    
    estonia: (() => {
        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
    
            // Colores oficiales de Estonia
            const blue  = [0x00/255, 0x60/255, 0xB0/255]; // Azul (#0060B0)
            const black = [0x00/255, 0x00/255, 0x00/255]; // Negro (#000000)
            const white = [0xFF/255, 0xFF/255, 0xFF/255]; // Blanco (#FFFFFF)
    
            const stripeH = h / 3;
    
            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };
    
            // Franja superior: azul
            pushRect(x, y, x + w, y + stripeH, blue);
            // Franja del medio: negro
            pushRect(x, y + stripeH, x + w, y + 2 * stripeH, black);
            // Franja inferior: blanco
            pushRect(x, y + 2 * stripeH, x + w, y + h, white);
    
            return { positions, colors };
        };
    
        
        fn.overlay = (ctx, x, y, w, h) => {
        };
    
        return fn;
    })(),

    ethiopia: (() => {
        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
    
            // Colores oficiales 🇪🇹
            const green  = [0x00/255, 0x9A/255, 0x44/255]; // Verde
            const yellow = [0xFF/255, 0xD1/255, 0x00/255]; // Amarillo
            const red    = [0xEF/255, 0x33/255, 0x2A/255]; // Rojo
    
            const stripeH = h / 3;
    
            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(
                    x0, y0,
                    x1, y0,
                    x0, y1,
                    x1, y0,
                    x1, y1,
                    x0, y1
                );
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };
    
            // Franjas horizontales
            pushRect(x, y, x + w, y + stripeH, green);
            pushRect(x, y + stripeH, x + w, y + 2 * stripeH, yellow);
            pushRect(x, y + 2 * stripeH, x + w, y + h, red);
    
            return { positions, colors };
        };
    
        fn.overlay = (ctx, x, y, w, h) => {
            const centerX = x + w / 2;
            const centerY = y + h / 2;
            const circleR = h * 0.25;
            const blue = "#0F47AF";
            const yellow = "#FFD100";
    
            ctx.save();
    
            ctx.beginPath();
            ctx.arc(centerX, centerY, circleR, 0, Math.PI * 2);
            ctx.fillStyle = blue;
            ctx.fill();
    
            const outerR = circleR * 0.85;
            const innerR = circleR * 0.35;
            const points = 5;
            const angleOffset = -Math.PI / 2;
    
            // Dibujar estrella completa con relleno azul y borde amarillo
            ctx.beginPath();
            for (let i = 0; i < points * 2; i++) {
                const r = (i % 2 === 0) ? outerR : innerR;
                const angle = angleOffset + (i * Math.PI) / points;
                const px = centerX + Math.cos(angle) * r;
                const py = centerY + Math.sin(angle) * r;
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
    
            // Fondo azul dentro de la estrella
            ctx.fillStyle = blue;
            ctx.fill();
    
            // Borde amarillo (estrella delineada)
            ctx.strokeStyle = yellow;
            ctx.lineWidth = h * 0.012;
            ctx.stroke();
    
            ctx.strokeStyle = yellow;
            ctx.lineWidth = h * 0.007;
            for (let i = 0; i < 5; i++) {
                const angle = angleOffset + (i * 2 * Math.PI) / points;
                const xEnd = centerX + Math.cos(angle) * outerR;
                const yEnd = centerY + Math.sin(angle) * outerR;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(xEnd, yEnd);
                ctx.stroke();
            }
    
            ctx.restore();
        };
    
        return fn;
    })(),
    
    
    
    

    
    
};

// Placeholder para banderas sin implementación
function createPlaceholderFlag(x, y, w, h) {
    const color = [
        131 / 255,
        197 / 255,
        190 / 255
    ];
    
    return {
        positions: [x, y, x+w, y, x, y+h, x+w, y, x+w, y+h, x, y+h],
        colors: new Array(6).fill(color).flat()
    };
}

// ============================================
// GENERACIÓN DINÁMICA DE ELEMENTOS
// ============================================

function initializeGallery() {
    const gallery = document.querySelector('.flags-gallery');
    const flagsListContainer = document.getElementById('flagsListContainer');
    const sortedFlags = [...FLAGS_CONFIG].sort((a, b) => 
        a.name.localeCompare(b.name, 'es')
    );
    
    // Genera elementos de galería
    sortedFlags.forEach((flag, index) => {
        const flagFunction = flags[flag.key] || createPlaceholderFlag;
        
        const flagItem = document.createElement('div');
        flagItem.className = 'flag-item';
        
        const canvas = document.createElement('canvas');
        canvas.id = `${flag.key}Flag`;
        canvas.className = 'flag-canvas';
        canvas.width = CANVAS_CONFIG.gallery.width;
        canvas.height = CANVAS_CONFIG.gallery.height;
        canvas.onclick = () => showFullscreen(flag.key);
        
        const name = document.createElement('p');
        name.className = 'flag-name';
        name.textContent = flag.name;
        
        flagItem.appendChild(canvas);
        flagItem.appendChild(name);
        gallery.appendChild(flagItem);
        
        // Renderizado escalonado para evitar sobrecarga
        setTimeout(() => {
            drawFlagToCanvas(canvas, CANVAS_CONFIG.gallery.flagWidth, flagFunction);
        }, index * 10);
    });
    
    // Generar lista lateral
    sortedFlags.forEach(flag => {
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'flag-link';
        link.textContent = `${flag.emoji} ${flag.name}`;
        link.dataset.countryName = normalizeText(flag.name);
        link.onclick = (e) => {
            e.preventDefault();
            showFullscreen(flag.key);
        };
        flagsListContainer.appendChild(link);
    });
    
    setupSearch();
}

// ============================================
// FUNCIONALIDAD DE BÚSQUEDA
// ============================================

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const flagLinks = document.querySelectorAll('.flag-link');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = normalizeText(e.target.value.trim());
        flagLinks.forEach(link => {
            const countryName = normalizeText(link.dataset.countryName);
            link.style.display = countryName.includes(searchTerm) ? 'block' : 'none';
        });
    });
    
    // Limpiar búsqueda con ESC
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            flagLinks.forEach(link => link.style.display = 'block');
        }
    });
}

// =========================
// FUNCIONALIDAD FULLSCREEN
// =========================

let fullscreenCanvas, isResizing = false, flagWidth = 1400;
let startX, startY, startWidth, currentFlag;

function showFullscreen(country) {
    const flagConfig = FLAGS_CONFIG.find(f => f.key === country);
    if (!flagConfig) return;
    
    currentFlag = country;
    const flagFunction = flags[country] || createPlaceholderFlag;
    
    fullscreenCanvas = document.getElementById('fullscreenCanvas');
    document.getElementById('fullscreenView').style.display = 'flex';
    document.getElementById('fullscreenTitle').textContent = `Bandera de ${flagConfig.name}`;
    
    drawFlagToCanvas(fullscreenCanvas, flagWidth, flagFunction);
    
    fullscreenCanvas.onmousemove = handleMouseMove;
    fullscreenCanvas.onmousedown = handleMouseDown;
    fullscreenCanvas.onmouseup = () => isResizing = false;
    document.onmouseup = () => isResizing = false;
}

function handleMouseMove(e) {
    const rect = fullscreenCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    
    if (isResizing) {
        const dx = mx - startX;
        flagWidth = Math.max(400, Math.min(1500, startWidth + dx * 2));
        const flagFunction = flags[currentFlag] || createPlaceholderFlag;
        drawFlagToCanvas(fullscreenCanvas, flagWidth, flagFunction);
    } else {
        const flag = {
            x: (fullscreenCanvas.width - flagWidth) / 2,
            y: (fullscreenCanvas.height - flagWidth * 0.625) / 2,
            width: flagWidth,
            height: flagWidth * 0.625
        };
        const corner = { x: flag.x + flag.width, y: flag.y + flag.height };
        const isNearCorner = Math.abs(mx - corner.x) < 20 && Math.abs(my - corner.y) < 20;
        fullscreenCanvas.style.cursor = isNearCorner ? 'nwse-resize' : 'default';
    }
}

function handleMouseDown(e) {
    if (fullscreenCanvas.style.cursor === 'nwse-resize') {
        isResizing = true;
        const rect = fullscreenCanvas.getBoundingClientRect();
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;
        startWidth = flagWidth;
    }
}

function closeFullscreen() {
    document.getElementById('fullscreenView').style.display = 'none';
    fullscreenCanvas.onmousemove = null;
    fullscreenCanvas.onmousedown = null;
    fullscreenCanvas.onmouseup = null;
    document.onmouseup = null;
}

// Cerrar fullscreen con ESC
document.onkeydown = (e) => {
    if (e.key === 'Escape') {
        const fullscreenView = document.getElementById('fullscreenView');
        if (fullscreenView && fullscreenView.style.display === 'flex') {
            closeFullscreen();
        }
    }
};

//Init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGallery);
} else {
    initializeGallery();
}