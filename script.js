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
    // Configurar scissor para limitar el área de dibujo
	const scissorX = Math.floor(x);
	const scissorY = Math.floor(offscreenCanvas.height - (y + height));
	const scissorW = Math.floor(width);
	const scissorH = Math.floor(height);
	gl.enable(gl.SCISSOR_TEST);
	gl.scissor(scissorX, scissorY, scissorW, scissorH);
    gl.drawArrays(gl.TRIANGLES, 0, positions.length / 2);
	gl.disable(gl.SCISSOR_TEST);
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

netherlands: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const red = [174 / 255, 28 / 255, 40 / 255];   // #AE1C28
        const white = [1, 1, 1];                       // Blanco
        const blue = [33 / 255, 70 / 255, 139 / 255];  // #21468B

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

        // Rojo arriba
        pushRect(x, y, x + w, y + stripeH, red);
        // Blanco centro
        pushRect(x, y + stripeH, x + w, y + 2 * stripeH, white);
        // Azul abajo
        pushRect(x, y + 2 * stripeH, x + w, y + 3 * stripeH, blue);

        return { positions, colors };
    };

    return fn;
})(),

niger: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Colores oficiales aproximados
        const orange = [1.0, 0.4, 0.0]; // #FF7F00
        const white  = [1.0, 1.0, 1.0];
        const green  = [0.0, 0.6, 0.2]; // #009E49

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

        // Naranja arriba
        pushRect(x, y, x + w, y + stripeH, orange);
        // Blanco medio
        pushRect(x, y + stripeH, x + w, y + 2 * stripeH, white);
        // Verde abajo
        pushRect(x, y + 2 * stripeH, x + w, y + 3 * stripeH, green);

        return { positions, colors };
    };

    // Overlay: círculo naranja centrado en la franja blanca
    fn.overlay = (ctx, x, y, w, h) => {
        const stripeH = h / 3;
        const cx = x + w / 2;
        const cy = y + stripeH * 1.5; // centro de la franja blanca
        const radius = stripeH * 0.35;

        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FF7F00';
        ctx.fill();
        ctx.restore();
    };

    return fn;
})(),

mozambique: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Colores normalizados
        const green  = [0.0, 0.52, 0.27]; // verde
        const black  = [0.0, 0.0, 0.0];   // negro
        const yellow = [1.0, 0.8, 0.0];   // amarillo
        const red    = [0.78, 0.13, 0.17]; // triángulo rojo
        const white  = [1.0, 1.0, 1.0];   // blanco (fimbrias)

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

        // Parámetros de franjas
        const whiteThick = h * 0.02;
        const stripeH = (h - 2 * whiteThick) / 3;

        // Franja verde (superior)
        pushRect(x, y, x + w, y + stripeH, green);

        // Franja blanca
        pushRect(x, y + stripeH, x + w, y + stripeH + whiteThick, white);

        // Franja negra (centro)
        pushRect(x, y + stripeH + whiteThick, x + w, y + 2 * stripeH + whiteThick, black);

        // Franja blanca
        pushRect(x, y + 2 * stripeH + whiteThick, x + w, y + 2 * stripeH + 2 * whiteThick, white);

        // Franja amarilla (inferior)
        pushRect(x, y + 2 * stripeH + 2 * whiteThick, x + w, y + h, yellow);

        // Triángulo rojo (lado izquierdo)
        const triW = w * 0.35;
        positions.push(
            x, y,
            x + triW, y + h / 2,
            x, y + h,
            x, y,
            x + triW, y + h / 2,
            x, y + h
        );
        colors.push(...red, ...red, ...red, ...red, ...red, ...red);

        return { positions, colors };
    };

    // --- Overlay: estrella amarilla en el triángulo ---
    fn.overlay = (ctx, x, y, w, h) => {
  const triW = w * 0.35;
  const cx = x + triW * 0.30;     // un poco hacia la derecha en el triángulo
  const cy = y + h / 2;           // verticalmente centro
  const R  = triW * 0.30;         // radio exterior de la estrella
  const r  = R * 0.382;           // radio interior

  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const ang = -Math.PI/2 + i * (Math.PI/5);
    const rr = (i % 2 === 0) ? R : r;
    const px = cx + Math.cos(ang) * rr;
    const py = cy + Math.sin(ang) * rr;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fillStyle = '#f2c500'; // color amarillo de la estrella
  ctx.fill();
  ctx.restore();
};

    return fn;
})(),

namibia: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const blue  = [0/255, 53/255, 128/255]; 
        const red   = [210/255, 16/255, 52/255];  
        const green = [0/255, 149/255, 67/255];
        const white = [1.0, 1.0, 1.0];

        const pushTriangle = (p1, p2, p3, color) => {
            positions.push(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
            colors.push(...color, ...color, ...color);
        };

        // Primero dibujar los triángulos base
        pushTriangle([x, y], [x + w, y], [x, y + h], blue);
        pushTriangle([x + w, y], [x + w, y + h], [x, y + h], green);

        // Calcular la diagonal principal
        const diagonalStart = [x, y + h];
        const diagonalEnd = [x + w, y];
        
        // Vector diagonal y perpendicular
        const diagVec = [w, -h];
        const diagLength = Math.sqrt(w * w + h * h);
        const perpVec = [h / diagLength, w / diagLength];

        // Anchuras de las franjas (proporciones basadas en la altura)
        const totalStripeWidth = h * 0.25;
		// Hacer el rojo un poco más ancho y el blanco un poco más delgado
		const whiteStripeWidth = totalStripeWidth * 0.20; // antes: 0.25
		const redStripeWidth = totalStripeWidth - 2 * whiteStripeWidth; // ≈ 0.60 del total

        // Función para crear polígonos de franja recortados
        const createClippedStripe = (centerOffset, width, color) => {
            const halfWidth = width / 2;
            
            // Puntos de la franja sin recortar
            const topStart = [
                diagonalStart[0] + perpVec[0] * (centerOffset + halfWidth),
                diagonalStart[1] + perpVec[1] * (centerOffset + halfWidth)
            ];
            const topEnd = [
                diagonalEnd[0] + perpVec[0] * (centerOffset + halfWidth),
                diagonalEnd[1] + perpVec[1] * (centerOffset + halfWidth)
            ];
            const bottomStart = [
                diagonalStart[0] + perpVec[0] * (centerOffset - halfWidth),
                diagonalStart[1] + perpVec[1] * (centerOffset - halfWidth)
            ];
            const bottomEnd = [
                diagonalEnd[0] + perpVec[0] * (centerOffset - halfWidth),
                diagonalEnd[1] + perpVec[1] * (centerOffset - halfWidth)
            ];

            positions.push(
                topStart[0], topStart[1], topEnd[0], topEnd[1], bottomStart[0], bottomStart[1],
                topEnd[0], topEnd[1], bottomEnd[0], bottomEnd[1], bottomStart[0], bottomStart[1]
            );
            
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };

        // Crear las tres franjas
        createClippedStripe(0, redStripeWidth, red);
        createClippedStripe(redStripeWidth/2 + whiteStripeWidth/2, whiteStripeWidth, white);
        createClippedStripe(-redStripeWidth/2 - whiteStripeWidth/2, whiteStripeWidth, white);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        const cx = x + h / 3;
        const cy = y + h / 3;
        
        const outerRadius = h / 6;
        const rayStartRadius = outerRadius * 0.55;
        const centerDiscRadius = outerRadius * 0.50;

        ctx.save();
        ctx.fillStyle = '#FFC72C'; 

        // Círculo central
        ctx.beginPath();
        ctx.arc(cx, cy, centerDiscRadius, 0, Math.PI * 2);
        ctx.fill();

        // 12 rayos triangulares
        const numRays = 12;
        for (let i = 0; i < numRays; i++) {
            const angle = (i / numRays) * Math.PI * 2;
            const rayBaseWidthAngle = Math.PI / 15;

            const p1x = cx + Math.cos(angle) * outerRadius;
            const p1y = cy + Math.sin(angle) * outerRadius;
            const p2x = cx + Math.cos(angle - rayBaseWidthAngle) * rayStartRadius;
            const p2y = cy + Math.sin(angle - rayBaseWidthAngle) * rayStartRadius;
            const p3x = cx + Math.cos(angle + rayBaseWidthAngle) * rayStartRadius;
            const p3y = cy + Math.sin(angle + rayBaseWidthAngle) * rayStartRadius;
            
            ctx.beginPath();
            ctx.moveTo(p1x, p1y);
            ctx.lineTo(p2x, p2y);
            ctx.lineTo(p3x, p3y);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();
    };

    return fn;
})(),

nauru: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Colores oficiales (según estándar Pantone)
        const blue   = [0.0, 0.24, 0.59];   // Azul marino (#002B7F)
        const yellow = [1.0, 0.84, 0.0];    // Amarillo (#FFD100)
        const white  = [1.0, 1.0, 1.0];     // Blanco

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0,
                x1, y0,
                x0, y1,
                x1, y0,
                x1, y1,
                x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        // Fondo azul
        pushRect(x, y, x + w, y + h, blue);

        // Franja amarilla horizontal (en el centro vertical)
        const stripeH = h * 0.095;
        const stripeY = y + h / 2 - stripeH / 2;
        pushRect(x, stripeY, x + w, stripeY + stripeH, yellow);

        return { positions, colors };
    };

    // --- Overlay: estrella blanca de 12 puntas ---
    fn.overlay = (ctx, x, y, w, h) => {
        const stripeH = h * 0.06;
        const cx = x + w * 0.17;          // posición izquierda de la franja amarilla
        const cy = y + h / 2 + stripeH * 2.3; // justo debajo de la franja
        const R = h * 0.075;               // radio exterior de la estrella
        const r = R * 0.5;                // radio interior

        ctx.save();
        ctx.beginPath();
        for (let i = 0; i < 24; i++) {
            const ang = -Math.PI / 2 + (i * Math.PI) / 12; // 12 puntas = 24 vértices
            const rr = (i % 2 === 0) ? R : r;
            const px = cx + Math.cos(ang) * rr;
            const py = cy + Math.sin(ang) * rr;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.restore();
    };

    return fn;
})(),

nicaragua: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Colores oficiales
        const blue  = [0.0, 0.33, 0.71]; // Azul (#0067C6)
        const white = [1.0, 1.0, 1.0];   // Blanco

        // Función auxiliar para franjas
        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0,
                x1, y0,
                x0, y1,
                x1, y0,
                x1, y1,
                x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        // --- Franja superior azul ---
        pushRect(x, y, x + w, y + h / 3, blue);

        // --- Franja central blanca ---
        pushRect(x, y + h / 3, x + w, y + (2 * h) / 3, white);

        // --- Franja inferior azul ---
        pushRect(x, y + (2 * h) / 3, x + w, y + h, blue);

        return { positions, colors };
    };

    // No hay escudo ni símbolo
    fn.overlay = (ctx, x, y, w, h) => {};

    return fn;
})(),

nigeria: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const green = [0.0, 0.56, 0.0];
        const white = [1.0, 1.0, 1.0];

        const pushRect = (x0, y0, x1, y1, color) => {
        positions.push(
                x0, y0, x1, y0, x0, y1,
                x1, y0, x1, y1, x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        const stripeW = w / 3;

        pushRect(x, y, x + stripeW, y + h, green);
        pushRect(x + stripeW, y, x + 2 * stripeW, y + h, white);
        pushRect(x + 2 * stripeW, y, x + w, y + h, green);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        // Círculo verde centrado en la franja blanca
        const cx = x + w / 2;
        const cy = y + h / 2;
        const radius = Math.min(w, h) * 0.15; // tamaño proporcional
        ctx.save();
        // Recortar a la franja blanca para evitar sangrados
        ctx.beginPath();
        ctx.rect(x + w/3, y, w/3, h);
        ctx.clip();
        ctx.fillStyle = '#008753'; // verde de Nigeria
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    };

    return fn;
})(),

norway: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const red   = [0.84, 0.0, 0.09];
        const white = [1.0, 1.0, 1.0];
        const blue  = [0.0, 0.19, 0.57];

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0, x1, y0, x0, y1,
                x1, y0, x1, y1, x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        // Proporciones oficiales simplificadas (unidades):
        // Horizontal: 6 (rojo) + 1 (blanco) + 2 (azul) + 1 (blanco) + 12 (rojo)
        // Vertical:   6 (rojo) + 1 (blanco) + 2 (azul) + 1 (blanco) + 6 (rojo)
        const unitX = w / 22;
        const unitY = h / 16;

        // Fondo rojo
        // Fondo azul (campo de la bandera)
        pushRect(x, y, x + w, y + h, blue);

        // Bandas blancas
        // Vertical blanca centrando la azul (x = 6u a 6u+4u)
        const whiteVx0 = x + 6 * unitX;
        const whiteVx1 = x + 10 * unitX; // 1u blanco + 2u azul + 1u blanco
        pushRect(whiteVx0, y, whiteVx1, y + h, white);
        // Horizontal blanca (y = 6u a 6u+4u)
        const whiteHy0 = y + 6 * unitY;
        const whiteHy1 = y + 10 * unitY;
        pushRect(x, whiteHy0, x + w, whiteHy1, white);

        // Bandas azules al centro de las blancas (2u de ancho)
        const blueVx0 = x + 7 * unitX;
        const blueVx1 = x + 9 * unitX;
        pushRect(blueVx0, y, blueVx1, y + h, blue);
        const blueHy0 = y + 7 * unitY;
        const blueHy1 = y + 9 * unitY;
        pushRect(x, blueHy0, x + w, blueHy1, blue);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {};

    return fn;
})(),
newZealand: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const red   = [200/255, 16/255, 46/255];   // #C8102E
        const white = [1.0, 1.0, 1.0];            // #FFFFFF
        const blue  = [1/255, 33/255, 105/255];   // #012169 (campo y cantón)

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0, x1, y0, x0, y1,
                x1, y0, x1, y1, x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        // Fondo azul del pabellón
        pushRect(x, y, x + w, y + h, blue);

        // Union Jack en el cantón: ancho 1/2 y alto 1/2 del pabellón
        const unionW = w * 0.5;
        const unionH = h * 0.5;
        const ux = x;
        const uy = y;

        const drawUnionJack = (ctx, ux, uy, unionW, unionH) => {
            ctx.save();
            ctx.translate(ux, uy);
            // Fondo azul del cantón (color CSS)
            ctx.fillStyle = '#012169';
            ctx.fillRect(0, 0, unionW, unionH);

            // Recortar todo lo que se dibuje del Union Jack al rectángulo del cantón
            ctx.save();
            ctx.beginPath();
            ctx.rect(0, 0, unionW, unionH);
            ctx.clip();
            ctx.lineCap = 'butt';

            // Diagonales blancas (ligeramente más delgadas)
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = unionH * 0.10;
            ctx.beginPath();
            ctx.moveTo(0, 0); ctx.lineTo(unionW, unionH);
            ctx.moveTo(unionW, 0); ctx.lineTo(0, unionH);
            ctx.stroke();

            // Diagonales rojas centradas sobre blancas (más delgadas)
            ctx.strokeStyle = '#C8102E';
            ctx.lineWidth = unionH * 0.05;
        ctx.beginPath();
            ctx.moveTo(0, 0); ctx.lineTo(unionW, unionH);
            ctx.moveTo(unionW, 0); ctx.lineTo(0, unionH);
            ctx.stroke();

            // Cruces ortogonales (blanca gruesa, luego roja más estrecha)
            // Vertical/Horiz blanca con recorte al rectángulo del cantón
            ctx.fillStyle = '#FFFFFF';
            const whiteBarW = unionW * 0.16;
            const whiteBarH = unionH * 0.16;
            ctx.fillRect(unionW/2 - whiteBarW/2, 0, whiteBarW, unionH);
            ctx.fillRect(0, unionH/2 - whiteBarH/2, unionW, whiteBarH);
            // Roja
            ctx.fillStyle = '#C8102E';
            const redBarW = whiteBarW * 0.62;
            const redBarH = whiteBarH * 0.62;
            ctx.fillRect(unionW/2 - redBarW/2, 0, redBarW, unionH);
            ctx.fillRect(0, unionH/2 - redBarH/2, unionW, redBarH);

            ctx.restore(); // fin clip cantón
            ctx.restore();
        };

        fn.overlay = (ctx, x, y, w, h) => {
            drawUnionJack(ctx, ux, uy, unionW, unionH);

            // Estrellas (Crux) posiciones y tamaños aproximados a la especificación
            const stars = [
                { cx: x + w * 0.80, cy: y + h * 0.20, R: h * 0.052 }, // top-left of cluster
                { cx: x + w * 0.90, cy: y + h * 0.35, R: h * 0.042 }, // small upper-right
                { cx: x + w * 0.69, cy: y + h * 0.42, R: h * 0.060 }, // middle
                { cx: x + w * 0.80, cy: y + h * 0.73, R: h * 0.082 }  // largest bottom-right
            ];

            const drawStarPath = (cx, cy, rOuter, rInner = rOuter * 0.5, points = 5) => {
            ctx.beginPath();
                for (let i = 0; i < points * 2; i++) {
                    const angle = Math.PI / points * i - Math.PI / 2;
                    const radius = (i % 2 === 0) ? rOuter : rInner;
                    const px = cx + Math.cos(angle) * radius;
                    const py = cy + Math.sin(angle) * radius;
                    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                }
            ctx.closePath();
            };

            ctx.save();
            for (const s of stars) {
                // Trazo blanco (borde)
                drawStarPath(s.cx, s.cy, s.R, s.R * 0.5);
                ctx.lineWidth = s.R * 0.18;
                ctx.strokeStyle = '#FFFFFF';
                ctx.stroke();
                // Relleno rojo
                drawStarPath(s.cx, s.cy, s.R, s.R * 0.5);
                ctx.fillStyle = '#C8102E';
            ctx.fill();
        }
        ctx.restore();
        };

        return { positions, colors };
    };

    return fn;
})(),


oman: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const red   = [0.84, 0.0, 0.09];
        const white = [1.0, 1.0, 1.0];
        const green = [0.0, 0.56, 0.0];

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0, x1, y0, x0, y1,
                x1, y0, x1, y1, x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        const sideW = w * 0.25;
        const stripeH = h / 2;
        const redH = h * 0.29; 

        pushRect(x, y, x + sideW, y + h, red);
        pushRect(x + sideW, y, x + w, y + stripeH - redH/2, white);
        pushRect(x + sideW, y + stripeH - redH/2, x + w, y + stripeH + redH/2, red);
        pushRect(x + sideW, y + stripeH + redH/2, x + w, y + h, green);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {};

    return fn;
})(),

pakistan: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const green = [0.0, 0.39, 0.0];
        const white = [1.0, 1.0, 1.0];

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0, x1, y0, x0, y1,
                x1, y0, x1, y1, x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        const sideW = w * 0.25;

        pushRect(x, y, x + sideW, y + h, white);
        pushRect(x + sideW, y, x + w, y + h, green);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        const sideW = w * 0.25;
        const cx = x + sideW + (w - sideW) * 0.45;
        const cy = y + h / 2;
        const rMoon = h * 0.18; // tamaño media luna
        const rStar = h * 0.08; // tamaño estrella

        ctx.save();
        ctx.fillStyle = 'white';

        // Media luna rotada
        ctx.translate(cx, cy);
        ctx.rotate(-Math.PI/9); // rotar -20 grados
        ctx.beginPath();
        ctx.arc(0, 0, rMoon, 0.3 * Math.PI, 1.7 * Math.PI, false);
        ctx.arc(rMoon*0.3, 0, rMoon*0.7, 1.7 * Math.PI, 0.3 * Math.PI, true);
        ctx.closePath();
        ctx.fill();
        ctx.setTransform(1,0,0,1,0,0); // reset transform

        // Estrella de 5 puntas afuera de la luna
        const drawStar = (ctx, cx, cy, rOuter, rInner = rOuter*0.5, points=5) => {
            ctx.beginPath();
            for (let i = 0; i < points*2; i++) {
                const angle = Math.PI / points * i - Math.PI/2;
                const radius = i % 2 === 0 ? rOuter : rInner;
                ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
            }
            ctx.closePath();
            ctx.fill();
        };

        drawStar(ctx, cx + rMoon*1.2, cy - rMoon*0.5, rStar);

        ctx.restore();
    };

    return fn;
})(),

palau: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const blue = [0.0, 0.71, 0.92];
        const yellow = [1.0, 0.87, 0.0];

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0, x1, y0, x0, y1,
                x1, y0, x1, y1, x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        pushRect(x, y, x + w, y + h, blue);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        const cx = x + w * 0.45; // círculo ligeramente desplazado a la izquierda
        const cy = y + h / 2;
        const r = h * 0.3;

        ctx.save();
        ctx.fillStyle = '#FFD700'; // amarillo
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    };

    return fn;
})(),

palestine: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const black = [0.0, 0.0, 0.0];
        const white = [1.0, 1.0, 1.0];
        const green = [0.0, 0.56, 0.0];
        const red   = [0.84, 0.0, 0.09];

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0, x1, y0, x0, y1,
                x1, y0, x1, y1, x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        const stripeH = h / 3;
        pushRect(x, y, x + w, y + stripeH, black);
        pushRect(x, y + stripeH, x + w, y + 2*stripeH, white);
        pushRect(x, y + 2*stripeH, x + w, y + h, green);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        ctx.save();
        ctx.fillStyle = '#D60000'; // rojo
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + w * 0.35, y + h / 2);
        ctx.lineTo(x, y + h);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    };

    return fn;
})(),

panama: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const red   = [0.84, 0.0, 0.09];
        const blue  = [0.0, 0.19, 0.57];
        const white = [1.0, 1.0, 1.0];

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0, x1, y0, x0, y1,
                x1, y0, x1, y1, x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        const halfW = w / 2;
        const halfH = h / 2;

        pushRect(x, y, x + halfW, y + halfH, white); // sup izq
        pushRect(x + halfW, y, x + w, y + halfH, red); // sup der
        pushRect(x, y + halfH, x + halfW, y + h, blue); // inf izq
        pushRect(x + halfW, y + halfH, x + w, y + h, white); // inf der

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        const halfW = w / 2;
        const halfH = h / 2;
        const rStar = Math.min(w, h) * 0.07;

        const drawStar = (ctx, cx, cy, rOuter, rInner = rOuter*0.382, points=5) => {
            ctx.beginPath();
            for (let i = 0; i < points*2; i++) {
                const angle = Math.PI / points * i - Math.PI/2; // 0° arriba
                const radius = i % 2 === 0 ? rOuter : rInner;
                ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
            }
            ctx.closePath();
            ctx.fill();
        };

        ctx.save();

        ctx.fillStyle = 'blue';
        drawStar(ctx, x + halfW/2, y + halfH/2, rStar); // estrella sup izq

        ctx.fillStyle = 'red';
        drawStar(ctx, x + halfW + halfW/2, y + halfH + halfH/2, rStar); // estrella inf der

        ctx.restore();
    };

    return fn;
})(),

papuaNewGuinea: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const red = [0.84, 0.0, 0.09];
        const black = [0.0, 0.0, 0.0];

        // Triángulo negro (inferior izquierda)
        positions.push(
            x, y + h,
            x, y,
            x + w, y + h
        );
        colors.push(...Array(3).fill(black).flat());

        // Triángulo rojo (superior derecha)
        positions.push(
            x, y,
            x + w, y,
            x + w, y + h
        );
        colors.push(...Array(3).fill(red).flat());

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        ctx.save();
        ctx.fillStyle = 'white';

        const drawStar = (ctx, cx, cy, rOuter, rInner = rOuter*0.382, points=5) => {
            ctx.beginPath();
            for (let i = 0; i < points*2; i++) {
                const angle = Math.PI / points * i - Math.PI/2;
                const radius = i % 2 === 0 ? rOuter : rInner;
                ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
            }
            ctx.closePath();
            ctx.fill();
        };

        // Posiciones de la Cruz del Sur (triángulo negro)
            const starData = [
        [x + w*0.23, y + h*0.36, h*0.05],  // estrella grande
        [x + w*0.30, y + h*0.48, h*0.05],
        [x + w*0.15, y + h*0.50, h*0.045],
        [x + w*0.25, y + h*0.75, h*0.045],
        [x + w*0.27, y + h*0.63, h*0.035]
    ];

        for (let [cx, cy, r] of starData) {
            drawStar(ctx, cx, cy, r);
        }

        ctx.restore();
    };

    return fn;
})(),

paraguay: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const red   = [0.84, 0.0, 0.09];
        const white = [1.0, 1.0, 1.0];
        const blue  = [0.0, 0.19, 0.57];

        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(
                x0, y0, x1, y0, x0, y1,
                x1, y0, x1, y1, x0, y1
            );
            colors.push(...Array(6).fill(color).flat());
        };

        const stripeH = h / 3;
        pushRect(x, y, x + w, y + stripeH, red);
        pushRect(x, y + stripeH, x + w, y + 2*stripeH, white);
        pushRect(x, y + 2*stripeH, x + w, y + h, blue);

        return { positions, colors };
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