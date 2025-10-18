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
    { key: 'japan', name: 'Japón', emoji: '🇯🇵' },
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
    [vertexShader, fragmentShader].forEach((src, i) => {
        const shaderType = i ? sharedGL.FRAGMENT_SHADER : sharedGL.VERTEX_SHADER;
        const shader = sharedGL.createShader(shaderType);
        sharedGL.shaderSource(shader, src);
        sharedGL.compileShader(shader);
        sharedGL.attachShader(sharedProgram, shader);
    });
    sharedGL.linkProgram(sharedProgram);
    
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
    })
};

// Placeholder para banderas sin implementación
function createPlaceholderFlag(x, y, w, h) {
    const hash = (x + y + w + h) % 360;
    const hue = hash / 360;
    const color = [
        0x00 / 255,  // R: 131/255 = 0.514
        0x6d / 255,  // G: 197/255 = 0.773
        0x77 / 255   // B: 190/255 = 0.745
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