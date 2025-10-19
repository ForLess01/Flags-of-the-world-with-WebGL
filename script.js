const CANVAS_CONFIG = {
    gallery: {width: 380, height: 250, flagWidth: 320},
    fullscreen: {width: 1600, height: 1000, flagWidth: 1200}
};

// Lista de Bandera A Z
const FLAGS_CONFIG = [
    // A
    {key: 'afghanistan', name: 'Afganistán', emoji: '🇦🇫'},
    {key: 'albania', name: 'Albania', emoji: '🇦🇱'},
    {key: 'germany', name: 'Alemania', emoji: '🇩🇪'},
    {key: 'andorra', name: 'Andorra', emoji: '🇦🇩'},
    {key: 'angola', name: 'Angola', emoji: '🇦🇴'},
    {key: 'antiguaAndBarbuda', name: 'Antigua y Barbuda', emoji: '🇦🇬'},
    {key: 'saudiArabia', name: 'Arabia Saudita', emoji: '🇸🇦'},
    {key: 'algeria', name: 'Argelia', emoji: '🇩🇿'},
    {key: 'argentina', name: 'Argentina', emoji: '🇦🇷'},
    {key: 'armenia', name: 'Armenia', emoji: '🇦🇲'},
    {key: 'australia', name: 'Australia', emoji: '🇦🇺'},
    {key: 'austria', name: 'Austria', emoji: '🇦🇹'},
    {key: 'azerbaijan', name: 'Azerbaiyán', emoji: '🇦🇿'},

    // B
    {key: 'bahamas', name: 'Bahamas', emoji: '🇧🇸'},
    {key: 'bangladesh', name: 'Bangladés', emoji: '🇧🇩'},
    {key: 'barbados', name: 'Barbados', emoji: '🇧🇧'},
    {key: 'bahrain', name: 'Baréin', emoji: '🇧🇭'},
    {key: 'belgium', name: 'Bélgica', emoji: '🇧🇪'},
    {key: 'belize', name: 'Belice', emoji: '🇧🇿'},
    {key: 'benin', name: 'Benín', emoji: '🇧🇯'},
    {key: 'belarus', name: 'Bielorrusia', emoji: '🇧🇾'},
    {key: 'myanmar', name: 'Birmania (Myanmar)', emoji: '🇲🇲'},
    {key: 'bolivia', name: 'Bolivia', emoji: '🇧🇴'},
    {key: 'bosniaAndHerzegovina', name: 'Bosnia y Herzegovina', emoji: '🇧🇦'},
    {key: 'botswana', name: 'Botsuana', emoji: '🇧🇼'},
    {key: 'brazil', name: 'Brasil', emoji: '🇧🇷'},
    {key: 'brunei', name: 'Brunéi', emoji: '🇧🇳'},
    {key: 'bulgaria', name: 'Bulgaria', emoji: '🇧🇬'},
    {key: 'burkinaFaso', name: 'Burkina Faso', emoji: '🇧🇫'},
    {key: 'burundi', name: 'Burundi', emoji: '🇧🇮'},
    {key: 'bhutan', name: 'Bután', emoji: '🇧🇹'},

    // C
    {key: 'capeVerde', name: 'Cabo Verde', emoji: '🇨🇻'},
    {key: 'cambodia', name: 'Camboya', emoji: '🇰🇭'},
    {key: 'cameroon', name: 'Camerún', emoji: '🇨🇲'},
    {key: 'canada', name: 'Canadá', emoji: '🇨🇦'},
    {key: 'qatar', name: 'Catar', emoji: '🇶🇦'},
    {key: 'chad', name: 'Chad', emoji: '🇹🇩'},
    {key: 'czechia', name: 'Chequia (República Checa)', emoji: '🇨🇿'},
    {key: 'chile', name: 'Chile', emoji: '🇨🇱'},
    {key: 'china', name: 'China', emoji: '🇨🇳'},
    {key: 'cyprus', name: 'Chipre', emoji: '🇨🇾'},
    {key: 'colombia', name: 'Colombia', emoji: '🇨🇴'},
    {key: 'comoros', name: 'Comoras', emoji: '🇰🇲'},
    {key: 'congo', name: 'Congo', emoji: '🇨🇬'},
    {key: 'congoDRC', name: 'Congo, República Democrática del', emoji: '🇨🇩'},
    {key: 'northKorea', name: 'Corea del Norte', emoji: '🇰🇵'},
    {key: 'southKorea', name: 'Corea del Sur', emoji: '🇰🇷'},
    {key: 'ivoryCoast', name: 'Costa de Marfil', emoji: '🇨🇮'},
    {key: 'costaRica', name: 'Costa Rica', emoji: '🇨🇷'},
    {key: 'croatia', name: 'Croacia', emoji: '🇭🇷'},
    {key: 'cuba', name: 'Cuba', emoji: '🇨🇺'},

    // D
    {key: 'denmark', name: 'Dinamarca', emoji: '🇩🇰'},
    {key: 'dominica', name: 'Dominica', emoji: '🇩🇲'},
    {key: 'djibouti', name: 'Yibuti (Djibouti)', emoji: '🇩🇯'},

    // E
    {key: 'ecuador', name: 'Ecuador', emoji: '🇪🇨'},
    {key: 'egypt', name: 'Egipto', emoji: '🇪🇬'},
    {key: 'elSalvador', name: 'El Salvador', emoji: '🇸🇻'},
    {key: 'uae', name: 'Emiratos Árabes Unidos', emoji: '🇦🇪'},
    {key: 'eritrea', name: 'Eritrea', emoji: '🇪🇷'},
    {key: 'slovakia', name: 'Eslovaquia', emoji: '🇸🇰'},
    {key: 'slovenia', name: 'Eslovenia', emoji: '🇸🇮'},
    {key: 'spain', name: 'España', emoji: '🇪🇸'},
    {key: 'usa', name: 'Estados Unidos', emoji: '🇺🇸'},
    {key: 'estonia', name: 'Estonia', emoji: '🇪🇪'},
    {key: 'ethiopia', name: 'Etiopía', emoji: '🇪🇹'},

    // F
    {key: 'philippines', name: 'Filipinas', emoji: '🇵🇭'},
    {key: 'finland', name: 'Finlandia', emoji: '🇫🇮'},
    {key: 'fiji', name: 'Fiyi', emoji: '🇫🇯'},
    {key: 'france', name: 'Francia', emoji: '🇫🇷'},

    // G
    {key: 'gabon', name: 'Gabón', emoji: '🇬🇦'},
    {key: 'gambia', name: 'Gambia', emoji: '🇬🇲'},
    {key: 'georgia', name: 'Georgia', emoji: '🇬🇪'},
    {key: 'ghana', name: 'Ghana', emoji: '🇬🇭'},
    {key: 'grenada', name: 'Granada', emoji: '🇬🇩'},
    {key: 'greece', name: 'Grecia', emoji: '🇬🇷'},
    {key: 'guatemala', name: 'Guatemala', emoji: '🇬🇹'},
    {key: 'guinea', name: 'Guinea', emoji: '🇬🇳'},
    {key: 'guineaBissau', name: 'Guinea-Bisáu', emoji: '🇬🇼'},
    {key: 'equatorialGuinea', name: 'Guinea Ecuatorial', emoji: '🇬🇶'},
    {key: 'guyana', name: 'Guyana', emoji: '🇬🇾'},

    // H
    {key: 'haiti', name: 'Haití', emoji: '🇭🇹'},
    {key: 'honduras', name: 'Honduras', emoji: '🇭🇳'},
    {key: 'hungary', name: 'Hungría', emoji: '🇭🇺'},

    // I
    {key: 'india', name: 'India', emoji: '🇮🇳'},
    {key: 'indonesia', name: 'Indonesia', emoji: '🇮🇩'},
    {key: 'iraq', name: 'Irak', emoji: '🇮🇶'},
    {key: 'iran', name: 'Irán', emoji: '🇮🇷'},
    {key: 'ireland', name: 'Irlanda', emoji: '🇮🇪'},
    {key: 'iceland', name: 'Islandia', emoji: '🇮🇸'},
    {key: 'marshallIslands', name: 'Islas Marshall', emoji: '🇲🇭'},
    {key: 'solomonIslands', name: 'Islas Salomón', emoji: '🇸🇧'},
    {key: 'israel', name: 'Israel', emoji: '🇮🇱'},
    {key: 'italy', name: 'Italia', emoji: '🇮🇹'},

    // J
    {key: 'jamaica', name: 'Jamaica', emoji: '🇯🇲'},
    {key: 'japan', name: 'Japón', emoji: '🇯🇵'},
    {key: 'jordan', name: 'Jordania', emoji: '🇯🇴'},

    // K
    {key: 'kazakhstan', name: 'Kazajistán', emoji: '🇰🇿'},
    {key: 'kenya', name: 'Kenia', emoji: '🇰🇪'},
    {key: 'kyrgyzstan', name: 'Kirguistán', emoji: '🇰🇬'},
    {key: 'kiribati', name: 'Kiribati', emoji: '🇰🇮'},
    {key: 'kuwait', name: 'Kuwait', emoji: '🇰🇼'},

    // L
    {key: 'laos', name: 'Laos', emoji: '🇱🇦'},
    {key: 'lesotho', name: 'Lesoto', emoji: '🇱🇸'},
    {key: 'latvia', name: 'Letonia', emoji: '🇱🇻'},
    {key: 'lebanon', name: 'Líbano', emoji: '🇱🇧'},
    {key: 'liberia', name: 'Liberia', emoji: '🇱🇷'},
    {key: 'libya', name: 'Libia', emoji: '🇱🇾'},
    {key: 'liechtenstein', name: 'Liechtenstein', emoji: '🇱🇮'},
    {key: 'lithuania', name: 'Lituania', emoji: '🇱🇹'},
    {key: 'luxembourg', name: 'Luxemburgo', emoji: '🇱🇺'},

    // M
    {key: 'northMacedonia', name: 'Macedonia del Norte', emoji: '🇲🇰'},
    {key: 'madagascar', name: 'Madagascar', emoji: '🇲🇬'},
    {key: 'malaysia', name: 'Malasia', emoji: '🇲🇾'},
    {key: 'malawi', name: 'Malaui', emoji: '🇲🇼'},
    {key: 'maldives', name: 'Maldivas', emoji: '🇲🇻'},
    {key: 'mali', name: 'Malí', emoji: '🇲🇱'},
    {key: 'malta', name: 'Malta', emoji: '🇲🇹'},
    {key: 'morocco', name: 'Marruecos', emoji: '🇲🇦'},
    {key: 'mauritius', name: 'Mauricio', emoji: '🇲🇺'},
    {key: 'mauritania', name: 'Mauritania', emoji: '🇲🇷'},
    {key: 'mexico', name: 'México', emoji: '🇲🇽'},
    {key: 'micronesia', name: 'Micronesia', emoji: '🇫🇲'},
    {key: 'moldova', name: 'Moldavia', emoji: '🇲🇩'},
    {key: 'monaco', name: 'Mónaco', emoji: '🇲🇨'},
    {key: 'mongolia', name: 'Mongolia', emoji: '🇲🇳'},
    {key: 'montenegro', name: 'Montenegro', emoji: '🇲🇪'},
    {key: 'mozambique', name: 'Mozambique', emoji: '🇲🇿'},

    // N
    {key: 'namibia', name: 'Namibia', emoji: '🇳🇦'},
    {key: 'nauru', name: 'Nauru', emoji: '🇳🇷'},
    {key: 'nepal', name: 'Nepal', emoji: '🇳🇵'},
    {key: 'nicaragua', name: 'Nicaragua', emoji: '🇳🇮'},
    {key: 'niger', name: 'Níger', emoji: '🇳🇪'},
    {key: 'nigeria', name: 'Nigeria', emoji: '🇳🇬'},
    {key: 'norway', name: 'Noruega', emoji: '🇳🇴'},
    {key: 'newZealand', name: 'Nueva Zelanda', emoji: '🇳🇿'},

    // O
    {key: 'oman', name: 'Omán', emoji: '🇴🇲'},

    // P
    {key: 'netherlands', name: 'Países Bajos', emoji: '🇳🇱'},
    {key: 'pakistan', name: 'Pakistán', emoji: '🇵🇰'},
    {key: 'palau', name: 'Palaos', emoji: '🇵🇼'},
    {key: 'palestine', name: 'Palestina', emoji: '🇵🇸'},
    {key: 'panama', name: 'Panamá', emoji: '🇵🇦'},
    {key: 'papuaNewGuinea', name: 'Papúa Nueva Guinea', emoji: '🇵🇬'},
    {key: 'paraguay', name: 'Paraguay', emoji: '🇵🇾'},
    {key: 'peru', name: 'Perú', emoji: '🇵🇪'},
    {key: 'poland', name: 'Polonia', emoji: '🇵🇱'},
    {key: 'portugal', name: 'Portugal', emoji: '🇵🇹'},

    // R
    {key: 'uk', name: 'Reino Unido', emoji: '🇬🇧'},
    {key: 'centralAfricanRepublic', name: 'República Centroafricana', emoji: '🇨🇫'},
    {key: 'dominicanRepublic', name: 'República Dominicana', emoji: '🇩🇴'},
    {key: 'rwanda', name: 'Ruanda', emoji: '🇷🇼'},
    {key: 'romania', name: 'Rumania', emoji: '🇷🇴'},
    {key: 'russia', name: 'Rusia', emoji: '🇷🇺'},

    // S
    {key: 'samoa', name: 'Samoa', emoji: '🇼🇸'},
    {key: 'saintKitts', name: 'San Cristóbal y Nieves', emoji: '🇰🇳'},
    {key: 'sanMarino', name: 'San Marino', emoji: '🇸🇲'},
    {key: 'saintVincent', name: 'San Vicente y las Granadinas', emoji: '🇻🇨'},
    {key: 'saintLucia', name: 'Santa Lucía', emoji: '🇱🇨'},
    {key: 'vatican', name: 'Santa Sede (Vaticano)', emoji: '🇻🇦'},
    {key: 'saoTome', name: 'Santo Tomé y Príncipe', emoji: '🇸🇹'},
    {key: 'senegal', name: 'Senegal', emoji: '🇸🇳'},
    {key: 'serbia', name: 'Serbia', emoji: '🇷🇸'},
    {key: 'seychelles', name: 'Seychelles', emoji: '🇸🇨'},
    {key: 'sierraLeone', name: 'Sierra Leona', emoji: '🇸🇱'},
    {key: 'singapore', name: 'Singapur', emoji: '🇸🇬'},
    {key: 'syria', name: 'Siria', emoji: '🇸🇾'},
    {key: 'somalia', name: 'Somalia', emoji: '🇸🇴'},
    {key: 'sriLanka', name: 'Sri Lanka', emoji: '🇱🇰'},
    {key: 'eswatini', name: 'Suazilandia (Esuatini)', emoji: '🇸🇿'},
    {key: 'southAfrica', name: 'Sudáfrica', emoji: '🇿🇦'},
    {key: 'sudan', name: 'Sudán', emoji: '🇸🇩'},
    {key: 'southSudan', name: 'Sudán del Sur', emoji: '🇸🇸'},
    {key: 'sweden', name: 'Suecia', emoji: '🇸🇪'},
    {key: 'switzerland', name: 'Suiza', emoji: '🇨🇭'},
    {key: 'suriname', name: 'Surinam', emoji: '🇸🇷'},

    // T
    {key: 'thailand', name: 'Tailandia', emoji: '🇹🇭'},
    {key: 'tanzania', name: 'Tanzania', emoji: '🇹🇿'},
    {key: 'tajikistan', name: 'Tayikistán', emoji: '🇹🇯'},
    {key: 'eastTimor', name: 'Timor Oriental', emoji: '🇹🇱'},
    {key: 'togo', name: 'Togo', emoji: '🇹🇬'},
    {key: 'tonga', name: 'Tonga', emoji: '🇹🇴'},
    {key: 'trinidadAndTobago', name: 'Trinidad y Tobago', emoji: '🇹🇹'},
    {key: 'tunisia', name: 'Túnez', emoji: '🇹🇳'},
    {key: 'turkmenistan', name: 'Turkmenistán', emoji: '🇹🇲'},
    {key: 'turkey', name: 'Turquía', emoji: '🇹🇷'},
    {key: 'tuvalu', name: 'Tuvalu', emoji: '🇹🇻'},

    // U
    {key: 'ukraine', name: 'Ucrania', emoji: '🇺🇦'},
    {key: 'uganda', name: 'Uganda', emoji: '🇺🇬'},
    {key: 'uruguay', name: 'Uruguay', emoji: '🇺🇾'},
    {key: 'uzbekistan', name: 'Uzbekistán', emoji: '🇺🇿'},

    // V
    {key: 'vanuatu', name: 'Vanuatu', emoji: '🇻🇺'},
    {key: 'venezuela', name: 'Venezuela', emoji: '🇻🇪'},
    {key: 'vietnam', name: 'Vietnam', emoji: '🇻🇳'},

    // Y
    {key: 'yemen', name: 'Yemen', emoji: '🇾🇪'},

    // Z
    {key: 'zambia', name: 'Zambia', emoji: '🇿🇲'},
    {key: 'zimbabwe', name: 'Zimbabue', emoji: '🇿🇼'}
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
    if (sharedGL) return {gl: sharedGL, program: sharedProgram};

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

    return {gl: sharedGL, program: sharedProgram};
}

function drawFlagToCanvas(targetCanvas, width, flagData) {
    const context = initSharedWebGL();
    if (!context) return;

    const {gl, program} = context;

    if (offscreenCanvas.width !== targetCanvas.width ||
        offscreenCanvas.height !== targetCanvas.height) {
        offscreenCanvas.width = targetCanvas.width;
        offscreenCanvas.height = targetCanvas.height;
    }

    const height = width * 0.625;
    const x = (offscreenCanvas.width - width) / 2;
    const y = (offscreenCanvas.height - height) / 2;
    const {positions, colors} = flagData(x, y, width, height);

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

    return {x, y, width, height};
}

// =========================
// AQUI DEFINIR BANDERAS def name flags minusculas
// =========================

const flags = {
    peru: (x, y, w, h) => {
        const w3 = w / 3;
        return {
            positions: [
                x, y, x + w3, y, x, y + h, x + w3, y, x + w3, y + h, x, y + h,
                x + w3, y, x + w3 * 2, y, x + w3, y + h, x + w3 * 2, y, x + w3 * 2, y + h, x + w3, y + h,
                x + w3 * 2, y, x + w, y, x + w3 * 2, y + h, x + w, y, x + w, y + h, x + w3 * 2, y + h
            ],
            colors: new Array(18).fill(0).map((_, i) =>
                Math.floor(i / 6) === 1 ? [1, 1, 1] : [0.8, 0, 0]
            ).flat()
        };
    },

    northKorea: (x, y, w, h) => {
        const h5 = h / 5;
        return {
            positions: [
                x, y, x + w, y, x, y + h5, x + w, y, x + w, y + h5, x, y + h5,
                x, y + h5 * 4, x + w, y + h5 * 4, x, y + h, x + w, y + h5 * 4, x + w, y + h, x, y + h,
                x, y + h5, x + w, y + h5, x, y + h5 * 1.2, x + w, y + h5, x + w, y + h5 * 1.2, x, y + h5 * 1.2,
                x, y + h5 * 3.8, x + w, y + h5 * 3.8, x, y + h5 * 4, x + w, y + h5 * 3.8, x + w, y + h5 * 4, x, y + h5 * 4,
                x, y + h5 * 1.2, x + w, y + h5 * 1.2, x, y + h5 * 3.8, x + w, y + h5 * 1.2, x + w, y + h5 * 3.8, x, y + h5 * 3.8
            ],
            colors: [
                ...new Array(12).fill([0.17, 0.38, 0.71]).flat(),
                ...new Array(12).fill([1, 1, 1]).flat(),
                ...new Array(6).fill([0.93, 0.16, 0.22]).flat()
            ]
        };
    },

    turkey: (x, y, w, h) => {
        const positions = [x, y, x + w, y, x, y + h, x + w, y, x + w, y + h, x, y + h];
        const colors = new Array(6).fill([0.89, 0.15, 0.21]).flat();
        return {positions, colors};
    },

    algeria: (x, y, w, h) => {
        const w2 = w / 2;
        return {
            positions: [
                x, y, x + w2, y, x, y + h, x + w2, y, x + w2, y + h, x, y + h,
                x + w2, y, x + w, y, x + w2, y + h, x + w, y, x + w, y + h, x + w2, y + h
            ],
            colors: [...new Array(6).fill([0, 0.5, 0.2]).flat(), ...new Array(6).fill([1, 1, 1]).flat()]
        };
    },

    spain: (x, y, w, h) => {
        const h4 = h / 4;
        return {
            positions: [
                x, y, x + w, y, x, y + h4, x + w, y, x + w, y + h4, x, y + h4,
                x, y + h4, x + w, y + h4, x, y + h4 * 3, x + w, y + h4, x + w, y + h4 * 3, x, y + h4 * 3,
                x, y + h4 * 3, x + w, y + h4 * 3, x, y + h, x + w, y + h4 * 3, x + w, y + h, x, y + h
            ],
            colors: [
                ...new Array(6).fill([0.8, 0.1, 0.1]).flat(),
                ...new Array(6).fill([1, 0.8, 0]).flat(),
                ...new Array(6).fill([0.8, 0.1, 0.1]).flat()
            ]
        };
    },

    honduras: (x, y, w, h) => {
        const h3 = h / 3;
        return {
            positions: [
                x, y, x + w, y, x, y + h3, x + w, y, x + w, y + h3, x, y + h3,
                x, y + h3, x + w, y + h3, x, y + h3 * 2, x + w, y + h3, x + w, y + h3 * 2, x, y + h3,
                x, y + h3 * 2, x + w, y + h3 * 2, x, y + h, x + w, y + h3 * 2, x + w, y + h, x, y + h
            ],
            colors: [
                ...new Array(6).fill([0, 0.4, 0.8]).flat(),
                ...new Array(6).fill([1, 1, 1]).flat(),
                ...new Array(6).fill([0, 0.4, 0.8]).flat()
            ]
        };
    },

    marshallIslands: (x, y, w, h) => ({
        positions: [x, y, x + w, y, x, y + h, x + w, y, x + w, y + h, x, y + h],
        colors: new Array(6).fill([0, 0.3, 0.6]).flat()
    }),

    malaysia: (x, y, w, h) => ({
        positions: [x, y, x + w, y, x, y + h, x + w, y, x + w, y + h, x, y + h],
        colors: new Array(6).fill([0.8, 0.1, 0.2]).flat()
    }),

    mongolia: (x, y, w, h) => ({
        positions: [x, y, x + w, y, x, y + h, x + w, y, x + w, y + h, x, y + h],
        colors: new Array(6).fill([0.8, 0.1, 0.2]).flat()
    }),

    nauru: (x, y, w, h) => ({
        positions: [x, y, x + w, y, x, y + h, x + w, y, x + w, y + h, x, y + h],
        colors: new Array(6).fill([0, 0.2, 0.6]).flat()
    }),

    saintKitts: (x, y, w, h) => ({
        positions: [x, y, x + w, y, x, y + h, x + w, y, x + w, y + h, x, y + h],
        colors: new Array(6).fill([0.1, 0.5, 0.2]).flat()
    }),

    seychelles: (x, y, w, h) => ({
        positions: [
            x, y + h, x, y, x + w / 3, y,
            x, y + h, x + w / 3, y, x + w * 2 / 3, y,
            x, y + h, x + w * 2 / 3, y, x + w, y,
            x, y + h, x + w, y, x + w, y + h / 2,
            x, y + h, x + w, y + h / 2, x + w, y + h
        ],
        colors: [
            ...new Array(3).fill([0, 0.239, 0.533]),
            ...new Array(3).fill([0.988, 0.847, 0.337]),
            ...new Array(3).fill([0.839, 0.157, 0.157]),
            ...new Array(3).fill([1, 1, 1]),
            ...new Array(3).fill([0, 0.478, 0.239]),
        ].flat()
    }),
    sierraLeone: (x, y, w, h) => {
        const h3 = h / 3;
        return {
            positions: [
                x, y, x + w, y, x, y + h3,
                x + w, y, x + w, y + h3, x, y + h3,
                x, y + h3, x + w, y + h3, x, y + h3 * 2,
                x + w, y + h3, x + w, y + h3 * 2, x, y + h3 * 2,
                x, y + h3 * 2, x + w, y + h3 * 2, x, y + h,
                x + w, y + h3 * 2, x + w, y + h, x, y + h
            ],
            colors: [
                ...new Array(6).fill([0.118, 0.71, 0.227]).flat(),
                ...new Array(6).fill([1, 1, 1]).flat(),
                ...new Array(6).fill([0, 0.447, 0.776]).flat()
            ]
        };
    },

    singapore: (x, y, w, h) => {
        const red = [0.933, 0.165, 0.149];
        const white = [1, 1, 1];
        const h2 = h / 2;
        let positions = [
            x, y, x + w, y, x, y + h2,
            x + w, y, x + w, y + h2, x, y + h2,
            x, y + h2, x + w, y + h2, x, y + h,
            x + w, y + h2, x + w, y + h, x, y + h
        ];
        let colors = [
            ...new Array(6).fill(red).flat(),
            ...new Array(6).fill(white).flat()
        ];

        const createCircle = (cx, cy, radius, segments, color) => {
            const circlePositions = [];
            for (let i = 0; i < segments; i++) {
                const angle1 = (i / segments) * 2 * Math.PI;
                const angle2 = ((i + 1) / segments) * 2 * Math.PI;
                const p1x = cx + radius * Math.cos(angle1);
                const p1y = cy + radius * Math.sin(angle1);
                const p2x = cx + radius * Math.cos(angle2);
                const p2y = cy + radius * Math.sin(angle2);
                circlePositions.push(cx, cy, p1x, p1y, p2x, p2y);
            }
            return { positions: circlePositions, colors: new Array(circlePositions.length / 2).fill(color).flat() };
        };

        const createStar = (cx, cy, radius, color) => {
            const starPositions = [];
            const points = 5;
            const innerRadius = radius * 0.382;
            for (let i = 0; i < points * 2; i++) {
                const r = (i % 2 === 0) ? radius : innerRadius;
                const angle = (i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                const next_i = (i + 1) % (points * 2);
                const next_r = (next_i % 2 === 0) ? radius : innerRadius;
                const next_angle = (next_i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                starPositions.push(
                    cx, cy,
                    cx + r * Math.cos(angle), cy + r * Math.sin(angle),
                    cx + next_r * Math.cos(next_angle), cy + next_r * Math.sin(next_angle)
                );
            }
            return { positions: starPositions, colors: new Array(starPositions.length / 2).fill(color).flat() };
        };

        const cantonWidth = w / 2;
        const cantonHeight = h / 2;
        const moonRadius = cantonHeight * 0.33;
        const moonCx = x + cantonWidth * 0.5;
        const moonCy = y + cantonHeight * 0.5;

        const whiteMoon = createCircle(moonCx, moonCy, moonRadius, 32, white);
        positions.push(...whiteMoon.positions);
        colors.push(...whiteMoon.colors);

        const redOverlay = createCircle(moonCx + moonRadius * 0.4, moonCy, moonRadius * 0.9, 32, red);
        positions.push(...redOverlay.positions);
        colors.push(...redOverlay.colors);

        const starRadius = moonRadius * 0.3;
        const starCircleRadius = moonRadius * 0.6;
        const starCircleCx = moonCx + moonRadius * 0.65;

        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * 2 * Math.PI - (Math.PI / 2);
            const starCx = starCircleCx + starCircleRadius * Math.cos(angle);
            const starCy = moonCy + starCircleRadius * Math.sin(angle);
            const star = createStar(starCx, starCy, starRadius, white);
            positions.push(...star.positions);
            colors.push(...star.colors);
        }

        return { positions, colors };
    },

    syria: (x, y, w, h) => {
        const h3 = h / 3;
        const green = [0, 0.478, 0.188];
        const white = [1, 1, 1];
        const black = [0, 0, 0];
        const red = [0.867, 0, 0];

        let positions = [
            x, y, x + w, y, x, y + h3,
            x + w, y, x + w, y + h3, x, y + h3,
            x, y + h3, x + w, y + h3, x, y + h3 * 2,
            x + w, y + h3, x + w, y + h3 * 2, x, y + h3 * 2,
            x, y + h3 * 2, x + w, y + h3 * 2, x, y + h,
            x + w, y + h3 * 2, x + w, y + h, x, y + h
        ];
        let colors = [
            ...new Array(6).fill(green).flat(),
            ...new Array(6).fill(white).flat(),
            ...new Array(6).fill(black).flat()
        ];

        const createStar = (cx, cy, radius, color) => {
            const starPositions = [];
            const points = 5, innerRadius = radius * 0.382;
            for (let i = 0; i < points * 2; i++) {
                const r = (i % 2 === 0) ? radius : innerRadius;
                const angle = (i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                const next_i = (i + 1) % (points * 2);
                const next_r = (next_i % 2 === 0) ? radius : innerRadius;
                const next_angle = (next_i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                starPositions.push(cx, cy, cx + r * Math.cos(angle), cy + r * Math.sin(angle), cx + next_r * Math.cos(next_angle), cy + next_r * Math.sin(next_angle));
            }
            return {positions: starPositions, colors: new Array(starPositions.length / 2).fill(color).flat()};
        };

        const starRadius = h * 0.09;
        const star1 = createStar(x + w * 0.25, y + h / 2, starRadius, red);
        const star2 = createStar(x + w * 0.50, y + h / 2, starRadius, red);
        const star3 = createStar(x + w * 0.75, y + h / 2, starRadius, red);
        positions.push(...star1.positions, ...star2.positions, ...star3.positions);
        colors.push(...star1.colors, ...star2.colors, ...star3.colors);

        return {positions, colors};
    },

    somalia: (x, y, w, h) => {
        const blue = [0.255, 0.537, 0.859];
        const white = [1, 1, 1];

        let positions = [
            x, y, x + w, y, x, y + h,
            x + w, y, x + w, y + h, x, y + h
        ];
        let colors = new Array(6).fill(blue).flat();

        const createStar = (cx, cy, radius, color) => {
            const starPositions = [];
            const points = 5, innerRadius = radius * 0.382;
            for (let i = 0; i < points * 2; i++) {
                const r = (i % 2 === 0) ? radius : innerRadius;
                const angle = (i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                const next_i = (i + 1) % (points * 2);
                const next_r = (next_i % 2 === 0) ? radius : innerRadius;
                const next_angle = (next_i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                starPositions.push(cx, cy, cx + r * Math.cos(angle), cy + r * Math.sin(angle), cx + next_r * Math.cos(next_angle), cy + next_r * Math.sin(next_angle));
            }
            return {positions: starPositions, colors: new Array(starPositions.length / 2).fill(color).flat()};
        };

        const star = createStar(x + w / 2, y + h / 2, h * 0.25, white);
        positions.push(...star.positions);
        colors.push(...star.colors);

        return {positions, colors};
    },

    sriLanka: (x, y, w, h) => {
        const green = [0, 0.34, 0.23];
        const orange = [0.94, 0.3, 0];
        const gold = [0.98, 0.74, 0.09];
        const crimson = [0.55, 0, 0.1];

        const borderWidth = w * 0.04;
        const innerX = x + borderWidth;
        const innerY = y + borderWidth;
        const innerW = w - (borderWidth * 2);
        const innerH = h - (borderWidth * 2);

        const greenWidth = innerW * 0.22;
        const orangeWidth = innerW * 0.22;
        const goldStripeWidth = innerW * 0.06;

        const greenEnd = innerX + greenWidth;
        const orangeEnd = greenEnd + orangeWidth;
        const goldEnd = orangeEnd + goldStripeWidth;

        return {
            positions: [
                x, y, x + w, y, x, y + h,
                x + w, y, x + w, y + h, x, y + h,

                innerX, innerY, greenEnd, innerY, innerX, innerY + innerH,
                greenEnd, innerY, greenEnd, innerY + innerH, innerX, innerY + innerH,

                greenEnd, innerY, orangeEnd, innerY, greenEnd, innerY + innerH,
                orangeEnd, innerY, orangeEnd, innerY + innerH, greenEnd, innerY + innerH,

                orangeEnd, innerY, goldEnd, innerY, orangeEnd, innerY + innerH,
                goldEnd, innerY, goldEnd, innerY + innerH, orangeEnd, innerY + innerH,

                goldEnd, innerY, innerX + innerW, innerY, goldEnd, innerY + innerH,
                innerX + innerW, innerY, innerX + innerW, innerY + innerH, goldEnd, innerY + innerH
            ],
            colors: [
                ...new Array(6).fill(gold).flat(),
                ...new Array(6).fill(green).flat(),
                ...new Array(6).fill(orange).flat(),
                ...new Array(6).fill(gold).flat(),
                ...new Array(6).fill(crimson).flat()
            ]
        };
    },
    southAfrica: (x, y, w, h) => {
        const red = [0.93, 0.22, 0.17];
        const blue = [0, 0.15, 0.4];
        const white = [1, 1, 1];
        const green = [0, 0.48, 0.28];
        const gold = [1, 0.71, 0.07];
        const black = [0, 0, 0];
        let positions = [];
        let colors = [];
        const h_third = h / 3;
        positions.push(x, y, x + w, y, x, y + h_third, x + w, y, x + w, y + h_third, x, y + h_third);
        colors.push(...new Array(6).fill(red).flat());
        positions.push(x, y + h_third, x + w, y + h_third, x, y + h_third * 2, x + w, y + h_third, x + w, y + h_third * 2, x, y + h_third * 2);
        colors.push(...new Array(6).fill(white).flat());
        positions.push(x, y + h_third * 2, x + w, y + h_third * 2, x, y + h, x + w, y + h_third * 2, x + w, y + h, x, y + h);
        colors.push(...new Array(6).fill(blue).flat());
        const rectWidthWhite = w * 0.18;
        const apexXWhite = x + w * 0.65;
        positions.push(x, y, x + rectWidthWhite, y, x, y + h, x + rectWidthWhite, y, x + rectWidthWhite, y + h, x, y + h);
        colors.push(...new Array(6).fill(white).flat());
        positions.push(x + rectWidthWhite, y, x + rectWidthWhite, y + h, apexXWhite, y + h / 2);
        colors.push(...new Array(3).fill(white).flat());
        const h_green_stripe = h / 5;
        const y_green = y + h / 2 - h_green_stripe / 2;
        positions.push(x, y_green, x + w, y_green, x, y_green + h_green_stripe,
            x + w, y_green, x + w, y_green + h_green_stripe, x, y_green + h_green_stripe);
        colors.push(...new Array(6).fill(green).flat());
        const rectWidthGreen = w * 0.12;
        const apexXGreen = x + w * 0.60;
        positions.push(x, y, x + rectWidthGreen, y, x, y + h, x + rectWidthGreen, y, x + rectWidthGreen, y + h, x, y + h);
        colors.push(...new Array(6).fill(green).flat());
        positions.push(x + rectWidthGreen, y, x + rectWidthGreen, y + h, apexXGreen, y + h / 2);
        colors.push(...new Array(3).fill(green).flat());
        const h_gold_arm = h / 3;
        const apexXGold = x + w / 3;
        positions.push(x, y + h / 2 - h_gold_arm, x, y + h / 2 + h_gold_arm, apexXGold, y + h / 2);
        colors.push(...new Array(3).fill(gold).flat());
        const h_black_arm = h / 4;
        const apexXBlack = x + w / 4;
        positions.push(x, y + h / 2 - h_black_arm, x, y + h / 2 + h_black_arm, apexXBlack, y + h / 2);
        colors.push(...new Array(3).fill(black).flat());
        return {positions, colors};
    },

    sudan: (x, y, w, h) => {
        const red = [0.85, 0, 0];
        const white = [1, 1, 1];
        const black = [0, 0, 0];
        const green = [0, 0.5, 0.2];
        const h3 = h / 3;
        const triangleApexX = x + w * 0.33;
        return {
            positions: [
                x, y, x + w, y, x, y + h3,
                x + w, y, x + w, y + h3, x, y + h3,
                x, y + h3, x + w, y + h3, x, y + h3 * 2,
                x + w, y + h3, x + w, y + h3 * 2, x, y + h3 * 2,
                x, y + h3 * 2, x + w, y + h3 * 2, x, y + h,
                x + w, y + h3 * 2, x + w, y + h, x, y + h,
                x, y, x, y + h, triangleApexX, y + h / 2
            ],
            colors: [
                ...new Array(6).fill(red).flat(),
                ...new Array(6).fill(white).flat(),
                ...new Array(6).fill(black).flat(),
                ...new Array(3).fill(green).flat()
            ]
        };
    },

    eswatini: (x, y, w, h) => {
        const blue = [0.247, 0.443, 0.796];
        const yellow = [1, 0.816, 0];
        const red = [0.706, 0.082, 0.204];
        const totalParts = 16;
        const blueHeight = h * (3 / totalParts);
        const yellowHeight = h * (1 / totalParts);
        const y1 = y + blueHeight;
        const y2 = y1 + yellowHeight;
        const y3 = y2 + h * (8 / totalParts);
        const y4 = y3 + yellowHeight;
        return {
            positions: [
                x, y, x + w, y, x, y1,
                x + w, y, x + w, y1, x, y1,
                x, y1, x + w, y1, x, y2,
                x + w, y1, x + w, y2, x, y2,
                x, y2, x + w, y2, x, y3,
                x + w, y2, x + w, y3, x, y3,
                x, y3, x + w, y3, x, y4,
                x + w, y3, x + w, y4, x, y4,
                x, y4, x + w, y4, x, y + h,
                x + w, y4, x + w, y + h, x, y + h
            ],
            colors: [
                ...new Array(6).fill(blue).flat(),
                ...new Array(6).fill(yellow).flat(),
                ...new Array(6).fill(red).flat(),
                ...new Array(6).fill(yellow).flat(),
                ...new Array(6).fill(blue).flat()
            ]
        };
    },

    southSudan: (x, y, w, h) => {
        const black = [0, 0, 0];
        const red = [0.86, 0.1, 0.1];
        const green = [0, 0.53, 0.23];
        const white = [1, 1, 1];
        const blue = [0, 0.2, 0.6];
        const gold = [0.98, 0.83, 0.26];
        const thickStripeH = h * 0.28;
        const thinStripeH = h * 0.04;
        const y1 = y + thickStripeH;
        const y2 = y1 + thinStripeH;
        const y3 = y2 + thickStripeH;
        const y4 = y3 + thinStripeH;
        const triangleApexX = x + w * 0.45;
        let positions = [
            x, y, x + w, y, x, y1, x + w, y, x + w, y1, x, y1,
            x, y1, x + w, y1, x, y2, x + w, y1, x + w, y2, x, y2,
            x, y2, x + w, y2, x, y3, x + w, y2, x + w, y3, x, y3,
            x, y3, x + w, y3, x, y4, x + w, y3, x + w, y4, x, y4,
            x, y4, x + w, y4, x, y + h, x + w, y4, x + w, y + h, x, y + h,
            x, y, x, y + h, triangleApexX, y + h / 2
        ];
        let colors = [
            ...new Array(6).fill(black).flat(), ...new Array(6).fill(white).flat(),
            ...new Array(6).fill(red).flat(), ...new Array(6).fill(white).flat(),
            ...new Array(6).fill(green).flat(), ...new Array(3).fill(blue).flat()
        ];
        const createStar = (cx, cy, radius, color) => {
            const starPositions = [];
            const points = 5, innerRadius = radius * 0.382;
            for (let i = 0; i < points * 2; i++) {
                const r = (i % 2 === 0) ? radius : innerRadius;
                const angle = (i / (points * 2)) * 2 * Math.PI - (Math.PI / 2) + (Math.PI / 10);
                const next_i = (i + 1) % (points * 2);
                const next_r = (next_i % 2 === 0) ? radius : innerRadius;
                const next_angle = (next_i / (points * 2)) * 2 * Math.PI - (Math.PI / 2) + (Math.PI / 10);
                starPositions.push(cx, cy, cx + r * Math.cos(angle), cy + r * Math.sin(angle), cx + next_r * Math.cos(next_angle), cy + next_r * Math.sin(next_angle));
            }
            return {positions: starPositions, colors: new Array(starPositions.length / 2).fill(color).flat()};
        };
        const star = createStar(x + w * 0.2, y + h / 2, h * 0.15, gold);
        positions.push(...star.positions);
        colors.push(...star.colors);
        return {positions, colors};
    },

    sweden: (x, y, w, h) => {
        const blue = [0, 0.42, 0.67];
        const yellow = [1, 0.8, 0];
        const crossThickness = h * 0.2;
        const horizX = x;
        const horizY = y + h / 2 - crossThickness / 2;
        const vertX = x + w * 0.3;
        const vertY = y;
        return {
            positions: [
                x, y, x + w, y, x, y + h,
                x + w, y, x + w, y + h, x, y + h,
                horizX, horizY, horizX + w, horizY, horizX, horizY + crossThickness,
                horizX + w, horizY, horizX + w, horizY + crossThickness, horizX, horizY + crossThickness,
                vertX, vertY, vertX + crossThickness, vertY, vertX, vertY + h,
                vertX + crossThickness, vertY, vertX + crossThickness, vertY + h, vertX, vertY + h
            ],
            colors: [
                ...new Array(6).fill(blue).flat(),
                ...new Array(12).fill(yellow).flat()
            ]
        };
    },

    switzerland: (x, y, w, h) => {
        const red = [1, 0, 0];
        const white = [1, 1, 1];
        const size = Math.min(w, h);
        const squareX = x + (w - size) / 2;
        const squareY = y + (h - size) / 2;
        const armThickness = size * (1 / 5);
        const armLength = size * (13 / 32);
        const horizX = squareX + (size - armLength) / 2;
        const horizY = squareY + (size - armThickness) / 2;
        const vertX = squareX + (size - armThickness) / 2;
        const vertY = squareY + (size - armLength) / 2;
        return {
            positions: [
                squareX, squareY, squareX + size, squareY, squareX, squareY + size,
                squareX + size, squareY, squareX + size, squareY + size, squareX, squareY + size,
                horizX, horizY, horizX + armLength, horizY, horizX, horizY + armThickness,
                horizX + armLength, horizY, horizX + armLength, horizY + armThickness, horizX, horizY + armThickness,
                vertX, vertY, vertX + armThickness, vertY, vertX, vertY + armLength,
                vertX + armThickness, vertY, vertX + armThickness, vertY + armLength, vertX, vertY + armLength
            ],
            colors: [
                ...new Array(6).fill(red).flat(),
                ...new Array(12).fill(white).flat()
            ]
        };
    },

    suriname: (x, y, w, h) => {
        const green = [0.21, 0.47, 0.26];
        const white = [1, 1, 1];
        const red = [0.72, 0.11, 0.16];
        const yellow = [0.93, 0.77, 0.09];
        const totalParts = 10;
        const greenH = h * (2 / totalParts);
        const whiteH = h * (1 / totalParts);
        const y1 = y + greenH;
        const y2 = y1 + whiteH;
        const y3 = y2 + h * (4 / totalParts);
        const y4 = y3 + whiteH;
        let positions = [
            x, y, x + w, y, x, y1, x + w, y, x + w, y1, x, y1,
            x, y1, x + w, y1, x, y2, x + w, y1, x + w, y2, x, y2,
            x, y2, x + w, y2, x, y3, x + w, y2, x + w, y3, x, y3,
            x, y3, x + w, y3, x, y4, x + w, y3, x + w, y4, x, y4,
            x, y4, x + w, y4, x, y + h, x + w, y4, x + w, y + h, x, y + h
        ];
        let colors = [
            ...new Array(6).fill(green).flat(), ...new Array(6).fill(white).flat(),
            ...new Array(6).fill(red).flat(), ...new Array(6).fill(white).flat(),
            ...new Array(6).fill(green).flat()
        ];
        const createStar = (cx, cy, radius, color) => {
            const starPositions = [];
            const points = 5, innerRadius = radius * 0.382;
            for (let i = 0; i < points * 2; i++) {
                const r = (i % 2 === 0) ? radius : innerRadius;
                const angle = (i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                const next_i = (i + 1) % (points * 2);
                const next_r = (next_i % 2 === 0) ? radius : innerRadius;
                const next_angle = (next_i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                starPositions.push(cx, cy, cx + r * Math.cos(angle), cy + r * Math.sin(angle), cx + next_r * Math.cos(next_angle), cy + next_r * Math.sin(next_angle));
            }
            return {positions: starPositions, colors: new Array(starPositions.length / 2).fill(color).flat()};
        };
        const star = createStar(x + w / 2, y + h / 2, h * 0.18, yellow);
        positions.push(...star.positions);
        colors.push(...star.colors);
        return {positions, colors};
    },

    thailand: (x, y, w, h) => {
        const red = [0.65, 0.15, 0.15];
        const white = [1, 1, 1];
        const blue = [0.15, 0.2, 0.4];
        const totalParts = 6;
        const stripeH = h / totalParts;
        const y1 = y + stripeH;
        const y2 = y1 + stripeH;
        const y3 = y2 + stripeH * 2;
        const y4 = y3 + stripeH;
        return {
            positions: [
                x, y, x + w, y, x, y1, x + w, y, x + w, y1, x, y1,
                x, y1, x + w, y1, x, y2, x + w, y1, x + w, y2, x, y2,
                x, y2, x + w, y2, x, y3, x + w, y2, x + w, y3, x, y3,
                x, y3, x + w, y3, x, y4, x + w, y3, x + w, y4, x, y4,
                x, y4, x + w, y4, x, y + h, x + w, y4, x + w, y + h, x, y + h
            ],
            colors: [
                ...new Array(6).fill(red).flat(), ...new Array(6).fill(white).flat(),
                ...new Array(6).fill(blue).flat(), ...new Array(6).fill(white).flat(),
                ...new Array(6).fill(red).flat()
            ]
        };
    },

    tajikistan: (x, y, w, h) => {
        const red = [0.8, 0.12, 0.15];
        const white = [1, 1, 1];
        const green = [0, 0.53, 0.23];
        const gold = [0.98, 0.84, 0.34];
        const totalParts = 7;
        const redH = h * (2 / totalParts);
        const y1 = y + redH;
        const y2 = y1 + h * (3 / totalParts);
        let positions = [
            x, y, x + w, y, x, y1, x + w, y, x + w, y1, x, y1,
            x, y1, x + w, y1, x, y2, x + w, y1, x + w, y2, x, y2,
            x, y2, x + w, y2, x, y + h, x + w, y2, x + w, y + h, x, y + h
        ];
        let colors = [
            ...new Array(6).fill(red).flat(),
            ...new Array(6).fill(white).flat(),
            ...new Array(6).fill(green).flat()
        ];
        const crownBaseY = y + h * 0.45;
        const crownH = h * 0.1;
        const crownW = w * 0.15;
        positions.push(
            x + w / 2 - crownW / 2, crownBaseY, x + w / 2 + crownW / 2, crownBaseY,
            x + w / 2 - crownW / 2, crownBaseY + crownH, x + w / 2 + crownW / 2, crownBaseY,
            x + w / 2 + crownW / 2, crownBaseY + crownH, x + w / 2 - crownW / 2, crownBaseY + crownH
        );
        colors.push(...new Array(6).fill(gold).flat());
        const createStar = (cx, cy, radius, color) => {
            const starPositions = [];
            const points = 5, innerRadius = radius * 0.382;
            for (let i = 0; i < points * 2; i++) {
                const r = (i % 2 === 0) ? radius : innerRadius;
                const angle = (i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                const next_i = (i + 1) % (points * 2);
                const next_r = (next_i % 2 === 0) ? radius : innerRadius;
                const next_angle = (next_i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                starPositions.push(cx, cy, cx + r * Math.cos(angle), cy + r * Math.sin(angle), cx + next_r * Math.cos(next_angle), cy + next_r * Math.sin(next_angle));
            }
            return {positions: starPositions, colors: new Array(starPositions.length / 2).fill(color).flat()};
        };
        const starRadius = h * 0.03;
        const arcRadius = w * 0.1;
        const arcCenter = [x + w / 2, y + h * 0.45];
        for (let i = 0; i < 7; i++) {
            const angle = Math.PI + (i / 6) * Math.PI;
            const starX = arcCenter[0] + arcRadius * Math.cos(angle);
            const starY = arcCenter[1] + arcRadius * Math.sin(angle) * 0.5;
            const star = createStar(starX, starY, starRadius, gold);
            positions.push(...star.positions);
            colors.push(...star.colors);
        }
        return {positions, colors};
    },

    tanzania: (x, y, w, h) => {
        const green = [0.11, 0.69, 0.31];
        const blue = [0, 0.65, 0.84];
        const black = [0, 0, 0];
        const yellow = [0.99, 0.88, 0.18];
        let positions = [];
        let colors = [];
        const topLeft = [x, y];
        const topRight = [x + w, y];
        const bottomLeft = [x, y + h];
        const bottomRight = [x + w, y + h];
        positions.push(...topLeft, ...topRight, ...bottomLeft, ...bottomRight, ...bottomLeft, ...topRight);
        colors.push(...new Array(3).fill(green).flat(), ...new Array(3).fill(blue).flat());
        const rectYellowW = w / 3;
        const rectYellowH = h / 3.5;
        const rectBlackW = w / 4;
        const rectBlackH = h / 4.5;
        positions.push(x + w - rectYellowW, y, x + w, y, x + w - rectYellowW, y + rectYellowH, x + w, y, x + w, y + rectYellowH, x + w - rectYellowW, y + rectYellowH);
        positions.push(x, y + h - rectYellowH, x + rectYellowW, y + h - rectYellowH, x, y + h, x + rectYellowW, y + h - rectYellowH, x + rectYellowW, y + h, x, y + h);
        colors.push(...new Array(12).fill(yellow).flat());
        const p_y1 = [x, y + h - rectYellowH];
        const p_y2 = [x + rectYellowW, y + h];
        const p_y3 = [x + w, y + rectYellowH];
        const p_y4 = [x + w - rectYellowW, y];
        positions.push(...p_y1, ...p_y2, ...p_y3, ...p_y1, ...p_y3, ...p_y4);
        colors.push(...new Array(6).fill(yellow).flat());
        positions.push(x + w - rectBlackW, y, x + w, y, x + w - rectBlackW, y + rectBlackH, x + w, y, x + w, y + rectBlackH, x + w - rectBlackW, y + rectBlackH);
        positions.push(x, y + h - rectBlackH, x + rectBlackW, y + h - rectBlackH, x, y + h, x + rectBlackW, y + h - rectBlackH, x + rectBlackW, y + h, x, y + h);
        colors.push(...new Array(12).fill(black).flat());
        const p_b1 = [x, y + h - rectBlackH];
        const p_b2 = [x + rectBlackW, y + h];
        const p_b3 = [x + w, y + rectBlackH];
        const p_b4 = [x + w - rectBlackW, y];
        positions.push(...p_b1, ...p_b2, ...p_b3, ...p_b1, ...p_b3, ...p_b4);
        colors.push(...new Array(6).fill(black).flat());
        return {positions, colors};
    },

    eastTimor: (x, y, w, h) => {
        const red = [0.84, 0.04, 0.13];
        const yellow = [1, 0.8, 0];
        const black = [0, 0, 0];
        const white = [1, 1, 1];
        const p_left_top = [x, y];
        const p_left_bottom = [x, y + h];
        const apex_yellow = [x + w * 0.5, y + h / 2];
        const apex_black = [x + w * 0.33, y + h / 2];
        let positions = [
            x, y, x + w, y, x, y + h,
            x + w, y, x + w, y + h, x, y + h,
            ...p_left_top, ...p_left_bottom, ...apex_yellow,
            ...p_left_top, ...p_left_bottom, ...apex_black
        ];
        let colors = [
            ...new Array(6).fill(red).flat(),
            ...new Array(3).fill(yellow).flat(),
            ...new Array(3).fill(black).flat()
        ];
        const createStar = (cx, cy, radius, color) => {
            const starPositions = [];
            const points = 5, innerRadius = radius * 0.382;
            for (let i = 0; i < points * 2; i++) {
                const r = (i % 2 === 0) ? radius : innerRadius;
                const angle = (i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                const next_i = (i + 1) % (points * 2);
                const next_r = (next_i % 2 === 0) ? radius : innerRadius;
                const next_angle = (next_i / (points * 2)) * 2 * Math.PI - Math.PI / 2;
                starPositions.push(cx, cy, cx + r * Math.cos(angle), cy + r * Math.sin(angle), cx + next_r * Math.cos(next_angle), cy + next_r * Math.sin(next_angle));
            }
            return {positions: starPositions, colors: new Array(starPositions.length / 2).fill(color).flat()};
        };
        const star = createStar(x + w * 0.16, y + h / 2, h * 0.1, white);
        positions.push(...star.positions);
        colors.push(...star.colors);
        return {positions, colors};
    }
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
        positions: [x, y, x + w, y, x, y + h, x + w, y, x + w, y + h, x, y + h],
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
        const corner = {x: flag.x + flag.width, y: flag.y + flag.height};
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