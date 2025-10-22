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
    { key: 'denmark', name: 'Dinamarca', emoji: '🇩🇰' },
    { key: 'dominica', name: 'Dominica', emoji: '🇩🇲' },
    
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
    // === A ===
    afghanistan: (() => {
    const BLACK=[0,0,0], RED=[0.827,0.125,0.067], GREEN=[0,0.478,0.239];

    const emblemImg = new Image();
    emblemImg.src = 'recursos_yoel/afghanistan_escudo.svg'; // requiere viewBox en el SVG

    const fn = (x,y,w,h) => {
        const positions=[], colors=[]; const s=w/3;
        // Negro
        positions.push(x,y, x+s,y, x,y+h,  x+s,y, x+s,y+h, x,y+h);
        colors.push(...Array(6).fill(BLACK).flat());
        // Rojo (centro)
        positions.push(x+s,y, x+2*s,y, x+s,y+h,  x+2*s,y, x+2*s,y+h, x+s,y+h);
        colors.push(...Array(6).fill(RED).flat());
        // Verde
        positions.push(x+2*s,y, x+w,y, x+2*s,y+h,  x+w,y, x+w,y+h, x+2*s,y+h);
        colors.push(...Array(6).fill(GREEN).flat());
        return { positions, colors };
    };

    // Escudo centrado en la franja roja, con object-fit: contain
    fn.overlay = (ctx, x, y, w, h) => {
        const draw = () => {
        const nw = emblemImg.naturalWidth || 1, nh = emblemImg.naturalHeight || 1;
        const ar = nw/nh;
        const s = w/3;                  // ancho de cada franja
        const boxW = s * 0.78;          // caja máxima dentro del rojo
        const boxH = h * 0.78;
        const boxAR = boxW/boxH;
        let ew, eh;
        if (ar > boxAR) { ew = boxW; eh = ew/ar; } else { eh = boxH; ew = eh*ar; }
        const ex = (x + s) + (s - ew)/2; // centra dentro de la franja roja
        const ey = y + (h - eh)/2;
        ctx.save(); ctx.drawImage(emblemImg, ex, ey, ew, eh); ctx.restore();
        };
        if (emblemImg.complete && emblemImg.naturalWidth>0) draw(); else emblemImg.onload = draw;
    };

    return fn;
    })(),

    albania: (() => {
    // Fondo rojo + águila bicéfala desde archivo SVG externo, manteniendo proporciones correctas
    const RED = [0.894, 0.118, 0.125];

    const eagleImg = new Image();
    eagleImg.src = 'recursos_yoel/albania_escudo.svg'; // SVG local (con viewBox definido)

    const fn = (x, y, w, h) => {
        const positions = [], colors = [];
        // Fondo rojo
        positions.push(
        x, y,  x + w, y,  x, y + h,
        x + w, y,  x + w, y + h,  x, y + h
        );
        colors.push(...Array(6).fill(RED).flat());
        return { positions, colors };
    };

    // Dibujo del escudo: se ajusta al "contenedor" manteniendo aspect ratio (como object-fit: contain)
    fn.overlay = (ctx, x, y, w, h) => {
        const draw = () => {
        const nw = eagleImg.naturalWidth || 1;
        const nh = eagleImg.naturalHeight || 1;
        const imgAR = nw / nh;

        // Caja de destino proporcional a la bandera (centrada)
        const boxW = w * 0.56;     // ancho máximo permitido del escudo
        const boxH = h * 0.66;     // alto máximo permitido del escudo
        const boxAR = boxW / boxH;

        let ew, eh;                 // tamaño final del escudo (manteniendo AR)
        if (imgAR > boxAR) {
            // Imagen más "ancha" que la caja → ajusta por ancho
            ew = boxW;
            eh = ew / imgAR;
        } else {
            // Imagen más "alta" que la caja → ajusta por alto
            eh = boxH;
            ew = eh * imgAR;
        }

        const ex = x + (w - ew) * 0.5; // centrado horizontal
        const ey = y + (h - eh) * 0.5; // centrado vertical

        ctx.save();
        ctx.drawImage(eagleImg, ex, ey, ew, eh);
        ctx.restore();
        };

        if (eagleImg.complete && eagleImg.naturalWidth > 0) draw();
        else eagleImg.onload = draw;
    };

    return fn;
    })(),



    germany: (x,y,w,h)=>{
    const s=h/3; const BLACK=[0,0,0], RED=[0.867,0,0], Y=[1,0.808,0];
    const positions=[],colors=[];
    positions.push(x,y, x+w,y, x,y+s,  x+w,y, x+w,y+s, x,y+s); colors.push(...Array(6).fill(BLACK).flat());
    positions.push(x,y+s, x+w,y+s, x,y+2*s,  x+w,y+s, x+w,y+2*s, x,y+2*s); colors.push(...Array(6).fill(RED).flat());
    positions.push(x,y+2*s, x+w,y+2*s, x,y+h,  x+w,y+2*s, x+w,y+h, x,y+h); colors.push(...Array(6).fill(Y).flat());
    return {positions,colors};
    },

    andorra: (() => {
    const B=[0,0.196,0.627], Y=[1,0.847,0], R=[0.855,0.071,0.102];

    const armsImg = new Image();
    armsImg.src = 'recursos_yoel/andorra_escudo.svg'; // SVG con viewBox

    const fn = (x,y,w,h)=>{
        const positions=[],colors=[]; const s=w/3;
        // Azul
        positions.push(x,y, x+s,y, x,y+h,  x+s,y, x+s,y+h, x,y+h);
        colors.push(...Array(6).fill(B).flat());
        // Amarillo
        positions.push(x+s,y, x+2*s,y, x+s,y+h,  x+2*s,y, x+2*s,y+h, x+s,y+h);
        colors.push(...Array(6).fill(Y).flat());
        // Rojo
        positions.push(x+2*s,y, x+w,y, x+2*s,y+h,  x+w,y, x+w,y+h, x+2*s,y+h);
        colors.push(...Array(6).fill(R).flat());
        return {positions,colors};
    };

    fn.overlay = (ctx,x,y,w,h)=>{
        const draw = () => {
        const nw = armsImg.naturalWidth || 1, nh = armsImg.naturalHeight || 1;
        const ar = nw/nh;
        const s = w/3;
        const boxW = s * 0.70;     // ancho máximo en franja amarilla
        const boxH = h * 0.78;     // alto máximo permitido
        const boxAR = boxW/boxH;
        let ew, eh;
        if (ar > boxAR) { ew = boxW; eh = ew/ar; } else { eh = boxH; ew = eh*ar; }
        const ex = (x + s) + (s - ew)/2; // centrado en franja central
        const ey = y + (h - eh)/2;
        ctx.save(); ctx.drawImage(armsImg, ex, ey, ew, eh); ctx.restore();
        };
        if (armsImg.complete && armsImg.naturalWidth>0) draw(); else armsImg.onload = draw;
    };

    return fn;
    })(),

    angola: (() => {
    const R=[0.808,0.067,0.149], K=[0,0,0];

    const emblemImg = new Image();
    emblemImg.src = 'recursos_yoel/angola_escudo.svg'; // SVG con viewBox

    const fn=(x,y,w,h)=>{
        const positions=[],colors=[];
        // Mitad roja superior
        positions.push(x,y, x+w,y, x,y+h/2,  x+w,y, x+w,y+h/2, x,y+h/2);
        colors.push(...Array(6).fill(R).flat());
        // Mitad negra inferior
        positions.push(x,y+h/2, x+w,y+h/2, x,y+h,  x+w,y+h/2, x+w,y+h, x,y+h);
        colors.push(...Array(6).fill(K).flat());
        return {positions,colors};
    };

    fn.overlay=(ctx,x,y,w,h)=>{
        const draw=()=>{
        const nw = emblemImg.naturalWidth || 1, nh = emblemImg.naturalHeight || 1;
        const ar = nw/nh;
        const boxW = w * 0.56;     // caja centrada (algo conservadora)
        const boxH = h * 0.66;
        const boxAR = boxW/boxH;
        let ew, eh;
        if (ar > boxAR) { ew = boxW; eh = ew/ar; } else { eh = boxH; ew = eh*ar; }
        const ex = x + (w - ew)/2;
        const ey = y + (h - eh)/2;
        ctx.save(); ctx.drawImage(emblemImg, ex, ey, ew, eh); ctx.restore();
        };
        if (emblemImg.complete && emblemImg.naturalWidth>0) draw(); else emblemImg.onload=draw;
    };

    return fn;
    })(),

    antiguaAndBarbuda: (x, y, w, h) => {
    // Antigua y Barbuda — respeta el sistema (x,y) arriba-izquierda.
    // Orden: rojo (fondo) → triángulo blanco invertido → FRANJA NEGRA SUPERIOR (TRAPEZOIDE) → franja azul → sol (16 rayos).
    const RED=[0.808,0.067,0.149], BLACK=[0,0,0], WHITE=[1,1,1],
            BLUE=[0,0.447,0.807], SUN=[0.988,0.820,0.070];

    const positions=[], colors=[];

    // 1) Fondo rojo completo
    positions.push(x,y, x+w,y, x,y+h,  x+w,y, x+w,y+h, x,y+h);
    colors.push(...Array(6).fill(RED).flat());

    // 2) Triángulo blanco invertido (base = borde superior, ápice = centro inferior)
    const apexX = x + w*0.5, apexY = y + h;
    positions.push(x, y,  x+w, y,  apexX, apexY);
    colors.push(...WHITE, ...WHITE, ...WHITE);

    // Utilidad: intersección horizontal con los lados del triángulo blanco
    const edgeAtY = (yy) => {
        const t = (yy - y) / (apexY - y); // 0 en y, 1 en el ápice
        return {
        left:  x + (apexX - x) * t,
        right: x + w - (x + w - apexX) * t,
        };
    };

    // 3) FRANJA NEGRA SUPERIOR (TRAPEZOIDE dentro del triángulo blanco)
    //    "toda la parte de arriba" = desde el borde superior hasta blackBaseY, recortado por el triángulo blanco.
    const blackBaseY = y + h * 0.36;
    const eBase = edgeAtY(blackBaseY);
    // trapezoide: (x,y)-(x+w,y)-(eBase.right,blackBaseY)-(eBase.left,blackBaseY)
    positions.push(
        x, y,         x+w, y,          eBase.right, blackBaseY,
        x, y,         eBase.right, blackBaseY,  eBase.left,  blackBaseY
    );
    colors.push(...Array(6).fill(BLACK).flat());

    // 4) Franja azul (trapezoide) bajo la base negra, también recortada por el triángulo blanco
    const blueBotY = y + h * 0.66;
    const eBot = edgeAtY(blueBotY);
    positions.push(
        eBase.left,  blackBaseY,  eBase.right, blackBaseY,  eBot.left,  blueBotY,
        eBase.right, blackBaseY,  eBot.right,  blueBotY,    eBot.left,  blueBotY
    );
    colors.push(...Array(6).fill(BLUE).flat());

    // 5) Sol de 16 rayos sobre la base negra (semicírculo hacia arriba)
    const cx = (eBase.left + eBase.right) * 0.5;
    const cy = blackBaseY;
    // limitar radio para mantenerlo dentro del triángulo blanco y bajo el borde superior
    const maxR = Math.min((eBase.right - eBase.left) * 0.48, (blackBaseY - y) * 0.95);
    const R = Math.min(maxR, Math.min(w,h) * 0.165);
    const rays = 16;
    for (let i=0; i<rays-1; i++) {
        const a0 = -Math.PI + (Math.PI/(rays-1))*i;
        const a1 = -Math.PI + (Math.PI/(rays-1))*(i+1);
        positions.push(
        cx, cy,
        cx + R*Math.cos(a0), cy + R*Math.sin(a0),
        cx + R*Math.cos(a1), cy + R*Math.sin(a1)
        );
        colors.push(...SUN, ...SUN, ...SUN);
    }

    return { positions, colors };
    },



    saudiArabia: (() => {
    // Verde + shahada/espada muy simplificada (SVG inline, sin dependencias externas)
    const FIELD=[0,0.423,0.208];
    const svgData = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600'>
        <g fill='#fff'>
        <path d='M120,210q40-60 120-60h120q40 0 40 40v40q0 40-40 40h-80q-40 0-60 20t-20 50q0 40 40 40h160q40 0 60-20t20-50v-30h60v35q0 50-35 85t-95 35H250q-55 0-92.5-32.5T80,320q0-65 40-110z'/>
        <rect x='540' y='270' width='280' height='50' rx='16'/>
        <rect x='200' y='430' width='540' height='18' rx='9'/>
        <path d='M720,430q70 0 120 40q-55-10-120 18z'/>
        </g>
    </svg>`;
    const img=new Image(); img.src='data:image/svg+xml;base64,'+btoa(svgData);
    const fn=(x,y,w,h)=>{
        const positions=[],colors=[];
        positions.push(x,y, x+w,y, x,y+h,  x+w,y, x+w,y+h, x,y+h);
        colors.push(...Array(6).fill(FIELD).flat());
        return {positions,colors};
    };
    fn.overlay=(ctx,x,y,w,h)=>{
        const draw=()=>{
        const mx=w*0.08; const bx=x+mx, by=y+h*0.16, bw=w-mx*2, bh=h*0.68;
        ctx.save(); ctx.drawImage(img,bx,by,bw,bh); ctx.restore();
        };
        if(img.complete&&img.naturalWidth>0) draw(); else img.onload=draw;
    };
    return fn;
    })(),

    algeria: (x,y,w,h)=>{
    // Verde/Blanco + creciente y estrella (geométrico)
    const G=[0,0.384,0.2], W=[1,1,1], R=[0.823,0.063,0.204];
    const positions=[],colors=[];
    // mitad verde
    positions.push(x,y, x+w/2,y, x,y+h,  x+w/2,y, x+w/2,y+h, x,y+h);
    colors.push(...Array(6).fill(G).flat());
    // mitad blanca
    positions.push(x+w/2,y, x+w,y, x+w/2,y+h,  x+w,y, x+w,y+h, x+w/2,y+h);
    colors.push(...Array(6).fill(W).flat());
    // creciente
    const cx=x+w*0.48, cy=y+h*0.5; const R1=Math.min(w,h)*0.22, r1=R1*0.75, off=R1*0.40, seg=80, step=2*Math.PI/seg;
    for(let i=0;i<seg;i++){ const a=i*step,b=(i+1)*step; positions.push(cx,cy, cx+R1*Math.cos(a),cy+R1*Math.sin(a), cx+R1*Math.cos(b),cy+R1*Math.sin(b)); colors.push(...R,...R,...R); }
    for(let i=0;i<seg;i++){ const a=i*step,b=(i+1)*step, cxx=cx+off; positions.push(cxx,cy, cxx+r1*Math.cos(a),cy+r1*Math.sin(a), cxx+r1*Math.cos(b),cy+r1*Math.sin(b)); colors.push(...W,...W,...W); }
    // estrella
    const pts=[]; const outer=R1*0.28, inner=outer*0.5;
    for(let i=0;i<10;i++){ const ang=(Math.PI*i)/5 - Math.PI/2; const rr=(i%2===0)?outer:inner; pts.push(cx+rr*Math.cos(ang), cy+rr*Math.sin(ang)); }
    for(let i=1;i<pts.length/2-1;i++){ positions.push(pts[0],pts[1], pts[2*i],pts[2*i+1], pts[2*(i+1)],pts[2*(i+1)+1]); colors.push(...R,...R,...R); }
    return {positions,colors};
    },

    argentina: (()=> {
    // Celeste/Blanco/Celeste + Sol (SVG inline)
    const CEL=[0.455,0.675,0.875], W=[1,1,1];
    const sunSvg=(()=>{
        let rays = '';
        for(let i=0;i<32;i++){
        const ang=(Math.PI*2/32)*i; const r1=90, r2=(i%2?130:115);
        const x1=200+Math.cos(ang)*r1, y1=200+Math.sin(ang)*r1;
        const x2=200+Math.cos(ang)*r2, y2=200+Math.sin(ang)*r2;
        rays += `<path d='M${x1.toFixed(1)},${y1.toFixed(1)} L${x2.toFixed(1)},${y2.toFixed(1)}'/>`;
        }
        return `
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
        <g fill='#f6b40e' stroke='#a67c00' stroke-width='4'>
            <circle cx='200' cy='200' r='58'/>
            ${rays}
        </g>
        </svg>`;
    })();
    const sunImg=new Image(); sunImg.src='data:image/svg+xml;base64,'+btoa(sunSvg);
    const fn=(x,y,w,h)=>{
        const positions=[],colors=[]; const s=h/3;
        positions.push(x,y, x+w,y, x,y+s,  x+w,y, x+w,y+s, x,y+s); colors.push(...Array(6).fill(CEL).flat());
        positions.push(x,y+s, x+w,y+s, x,y+2*s,  x+w,y+s, x+w,y+2*s, x,y+2*s); colors.push(...Array(6).fill(W).flat());
        positions.push(x,y+2*s, x+w,y+2*s, x,y+h,  x+w,y+2*s, x+w,y+h, x,y+h); colors.push(...Array(6).fill(CEL).flat());
        return {positions,colors};
    };
    fn.overlay=(ctx,x,y,w,h)=>{
        const draw=()=>{
        const R=Math.min(w,h)*0.23; const sz=R*2;
        const ex=x+w/2 - sz/2, ey=y+h/2 - sz/2;
        ctx.save(); ctx.drawImage(sunImg,ex,ey,sz,sz); ctx.restore();
        };
        if(sunImg.complete&&sunImg.naturalWidth>0) draw(); else sunImg.onload=draw;
    };
    return fn;
    })(),

    armenia: (x,y,w,h)=>{
    const s=h/3, RED=[0.851,0,0.070], BLUE=[0,0.2,0.627], OR=[0.949,0.659,0.086];
    const positions=[],colors=[];
    positions.push(x,y, x+w,y, x,y+s,  x+w,y, x+w,y+s, x,y+s); colors.push(...Array(6).fill(RED).flat());
    positions.push(x,y+s, x+w,y+s, x,y+2*s,  x+w,y+s, x+w,y+2*s, x,y+2*s); colors.push(...Array(6).fill(BLUE).flat());
    positions.push(x,y+2*s, x+w,y+2*s, x,y+h,  x+w,y+2*s, x+w,y+h, x,y+h); colors.push(...Array(6).fill(OR).flat());
    return {positions,colors};
    },

    australia: (x, y, w, h) => {
    // Geometría completa (Union Jack con fimbriación + estrellas) sin SVG
    const BLUE=[0.004,0.129,0.412], WHITE=[1,1,1], RED=[0.784,0.063,0.180];
    const positions=[], colors=[];
    const rect = (x0,y0,x1,y1,col)=>{
        positions.push(x0,y0, x1,y0, x0,y1,  x1,y0, x1,y1, x0,y1);
        colors.push(...Array(6).fill(col).flat());
    };
    const quad = (p, col) => {
        positions.push(p[0],p[1], p[2],p[3], p[4],p[5],  p[0],p[1], p[4],p[5], p[6],p[7]);
        colors.push(...Array(6).fill(col).flat());
    };
    const star = (cx, cy, R, r, points, tilt=-Math.PI/2) => {
        for (let i=0;i<points*2;i++){
        const a0 = tilt + (Math.PI/points)*i;
        const a1 = tilt + (Math.PI/points)*(i+1);
        const rr0 = (i%2===0) ? R : r;
        const rr1 = ((i+1)%2===0) ? R : r;
        positions.push(
            cx, cy,
            cx + rr0*Math.cos(a0), cy + rr0*Math.sin(a0),
            cx + rr1*Math.cos(a1), cy + rr1*Math.sin(a1)
        );
        colors.push(...WHITE, ...WHITE, ...WHITE);
        }
    };
    // campo
    rect(x,y, x+w,y+h, BLUE);

    // Cantón 1/2 × 1/2
    const cx0=x, cy0=y, cw=w*0.5, ch=h*0.5;
    rect(cx0, cy0, cx0+cw, cy0+ch, BLUE);
    const wWhite = ch * 0.20, wRed = wWhite * 0.6;
    const wWhiteDiag = ch * 0.12, wRedDiag = wWhiteDiag * 0.6, asym = wWhiteDiag * 0.25;

    // Aspas blancas
    { const x0=cx0,y0=cy0,x1=cx0+cw,y1=cy0+ch,dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy),px=-dy/L,py=dx/L,hw=wWhiteDiag*0.5;
        quad([x0+px*hw,y0+py*hw, x1+px*hw,y1+py*hw, x1-px*hw,y1-py*hw, x0-px*hw,y0-py*hw], WHITE);
    }
    { const x0=cx0+cw,y0=cy0,x1=cx0,y1=cy0+ch,dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy),px=-dy/L,py=dx/L,hw=wWhiteDiag*0.5;
        quad([x0+px*hw,y0+py*hw, x1+px*hw,y1+py*hw, x1-px*hw,y1-py*hw, x0-px*hw,y0-py*hw], WHITE);
    }
    // Aspas rojas descentradas
    { const x0=cx0,y0=cy0,x1=cx0+cw,y1=cy0+ch,dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy),nx=-dy/L,ny=dx/L,hw=wRedDiag*0.5,off=asym;
        quad([x0+nx*(hw+off),y0+ny*(hw+off), x1+nx*(hw+off),y1+ny*(hw+off), x1-nx*(hw-off),y1-ny*(hw-off), x0-nx*(hw-off),y0-ny*(hw-off)], RED);
    }
    { const x0=cx0+cw,y0=cy0,x1=cx0,y1=cy0+ch,dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy),nx=-dy/L,ny=dx/L,hw=wRedDiag*0.5,off=-asym;
        quad([x0+nx*(hw+off),y0+ny*(hw+off), x1+nx*(hw+off),y1+ny*(hw+off), x1-nx*(hw-off),y1-ny*(hw-off), x0-nx*(hw-off),y0-ny*(hw-off)], RED);
    }
    // Cruces
    rect(cx0, cy0 + ch*0.5 - wWhite*0.5, cx0+cw, cy0 + ch*0.5 + wWhite*0.5, WHITE);
    rect(cx0 + cw*0.5 - wWhite*0.5, cy0, cx0 + cw*0.5 + wWhite*0.5, cy0+ch, WHITE);
    rect(cx0, cy0 + ch*0.5 - wRed*0.5, cx0+cw, cy0 + ch*0.5 + wRed*0.5, RED);
    rect(cx0 + cw*0.5 - wRed*0.5, cy0, cx0 + cw*0.5 + wRed*0.5, cy0+ch, RED);

    // Estrellas
    const R_common = h * 0.10, r_common = R_common * 0.45;
    const R_large  = h * 0.055, r_large = R_large * 0.45;
    const R_mid    = h * 0.048, r_mid   = R_mid   * 0.45;
    const R_small5 = h * 0.030, r_small5= R_small5* 0.45;
    const SX=(f)=>x+w*f, SY=(f)=>y+h*f;
    // Commonwealth
    star(x + w*0.25, y + ch + h*0.125, R_common, r_common, 7);
    // Cruz del Sur
    star(SX(0.75),  SY(0.75),  R_large, r_large, 7);
    star(SX(0.875), SY(0.583), R_mid,   r_mid,   7);
    star(SX(0.70),  SY(0.50),  R_large, r_large, 7);
    star(SX(0.80),  SY(0.308), R_mid,   r_mid,   7);
    star(SX(0.91),  SY(0.667), R_small5,r_small5,5);
    return { positions, colors };
    },

    austria: (x,y,w,h)=>{
    const s=h/3, R=[0.928,0.160,0.223], W=[1,1,1];
    const positions=[],colors=[];
    positions.push(x,y, x+w,y, x,y+s,  x+w,y, x+w,y+s, x,y+s); colors.push(...Array(6).fill(R).flat());
    positions.push(x,y+s, x+w,y+s, x,y+2*s,  x+w,y+s, x+w,y+2*s, x,y+2*s); colors.push(...Array(6).fill(W).flat());
    positions.push(x,y+2*s, x+w,y+2*s, x,y+h,  x+w,y+2*s, x+w,y+h, x,y+h); colors.push(...Array(6).fill(R).flat());
    return {positions,colors};
    },

    azerbaijan: (x,y,w,h)=>{
    // Cian/Rojo/Verde + creciente y estrella 8 puntas
    const s=h/3, B=[0,0.7098,0.8863], R=[0.937,0.203,0.251], G=[0.314,0.619,0.184], W=[1,1,1];
    const positions=[],colors=[];
    positions.push(x,y, x+w,y, x,y+s,  x+w,y, x+w,y+s, x,y+s); colors.push(...Array(6).fill(B).flat());
    positions.push(x,y+s, x+w,y+s, x,y+2*s,  x+w,y+s, x+w,y+2*s, x,y+2*s); colors.push(...Array(6).fill(R).flat());
    positions.push(x,y+2*s, x+w,y+2*s, x,y+h,  x+w,y+2*s, x+w,y+h, x,y+h); colors.push(...Array(6).fill(G).flat());
    const cy=y+h*0.5, cx=x+w*0.45, R0=Math.min(w,h)*0.13, r0=R0*0.65, off=R0*0.40, seg=80, step=2*Math.PI/seg;
    for(let i=0;i<seg;i++){ const a=i*step,b=(i+1)*step; positions.push(cx,cy, cx+R0*Math.cos(a),cy+R0*Math.sin(a), cx+R0*Math.cos(b),cy+R0*Math.sin(b)); colors.push(...W,...W,...W); }
    for(let i=0;i<seg;i++){ const a=i*step,b=(i+1)*step, cxx=cx+off; positions.push(cxx,cy, cxx+r0*Math.cos(a),cy+r0*Math.sin(a), cxx+r0*Math.cos(b),cy+r0*Math.sin(b)); colors.push(...R,...R,...R); }
    const pts=[]; const s8=R0*0.65, scx=cx+R0*1.55, scy=cy;
    for(let k=0;k<8;k++){ const ang=-Math.PI/2 + k*(Math.PI/4); const rr = (k%2===0? s8 : s8*0.45); pts.push(scx+rr*Math.cos(ang), scy + rr*Math.sin(ang)); }
    for(let i=1;i<pts.length/2-1;i++){ positions.push(pts[0],pts[1], pts[2*i],pts[2*i+1], pts[2*(i+1)],pts[2*(i+1)+1]); colors.push(...W,...W,...W); }
    return {positions,colors};
    },

    bahamas: (x,y,w,h)=>{
    const s=h/3, A=[0,0.6706,0.7882], Y=[1,0.7804,0.1725], K=[0,0,0];
    const positions=[],colors=[];
    positions.push(x,y, x+w,y, x,y+s,  x+w,y, x+w,y+s, x,y+s); colors.push(...Array(6).fill(A).flat());
    positions.push(x,y+s, x+w,y+s, x,y+2*s,  x+w,y+s, x+w,y+2*s, x,y+2*s); colors.push(...Array(6).fill(Y).flat());
    positions.push(x,y+2*s, x+w,y+2*s, x,y+h,  x+w,y+2*s, x+w,y+h, x,y+h); colors.push(...Array(6).fill(A).flat());
    positions.push(x,y, x+w*0.35,y+h*0.5, x,y+h); colors.push(...K, ...K, ...K);
    return {positions,colors};
    },

    bangladesh: (x,y,w,h)=>{
    const G=[0,0.4157,0.3059], R=[0.9569,0.1647,0.2549];
    const positions=[],colors=[];
    positions.push(x,y, x+w,y, x,y+h,  x+w,y, x+w,y+h, x,y+h); colors.push(...Array(6).fill(G).flat());
    const cx=x+w*0.43, cy=y+h*0.5, Rr=Math.min(w,h)*0.25, seg=80, step=2*Math.PI/seg;
    for(let i=0;i<seg;i++){ const a=i*step,b=(i+1)*step; positions.push(cx,cy, cx+Rr*Math.cos(a),cy+Rr*Math.sin(a), cx+Rr*Math.cos(b),cy+Rr*Math.sin(b)); colors.push(...R,...R,...R); }
    return {positions,colors};
    },

    barbados: (()=> {
    const BLUE=[0,0.149,0.498], GOLD=[1,0.780,0.149];

    const triImg = new Image();
    triImg.src = 'recursos_yoel/barbados_escudo.svg'; // SVG con viewBox

    const fn=(x,y,w,h)=>{
        const positions=[],colors=[]; const s=w/3;
        // Azul (hoist)
        positions.push(x,y, x+s,y, x,y+h,  x+s,y, x+s,y+h, x,y+h); colors.push(...Array(6).fill(BLUE).flat());
        // Oro (centro)
        positions.push(x+s,y, x+2*s,y, x+s,y+h,  x+2*s,y, x+2*s,y+h, x+s,y+h); colors.push(...Array(6).fill(GOLD).flat());
        // Azul (fly)
        positions.push(x+2*s,y, x+w,y, x+2*s,y+h,  x+w,y, x+w,y+h, x+2*s,y+h); colors.push(...Array(6).fill(BLUE).flat());
        return {positions,colors};
    };

    fn.overlay=(ctx,x,y,w,h)=>{
        const draw=()=>{
        const nw = triImg.naturalWidth || 1, nh = triImg.naturalHeight || 1;
        const ar = nw/nh;
        const s = w/3;
        const boxW = s * 0.85;     // que quepa cómodamente dentro del oro
        const boxH = h * 0.62;
        const boxAR = boxW/boxH;
        let ew, eh;
        if (ar > boxAR) { ew = boxW; eh = ew/ar; } else { eh = boxH; ew = eh*ar; }
        // centrado en la bandera (y por ende en la franja amarilla si ew <= s)
        const ex = x + (w - ew)/2;
        const ey = y + (h - eh)/2;
        ctx.save(); ctx.drawImage(triImg, ex, ey, ew, eh); ctx.restore();
        };
        if (triImg.complete && triImg.naturalWidth>0) draw(); else triImg.onload=draw;
    };

    return fn;
    })(),

    bahrain: (x,y,w,h)=>{
    // Asta blanca dentada + campo rojo
    const W=[1,1,1], R=[0.694,0,0.129];
    const positions=[],colors=[];
    // rojo
    positions.push(x,y, x+w,y, x,y+h,  x+w,y, x+w,y+h, x,y+h); colors.push(...Array(6).fill(R).flat());
    // asta blanca ~ 0.28W
    const bandW=w*0.28;
    positions.push(x,y, x+bandW,y, x,y+h,  x+bandW,y, x+bandW,y+h, x,y+h); colors.push(...Array(6).fill(W).flat());
    // sierra (5 dientes)
    const teeth=5, toothH=h/teeth, depth=Math.min(w*0.13, toothH*0.95), baseX=x+bandW;
    for(let i=0;i<teeth;i++){
        const y0=y+i*toothH, y1=y0+toothH/2, y2=y0+toothH, tipX=baseX+depth;
        positions.push(baseX,y0, tipX,y1, baseX,y1); colors.push(...W, ...W, ...W);
        positions.push(baseX,y1, tipX,y1, baseX,y2); colors.push(...W, ...W, ...W);
    }
    return {positions,colors};
    },

    belgium: (x,y,w,h)=>{
    const s=w/3, K=[0,0,0], Y=[1,0.85,0.05], R=[0.937,0.203,0.251];
    const positions=[],colors=[];
    positions.push(x,y, x+s,y, x,y+h,  x+s,y, x+s,y+h, x,y+h); colors.push(...Array(6).fill(K).flat());
    positions.push(x+s,y, x+2*s,y, x+s,y+h,  x+2*s,y, x+2*s,y+h, x+s,y+h); colors.push(...Array(6).fill(Y).flat());
    positions.push(x+2*s,y, x+w,y, x+2*s,y+h,  x+w,y, x+w,y+h, x+2*s,y+h); colors.push(...Array(6).fill(R).flat());
    return {positions,colors};
    },


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
    lithuania: (x, y, w, h) => {
        const h3 = h / 3;
        const yellow = [253/255, 185/255, 19/255];   // #FDB913
        const green = [0/255, 106/255, 68/255];      // #006A44
        const red = [193/255, 39/255, 45/255];       // #C1272D
    
        const positions = [
            // Franja amarilla (superior)
            x, y, x + w, y, x, y + h3,
            x + w, y, x + w, y + h3, x, y + h3,
            // Franja verde (media)
            x, y + h3, x + w, y + h3, x, y + 2*h3,
            x + w, y + h3, x + w, y + 2*h3, x, y + 2*h3,
            // Franja roja (inferior)
            x, y + 2*h3, x + w, y + 2*h3, x, y + h,
            x + w, y + 2*h3, x + w, y + h, x, y + h
        ];
    
        const colors = [
            ...new Array(6).fill(yellow).flat(),
            ...new Array(6).fill(green).flat(),
            ...new Array(6).fill(red).flat()
        ];
    
        return { positions, colors };
    },

    luxembourg: (x, y, w, h) => {
        const h3 = h / 3;
        const red = [237/255, 41/255, 57/255];    // #ED2939
        const white = [1, 1, 1];
        const blue = [0/255, 161/255, 222/255];   // #00A1DE

        return {
            positions: [
                x, y, x + w, y, x, y + h3, x + w, y, x + w, y + h3, x, y + h3,
                x, y + h3, x + w, y + h3, x, y + 2*h3, x + w, y + h3, x + w, y + 2*h3, x, y + 2*h3,
                x, y + 2*h3, x + w, y + 2*h3, x, y + h, x + w, y + 2*h3, x + w, y + h, x, y + h
            ],
            colors: [
                ...new Array(6).fill(red).flat(),
                ...new Array(6).fill(white).flat(),
                ...new Array(6).fill(blue).flat()
            ]
        };
    },

    northMacedonia: (x, y, w, h) => {
        const red = [210/255, 0, 0]; // #D20000
        const yellow = [1, 1, 0];    // #FFFF00

        // Fondo rojo (Correcto)
        const positionsBG = [
            x, y, x + w, y, x, y + h,
            x + w, y, x + w, y + h, x, y + h
        ];
        const colorsBG = new Array(6).fill(red).flat();

        // Sol amarillo: un círculo central y 8 rayos
        const cx = x + w / 2;
        const cy = y + h / 2;

        // --- INICIO DE LA CORRECCIÓN ---

        const radius = h * 0.18; // radio del círculo central
        const gap = h * 0.025;   // <--- ¡NUEVO! Tamaño del espacio rojo entre círculo y rayos
        const rayStartRadius = radius + gap; // <--- ¡NUEVO! Radio donde comienzan los rayos

        // --- FIN DE LA CORRECCIÓN ---


        const positionsSun = [];
        const colorsSun = [];

        // Círculo central (Usa el 'radius' original)
        const segments = 32;
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            const x1 = cx + radius * Math.cos(a1); // <-- Usa 'radius'
            const y1 = cy + radius * Math.sin(a1); // <-- Usa 'radius'
            const x2 = cx + radius * Math.cos(a2); // <-- Usa 'radius'
            const y2 = cy + radius * Math.sin(a2); // <-- Usa 'radius'

            positionsSun.push(cx, cy, x1, y1, x2, y2);
            colorsSun.push(...yellow, ...yellow, ...yellow);
        }

        // Rayos (8 rayos trapezoidales)
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2; 
            const angleWidth = (Math.PI / 32); 
            
            const a1 = angle - angleWidth; 
            const a2 = angle + angleWidth; 
            
            // --- INICIO DE LA CORRECCIÓN ---

            // Puntos en la base interna del trapezoide (ahora usan 'rayStartRadius')
            const x_c1 = cx + rayStartRadius * Math.cos(a1); // <-- CORREGIDO
            const y_c1 = cy + rayStartRadius * Math.sin(a1); // <-- CORREGIDO
            const x_c2 = cx + rayStartRadius * Math.cos(a2); // <-- CORREGIDO
            const y_c2 = cy + rayStartRadius * Math.sin(a2); // <-- CORREGIDO
            
            // --- FIN DE LA CORRECCIÓN ---


            // Función para encontrar el punto de intersección con el borde
            const findEdgePoint = (angle) => {
                const c = Math.cos(angle);
                const s = Math.sin(angle);
                const dist_h = w / 2;
                const dist_v = h / 2;
                
                let t_h = Infinity, t_v = Infinity;

                if (Math.abs(c) > 1e-6) { 
                    t_h = (c > 0) ? dist_h / c : -dist_h / c;
                }
                if (Math.abs(s) > 1e-6) {
                    t_v = (s > 0) ? dist_v / s : -dist_v / s;
                }
                
                const t = Math.min(t_h, t_v);
                return { x: cx + t * c, y: cy + t * s };
            };

            // Puntos en el borde de la bandera (base externa del trapezoide)
            const p_e1 = findEdgePoint(a1); 
            const p_e2 = findEdgePoint(a2); 

            // Crear el trapezoide con dos triángulos
            positionsSun.push(
                x_c1, y_c1, p_e1.x, p_e1.y, p_e2.x, p_e2.y,
                x_c1, y_c1, p_e2.x, p_e2.y, x_c2, y_c2
            );
            colorsSun.push(...new Array(6).fill(yellow).flat());
        }
        
        return {
            positions: [...positionsBG, ...positionsSun],
            colors: [...colorsBG, ...colorsSun]
        };
    },

    madagascar: (x, y, w, h) => {
        const w3 = w / 3;
        const h2 = h / 2;
        const white = [1, 1, 1];
        const red = [252/255, 61/255, 50/255];  // #FC3D32
        const green = [0, 149/255, 67/255];     // #009543

        return {
            positions: [
                // Franja vertical blanca
                x, y, x + w3, y, x, y + h, x + w3, y, x + w3, y + h, x, y + h,
                // Franja horizontal roja (derecha superior)
                x + w3, y, x + w, y, x + w3, y + h2, x + w, y, x + w, y + h2, x + w3, y + h2,
                // Franja horizontal verde (derecha inferior)
                x + w3, y + h2, x + w, y + h2, x + w3, y + h, x + w, y + h2, x + w, y + h, x + w3, y + h
            ],
            colors: [
                ...new Array(6).fill(white).flat(),
                ...new Array(6).fill(red).flat(),
                ...new Array(6).fill(green).flat()
            ]
        };
    },
    
    marshallIslands: (x, y, w, h) => ({
        positions: [x, y, x + w, y, x, y + h, x + w, y, x + w, y + h, x, y + h],
        colors: new Array(6).fill([0, 0.3, 0.6]).flat()
    }),

    malaysia: (x, y, w, h) => {
        // Colores (los tuyos + amarillo)
        const red = [187/255, 0, 0];    // #BB0000
        const white = [1, 1, 1];
        const blue = [0, 0, 139/255];   // #00008B
        const yellow = [1, 252/255, 0]; // #FFFC00 (Amarillo brillante para los símbolos)

        const positions = [];
        const colors = [];
        const stripeH = h / 14;

        // --- CORRECCIÓN EN FRANJAS Y CANTÓN ---

        // 1. Dibujar las 7 franjas inferiores (i = 7 a 13)
        // Estas ocupan TODO el ancho
        for (let i = 7; i < 14; i++) {
            const y0 = y + i * stripeH;
            const y1 = y0 + stripeH;
            const stripeColor = i % 2 === 0 ? red : white; // La franja 0 (superior) es roja
            positions.push(
                x, y0, x + w, y0, x, y1,
                x + w, y0, x + w, y1, x, y1
            );
            colors.push(...new Array(6).fill(stripeColor).flat());
        }

        // 2. Dibujar el Cantón Azul (Rectángulo corregido)
        const cantonHeight = h / 2; // Correcto (cubre 7 franjas)
        const cantonWidth = w / 2;  // CORREGIDO: Basado en el ancho 'w', no en 'h'
        positions.push(
            x, y, x + cantonWidth, y, x, y + cantonHeight,
            x + cantonWidth, y, x + cantonWidth, y + cantonHeight, x, y + cantonHeight
        );
        colors.push(...new Array(6).fill(blue).flat());

        // 3. Dibujar las 7 franjas superiores (i = 0 a 6)
        // Estas solo ocupan la parte DERECHA (la "mosca"), desde el cantón hasta el final
        for (let i = 0; i < 7; i++) {
            const y0 = y + i * stripeH;
            const y1 = y0 + stripeH;
            const stripeColor = i % 2 === 0 ? red : white;
            positions.push(
                x + cantonWidth, y0, x + w, y0, x + cantonWidth, y1, // Empezar en x + cantonWidth
                x + w, y0, x + w, y1, x + cantonWidth, y1
            );
            colors.push(...new Array(6).fill(stripeColor).flat());
        }

        // --- AÑADIR SÍMBOLOS (LUNA Y ESTRELLA) ---

        // Centro de los símbolos (dentro del cantón)
        // Ajustados ligeramente para que se parezcan a la bandera real
        const cx = x + cantonWidth / 2.1; 
        const cy = y + cantonHeight / 2;

        const positionsSymbols = [];
        const colorsSymbols = [];
        const segments = 32; // Calidad para los círculos

        // 4. Media Luna
        // Se dibuja con el "método de recorte":
        // 1. Dibuja un círculo amarillo grande.
        // 2. Dibuja un círculo azul (color del fondo) más pequeño y desplazado encima.

        const rOuterCrescent = h * 0.16; // Radio exterior
        const rInnerCrescent = h * 0.15; // Radio interior (para el recorte)
        const crescentCenterX = cx - w * 0.04; // Centro del círculo amarillo
        const cutoutCenterX = crescentCenterX + w * 0.025; // Centro del círculo azul (recorte)

        // Círculo exterior (Amarillo)
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            const x1 = crescentCenterX + rOuterCrescent * Math.cos(a1);
            const y1 = cy + rOuterCrescent * Math.sin(a1);
            const x2 = crescentCenterX + rOuterCrescent * Math.cos(a2);
            const y2 = cy + rOuterCrescent * Math.sin(a2);
            positionsSymbols.push(crescentCenterX, cy, x1, y1, x2, y2);
            colorsSymbols.push(...yellow, ...yellow, ...yellow);
        }

        // Círculo interior (Azul - "Recorte")
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            const x1 = cutoutCenterX + rInnerCrescent * Math.cos(a1);
            const y1 = cy + rInnerCrescent * Math.sin(a1);
            const x2 = cutoutCenterX + rInnerCrescent * Math.cos(a2);
            const y2 = cy + rInnerCrescent * Math.sin(a2);
            positionsSymbols.push(cutoutCenterX, cy, x1, y1, x2, y2);
            colorsSymbols.push(...blue, ...blue, ...blue); // Usar color del fondo
        }
        
        // 5. Estrella de 14 puntas
        const starPoints = 14;
        const starSegments = starPoints * 2; // 2 vértices por punta (punta y valle)
        const rStarOuter = h * 0.15; // Radio de las puntas
        const rStarInner = h * 0.06; // Radio de los valles
        const starCenterX = cx + w * 0.1; // Centro de la estrella (a la derecha de la luna)
        const rotationOffset = Math.PI / 14; // Para rotar la estrella y que no quede una punta vertical

        for (let i = 0; i < starSegments; i++) {
            // Alternar radio exterior e interior
            const r1 = (i % 2 === 0) ? rStarOuter : rStarInner;
            const r2 = ((i + 1) % 2 === 0) ? rStarOuter : rStarInner;
            
            const a1 = (i / starSegments) * Math.PI * 2 + rotationOffset;
            const a2 = ((i + 1) / starSegments) * Math.PI * 2 + rotationOffset;

            const x1 = starCenterX + r1 * Math.cos(a1);
            const y1 = cy + r1 * Math.sin(a1);
            const x2 = starCenterX + r2 * Math.cos(a2);
            const y2 = cy + r2 * Math.sin(a2);

            // Triángulo desde el centro a los dos vértices
            positionsSymbols.push(starCenterX, cy, x1, y1, x2, y2);
            colorsSymbols.push(...yellow, ...yellow, ...yellow);
        }

        // Devolver todas las posiciones y colores combinados
        return {
            positions: [...positions, ...positionsSymbols],
            colors: [...colors, ...colorsSymbols]
        };
    },

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
    },
  
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
    const escudoImg = new Image();
    escudoImg.src = 'Recursos_Renso/Escudo_Egipto.png';

    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        const red = [206/255, 17/255, 38/255];
        const white = [1, 1, 1];
        const black = [0, 0, 0];

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

        pushRect(x, y, x + w, y + stripeH, red);
        pushRect(x, y + stripeH, x + w, y + stripeH * 2, white);
        pushRect(x, y + stripeH * 2, x + w, y + h, black);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        const stripeH = h / 3;
        const escudoSize = Math.min(w, stripeH) * 1.0;

        const drawEscudo = () => {
            const ratio = (escudoImg.naturalWidth || 1) / (escudoImg.naturalHeight || 1);
            const escudoW = escudoSize * ratio;
            const escudoH = escudoSize;
            
            const cx = x + w / 2;
            const cy = y + stripeH + stripeH / 2;
            const dx = cx - escudoW / 2;
            const dy = cy - escudoH / 2;

            ctx.save();
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
    const escudoImg = new Image();
    escudoImg.src = 'Recursos_Renso/Escudo_ElSalvador.png';

    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        const blue = [0/255, 56/255, 147/255];
        const white = [1, 1, 1];

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

        pushRect(x, y, x + w, y + stripeH, blue);
        pushRect(x, y + stripeH, x + w, y + stripeH * 2, white);
        pushRect(x, y + stripeH * 2, x + w, y + h, blue);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        const stripeH = h / 3;
        const escudoSize = Math.min(w, stripeH) * 0.9;

        const drawEscudo = () => {
            const ratio = (escudoImg.naturalWidth || 1) / (escudoImg.naturalHeight || 1);
            const escudoW = escudoSize * ratio;
            const escudoH = escudoSize;
            
            const cx = x + w / 2;
            const cy = y + stripeH + stripeH / 2;
            const dx = cx - escudoW / 2;
            const dy = cy - escudoH / 2;

            ctx.save();
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

ecuador: (() => {
    const escudoImg = new Image();
    escudoImg.src = 'Recursos_Renso/Escudo_Ecuador.png';

    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        const yellow = [255/255, 221/255, 0/255];
        const blue = [0/255, 56/255, 147/255];
        const red = [237/255, 28/255, 36/255];

        const yellowH = h * 0.5;
        const blueH = h * 0.25;

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

        pushRect(x, y, x + w, y + yellowH, yellow);
        pushRect(x, y + yellowH, x + w, y + yellowH + blueH, blue);
        pushRect(x, y + yellowH + blueH, x + w, y + h, red);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        const yellowH = h * 0.5;
        const blueH = h * 0.25;
        const escudoSize = Math.min(w, h) * 0.3;

        const drawEscudo = () => {
            const ratio = (escudoImg.naturalWidth || 1) / (escudoImg.naturalHeight || 1);
            const escudoW = escudoSize * ratio;
            const escudoH = escudoSize;
            
            const cx = x + w / 2;
            const cy = y + yellowH;
            const dx = cx - escudoW / 2;
            const dy = cy - escudoH / 2;

            ctx.save();
            ctx.beginPath();
            ctx.rect(x, y + yellowH * 0.5, w, yellowH * 0.5 + blueH);
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
                ctx.rect(x, y, w, yellowH);
                ctx.clip();
                drawEscudo();
                ctx.restore();
            };
        }
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

philippines: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Colores oficiales
        const blue  = [0x00/255, 0x33/255, 0x99/255]; // Azul real
        const red   = [0xCE/255, 0x11/255, 0x1D/255]; // Rojo
        const white = [1, 1, 1];                      // Blanco

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

        // Mitad superior azul
        pushRect(x, y, x + w, y + stripeH, blue);

        // Mitad inferior roja
        pushRect(x, y + stripeH, x + w, y + h, red);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        ctx.save();

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + h);
        ctx.lineTo(x + h * 0.8, y + h / 2);
        ctx.closePath();
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        // Coordenadas base para el triángulo
        const centerX = x + h * 0.45;
        const centerY = y + h / 2;

        const yellow = "#FFD700";
        const sunR = h * 0.09;

        // Círculo central
        ctx.beginPath();
        ctx.arc(centerX, centerY, sunR, 0, Math.PI * 2);
        ctx.fillStyle = yellow;
        ctx.fill();

        // Rayos del sol (8 en total)
        const rayoLargo = sunR * 2.3;
        const rayoAncho = sunR * 0.3;
        for (let i = 0; i < 8; i++) {
            const angle = (i * Math.PI) / 4;
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(-rayoAncho / 2, -sunR);
            ctx.lineTo(rayoAncho / 2, -sunR);
            ctx.lineTo(0, -rayoLargo);
            ctx.closePath();
            ctx.fillStyle = yellow;
            ctx.fill();
            ctx.restore();
        }


        const starR = h * 0.045;
        const starPoints = 5;

        const drawStar = (cx, cy, r) => {
            const innerR = r * 0.5;
            ctx.beginPath();
            for (let i = 0; i < starPoints * 2; i++) {
                const radius = i % 2 === 0 ? r : innerR;
                const angle = (-Math.PI / 2) + (i * Math.PI) / starPoints;
                const px = cx + Math.cos(angle) * radius;
                const py = cy + Math.sin(angle) * radius;
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fillStyle = yellow;
            ctx.fill();
        };

        // Posiciones de las estrellas
        drawStar(x + h * 0.08, y + h * 0.12, starR);           // Superior
        drawStar(x + h * 0.08, y + h * 0.89, starR);           // Inferior
        drawStar(x + h * 0.7, y + h * 0.50, starR);           // Derecha

        ctx.restore();
    };

    return fn;
})(),

finland: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Colores oficiales
        const white = [1, 1, 1];
        const blue  = [0x00/255, 0x2F/255, 0x6C/255]; // Azul bandera finlandesa

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

        // Fondo blanco completo
        pushRect(x, y, x + w, y + h, white);

        // Proporciones de la cruz (basado en proporción oficial 11:18)
        const stripeW = h / 5.5;        // Grosor de la cruz
        const offsetX = w * 0.28;       // Desplazamiento de la cruz hacia la izquierda
        const offsetY = (h - stripeW) / 2;

        // Cruz vertical azul
        pushRect(x + offsetX - stripeW / 2, y, x + offsetX + stripeW / 2, y + h, blue);

        // Cruz horizontal azul
        pushRect(x, y + offsetY, x + w, y + offsetY + stripeW, blue);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        ctx.save();

        // Fondo blanco
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x, y, w, h);

        // Azul oficial (Pantone 294 C)
        ctx.fillStyle = "#002F6C";

        // Cruz vertical
        const stripeW = h / 5.5;
        const offsetX = w * 0.28;
        ctx.fillRect(x + offsetX - stripeW / 2, y, stripeW, h);

        // Cruz horizontal
        const offsetY = (h - stripeW) / 2;
        ctx.fillRect(x, y + offsetY, w, stripeW);

        ctx.restore();
    };

    return fn;
})(),

fiji: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Fondo celeste
        const skyBlue = [0x68/255, 0xC3/255, 0xE2/255];
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
        pushRect(x, y, x + w, y + h, skyBlue);

        return { positions, colors };
    };

    fn.overlay = (ctx, x, y, w, h) => {
        ctx.save();

        // Fondo celeste
        ctx.fillStyle = "#68C3E2";
        ctx.fillRect(x, y, w, h);

        // Cantón (Union Jack)
        const cantonW = w * 0.5;
        const cantonH = h * 0.5;
        ctx.fillStyle = "#012169";
        ctx.fillRect(x, y, cantonW, cantonH);

        const drawSoftDiagonal = (color1, color2, width) => {
            ctx.save();
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.lineWidth = width;

            // Diagonal ↘
            let grad1 = ctx.createLinearGradient(x, y, x + cantonW, y + cantonH);
            grad1.addColorStop(0, color2);     // inicio se difumina
            grad1.addColorStop(0.1, color1);   // color sólido central
            grad1.addColorStop(0.9, color1);
            grad1.addColorStop(1, color2);     // fin se difumina
            ctx.strokeStyle = grad1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cantonW, y + cantonH);
            ctx.stroke();

            // Diagonal ↙
            let grad2 = ctx.createLinearGradient(x + cantonW, y, x, y + cantonH);
            grad2.addColorStop(0, color2);
            grad2.addColorStop(0.1, color1);
            grad2.addColorStop(0.9, color1);
            grad2.addColorStop(1, color2);
            ctx.strokeStyle = grad2;
            ctx.beginPath();
            ctx.moveTo(x + cantonW, y);
            ctx.lineTo(x, y + cantonH);
            ctx.stroke();

            ctx.restore();
        };

        // Blanco “suave” debajo
        drawSoftDiagonal("#FFFFFF", "rgba(1,33,105,0)", cantonH * 0.12);
        // Rojo “hundido” encima
        drawSoftDiagonal("#C8102E", "rgba(1,33,105,0)", cantonH * 0.06);

        // === Cruces centrales ===
        const crossW = cantonH * 0.22;
        const innerW = cantonH * 0.12;

        // Blanca
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x + cantonW / 2 - crossW / 2, y, crossW, cantonH);
        ctx.fillRect(x, y + cantonH / 2 - crossW / 2, cantonW, crossW);

        // Roja
        ctx.fillStyle = "#C8102E";
        ctx.fillRect(x + cantonW / 2 - innerW / 2, y, innerW, cantonH);
        ctx.fillRect(x, y + cantonH / 2 - innerW / 2, cantonW, innerW);

        
        
        const escudo = new Image();
        escudo.src = "Recursos_Renso/Escudo_Fiyi.png";
        escudo.onload = () => {
            // 🔹 Escudo un poco más pequeño
            const escudoW = w * 0.24;     
            const escudoH = escudoW * 1.25;

            // 🔹 Posición más a la derecha
            const escudoX = x + cantonW + w * 0.1;  
            const escudoY = y + (h - escudoH) / 2;

            // 🔹 Dibujo del escudo
            ctx.drawImage(escudo, escudoX, escudoY, escudoW, escudoH);
            ctx.restore();
        };
        ctx.restore();
    };

    return fn;
})(),

france: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Colores oficiales (azul, blanco, rojo)
        const blue  = [0x00 / 255, 0x35 / 255, 0xA2 / 255]; // Azul Francia
        const white = [1.0, 1.0, 1.0];
        const red   = [0xED / 255, 0x29 / 255, 0x34 / 255]; // Rojo Francia

        const stripeW = w / 3;

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

        // Franja azul (izquierda)
        pushRect(x, y, x + stripeW, y + h, blue);
        // Franja blanca (centro)
        pushRect(x + stripeW, y, x + 2 * stripeW, y + h, white);
        // Franja roja (derecha)
        pushRect(x + 2 * stripeW, y, x + w, y + h, red);

        return { positions, colors };
    };

    // === Overlay Canvas (para visualización 2D adicional si se usa) ===
    fn.overlay = (ctx, x, y, w, h) => {
        ctx.save();

        const stripeW = w / 3;

        // Franja azul
        ctx.fillStyle = "#0035A2";
        ctx.fillRect(x, y, stripeW, h);

        // Franja blanca
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x + stripeW, y, stripeW, h);

        // Franja roja
        ctx.fillStyle = "#ED2934";
        ctx.fillRect(x + 2 * stripeW, y, stripeW, h);

        ctx.restore();
    };

    return fn;
})(),

gabon: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Colores oficiales
        const green  = [0x00 / 255, 0x9E / 255, 0x60 / 255]; // Verde
        const yellow = [0xFCD116 / 255, 0xFCD116 / 255, 0x00 / 255]; // Amarillo brillante
        const blue   = [0x3A / 255, 0x75 / 255, 0xCF / 255]; // Azul Gabón

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

        // Franja verde (superior)
        pushRect(x, y, x + w, y + stripeH, green);

        // Franja amarilla (central)
        pushRect(x, y + stripeH, x + w, y + 2 * stripeH, yellow);

        // Franja azul (inferior)
        pushRect(x, y + 2 * stripeH, x + w, y + h, blue);

        return { positions, colors };
    };

    // === Overlay Canvas (modo 2D) ===
    fn.overlay = (ctx, x, y, w, h) => {
        ctx.save();

        const stripeH = h / 3;

        // Verde
        ctx.fillStyle = "#009E60";
        ctx.fillRect(x, y, w, stripeH);

        // Amarillo
        ctx.fillStyle = "#FCD116";
        ctx.fillRect(x, y + stripeH, w, stripeH);

        // Azul
        ctx.fillStyle = "#3A75CF";
        ctx.fillRect(x, y + 2 * stripeH, w, stripeH);

        ctx.restore();
    };

    return fn;
})(),


gambia: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        // Colores oficiales
        const red    = [0xCE / 255, 0x11 / 255, 0x26 / 255]; // Rojo
        const white  = [1.0, 1.0, 1.0];                      // Blanco
        const blue   = [0x0C / 255, 0x1C / 255, 0x8C / 255]; // Azul
        const green  = [0x3A / 255, 0x77 / 255, 0x0A / 255]; // Verde

        // Proporciones según bandera oficial:
        // Rojo: 3/9 | Blanco: 1/9 | Azul: 2/9 | Blanco: 1/9 | Verde: 3/9
        const total = h;
            const redH    = total * 3.2 / 9;   // un pelín más grandes
            const whiteH  = total * 0.6 / 9;   // más finas (~7% del total)
            const blueH   = total * 1.8 / 9;   // ligeramente ajustado
            const greenH  = total * 3.2 / 9;

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

        let offset = y;

        // Franja roja
        pushRect(x, offset, x + w, offset + redH, red);
        offset += redH;

        // Blanco superior
        pushRect(x, offset, x + w, offset + whiteH, white);
        offset += whiteH;

        // Azul (ligeramente más pequeña)
        pushRect(x, offset, x + w, offset + blueH, blue);
        offset += blueH;

        // Blanco inferior
        pushRect(x, offset, x + w, offset + whiteH, white);
        offset += whiteH;

        // Franja verde
        pushRect(x, offset, x + w, offset + greenH, green);

        return { positions, colors };
    };

    // === Overlay Canvas ===
    fn.overlay = (ctx, x, y, w, h) => {
        ctx.save();

        // Proporciones reales
        const redH    = h * 3 / 9;
        const whiteH  = h * 1 / 9;
        const blueH   = h * 2 / 9;
        const greenH  = h * 3 / 9;

        let offset = y;

        // Rojo
        ctx.fillStyle = "#CE1126";
        ctx.fillRect(x, offset, w, redH);
        offset += redH;

        // Blanco superior
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x, offset, w, whiteH);
        offset += whiteH;

        // Azul
        ctx.fillStyle = "#0C1C8C";
        ctx.fillRect(x, offset, w, blueH);
        offset += blueH;

        // Blanco inferior
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x, offset, w, whiteH);
        offset += whiteH;

        // Verde
        ctx.fillStyle = "#3A770A";
        ctx.fillRect(x, offset, w, greenH);

        ctx.restore();
    };

    return fn;
})(),

georgia: (() => {
    const fn = (x, y, w, h) => {
        const positions = [];
        const colors = [];

        const white = [1, 1, 1];      // fondo blanco
        const red   = [0.82, 0.0, 0.09]; // rojo intenso (cruces)

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

        // Fondo blanco
        pushRect(x, y, x + w, y + h, white);

        // Dimensiones proporcionales de la cruz central
        const crossW = w * 0.18;
        const crossH = h * 0.18;

        // Cruz central
        pushRect(x + (w - crossW) / 2, y, x + (w + crossW) / 2, y + h, red); // vertical
        pushRect(x, y + (h - crossH) / 2, x + w, y + (h + crossH) / 2, red); // horizontal

        return { positions, colors };
    };

    // === Overlay: 4 cruces pequeñas ===
    fn.overlay = (ctx, x, y, w, h) => {
        const red = "#D6001C";
        ctx.save();
        ctx.fillStyle = red;

        const crossSize = Math.min(w, h) * 0.25;
        const arm = crossSize * 0.15;

        // Función auxiliar para dibujar cruz
        const drawSmallCross = (cx, cy) => {
            ctx.beginPath();
            ctx.rect(cx - arm, cy - crossSize / 2, arm * 2, crossSize);
            ctx.rect(cx - crossSize / 2, cy - arm, crossSize, arm * 2);
            ctx.fill();
        };

        // Posiciones: cuadrantes
        const offsetX = w * 0.25;
        const offsetY = h * 0.25;

        drawSmallCross(x + offsetX, y + offsetY); // sup izq
        drawSmallCross(x + w - offsetX, y + offsetY); // sup der
        drawSmallCross(x + offsetX, y + h - offsetY); // inf izq
        drawSmallCross(x + w - offsetX, y + h - offsetY); // inf der

        ctx.restore();
    };

    return fn;
})(),


togo: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        const green = [0, 106/255, 78/255]; // #006A4E
        const yellow = [1, 206/255, 0]; // #FFCE00
        const red = [210/255, 16/255, 52/255]; // #D21034
        const white = [1, 1, 1];
        
        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };
        
        // 5 franjas horizontales
        const stripH = h / 5;
        pushRect(x, y, x + w, y + stripH, green);           // Franja 1: verde
        pushRect(x, y + stripH, x + w, y + stripH * 2, yellow);   // Franja 2: amarilla
        pushRect(x, y + stripH * 2, x + w, y + stripH * 3, green); // Franja 3: verde
        pushRect(x, y + stripH * 3, x + w, y + stripH * 4, yellow); // Franja 4: amarilla
        pushRect(x, y + stripH * 4, x + w, y + h, green);         // Franja 5: verde
        
        // Cantón rojo (3/5 del ancho, 3/5 de la altura)
        const cantonW = w * 0.34;
        const cantonH = h * 0.6;
        pushRect(x, y, x + cantonW, y + cantonH, red);
        
        // Estrella blanca de 5 puntas centrada
        const cx = x + cantonW / 2;
        const cy = y + cantonH / 2;
        const r1 = cantonH * 0.25; // Radio externo
        const r2 = cantonH * 0.1;  // Radio interno
        
        // Primer bucle: 5 triángulos hacia afuera
        for (let i = 0; i < 5; i++) {
            const a1 = Math.PI / 2 + (i * 2 * Math.PI) / 5;
            const a2 = a1 + Math.PI / 5;
            positions.push(
                cx, cy,
                cx + r1 * Math.cos(a1), cy - r1 * Math.sin(a1),
                cx + r2 * Math.cos(a2), cy - r2 * Math.sin(a2)
            );
            colors.push(...white, ...white, ...white);
        }
        
        // Segundo bucle: 5 triángulos hacia adentro
        for (let i = 0; i < 5; i++) {
            const b1 = Math.PI / 2 + (i * 2 * Math.PI) / 5;
            const b2 = b1 - Math.PI / 5;
            positions.push(
                cx, cy,
                cx + r1 * Math.cos(b1), cy - r1 * Math.sin(b1),
                cx + r2 * Math.cos(b2), cy - r2 * Math.sin(b2)
            );
            colors.push(...white, ...white, ...white);
        }
        
        return { positions, colors };
    },

    tonga: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        // Colores oficiales
        const red = [193/255, 0, 0]; // #C10000
        const white = [1, 1, 1];
        
        // Helper para rectángulo
        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };
        
        // Fondo rojo completo
        pushRect(x, y, x + w, y + h, red);
        
        // Cantón blanco (5/12 del ancho, 1/2 de la altura)
        const cantonW = w * (5/12);
        const cantonH = h / 2;
        pushRect(x, y, x + cantonW, y + cantonH, white);
        
        // Cruz roja centrada en el cantón (mismo grosor para vertical y horizontal)
        const crossThickness = cantonW * (3/17); // Grosor uniforme
        
        // Barra vertical
        const vCrossW = crossThickness;
        const vCrossH = cantonH * 0.75;
        const vCrossX = x + (cantonW - vCrossW) / 2;
        const vCrossY = y + (cantonH - vCrossH) / 2;
        
        pushRect(vCrossX, vCrossY, vCrossX + vCrossW, vCrossY + vCrossH, red);
        
        // Barra horizontal (mismo grosor)
        const hCrossW = cantonH * 0.75;
        const hCrossH = crossThickness; // Mismo grosor que la vertical
        const hCrossX = x + (cantonW - hCrossW) / 2;
        const hCrossY = y + (cantonH - hCrossH) / 2;
        
        pushRect(hCrossX, hCrossY, hCrossX + hCrossW, hCrossY + hCrossH, red);
        
        return { positions, colors };
    },

    trinidadAndTobago: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        // Colores oficiales
        const red = [218/255, 26/255, 53/255]; // #da1a35
        const white = [1, 1, 1];
        const black = [0, 0, 0];
        
        // Helper para rectángulo
        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };
        
        // Helper para cuadrilátero (4 vértices)
        const pushQuad = (p1, p2, p3, p4, color) => {
            positions.push(...p1, ...p2, ...p3, ...p2, ...p4, ...p3);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };
        
        // Fondo rojo completo
        pushRect(x, y, x + w, y + h, red);
        
        // Banda diagonal blanca según SVG: "m0 0 20.825 18H30L9.175 0z"
        // Puntos: (0,0) -> (20.825,18) -> (30,18) -> (9.175,0)
        const w1_p1 = [x, y]; // (0,0)
        const w1_p2 = [x + w * (20.825/30), y + h]; // (20.825,18)
        const w1_p3 = [x + w, y + h]; // (30,18)
        const w1_p4 = [x + w * (9.175/30), y]; // (9.175,0)
        pushQuad(w1_p1, w1_p2, w1_p4, w1_p3, white);
        
        // Banda negra dentro de la blanca: "m1.53 0 20.824 18h6.117L7.646 0z"
        // Puntos: (1.53,0) -> (1.53+20.824,18)=(22.354,18) -> (22.354+6.117,18)=(28.471,18) -> (7.646,0)
        const b1_p1 = [x + w * (1.53/30), y]; // (1.53,0)
        const b1_p2 = [x + w * (22.354/30), y + h]; // (22.354,18)
        const b1_p3 = [x + w * (28.471/30), y + h]; // (28.471,18)
        const b1_p4 = [x + w * (7.646/30), y]; // (7.646,0)
        pushQuad(b1_p1, b1_p2, b1_p4, b1_p3, black);
        
        return { positions, colors };
    },

    tunisia: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        // Colores oficiales
        const red = [231/255, 10/255, 23/255]; // #e70013
        const white = [1, 1, 1];
        
        // Helper para rectángulo
        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };
        
        // Fondo rojo
        pushRect(x, y, x + w, y + h, red);
        
        // Círculo blanco central (radio = h * 0.25)
        const cx = x + w / 2;
        const cy = y + h / 2;
        const radius = h * 0.25;
        const segments = 64;
        
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            positions.push(
                cx, cy,
                cx + radius * Math.cos(a1), cy + radius * Math.sin(a1),
                cx + radius * Math.cos(a2), cy + radius * Math.sin(a2)
            );
            colors.push(...white, ...white, ...white);
        }
        
        // Luna creciente roja (dos círculos superpuestos)
        const moonRadius = h * 0.1875; // radio = 15 del SVG
        
        // Círculo exterior rojo
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            positions.push(
                cx, cy,
                cx + moonRadius * Math.cos(a1), cy + moonRadius * Math.sin(a1),
                cx + moonRadius * Math.cos(a2), cy + moonRadius * Math.sin(a2)
            );
            colors.push(...red, ...red, ...red);
        }
        
        // Círculo interior blanco desplazado para crear creciente
        const innerRadius = h * 0.15; // radio = 12 del SVG
        const offsetX = h * 0.05; // desplazamiento cx=4 del SVG
        
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            positions.push(
                cx + offsetX, cy,
                cx + offsetX + innerRadius * Math.cos(a1), cy + innerRadius * Math.sin(a1),
                cx + offsetX + innerRadius * Math.cos(a2), cy + innerRadius * Math.sin(a2)
            );
            colors.push(...white, ...white, ...white);
        }
        
        // Estrella roja de 5 puntas (estilo Vietnam)
        const starX = cx + h * 0.06; // desplazamiento cx=5 del SVG
        const r1 = h * 0.11; // Radio externo
        const r2 = h * 0.04; // Radio interno
        
        // 5 triángulos hacia afuera
        for (let i = 0; i < 5; i++) {
            const a1 = (-Math.PI / 2 + (i * 2 * Math.PI) / 5) + 60;
            const a2 = (a1 + Math.PI / 5) + 60;
            positions.push(
                starX, cy,
                starX + r1 * Math.cos(a1), cy + r1 * Math.sin(a1),
                starX + r2 * Math.cos(a2), cy + r2 * Math.sin(a2)
            );
            colors.push(...red, ...red, ...red);
        }
        
        // 5 triángulos hacia adentro
        for (let i = 0; i < 5; i++) {
            const b1 = (-Math.PI / 2 + (i * 2 * Math.PI) / 5) + 60;
            const b2 = (b1 - Math.PI / 5) - 60;
            positions.push(
                starX, cy,
                starX + r1 * Math.cos(b1), cy + r1 * Math.sin(b1),
                starX + r2 * Math.cos(b2), cy + r2 * Math.sin(b2)
            );
            colors.push(...red, ...red, ...red);
        }
        
        return { positions, colors };
    },

    turkmenistan: (x, y, w, h) => {
        const w5 = w / 5;
        return {
            positions: [
                x,y, x+w5,y, x,y+h, x+w5,y, x+w5,y+h, x,y+h,
                x+w5,y, x+w5*2,y, x+w5,y+h, x+w5*2,y, x+w5*2,y+h, x+w5,y+h,
                x+w5*2,y, x+w5*3,y, x+w5*2,y+h, x+w5*3,y, x+w5*3,y+h, x+w5*2,y+h,
                x+w5*3,y, x+w5*4,y, x+w5*3,y+h, x+w5*4,y, x+w5*4,y+h, x+w5*3,y+h,
                x+w5*4,y, x+w,y, x+w5*4,y+h, x+w,y, x+w,y+h, x+w5*4,y+h
            ],
            colors: [
                ...new Array(6).fill([0,0.4,0]).flat(),
                ...new Array(6).fill([1,1,1]).flat(),
                ...new Array(6).fill([0.8,0.1,0.2]).flat(),
                ...new Array(6).fill([1,1,1]).flat(),
                ...new Array(6).fill([0,0.4,0]).flat()
            ]
        };
    },

    turkey: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        // Colores oficiales
        const red = [227/255, 10/255, 23/255]; // #e30a17
        const white = [1, 1, 1];
        
        // Helper para rectángulo
        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };
        
        // Fondo rojo
        pushRect(x, y, x + w, y + h, red);
        
        // Centro de la bandera
        const cx = x + w * 0.3; // Aproximadamente 41750/90000
        const cy = y + h / 2;
        const segments = 64;
        
        // Luna creciente blanca (dos círculos superpuestos)
        const outerMoonRadius = h * 0.25; // 15000/60000
        
        // Círculo exterior blanco
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            positions.push(
                cx, cy,
                cx + outerMoonRadius * Math.cos(a1), cy + outerMoonRadius * Math.sin(a1),
                cx + outerMoonRadius * Math.cos(a2), cy + outerMoonRadius * Math.sin(a2)
            );
            colors.push(...white, ...white, ...white);
        }
        
        // Círculo interior rojo para crear el creciente
        const innerMoonRadius = h * 0.2; // 12000/60000
        const moonOffsetX = h * 0.06; // desplazamiento para formar creciente
        
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            positions.push(
                cx + moonOffsetX, cy,
                cx + moonOffsetX + innerMoonRadius * Math.cos(a1), cy + innerMoonRadius * Math.sin(a1),
                cx + moonOffsetX + innerMoonRadius * Math.cos(a2), cy + innerMoonRadius * Math.sin(a2)
            );
            colors.push(...red, ...red, ...red);
        }
        
        // Estrella blanca de 5 puntas (estilo Vietnam)
        const starX = x + w/2;
        const r1 = h * 0.1; // Radio externo
        const r2 = h * 0.04; // Radio interno
        
        // Primer bucle: 5 triángulos hacia afuera
        for (let i = 0; i < 5; i++) {
            const a1 = -Math.PI / 2 + (i * 2 * Math.PI) / 5 + 60;
            const a2 = a1 + Math.PI / 5 + 60; 
            positions.push(
                starX, cy,
                starX + r1 * Math.cos(a1), cy + r1 * Math.sin(a1),
                starX + r2 * Math.cos(a2), cy + r2 * Math.sin(a2)
            );
            colors.push(...white, ...white, ...white);
        }
        
        // Segundo bucle: 5 triángulos hacia adentro
        for (let i = 0; i < 5; i++) {
            const b1 = -Math.PI / 2 + (i * 2 * Math.PI) / 5 + 60;
            const b2 = b1 - Math.PI / 5 - 60;
            positions.push(
                starX, cy,
                starX + r1 * Math.cos(b1), cy + r1 * Math.sin(b1),
                starX + r2 * Math.cos(b2), cy + r2 * Math.sin(b2)
            );
            colors.push(...white, ...white, ...white);
        }
        
        return { positions, colors };
    },

    tuvalu: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        // Colores oficiales
        const lightBlue = [0, 156/255, 222/255]; // #009cde
        const yellow = [254/255, 221/255, 0]; // #fedd00
        const blue = [1/255, 33/255, 105/255]; // #012169
        const red = [200/255, 16/255, 46/255]; // #c8102e
        const white = [1, 1, 1];
        
        // Helper para rectángulo
        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };
        
        // Helper para paralelogramo diagonal recortado dentro del cantón
        const pushDiagonalStripe = (x1, y1, x2, y2, thickness, color, clipX, clipY, clipW, clipH) => {
            // Calcular vector perpendicular para el grosor
            const dx = x2 - x1;
            const dy = y2 - y1;
            const len = Math.sqrt(dx * dx + dy * dy);
            const perpX = (-dy / len) * thickness / 2;
            const perpY = (dx / len) * thickness / 2;
            
            // Calcular las 4 esquinas del paralelogramo sin recortar
            let corners = [
                [x1 + perpX, y1 + perpY],
                [x1 - perpX, y1 - perpY],
                [x2 + perpX, y2 + perpY],
                [x2 - perpX, y2 - perpY]
            ];
            
            // Recortar cada esquina que esté fuera del rectángulo del cantón
            const clipRight = clipX + clipW;
            const clipBottom = clipY + clipH;
            
            corners = corners.map(([px, py]) => {
                let nx = px;
                let ny = py;
                
                // Si está fuera, proyectar hacia el borde más cercano
                if (px < clipX) nx = clipX;
                if (px > clipRight) nx = clipRight;
                if (py < clipY) ny = clipY;
                if (py > clipBottom) ny = clipBottom;
                
                return [nx, ny];
            });
            
            // Usar los puntos recortados para formar el paralelogramo
            // Orden: p1 (arriba-izq), p2 (abajo-izq), p3 (arriba-der), p4 (abajo-der)
            const [p1, p2, p3, p4] = corners;
            
            // Dos triángulos para formar el paralelogramo
            positions.push(...p1, ...p2, ...p3, ...p2, ...p4, ...p3);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };
        
        // Fondo azul claro
        pushRect(x, y, x + w, y + h, lightBlue);
        
        // Union Jack simplificado en el cantón (mitad izquierda superior)
        const cantonW = w / 2;
        const cantonH = h / 2;
        
        // Fondo azul del cantón
        pushRect(x, y, x + cantonW, y + cantonH, blue);
        
        // 1. Primero: Diagonales blancas en X (grosor 6 según SVG)
        // "m0 0 60 30M0 30 60 0" - dos líneas diagonales
        const whiteThickness = cantonW * (12/60); // Aumentado de 6 a 10 para más grosor
        pushDiagonalStripe(x, y, x + cantonW, y + cantonH, whiteThickness, white, x, y, cantonW, cantonH); // De esquina superior izquierda a inferior derecha
        pushDiagonalStripe(x, y + cantonH, x + cantonW, y, whiteThickness, white, x, y, cantonW, cantonH); // De esquina inferior izquierda a superior derecha
        
        // 2. Segundo: Diagonales rojas en X (grosor 4, encima de las blancas)
        const redThickness = cantonW * (6/60); // Aumentado de 4 a 6 para más grosor
        pushDiagonalStripe(x, y, x + cantonW, y + cantonH, redThickness, red, x, y, cantonW, cantonH);
        pushDiagonalStripe(x, y + cantonH, x + cantonW, y, redThickness, red, x, y, cantonW, cantonH);
        
        // 3. Tercero: Cruz blanca de San Jorge + (vertical y horizontal, encima de las X)
        const whiteW = cantonW * 0.16;
        const whiteH = cantonH * 0.25;
        pushRect(x + cantonW / 2 - whiteW / 2, y, x + cantonW / 2 + whiteW / 2, y + cantonH, white);
        pushRect(x, y + cantonH / 2 - whiteH / 2, x + cantonW, y + cantonH / 2 + whiteH / 2, white);
        
        // 4. Cuarto: Cruz roja de San Jorge + (más delgada, encima de la blanca)
        const redW = cantonW * 0.1;
        const redH = cantonH * 0.16;
        pushRect(x + cantonW / 2 - redW / 2, y, x + cantonW / 2 + redW / 2, y + cantonH, red);
        pushRect(x, y + cantonH / 2 - redH / 2, x + cantonW, y + cantonH / 2 + redH / 2, red);
        
        // 9 estrellas amarillas de 5 puntas (estilo Vietnam)
        const starPositions = [
            [0.546, 0.9],    // Estrella 1
            [0.65, 0.642],   // Estrella 2
            [0.65, 0.85],    // Estrella 3
            [0.754, 0.358],  // Estrella 4
            [0.754, 0.792],  // Estrella 5
            [0.842, 0.292],  // Estrella 6
            [0.842, 0.642],  // Estrella 7
            [0.929, 0.133],  // Estrella 8
            [0.929, 0.533]   // Estrella 9
        ];
        
        const r1 = h * 0.08; // Radio externo
        const r2 = h * 0.03; // Radio interno
        
        starPositions.forEach(([px, py]) => {
            const sx = x + w * px;
            const sy = y + h * py;
            
            // Primer bucle: 5 triángulos hacia afuera
            for (let i = 0; i < 5; i++) {
                const a1 = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
                const a2 = a1 + Math.PI / 5;
                positions.push(
                    sx, sy,
                    sx + r1 * Math.cos(a1), sy + r1 * Math.sin(a1),
                    sx + r2 * Math.cos(a2), sy + r2 * Math.sin(a2)
                );
                colors.push(...yellow, ...yellow, ...yellow);
            }
            
            // Segundo bucle: 5 triángulos hacia adentro
            for (let i = 0; i < 5; i++) {
                const b1 = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
                const b2 = b1 - Math.PI / 5;
                positions.push(
                    sx, sy,
                    sx + r1 * Math.cos(b1), sy + r1 * Math.sin(b1),
                    sx + r2 * Math.cos(b2), sy + r2 * Math.sin(b2)
                );
                colors.push(...yellow, ...yellow, ...yellow);
            }
        });
        
        return { positions, colors };
    },

    // Ucrania: diseño complejo según SVG proporcionado
    // Ucrania: azul arriba, amarillo abajo (diseño correcto)
    ukraine: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        // Colores oficiales
        const blue = [0, 91/255, 187/255]; // #005BBB
        const yellow = [1, 213/255, 0]; // #FFD500
        
        // Helper para rectángulo
        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };
        
        // Franja azul superior (mitad superior)
        pushRect(x, y, x + w, y + h / 2, blue);
        
        // Franja amarilla inferior (mitad inferior)
        pushRect(x, y + h / 2, x + w, y + h, yellow);
        
        return { positions, colors };
    },

    uganda: (() => {
        const svgData = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="410 200 200 200">
                <g stroke="#000">
                    <path d="m433.52 228.39-6.064-11.17c2.34-2.34 6.277-4.149 12.553-4.149 0 .426-.638 12.235-.638 12.235z" fill="#d90000"></path>
                    <path d="m439.371 225.412.851-12.34s12.554-.745 19.362 7.446c.107-.106-6.702 9.574-6.702 9.574z" fill="#fcdc04"></path>
                    <path d="m453.095 229.986 6.17-9.574c4.15 4.362 5.85 7.447 6.49 12.128.106.106-9.788 2.446-9.788 2.34 0-.107-2.765-4.788-2.872-4.894z" fill="#d90000"></path>
                    <path d="M436.605 388.073s11.596-13.298 34.15-10.425c-3.405-5.533-14.362-4.894-14.362-4.894s-3.404-25.851-.745-27.128c2.66-1.277 13.936.106 13.936.106 1.489 0 4.043-4.042 2.022-6.595-2.022-2.554-7.98-12.341-5.533-14.256 2.448-1.915 15.745 1.064 15.745 1.064l-37.553-48.086s-3.83-18.085 3.83-26.809c9.256-7.66 8.298-15.957 7.979-15.851-1.277-8.404-14.043-14.469-22.66-6.702-5.107 6.17-1.703 10.851-1.703 10.851s-13.404 3.617-13.936 5.957c-.532 2.341 15.107-.425 15.107-.425l-1.49 10.745s-30.426 27.66-7.127 51.596c.212-.106.744-1.064.744-1.064s8.192 10.107 16.809 12.34c8.085 8.299 7.34 7.022 7.34 7.022s1.596 13.086.107 15.639c-2.021-.639-22.66-1.383-25.745-.213-2.766.851-13.404.319-10.745 17.66 2.021-4.681 3.83-8.83 3.83-8.83s-.32 6.276 2.234 8.51c-.425-6.596 2.447-11.063 2.447-11.063s.532 7.234 2.127 8.297c1.596 1.064 1.596-11.702 10.427-10.638 8.829 1.064 15.212.745 15.212.745s2.979 25 2.021 27.34c-6.383-1.489-21.595.64-22.553 4.469 8.936-.532 13.086.531 13.086.531s-7.234 6.384-5 10.107z"></path>
                    <path d="M440.191 251.66s-22.139 24.403-12.587 43.076c.508-2.604.286-4.24.606-4.134-.532-.32 2.745 2.247 2.496 1.747.07-1.35-.998-4.243-.998-4.243l2.995.749-1.748-3.245 4.244.499s-1.498-3.994-.998-3.994c.499 0 3.494.25 3.494.25-6.296-11.3-.356-20.683 2.496-30.705zM447.882 230.73s1.17 8.405-3.404 10.852c-.745.532-3.617 1.49-3.192 3.192.532 2.34 1.808 1.915 3.617 1.489 4.787-.851 10.32-11.064 2.979-15.532z" fill="#9ca69c" stroke="#9ca69c"></path>
                    <circle cx="438" cy="238" r="1.8" fill="#fff" stroke="none"></circle>
                    <path d="M432.563 244.986c-1.17.958-7.34 7.341-1.277 9.681 6.277-1.702 4.574-2.872 5.958-4.255.035-2.872-3.121-3.617-4.681-5.426z" fill="#d90000"></path>
                    <path d="M445.967 305.307c-.32 1.383-1.702 6.489.212 10.425 5.32-2.234 7.767-1.596 9.575-.426-4.36-3.51-6.063-5-9.787-10z" fill="#9ca69c" stroke="#9ca69c"></path>
                    <path d="m455.116 329.455.32 11.915s4.148.745 6.063 0-.107-8.298-6.383-11.915z" fill="#fff" stroke="#fff"></path>
                    <path d="M485.223 330.945s-7.66-18.51-27.235-23.192c-19.575-4.681-17.022-25.532-15.426-26.809.852-1.809 1.49-4.574 7.128-1.914 5.639 2.66 31.596 15.744 35.32 16.382 3.723.639.532 35.959.213 35.533z" fill="#9ca69c"></path>
                    <path d="M466.606 307.647c-.32.212 26.17 15.637 18.191 28.936 7.554-5 5.107-13.723 5.107-13.723s6.17 16.064-8.83 23.936c1.596 1.384 2.66 1.064 2.66 1.064l-2.554 2.553s-1.17 1.915 8.937-2.98c-2.767 2.235-2.979 3.83-2.979 3.83s.744 2.129 7.34-3.616c-5.32 5.745-6.49 8.723-6.49 8.617 14.362-1.277 45.64-47.979-9.893-61.81 2.98 3.086 2.553 2.66 2.553 2.66z" fill="#d90000"></path>
                    <path d="M467.776 303.072c3.617 2.553 4.893 3.404 5.319 4.681-3.298-.744-6.277-.532-6.277-.532s-7.127-6.808-8.404-7.34c-.958 0-6.49-3.511-6.49-3.511-2.765-1.383-5.318-10.957 4.895-8.192 10.53 5 12.02 5.426 12.02 5.426 4.185 1.312 8.369 2.625 12.554 3.936l7.234 8.086s-12.872-6.384-14.468-6.49c3.51 2.872 5.532 6.808 5.532 6.808-4.078-1.17-7.624-2.234-11.915-2.872z" fill="#fff"></path>
                    <path d="M417.669 245.944s12.34-2.979 13.83-2.553" stroke="#fff"></path>
                </g>
            </svg>

        `;
        
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);

        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            
            // Colores oficiales
            const black = [0, 0, 0];
            const yellow = [252/255, 220/255, 4/255]; // #fcdc04
            const red = [217/255, 0, 0]; // #d90000
            const white = [1, 1, 1];
            
            // Helper para rectángulo
            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };
            
            // Helper para círculo
            const pushCircle = (cx, cy, radius, color, segments = 64) => {
                for (let i = 0; i < segments; i++) {
                    const angle1 = (i * 2 * Math.PI) / segments;
                    const angle2 = ((i + 1) * 2 * Math.PI) / segments;
                    positions.push(
                        cx, cy,
                        cx + radius * Math.cos(angle1), cy + radius * Math.sin(angle1),
                        cx + radius * Math.cos(angle2), cy + radius * Math.sin(angle2)
                    );
                    colors.push(...color, ...color, ...color);
                }
            };
            
            // 6 franjas horizontales (cada una h/6 de altura)
            const stripeH = h / 6;
            
            // Franja 1: Negro
            pushRect(x, y, x + w, y + stripeH, black);
            
            // Franja 2: Amarillo
            pushRect(x, y + stripeH, x + w, y + stripeH * 2, yellow);
            
            // Franja 3: Rojo
            pushRect(x, y + stripeH * 2, x + w, y + stripeH * 3, red);
            
            // Franja 4: Negro
            pushRect(x, y + stripeH * 3, x + w, y + stripeH * 4, black);
            
            // Franja 5: Amarillo
            pushRect(x, y + stripeH * 4, x + w, y + stripeH * 5, yellow);
            
            // Franja 6: Rojo
            pushRect(x, y + stripeH * 5, x + w, y + h, red);
            
            // Círculo blanco central
            const cx = x + w /2;
            const cy = y + h / 2;
            const radius = h * (93.5/600); // Radio según SVG: 93.5 en viewBox 900x600
            pushCircle(cx, cy, radius, white);
            
            return { positions, colors };
        };

        fn.overlay = (ctx, x, y, w, h) => {
            const drawIt = () => {
                // Posicionar la grulla en el centro
                const cx = x + w * 0.56;
                const cy = y + h / 2;
                const radius = h * (93.5/600);
                
                ctx.save();
                ctx.drawImage(img, 
                    cx - radius, 
                    cy - radius, 
                    radius * 2, 
                    radius * 2
                );
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

    uruguay: (() => {
        // Sol de Mayo 
        const svgData = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300">
                <style>.C{stroke-width:.6}.D{stroke-linecap:square}.E{stroke-width:.27}.F{fill:#7b3f00}.G{stroke-width:.61}.H{fill:#fcd116}</style>
                <defs>
                    <path id="A" d="M1.5 9 .2 11.03l.1.02c-.99 6.45.12 10.63.93 13.88.41 1.63.75 3.03.69 4.37a5.66 5.66 0 0 1-.71 2.54C5.86 26.68-1.46 24.12 6 12z" class="D E F"/>
                    <path id="B" fill="none" d="M0 11c-2 13 4.5 17 0 22"/>
                    <path id="C" d="M0 0h-6l6 33L6 0zv33"/>
                    <path id="D" stroke="none" d="M0 0h6zv33L6 0" class="F"/>
                </defs>
                <g transform="translate(234.285 -392.52)scale(3.7795)">
                    <g stroke="#7b3f00" stroke-miterlimit="20">
                        <g class="H">
                            <path d="m-19.11 157.89 3.07 4.58c-12.6 9.12-4.91 14.51-13.83 17.42 5.55-5.42-.73-6.25 3.94-17.55" class="D G"/>
                            <g transform="matrix(.3898 .9411 -.9411 .3898 -17.009 148.833)">
                                <g class="D">
                                    <path d="M1.5 9 6 12c-8 13 1 15-6 21 3-7-3.01-5.58-3.01-17.58" class="C"/>
                                    <use xlink:href="#A" class="E"/>
                                </g>
                                <use xlink:href="#B" class="C"/>
                            </g>
                            <path d="m-17.01 148.83-4.32-4.32-19.45 28.09 28.09-19.45-4.32-4.32-23.77 23.77" class="G"/>
                            <g transform="matrix(-.3898 .9412 -.941 -.3898 -17.009 148.833)">
                                <g class="D">
                                    <path d="M1.5 9 6 12c-8 13 1 15-6 21 3-7-3.03-5.45-3.03-17.45" class="C"/>
                                    <use xlink:href="#A" class="E"/>
                                </g>
                                <use xlink:href="#B" class="C"/>
                            </g>
                            <g class="C" transform="matrix(0 1.0187 -1.0186 0 -17.009 148.833)">
                                <use xlink:href="#C"/>
                                <use xlink:href="#D"/>
                            </g>
                            <g transform="matrix(-.9411 .3898 -.3898 -.9411 -17.009 148.833)">
                                <g class="D">
                                    <path d="M1.5 9 6 12c-8 13 1 15-6 21 3-7-3.02-6.24-3.02-18.24" class="C"/>
                                    <use xlink:href="#A" class="E"/>
                                </g>
                                <use xlink:href="#B" class="C"/>
                            </g>
                            <g class="C" transform="scale(-1.0187)rotate(-45 -168.018 -93.21)">
                                <use xlink:href="#C"/>
                                <use xlink:href="#D"/>
                            </g>
                            <g transform="rotate(-157.5 6.298 76.108)scale(1.0186)">
                                <g class="D">
                                    <path d="M1.5 9 6 12c-8 13 1 15-6 21 3-7-3.01-5.46-3.01-17.46" class="C"/>
                                    <use xlink:href="#A" class="E"/>
                                </g>
                                <use xlink:href="#B" class="C"/>
                            </g>
                            <g class="C" transform="rotate(180 -8.504 74.417)scale(1.0186)">
                                <use xlink:href="#C"/>
                                <use xlink:href="#D"/>
                            </g>
                            <g transform="rotate(-112.5 41.22 80.1)scale(1.0186)">
                                <g class="D">
                                    <path d="M1.5 9 6 12c-8 13 1 15-6 21 3-7-2.95-5.79-2.95-17.79" class="C"/>
                                    <use xlink:href="#A" class="E"/>
                                </g>
                                <use xlink:href="#B" class="C"/>
                            </g>
                            <g class="C" transform="rotate(-135 22.32 77.94)scale(1.0186)">
                                <use xlink:href="#C"/>
                                <use xlink:href="#D"/>
                            </g>
                            <g transform="matrix(.3898 -.941 .9412 .3898 -17.009 148.833)">
                                <g class="D">
                                    <path d="M1.5 9 6 12c-8 13 1 15-6 21 3-7-3.02-5.59-3.02-17.59" class="C"/>
                                    <use xlink:href="#A" class="E"/>
                                </g>
                                <use xlink:href="#B" class="C"/>
                            </g>
                            <g class="C" transform="matrix(0 -1.0186 1.0187 0 -17.009 148.833)">
                                <use xlink:href="#C"/>
                                <use xlink:href="#D"/>
                            </g>
                            <g transform="matrix(.9411 -.3898 .3898 .9411 -17.009 148.833)">
                                <g class="D">
                                    <path d="M1.5 9 6 12c-8 13 1 15-6 21 3-7-2.98-5.66-2.98-17.66" class="C"/>
                                    <use xlink:href="#A" class="E"/>
                                </g>
                                <use xlink:href="#B" class="C"/>
                            </g>
                            <g class="C" transform="scale(1.0187)rotate(-45 168.018 93.21)">
                                <use xlink:href="#C"/>
                                <use xlink:href="#D"/>
                            </g>
                        </g>
                        <path stroke-width=".28" d="m-19.1 157.89-2.02 1.4.09.05c-3.44 5.68-4.03 10.05-4.53 13.43-.25 1.69-.48 3.14-1.06 4.38a5.76 5.76 0 0 1-1.66 2.11c6.38-3.04.5-8.3 12.24-16.8z" class="F"/>
                        <g class="G">
                            <path fill="none" d="M-21.3 159.19c-6.95 11.45-2.39 17.75-8.58 20.7"/>
                            <path d="M-17.01 148.83h-6.11l6.11 33.62 6.11-33.62h-6.11v33.62" class="H"/>
                        </g>
                    </g>
                    <g class="F">
                        <path d="M-17.01 148.83h6.11zv33.62l6.11-33.62"/>
                        <path d="m-17.01 148.83 4.32 4.32zl-23.77 23.77 28.09-19.45"/>
                    </g>
                    <circle cx="-17.01" cy="148.83" r="11.21" stroke="#7b3f00" class="G H"/>
                    <g class="F">
                        <path d="M-8.76 144.35c-.71.81-1.12-.61-3.67-.61s-2.95 1.53-3.36 1.22 2.14-2.14 2.95-2.24a7.2 7.2 0 0 1 4.07 1.63m-2.95.92a1.2 1.2 0 0 1-.61 1.94c-.71 0-2.04-1.22-1.43-2.04"/>
                        <path d="M-15.07 146.18c.1-1.22 1.12-1.43 2.75-1.43s2.34 1.22 2.95 1.53c-.71 0-1.32-1.02-2.95-1.02s-1.63 0-2.75 1.02m.31.2c.41-.61.92.61 2.04.61a3.7 3.7 0 0 0 2.44-.81c.71-.51-1.02 1.22-2.14 1.22s-2.65-.61-2.34-1.02m-7.95-1.32c-.51.2-1.32 1.22 0 1.94-1.02-.71-.2-1.73 0-1.94"/>
                        <path d="M-11.3 145.17c.2.2 1.02 1.22 0 1.94 1.32-.71.51-1.73 0-1.94m-7.33 4.38c-.92.2-.61 1.53-1.43 1.63s-1.22 1.02-1.12.92c.51-.41 1.63-.71 2.44-.71s1.02.51 1.73.51.92-.51 1.73-.51 1.94.31 2.44.71c.1.1-.31-.81-1.12-.92s-.51-1.43-1.43-1.63c0 .41.31.31.41.92 0 .51-.92.51-1.12 0 .2.81-.41.81-.92.81s-1.12 0-.92-.81c-.2.51-1.12.51-1.12 0 .1-.61.41-.51.41-.92zm-3.16 3.46c-.81.61-1.02.92-1.12 1.63a7 7 0 0 1 .55-.85l-.14-.06.17.02z"/>
                        <path d="m-22.34 153.75-.01.02c.13.03.26.04.4.04zm.39.06a11.4 11.4 0 0 1 1.59.41c.57-.04 1.36-.19 3.35-.19s2.78.14 3.35.19a11.4 11.4 0 0 1 1.59-.41c-1.12 0-2.62-.8-3.31-.8-.81 0-1.02.2-1.63.2s-.81-.2-1.63-.2c-.69 0-2.19.8-3.31.8m9.88 0c.14 0 .28-.01.4-.04l-.01-.02z"/>
                        <path d="m-11.68 153.75.17-.02-.14.06a7 7 0 0 1 .55.85c-.1-.71-.31-1.02-1.12-1.63z"/>
                        <path d="M-11.65 153.78c-1.07.4-1.44.47-2.01.43-.97.31-1.76.63-3.35.63s-2.38-.32-3.35-.63c-.57.04-.94-.03-2-.44 3.19 1.38 2.85 1.88 5.35 1.88s2.16-.5 5.36-1.87m-10.71-.01c-.04-.03-.1-.04-.15-.05zm10.71 0 .15-.05a.8.8 0 0 1-.16.04zM-25.263 144.35c.714.815 1.121-.612 3.669-.612s2.955 1.529 3.362 1.223-2.14-2.14-2.955-2.242-3.159.714-4.076 1.63m2.955.918c-.713.611-.102 1.936.612 1.936s2.038-1.223 1.426-2.038"/>
                        <path d="M-18.945 146.184c-.102-1.223-1.12-1.427-2.751-1.427s-2.344 1.223-2.955 1.529c.713 0 1.324-1.02 2.955-1.02s1.63 0 2.751 1.02m-.306.204c-.407-.612-.917.611-2.038.611s-1.732-.306-2.445-.815 1.019 1.223 2.14 1.223 2.649-.612 2.343-1.02M-17.01 156.58c-.51 0-1.83.31 0 .31s.51-.31 0-.31"/>
                    </g>
                </g>
            </svg>`;
        
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);

        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            
            // Colores oficiales
            const white = [1, 1, 1];
            const blue = [0, 0x38/255, 0xa8/255]; // #0038a8
            
            // Helper para rectángulo
            const pushRect = (x0, y0, x1, y1, color) => {
                positions.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
                colors.push(...color, ...color, ...color, ...color, ...color, ...color);
            };
            
            // Fondo blanco completo
            pushRect(x, y, x + w, y + h, white);
            
            // 4 franjas azules horizontales (en las posiciones 2, 4, 6, 8 de 9)
            const h9 = h / 9;
            pushRect(x, y + h9, x + w, y + h9 * 2, blue); // Franja 2
            pushRect(x, y + h9 * 3, x + w, y + h9 * 4, blue); // Franja 4
            pushRect(x, y + h9 * 5, x + w, y + h9 * 6, blue); // Franja 6
            pushRect(x, y + h9 * 7, x + w, y + h9 * 8, blue); // Franja 8
            
            // Cuadro blanco superior izquierdo (cantón)
            const cantonW = w * 345 / 935; // Proporción del SVG
            const cantonH = h * 4.5 / 9; // 4.5 franjas de altura
            pushRect(x, y, x + cantonW, y + cantonH, white);
            
            return { positions, colors };
        };

        fn.overlay = (ctx, x, y, w, h) => {
            const drawIt = () => {
                // Posicionar el Sol de Mayo en el cantón
                const cantonW = w * 345 / 935;
                const cantonH = h * 4.5 / 9;
                const sunSize = cantonH * 0.9;
                const sunX = x + cantonW / 2 - sunSize / 2;
                const sunY = y + cantonH / 2 - sunSize / 2;
                
                ctx.save();
                ctx.drawImage(img, sunX, sunY, sunSize, sunSize);
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

    uzbekistan: (x, y, w, h) => {
        const positions = [];
        const colors = [];
        
        // Colores oficiales según el SVG
        const green = [48/255, 135/255, 56/255]; // #308738
        const blue = [48/255, 129/255, 247/255]; // #3081f7
        const red = [238/255, 22/255, 46/255]; // #ee162e
        const white = [1, 1, 1];
        
        // Helper para rectángulo
        const pushRect = (x0, y0, x1, y1, color) => {
            positions.push(x0, y0, x1, y0, x0, y1, x1, y0, x1, y1, x0, y1);
            colors.push(...color, ...color, ...color, ...color, ...color, ...color);
        };
        
        // Fondo verde
        pushRect(x, y, x + w, y + h, green);
        
        // Franja azul superior (0 a 250 de 500 = mitad superior)
        pushRect(x, y, x + w, y + h * 0.5, blue);
        
        // Franja roja (160 a 340 de 500)
        pushRect(x, y + h * 0.32, x + w, y + h * 0.68, red);
        
        // Franja blanca (170 a 330 de 500) - sobre la roja
        pushRect(x, y + h * 0.34, x + w, y + h * 0.66, white);
        
        // Luna creciente blanca (dos círculos superpuestos)
        const moonCenterX = x + w * 0.14; // cx="140" de 1000
        const moonCenterY = y + h * 0.16; // cy="80" de 500
        const outerRadius = h * 0.12; // r="60" de 500
        const segments = 64;
        
        // Círculo blanco exterior
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            positions.push(
                moonCenterX, moonCenterY,
                moonCenterX + outerRadius * Math.cos(a1), moonCenterY + outerRadius * Math.sin(a1),
                moonCenterX + outerRadius * Math.cos(a2), moonCenterY + outerRadius * Math.sin(a2)
            );
            colors.push(...white, ...white, ...white);
        }
        
        // Círculo azul interior (desplazado para crear creciente)
        const innerCenterX = x + w * 0.16; // cx="160" de 1000
        for (let i = 0; i < segments; i++) {
            const a1 = (i / segments) * Math.PI * 2;
            const a2 = ((i + 1) / segments) * Math.PI * 2;
            positions.push(
                innerCenterX, moonCenterY,
                innerCenterX + outerRadius * Math.cos(a1), moonCenterY + outerRadius * Math.sin(a1),
                innerCenterX + outerRadius * Math.cos(a2), moonCenterY + outerRadius * Math.sin(a2)
            );
            colors.push(...blue, ...blue, ...blue);
        }
        
        // ALINEADAS A LA DERECHA: todas las filas terminan en la misma posición X
        const r1 = h * 0.024; // Radio externo
        const r2 = h * 0.0096; // Radio interno
        
        // Espaciado horizontal entre estrellas
        const starSpacing = w * 0.048; // Separación horizontal entre estrellas
        const rightEdge = x + w * 0.37; // Posición X de la última estrella (alineación derecha)
        
        // Espaciado vertical entre filas (aumentado para mayor separación)
        const row1Y = y + h * 0.08;  // Primera fila (más arriba)
        const row2Y = y + h * 0.17;  // Segunda fila (medio)
        const row3Y = y + h * 0.26;  // Tercera fila (más abajo)
        
        // Posiciones de las estrellas alineadas a la derecha
        const starPositions = [
            // Primera fila (3 estrellas) - alineadas desde la derecha
            [rightEdge - starSpacing * 2, row1Y], // Estrella 1 (más a la izquierda)
            [rightEdge - starSpacing, row1Y],      // Estrella 2
            [rightEdge, row1Y],                    // Estrella 3 (derecha)
            
            // Segunda fila (4 estrellas) - alineadas desde la derecha
            [rightEdge - starSpacing * 3, row2Y], // Estrella 1
            [rightEdge - starSpacing * 2, row2Y], // Estrella 2
            [rightEdge - starSpacing, row2Y],     // Estrella 3
            [rightEdge, row2Y],                   // Estrella 4 (derecha)
            
            // Tercera fila (5 estrellas) - alineadas desde la derecha
            [rightEdge - starSpacing * 4, row3Y], // Estrella 1 (más a la izquierda)
            [rightEdge - starSpacing * 3, row3Y], // Estrella 2
            [rightEdge - starSpacing * 2, row3Y], // Estrella 3
            [rightEdge - starSpacing, row3Y],     // Estrella 4
            [rightEdge, row3Y]                    // Estrella 5 (derecha)
        ];
        
        starPositions.forEach(([sx, sy]) => {
            
            // Primer bucle: 5 triángulos hacia afuera
            for (let i = 0; i < 5; i++) {
                const a1 = Math.PI / 2 + (i * 2 * Math.PI) / 5;
                const a2 = a1 + Math.PI / 5;
                positions.push(
                    sx, sy,
                    sx + r1 * Math.cos(a1), sy - r1 * Math.sin(a1),
                    sx + r2 * Math.cos(a2), sy - r2 * Math.sin(a2)
                );
                colors.push(...white, ...white, ...white);
            }
            
            // Segundo bucle: 5 triángulos hacia adentro
            for (let i = 0; i < 5; i++) {
                const b1 = Math.PI / 2 + (i * 2 * Math.PI) / 5;
                const b2 = b1 - Math.PI / 5;
                positions.push(
                    sx, sy,
                    sx + r1 * Math.cos(b1), sy - r1 * Math.sin(b1),
                    sx + r2 * Math.cos(b2), sy - r2 * Math.sin(b2)
                );
                colors.push(...white, ...white, ...white);
            }
        });
        
        return { positions, colors };
    },

    vanuatu: (() => {
        // Emblema 
        const svgData = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="45 190 200 190">
            <path d="M115.481 339.524V372c28.253 0 83.7-21.65 83.7-91.356 0-69.706-59.144-82.644-76.835-82.644C104.656 198 50 210.674 50 267.706c0 57.032 53.6 62.313 64.161 62.313s50.167-9.506 45.679-52.28c0 12.146-13.73 37.758-42.511 37.758-28.78 0-46.734-21.388-46.734-42.51 0-21.124 17.426-49.376 47.79-49.376s52.543 26.931 52.543 54.128c0 27.196-21.386 61.785-55.447 61.785z" fill="#fdce12"/>
            <g id="a" fill="#fdce12">
                <path d="m90.728 297.245 1.683 1.089s13.367-30.496 49.309-52.18c-4.555 2.475-28.615 14.456-50.992 51.091z" stroke="#fdce12"/>
                <path d="M94.193 291.997s-4.158-8.515-.495-12.277c3.664-3.763 1.981 10 1.981 10l1.584-2.277s-2.476-10.397.297-12.575c2.772-2.178 1.386 10 1.386 10l1.683-2.178s-1.782-10.099.891-11.981c2.674-1.881.991 9.506.991 9.506l1.98-2.278s-1.485-9.604 1.782-11.881c3.268-2.278.396 9.109.396 9.109l2.178-2.376s-.99-8.813 1.783-10.793c2.772-1.98.396 8.317.396 8.317l1.98-2.079s-.594-8.218 2.079-10.099c2.674-1.882.198 7.822.198 7.822l2.08-1.981s-.495-8.218 2.871-9.802c3.366-1.584-.594 7.723-.594 7.723l2.277-1.98s.693-9.604 3.565-10.496c2.871-.891-1.287 8.516-1.287 8.516l2.079-1.684s1.089-8.218 4.257-9.208c3.169-.99-1.98 7.525-1.98 7.525l2.079-1.584s2.278-8.218 5.248-9.109c2.971-.891-3.069 7.723-3.069 7.723l1.98-1.386s3.267-7.427 5.941-7.922c2.673-.495-2.971 6.139-2.971 6.139l2.476-1.485s4.257-7.723 5.743-5.347c1.485 2.377-5.941 5.842-5.941 5.842l-2.476 1.386s9.011-4.257 10.1-2.079c1.089 2.178-12.377 3.565-12.377 3.565l-2.178 1.485s9.01-2.476 7.921-.198c-1.089 2.277-10 1.782-10 1.782l-2.08 1.485s9.01-2.178 7.822-.099c-1.188 2.079-10 1.881-10 1.881l-2.178 1.783s8.812-2.278 7.525.396c-1.288 2.673-11.288 2.574-11.288 2.574l-2.475 2.277s9.307-3.168 8.515-.693c-.792 2.476-11.387 3.763-11.387 3.763l-2.376 2.376s10-3.366 7.03-.297c-2.97 3.07-10.198 3.862-10.198 3.862l-2.872 3.465s9.902-5.941 8.515-2.574c-1.386 3.366-11.089 5.644-11.089 5.644l-1.98 2.376s8.911-5.149 8.02-2.277c-.891 2.871-10.397 5.94-10.397 5.94l-1.584 2.179s10.495-6.238 9.604-3.07c-.891 3.169-10.891 5.446-10.891 5.446l-1.287 1.98s9.703-5.544 9.802-2.871c.099 2.673-11.387 5.347-11.387 5.347l-.198-2.278z"/>
            </g>
            <use xlink:href="#a" transform="matrix(-1 0 0 1 238.5 0)"/>
        </svg>`;
        
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);

        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            
            // Colores de Vanuatu
            const red = [0.82, 0.063, 0.204]; // #d21034
            const green = [0, 0.584, 0.263]; // #009543
            const black = [0, 0, 0];
            const yellow = [0.992, 0.808, 0.071]; // #fdce12

            // CAPA 1: Franja roja superior (fondo)
            positions.push(
                x, y, x + w, y, x, y + h / 2,
                x + w, y, x + w, y + h / 2, x, y + h / 2
            );
            colors.push(...Array(6).fill(red).flat());

            // CAPA 2: Franja verde inferior (fondo)
            positions.push(
                x, y + h / 2, x + w, y + h / 2, x, y + h,
                x + w, y + h / 2, x + w, y + h, x, y + h
            );
            colors.push(...Array(6).fill(green).flat());

            // CAPA 3: Triángulo negro grande (wedge principal)
            // Path: m0 0 552.813 285 L0 570z
            const wedgeWidth = w * (552.813 / 950);
            positions.push(
                x, y,
                x + wedgeWidth, y + h / 2,
                x, y + h
            );
            colors.push(...black, ...black, ...black);

            // CAPA 4: Franja negra horizontal central
            // Path: M0 234h950v102H0z (234 a 336, altura 102 en viewBox 570)
            const blackStripY1 = y + h * (234 / 570);
            const blackStripY2 = y + h * (336 / 570);
            const blackStripHeight = blackStripY2 - blackStripY1;
            positions.push(
                x, blackStripY1, x + w, blackStripY1, x, blackStripY2,
                x + w, blackStripY1, x + w, blackStripY2, x, blackStripY2
            );
            colors.push(...Array(6).fill(black).flat());

            // CAPA 5: Triángulo amarillo medio
            // Path: M0 40.502 474.251 285 0 529.496z
            const yellowWedgeWidth = w * (474.251 / 950);
            const yellowWedgeY1 = y + h * (40.502 / 570);
            const yellowWedgeY2 = y + h * (529.496 / 570);
            positions.push(
                x, yellowWedgeY1,
                x + yellowWedgeWidth, y + h / 2,
                x, yellowWedgeY2
            );
            colors.push(...yellow, ...yellow, ...yellow);

            // CAPA 6: Franja amarilla horizontal central
            // Path: M0 270h950v30H0z (270 a 300)
            const yellowStripY1 = y + h * (270 / 570);
            const yellowStripY2 = y + h * (300 / 570);
            positions.push(
                x, yellowStripY1, x + w, yellowStripY1, x, yellowStripY2,
                x + w, yellowStripY1, x + w, yellowStripY2, x, yellowStripY2
            );
            colors.push(...Array(6).fill(yellow).flat());

            // CAPA 7: Triángulo negro interior (más pequeño)
            // Path: M0 74.255 408.782 285 0 495.745z
            const innerWedgeWidth = w * (408.782 / 950);
            const innerWedgeY1 = y + h * (74.255 / 570);
            const innerWedgeY2 = y + h * (495.745 / 570);
            positions.push(
                x, innerWedgeY1,
                x + innerWedgeWidth, y + h / 2,
                x, innerWedgeY2
            );
            colors.push(...black, ...black, ...black);

            return { positions, colors };
        };

        fn.overlay = (ctx, x, y, w, h) => {
            const drawIt = () => {
                // Posicionar el emblema en el triángulo negro
                const emblemaWidth = w * 0.2;
                const emblemaHeight = emblemaWidth * 0.95; // Proporción correcta del SVG (190/200)
                const emblemaX = x + w/17;
                const emblemaY = y + (h - emblemaHeight) / 2;
                
                ctx.save();
                ctx.drawImage(img, emblemaX, emblemaY, emblemaWidth, emblemaHeight);
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

    venezuela: (x, y, w, h) => {
        const h3 = h / 3;
        const positions = [
            // Franja amarilla (superior)
            x, y, x + w, y, x, y + h3,
            x + w, y, x + w, y + h3, x, y + h3,
            // Franja azul (centro)
            x, y + h3, x + w, y + h3, x, y + h3 * 2,
            x + w, y + h3, x + w, y + h3 * 2, x, y + h3 * 2,
            // Franja roja (inferior)
            x, y + h3 * 2, x + w, y + h3 * 2, x, y + h,
            x + w, y + h3 * 2, x + w, y + h, x, y + h
        ];
        
        const yellowColor = [1, 0.8, 0]; // #fc0 = rgb(255, 204, 0)
        const blueColor = [0, 0.14, 0.49]; // #00247d = rgb(0, 36, 77)
        const redColor = [0.81, 0.078, 0.17]; // #cf142b = rgb(207, 20, 43)
        
        const colors = [
            ...Array(6).fill(yellowColor).flat(),
            ...Array(6).fill(blueColor).flat(),
            ...Array(6).fill(redColor).flat()
        ];

        const white = [1, 1, 1];
        const arcRadius = w/3 * 0.50; // Radio del arco - aumentado para mayor separación entre estrellas
        const centerY = y + h3 *2; // Centro vertical en la franja azul
        
        const starAngles = [
            -160, -135.934, -120, -100,  // Lado izquierdo (descendente)
            -80, -60, -44.066, -20        // Lado derecho (ascendente)
        ];

        starAngles.forEach((angleDeg) => {
            const angleRad = (angleDeg * Math.PI) / 180;
            const cx = x + w / 2 + Math.cos(angleRad) * arcRadius; // Centro de la estrella
            const cy = centerY + Math.sin(angleRad) * arcRadius;
            const r1 = h * 0.035; // Radio externo de la estrella
            const r2 = r1 * 0.382; // Radio interno de la estrella (proporción geométrica)
            
            // Rotación de la estrella para que apunte hacia afuera del arco
            const rotation = angleRad + Math.PI / 2;
            
            // Dibujar estrella de 5 puntas (mismo patrón que Vietnam)
            for (let i = 0; i < 5; i++) {
                const a1 = rotation + (i * 2 * Math.PI) / 5; // Ángulo de punta externa
                const a2 = a1 + Math.PI / 5; // Ángulo de punta interna
                
                positions.push(
                    cx,
                    cy,
                    cx + r1 * Math.cos(a1),
                    cy - r1 * Math.sin(a1), // Punta externa
                    cx + r2 * Math.cos(a2),
                    cy - r2 * Math.sin(a2)  // Punta interna
                );
                colors.push(...white, ...white, ...white);
            }
            
            for (let i = 0; i < 5; i++) {
                const b1 = rotation + (i * 2 * Math.PI) / 5;
                const b2 = b1 - Math.PI / 5;
                
                positions.push(
                    cx,
                    cy,
                    cx + r1 * Math.cos(b1),
                    cy - r1 * Math.sin(b1), // Punta externa
                    cx + r2 * Math.cos(b2),
                    cy - r2 * Math.sin(b2)  // Punta interna
                );
                colors.push(...white, ...white, ...white);
            }
        });

        return { positions, colors };
    },

    vietnam: (x, y, w, h) => {
        const positions = [
            x,y,
            x + w,y,
            x,y + h,
            x + w,y,
            x + w,y + h,
            x,y + h,
        ];
        const redColor = [218 / 255, 18 / 255, 26 / 255];
        const colors = [...Array(6).fill(redColor).flat()];

        // Estrella amarilla de 5 puntas
        const [cx, cy, r1, r2] = [x + w / 2, y + h / 2, h * 0.25, h * 0.1]; //definimos los radios para las puntas externas
        const yellow = [1, 0.84, 0]; // [255/255, 215/255, 0/255];
        //se divide entre 255 porque los colores en webGL van de 0 a 1 y especifico es 255 porque es el maximo valor en RGB
        for (let i = 0; i < 5; i++) {
            const a1 = Math.PI / 2 + (i * 2 * Math.PI) / 5; //angulo inicial de cada punta, distancia entre cada punta
            // 1er: 90 grados
            const a2 = a1 + Math.PI / 5; //Aqui es porque en PI debe de haber 5 triangulos
            // 2do: 90 + 36 = 126 grados
            positions.push(
            cx,
            cy,
            cx + r1 * Math.cos(a1),
            cy - r1 * Math.sin(a1), //punta mas larga
            cx + r2 * Math.cos(a2),
            cy - r2 * Math.sin(a2) //punta mas corta
            );
            colors.push(...yellow, ...yellow, ...yellow);
        }
        for (let i = 0; i < 5; i++) {
            const b1 = Math.PI / 2 + (i * 2 * Math.PI) / 5; //angulo inicial de cada punta, distancia entre cada punta
            // 1er: 90 grados
            const b2 = b1 - Math.PI / 5; //Aqui es porque en PI debe de haber 5 triangulos
            // 2do: 90 + 36 = 126 grados
            positions.push(
            cx,
            cy,
            cx + r1 * Math.cos(b1),// Fórmula de conversión polar -> cartesiano
            cy - r1 * Math.sin(b1), //punta mas larga
            cx + r2 * Math.cos(b2),
            cy - r2 * Math.sin(b2) //punta mas corta
            );
            colors.push(...yellow, ...yellow, ...yellow); //spread
        }
        return {
            positions,
            colors,
        };
    },

    yemen: (x, y, w, h) => {
        const h3 = h / 3;
        return {
            positions: [
                x,y, x+w,y, x,y+h3,
                x+w,y, x+w,y+h3, x,y+h3,
                x,y+h3, x+w,y+h3, x,y+h3*2,
                x+w,y+h3, x+w,y+h3*2, x,y+h3*2,
                x,y+h3*2, x+w,y+h3*2, x,y+h,
                x+w,y+h3*2, x+w,y+h, x,y+h
            ],
            colors: [
                ...new Array(6).fill([0.8,0,0]).flat(),
                ...new Array(6).fill([1,1,1]).flat(),
                ...new Array(6).fill([0,0,0]).flat()
            ]
        };
    },

    zambia: (() => {
        // Águila africana
        const svgData = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="55500 0 28500 15840">
            <g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="90">
                <path fill="#ef7d00" d="M68202 13383c132 92 386 191 386 191 241-144 702-78 726-104 38-41 82-110 82-110l-30-494c-84 135-162 203-225 178 157-758-68-1176-631-2166-13 588-21 1108-74 1484 93 283 66 270 89 558-111-49-227-180-329-320 0 0-57 662 6 783zm2181-1405c236 387 444 302 514 453-232 126-520-262-695-295-175 110 516 963 511 1025-9 15-359-28-674-250 13 178 23 310 23 317 0 17 25 92 427 103 327 47 352 484 277 363-76-121-340-201-340-201s-213 11-163 150c415 144 327 495 251 691-75 196-326 190-326 190s182-213 25-294c-346 81-390-311-390-311s-56-127-201 6c138 657-257 714-257 714s-69 185 75 312c-377 5-258-335-302-409-44-12-175-162 13-582-276 426-559 270-559 270s-19 133 38 323c-214-161-220-236-220-524-10-51-14-103-13-150-47 46-101 91-157 121 346 461-63 732-63 732s-37 213 132 351c-314-23-314-294-314-294s-289-121-308-610c32 541-452 587-452 587s-63 121 44 260c-346-70-239-410-239-410s-270-161 182-593c-496 357-810 271-886 259 0 0-56 58-169 242-38-271 19-311 19-311s61-561 666-559c583 2 667-436 713-636-83 75-129 77-164 64-89-35 223-1156 135-1473 97 952-569 1350-548 1216 92-307 112-596 179-852 66-256 181-479 207-620-80 163-288 388-308 396-56 40 119-393 39-337-162 112-1208 272-1535-234 3-216 1018-671 941-626-153 92-2106 825-2054 391-108-102 1109-770 1081-755-27 15-1039 516-1079 537-39 21-863 259-1018 33-26-50 2349-1225 2357-1393-156 225-1842 1066-1907 1100-65 33-1058 320-1358 66-64-61 1315-701 1252-842-527 447-942 590-1335 662-219 32-459 39-634 4-351-72-576-272-572-305-1-47 1001-223 1209-480-2068 640-2767 40-2729-40 16-32 474-55 520-79 32-24 1285-418 1312-445 27-28-1301 398-1999 364-789-45-1160-322-1139-385 18-46 490-92 579-103 103-8 1448-409 1490-444 86-71-933 259-1121 269-1469 81-1679-309-1649-383 9-23 507-88 585-77 89 6 997-175 1009-183 46-31-881 200-956 171-2561-554-3006-1487-3006-1710 0-193 263 161 667 355 885 339 2726 1001 2663 980-989-318-2087-817-2373-933-546-231-971-968-852-1038 124-76 787 605 1327 799 109 39 2913 1116 2919 1100 24-63-2429-870-2631-1005-1238-490-1409-1580-1324-1657 155-44 592 516 911 693 200 111 585 336 3191 1401 25-9-1698-742-1917-860-443-301-830-741-1060-1094-169-260-174-509-86-509 145 0 625 394 1231 602 849 345 1762 723 2761 1258 60-22-1092-1005-884-1090 156-123 1778 873 3340 1287 579 85 2183 289 2778 554-120-82-140-107-177-136 471-2104 2354-1827 2812-1345 1408 133 867 723 613 812 126-440-454-305-681-458 174 62 348 121 522 183-147 66-206 38-410 58-248 34-720 265-302 1067 0 0 591-318 2816-166 241 27 1519-400 1925-524 646-111 2705-524 3262-910 391-42-106 662-602 827 0 0 3669-1434 3999-1710 151 166-1368 1848-4314 2468 2676-579 4961-2399 5427-2344 135 28 105 1779-6029 3296 4240-1021 6676-2887 6676-2690 0 98-422 1455-4135 2593 1037-220 3848-1792 3818-1489 91 124-2721 3433-7802 2358 4059 965 6690-1365 7066-1324 75 14-752 2041-5863 2165 2450-234 1744-14 1744-14s-1444 1034-3187 331c1368 345 1518 359 1548 469-90 138-1218 345-2300-193 717 290 1657 387 1669 510-118 127-623 243-898 179-247-57-703-299-1251-816 491 576 1788 1175 1562 1395-526 235-1653-372-2104-648 646 745 1232 704 1022 979-526 235-1353-413-1548-579 0 69 556 373 375 510-481 28-976-479-992-496 34 89 69 173 112 252z"/>
                <path fill="none" d="M60800 6626s1372 664 1952 617c-154 133-384 188-384 188 145 55 546 250 1151 125-145 133-333 281-333 281s520 180 1108-101c-179 203-281 352-281 352l409 23m-3093-1235s-384 266-861 250c119 438 1108 102 1108 102s-478 484-818 563c204 156 1065 101 1210 23s400-383 400-383-886 938-1014 930c-17 110 929 70 1125-94s690-406 690-406-1295 828-1355 828c486 118 1458-140 2080-492-921 563-1006 664-1475 852 418 86 631 344 2046-219 809-352 1269-993 1269-993-502 618-1295 1142-2173 1657-51 94 938 477 2199-726m77-1165c25 125-503 758 221 1501-656 734-656 828-656 828s366 188 1023-328c1082 1219 721 1777 721 1777m-86-861s-100-131 78-620c160 177 338 215 416 286 78 72 895 181 947 681m-321-1380s85 367 426 648c341 282 367 555 367 555m-1408 2328c162-159 370-519 397-778 59 98 130 222 234 360m1170 266c109-186 201-475 188-656 81 318 289 556 485 701m-2029-5816s119 328 468 539c358 211 895 876 938 993 41 142 247 1164 230 1274m6142-3125c-526 221-2435 827-3111 745 811 13 360 620-993 331 647 330 406 386 406 386s-1142 55-1443-180c767 262 451 359 451 359s-782 69-1142-83c556 152 270 248 270 248s-451 69-827-55m4480-1117c30 14 1834 373 2436 193-767 938-2301 304-2301 304 752 207 782 193 1023 386 75 179-1383 96-1864-152 1338 386 1368 359 1413 510 60 207-2195-55-2391-331 602 428 933 511 1263 704-406 165-1157 330-2540-566 1819 1517 3457 1420 3713 1696-631 855-3082-510-4209-1199-1128-690 2465 1668 2796 1627-310 250-1296 77-1835-304m-3362-4349c0-36-165-360-779 45 329 18 654 191 779-45zm2250 5797c-158-337-178-812-986-1560 536 764 1750 1203 1801 982 52-221-1069-1058-1011-1259 222 414 1348 1336 2177 1260 57-178-679-536-869-871-529-326-1821-1365-1967-1651m4929 369c-210 28-842 28-932 14m-4825 4564c-131 69-186 183-191 305"/>
            </g>
        </svg>`;
        
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);

        const fn = (x, y, w, h) => {
            const v = (w * 0.3426) / 3;
            const hA = h * 0.6402;
            const hB = h - hA;
            const wA = w - (v * 3);
            
            return {
                positions: [
                    x, y, x + w, y, x, y + h, x + w, y, x + w, y + h, x, y + h, // Verde grande
                    x + wA, y + hB, x + wA + v, y + hB, x + wA, y + h, // Rojo
                    x + wA + v, y + hB, x + wA + v, y + h, x + wA, y + h,
                    x + wA + v, y + hB, x + wA + v * 2, y + hB, x + wA + v, y + h, // Negro
                    x + wA + v * 2, y + hB, x + wA + v * 2, y + h, x + wA + v, y + h,
                    x + wA + v * 2, y + hB, x + wA + v * 3, y + hB, x + wA + v * 2, y + h, // Naranja
                    x + wA + v * 3, y + hB, x + wA + v * 3, y + h, x + wA + v * 2, y + h
                ],
                colors: [
                    ...new Array(6).fill([0, 0.4, 0]).flat(),         // Verde
                    ...new Array(6).fill([0.8, 0.1, 0.2]).flat(),     // Rojo
                    ...new Array(6).fill([0, 0, 0]).flat(),           // Negro
                    ...new Array(12).fill([0.9412, 0.4902, 0]).flat() // Naranja
                ]
            };
        };

        fn.overlay = (ctx, x, y, w, h) => {
            const drawIt = () => {
                // Posicionar el águila en la esquina superior derecha (sobre las franjas verticales)
                const eagleWidth = w * 0.3;
                const eagleHeight = eagleWidth * (19840 / 28000); // Proporción del viewBox (19840 / 25000 =)
                const eagleX = x + w - eagleWidth - w * 0.02; // Esquina derecha con margen
                const eagleY = y + h * 0.03; // Cerca del borde superior
                
                ctx.save();
                ctx.drawImage(img, eagleX, eagleY, eagleWidth, eagleHeight);
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

    zimbabwe: (() => {
        // Ave de Zimbabwe 
        const svgData = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="2200 4200 2500 3500">
            <g fill="none" stroke="#000" stroke-linejoin="round" stroke-linecap="round" stroke-width="38">
                <path fill="#ffd200" d="M2290 4580c-18-45-15-95 8-138 23-42 65-72 113-80 51-9 102-12 154-11 49-76 131-125 221-132 90-6 178 30 238 98 71 81 113 183 122 290l37 464 1412 1105a86 86 0 0 1-76 150l-59-17c-227 141-395 387-428 651l-85 672H2454l-198-769c-71-86-81-207-25-303 73-125 161-241 262-345 66-66 96-160 83-253-14-92-21-185-22-278-1-77 16-154 49-223l-19-694c-3-82-48-157-119-197z"/>
                <path d="m2465 4570 167-10m-29 901 580-390m232 1167c229 64 372 45 439-101m-852-566c-62 179 50 338 200 381l1258 357m-2040 631c-47-184 21-513 312-650 135-63 179-201 180-318 0-44 1-95 64-120m-720 1011 44-107c21 79 64 137 120 184 31-65 58-131 81-198 26 52 47 123 65 194-4-161 81-279 193-329l434-193c141-63 276-188 307-378m742 460H3008m-727 464h1751m-1346 381h1297m-1428-381 131 381v291m-63-509 128-128 128 128 128-128 128 128 128-128 128 128 128-128 128 128 128-128 128 128 124-124m-1366 269 90-90 128 128 128-128 128 128 128-128 128 128 128-128 128 128 128-128 128 128 97-97"/>
                <circle r="76" cx="2799" cy="4459"/>
                <circle r="145" cx="3139" cy="6730"/>
                <circle r="145" cx="3714" cy="6730"/>
            </g>
        </svg>`;
        
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);

        const fn = (x, y, w, h) => {
            const h7 = h / 7;
            const positions = [];
            const colors = [];
            
            // Colores
            const green = [0, 0.4, 0];           // Verde #006400
            const yellow = [1, 0.84, 0];         // Amarillo #ffd200
            const red = [0.831, 0, 0];           // Rojo #d40000
            const black = [0, 0, 0];             // Negro
            const white = [1, 1, 1];             // Blanco

            // CAPA 1: 7 Franjas horizontales (fondo)
            // Franja verde (1)
            positions.push(x, y, x + w, y, x, y + h7, x + w, y, x + w, y + h7, x, y + h7);
            colors.push(...Array(6).fill(green).flat());
            
            // Franja amarilla (2)
            positions.push(x, y + h7, x + w, y + h7, x, y + h7 * 2, x + w, y + h7, x + w, y + h7 * 2, x, y + h7 * 2);
            colors.push(...Array(6).fill(yellow).flat());
            
            // Franja roja (3)
            positions.push(x, y + h7 * 2, x + w, y + h7 * 2, x, y + h7 * 3, x + w, y + h7 * 2, x + w, y + h7 * 3, x, y + h7 * 3);
            colors.push(...Array(6).fill(red).flat());
            
            // Franja negra (4) - central
            positions.push(x, y + h7 * 3, x + w, y + h7 * 3, x, y + h7 * 4, x + w, y + h7 * 3, x + w, y + h7 * 4, x, y + h7 * 4);
            colors.push(...Array(6).fill(black).flat());
            
            // Franja roja (5)
            positions.push(x, y + h7 * 4, x + w, y + h7 * 4, x, y + h7 * 5, x + w, y + h7 * 4, x + w, y + h7 * 5, x, y + h7 * 5);
            colors.push(...Array(6).fill(red).flat());
            
            // Franja amarilla (6)
            positions.push(x, y + h7 * 5, x + w, y + h7 * 5, x, y + h7 * 6, x + w, y + h7 * 5, x + w, y + h7 * 6, x, y + h7 * 6);
            colors.push(...Array(6).fill(yellow).flat());
            
            // Franja verde (7)
            positions.push(x, y + h7 * 6, x + w, y + h7 * 6, x, y + h, x + w, y + h7 * 6, x + w, y + h, x, y + h);
            colors.push(...Array(6).fill(green).flat());

            // CAPA 2: Triángulo negro (borde del triángulo blanco)
            const triangleWidth = w * (8400 / 25200); // ~33.3% del ancho
            positions.push(
                x, y-(triangleWidth * 0.07),
                x + triangleWidth, y + h / 2,
                x, y + h+(triangleWidth * 0.07)
            );
            colors.push(...black, ...black, ...black);

            // CAPA 3: Triángulo blanco (interior)
            const whiteTriangleWidth = triangleWidth * 0.93; // Ligeramente más pequeño para mostrar borde negro
            positions.push(
                x, y,
                x + whiteTriangleWidth, y + h / 2,
                x, y + h
            );
            colors.push(...white, ...white, ...white);

            // CAPA 4: Estrella roja de 5 puntas (como en Vietnam)
            const cx = x + triangleWidth * 0.38; // Centro de la estrella
            const cy = y + h / 2;
            const r1 = h * 0.2; // Radio externo de la estrella
            const r2 = r1 * 0.382; // Radio interno
            
            // Dibujar estrella de 5 puntas (mismo patrón que Vietnam)
            for (let i = 0; i < 5; i++) {
                const a1 = Math.PI / 2 + (i * 2 * Math.PI) / 5; // Ángulo de punta externa
                const a2 = a1 + Math.PI / 5; // Ángulo de punta interna
                
                positions.push(
                    cx, cy,
                    cx + r1 * Math.cos(a1), cy - r1 * Math.sin(a1), // Punta externa
                    cx + r2 * Math.cos(a2), cy - r2 * Math.sin(a2)  // Punta interna
                );
                colors.push(...red, ...red, ...red);
            }
            
            for (let i = 0; i < 5; i++) {
                const b1 = Math.PI / 2 + (i * 2 * Math.PI) / 5;
                const b2 = b1 - Math.PI / 5;
                
                positions.push(
                    cx, cy,
                    cx + r1 * Math.cos(b1), cy - r1 * Math.sin(b1), // Punta externa
                    cx + r2 * Math.cos(b2), cy - r2 * Math.sin(b2)  // Punta interna
                );
                colors.push(...red, ...red, ...red);
            }

            return { positions, colors };
        };

        fn.overlay = (ctx, x, y, w, h) => {
            const drawIt = () => {
                // Posicionar el ave de Zimbabwe en el triángulo blanco
                const triangleWidth = w * (8400 / 25200);
                const birdWidth = triangleWidth * 0.27;
                const birdHeight = birdWidth * (3400 / 2100); // Proporción del viewBox del ave (3400/2100)
                const birdX = x + triangleWidth * 0.27;
                const birdY = y + h / 2 - birdHeight / 2;
                
                ctx.save();
                ctx.drawImage(img, birdX, birdY, birdWidth, birdHeight);
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

    turkmenistan: (() => {
        // Emblemas decorativos de la franja vertical
        const svgData = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="600" width="500" viewBox="0 0 500 600">
                <path style="fill:#d22630" d="M107.998 0h162v600h-162z"/>
                <g id="b" style="fill:#383739">
                    <path d="M107.998-39.619v5.88l9.11 8.527-3.072 2.86 6.515 6.038-2.86 2.596v-3.761h-5.562v4.502l12.553 11.759h6.356l.689-4.132h-3.655l3.972-3.707L142.002 0l-9.958 9.11-3.972-3.708h3.655l-.689-4.184h-6.356L112.13 12.977v4.502h5.562v-3.76l2.86 2.594-6.515 6.039 3.072 2.913-9.11 8.474v5.88l15.413-14.354-3.072-2.913 6.462-6.039-5.562-5.19 3.708-3.39 7.097 6.568L147.617 0l-15.573-14.3-7.097 6.62-3.708-3.443 5.562-5.19-6.462-6.039 3.072-2.86-15.413-14.407zm0 28.549v22.14l3.602-3.655v-4.29h3.813L118.485 0l-3.072-3.072H111.6v-4.343l-3.602-3.655zm26.271 7.839-.53 3.019.53 3.072 3.284-3.072z"/>
                    <path style="fill:#ffc72c" d="M107.998-38.983v4.66l9.746 9.11-3.072 2.861 6.514 6.038-3.919 3.655v-4.396h-4.714v3.92l12.341 11.493h5.72l.583-3.284h-4.237l5.084-4.767L142.638 0l-10.594 9.693-5.084-4.714h4.237l-.584-3.337h-5.72L112.55 13.135v3.92h4.715v-4.396l3.919 3.654-6.515 6.038 3.072 2.913-9.745 9.058v4.66l14.777-13.718-3.072-2.913 6.462-6.038-5.562-5.19 4.344-4.026 7.097 6.62L146.927 0l-14.884-13.718-7.097 6.62-4.344-4.025 5.562-5.19-6.462-6.039 3.072-2.86-14.777-13.771zm0 28.548v20.87l3.178-3.179V2.648h4.078L117.903 0l-2.649-2.648h-4.078v-4.609l-3.178-3.177zm26.589 8.051-.37 2.172.37 2.172 2.33-2.172z"/>
                </g>
                <use height="100%" width="100%" y="109.207" xlink:href="#b" style="fill:#383739"/>
                <use height="100%" width="100%" y="222.005" xlink:href="#b" style="fill:#383739"/>
                <use height="100%" width="100%" y="334.802" xlink:href="#b" style="fill:#383739"/>
                <use height="100%" width="100%" y="447.598" xlink:href="#b" style="fill:#383739"/>
                <g transform="matrix(-1 0 0 1 377.996 0)" style="fill:#383739">
                    <path d="M107.998-39.619v5.88l9.11 8.527-3.072 2.86 6.515 6.038-2.86 2.596v-3.761h-5.562v4.502l12.553 11.759h6.356l.689-4.132h-3.655l3.972-3.707L142.002 0l-9.958 9.11-3.972-3.708h3.655l-.689-4.184h-6.356L112.13 12.977v4.502h5.562v-3.76l2.86 2.594-6.515 6.039 3.072 2.913-9.11 8.474v5.88l15.413-14.354-3.072-2.913 6.462-6.039-5.562-5.19 3.708-3.39 7.097 6.568L147.617 0l-15.573-14.3-7.097 6.62-3.708-3.443 5.562-5.19-6.462-6.039 3.072-2.86-15.413-14.407zm0 28.549v22.14l3.602-3.655v-4.29h3.813L118.485 0l-3.072-3.072H111.6v-4.343l-3.602-3.655zm26.271 7.839-.53 3.019.53 3.072 3.284-3.072z"/>
                    <path style="fill:#ffc72c" d="M107.998-38.983v4.66l9.746 9.11-3.072 2.861 6.514 6.038-3.919 3.655v-4.396h-4.714v3.92l12.341 11.493h5.72l.583-3.284h-4.237l5.084-4.767L142.638 0l-10.594 9.693-5.084-4.714h4.237l-.584-3.337h-5.72L112.55 13.135v3.92h4.715v-4.396l3.919 3.654-6.515 6.038 3.072 2.913-9.745 9.058v4.66l14.777-13.718-3.072-2.913 6.462-6.038-5.562-5.19 4.344-4.026 7.097 6.62L146.927 0l-14.884-13.718-7.097 6.62-4.344-4.025 5.562-5.19-6.462-6.039 3.072-2.86-14.777-13.771zm0 28.548v20.87l3.178-3.179V2.648h4.078L117.903 0l-2.649-2.648h-4.078v-4.609l-3.178-3.177zm26.589 8.051-.37 2.172.37 2.172 2.33-2.172z"/>
                    <use height="100%" width="100%" y="109.207" xlink:href="#b"/>
                    <use height="100%" width="100%" y="222.005" xlink:href="#b"/>
                    <use height="100%" width="100%" y="334.802" xlink:href="#b"/>
                    <use height="100%" width="100%" y="447.598" xlink:href="#b"/>
                </g>
                <path d="M121.14 530.824c.8 3.407 3.508 5.979 4.154 9.513 1.292-3.685 2.484-6.773 1.594-10.804-.637-2.883-3.062-4.94-3.343-7.902-2.644 2.377-3.213 5.749-2.405 9.193zm-.67 14.276c2.243 3.075 5.36 5.434 8.803 7.007-.678-2.694.594-4.722 2.006-6.86 1.7-2.574 2.53-5.103 1.143-8.067-.646 1.541-1.514 2.821-2.533 4.139-1.506 2.055-2.497 3.883-2.73 6.52-1.742-1.292-2.507-3.22-3.439-5.086-1.42-2.673-3.712-4.908-6.345-6.369.7 2.998 1.238 6.169 3.095 8.716zm12.578 9.166c-.48 1.708-.893 3.4-.8 5.186-1.482-1.597-3.45-2.799-5.206-4.085-2.39-1.934-5.178-3.298-7.133-5.76.292 3.624 1.843 6.578 4.788 8.783 3.113 2.33 6.867 3.583 9.933 6.03-.46-3.297.752-5.937 1.784-8.967.86-2.895.028-5.834-1.935-8.04.029 2.445-.743 4.545-1.43 6.853zm6.986 11.133c.645 2.5 2.437 4.534 3.66 6.764-3.299-1.023-6.21-2.812-9.191-4.495-3.552-1.934-7.41-3.165-10.625-5.719 1.6 5.924 5.567 9.359 11.369 11.11 3.967 1.198 7.31.6 12.124 2.546-.552-3.259-1.525-6.776-3.066-9.714-1.195-2.125-2.521-4.221-3.26-6.562-1.07 1.923-1.576 3.879-1.011 6.07zm12.139 9.065a15.21 15.21 0 0 0 4.494 4.875c-4.683.299-8.451-2.669-13.017-2.798-2.82-.08-5.497.796-8.373.533 3.413 2.303 6.986 4.314 11.141 4.851 5.401.699 10.382-.66 16.341-.129-2.785-1.965-4.178-4.595-5.914-7.423-2.26-3.533-4.393-6.05-8.789-6.618 1.765 1.983 2.792 4.44 4.117 6.71zm16.631 7.773c-8.25 1.403-16.156 3.218-24.581 3.301 9.431 3.288 18.318 3.883 27.672.488 5.055-1.835 8.93-2.817 12.748-2.544 5.58.401 12.36 2.603 19.865 10.517l2.95-2.36c-10.756-9.583-24.829-11.753-38.654-9.403z" style="fill:#ffc72c"/>
                <path d="m128.266 70.34-12.981-7.961V43.244l12.981-7.96V25.159l12.267-7.388h9.8l18.648-10.488h40.033l18.648 10.488h9.8l12.267 7.388v10.125l12.981 7.96v19.135l-12.98 7.96v10.125l-12.268 7.387h-9.8L209.014 98.34h-40.033l-18.648-10.489h-9.8l-12.267-7.387z" style="fill:#383739"/>
                <path style="fill:#00843d" d="M169.068 7.733 150.424 18.22h-9.746l-11.97 7.203V35.54l-12.977 7.945v18.644l12.977 7.945v10.17l11.917 7.203h9.799l18.644 10.487h39.83l18.644-10.487h9.8l11.97-7.204v-10.17l12.976-7.944V43.485l-12.976-7.945V25.423l-11.97-7.203h-9.8L208.898 7.733h-39.83zm1.112 3.866h37.66l18.643 10.488h9.746l9.057 5.455V37.66l13.03 7.945V60.01l-13.03 7.945v10.117l-9.057 5.455h-9.746L207.84 94.015H170.18l-18.644-10.488h-9.745l-9.11-5.455V67.955l-12.977-7.945V45.604l12.976-7.945V27.542l9.11-5.455h9.746z"/>
                <path style="fill:#ffc72c" d="M188.783 53.025V12.017h-18.506L151.63 22.505h-9.722l-8.795 5.296v10.1l-12.98 7.96v6.736h69.08v41.009h18.506l18.648-10.489h9.723l8.794-5.296v-10.1l12.98-7.96v-6.735z"/>
                <path style="fill:#fff" d="M120.131 53.025v6.736l12.98 7.96v10.1l8.795 5.296h9.722l18.648 10.489h18.506v-41.01h69.081v-6.735l-12.98-7.96v-10.1l-8.795-5.296h-9.723l-18.648-10.488h-18.505v41.008z"/>
                <g id="d" style="fill:#383739">
                    <g id="c">
                        <path d="m148.448 26.28-3.196-2.978-3.166 1.952 3.201 2.985-4.11 2.546h8.969l7.73 7.29 2.472-2.61-7.515-7.09v-4.811z"/>
                        <path d="m163.573 24.972-3.196-2.978-3.166 1.952 3.201 2.984-4.11 2.547h8.969l7.73 7.29 2.472-2.61-7.515-7.09v-4.812zM147.339 34.836l-3.196-2.979-3.165 1.953 3.2 2.984-4.11 2.547h8.97l7.728 7.29 2.473-2.611-7.515-7.089v-4.812z"/>
                        <path d="M188.997 11.589h-8.093l-4.235 4.081h-8.255l-6.1 3.166 1.422 3.467 5.44-2.858h2.383l8.341 9.647 9.097-5.54z"/>
                        <path style="fill:#d22630" d="m145.199 23.838 2.872 2.676-2.406 1.49-2.876-2.68zm7.205.495v4.227l7.338 6.921-1.884 1.99-7.542-7.114h-7.635l9.723-6.024zM160.324 22.53l2.872 2.676-2.406 1.49-2.876-2.68zm7.205.494v4.227l7.338 6.922-1.884 1.99-7.542-7.114h-7.635l9.723-6.025z"/>
                        <path style="fill:#d22630" d="m144.091 32.393 2.871 2.677-2.406 1.49-2.875-2.68zm7.205.495v4.227l7.337 6.922-1.883 1.99-7.542-7.114h-7.636l9.724-6.025zM188.783 12.017h-7.706l-4.235 4.08h-8.324l-5.66 2.938 1.095 2.67 5.117-2.688h2.685l8.232 9.521 8.796-5.356z"/>
                    </g>
                    <use height="100%" width="100%" transform="matrix(1 0 0 -1 0 105.623)" xlink:href="#c"/>
                    <path d="m143.054 39.71-3.859-1.441-.092.064-4.982 3.457v.93l-7.98 10.091 7.98 10.092v.93l5.074 3.52 3.859-1.441-2.355-1.56v-2.967l.936-1.12h4.181V45.358h-4.181l-.936-1.12V41.27z"/>
                    <path style="fill:#d22630" d="m134.549 42.014 4.706-3.266 2.862 1.07-1.846 1.223v3.352l1.164 1.392h3.952v14.053h-3.952l-1.164 1.392v3.352l1.846 1.223-2.862 1.07-4.706-3.266v-.855l-7.862-9.943 7.863-9.943z"/>
                </g>
                <use height="100%" width="100%" transform="matrix(-1 0 0 1 377.994 0)" xlink:href="#d" style="fill:#383739"/>
                <path d="m136.203 61.282-2.173-1.88v-.906l-4.66-5.685 4.661-5.685v-.906l2.173-1.88 3.902 3.174-2.252-.017 3.328 3.378h7.605l5.98-4.677V33.863h14.96l17.372-10.66v-2.796l-2.657-1.771h-.842l-2.893 1.936-.448 1.444-2.264-3.09 4.399-3.695h.703l4.964-3.642h1.871l4.964 3.642h.703l4.399 3.695-2.263 3.09-.448-1.444-2.894-1.936h-.841l-2.657 1.77v2.797l17.372 10.66h14.959v12.335l5.98 4.677h7.606l3.328-3.378-2.253.017 3.903-3.173 2.172 1.88v.905l4.662 5.685-4.662 5.685v.906l-2.172 1.88-3.903-3.173 2.253.017-3.328-3.378h-7.605l-5.981 4.677V71.76h-14.959L190.895 82.42v2.796l2.657 1.77h.841l2.894-1.935.448-1.445 2.263 3.09-4.399 3.696h-.703l-4.964 3.642h-1.871l-4.964-3.642h-.703l-4.4-3.696 2.265-3.09.448 1.445 2.892 1.936h.842l2.658-1.77V82.42l-17.373-10.66h-14.958V59.424l-5.982-4.677h-7.604l-3.328 3.378 2.252-.017z" style="fill:#383739"/>
                <path style="fill:#ffc72c" d="m189.211 87.319 1.901 1.454-1.901 1.453V87.32zm-6.044 2.644h.07l4.964 3.643h.58v-2.842l-2.604-1.991 2.604-1.992v-5.337l-18.589-11.408H156.45V58.574l-7.095-5.55h-10.701l-2.69 3.042-2.69-3.041h-3.176l4.36 5.318v.863l1.727 1.5 2.774-2.16-1.628.013v-.54l3.629-3.7h7.974l6.262 4.898V71.33h14.651l17.68 10.85v3.264l-2.956 1.97h-1.103l-3.126-2.093-.24-.777-1.525 2.08 3.973 3.338h.617zm-47.2-39.76 2.117 2.394h-4.236zm52.815-34.807-1.9 1.453 1.9 1.454zm51.127 37.63 2.118 2.393 2.118-2.394zm-45.154-37.367-4.964-3.642h-.58v2.84l2.606 1.993-2.606 1.992v5.337l18.59 11.407h13.741V47.05l7.095 5.549h10.7l2.69-3.041 2.69 3.04h3.177l-4.36-5.317v-.864l-1.726-1.5-2.775 2.16 1.629-.013v.54l-3.63 3.7h-7.973l-6.262-4.898V34.29h-14.652l-17.679-10.85v-3.264l2.956-1.97h1.102l3.127 2.094.24.776 1.525-2.08-3.973-3.339h-.688z"/>
                <path style="fill:#fff" d="m188.782 90.226-1.9-1.453 1.9-1.453zm-50.698-37.2-2.118 2.394-2.118-2.394zm56.741 36.937h-.07l-4.964 3.643h-.58v-2.84l2.606-1.993-2.606-1.993v-5.336l18.59-11.408h13.741V58.574l7.095-5.549h10.7l2.69 3.041 2.69-3.041h3.177l-4.36 5.318v.863l-1.726 1.5-2.775-2.16 1.629.013v-.54l-3.63-3.7h-7.973l-6.262 4.898v12.115h-14.652L190.466 82.18v3.264l2.956 1.97h1.102l3.127-2.093.24-.777 1.525 2.081-3.973 3.337h-.618zm47.202-39.76-2.118 2.394h4.237zM183.24 15.66l4.963-3.642h.58v2.84l-2.605 1.993 2.606 1.992v5.337l-18.59 11.408h-13.74v11.462l-7.096 5.549h-10.703l-2.69-3.041-2.69 3.04H130.1l4.36-5.317v-.863l1.727-1.5 2.773 2.16-1.628-.014v.541l3.63 3.698h7.973l6.262-4.897V34.291h14.651l17.68-10.849v-3.265l-2.956-1.969h-1.102l-3.127 2.093-.24.776-1.525-2.08 3.974-3.338h.687zm5.972 2.645 1.901-1.454-1.901-1.454z"/>
                <path style="fill:#00843d" d="M188.783 53.025V24.68l-18.469 11.334H156.88v11.243l-6.828 5.34h39.16v28.345l18.467-11.334h13.435V58.366l6.828-5.34z"/>
                <path style="fill:#d22630" d="m150.051 53.025 6.829 5.34v11.243h13.434l18.469 11.334V52.596l39.159.001-6.828-5.34V36.014h-13.435l-18.467-11.333v28.344z"/>
                <path d="m169.118 39.063-3.195-2.978-3.166 1.952 3.2 2.984-4.11 2.547h8.97l7.729 7.29 2.472-2.61-7.515-7.09v-4.811zM208.873 66.56l3.196 2.978 3.165-1.953-3.2-2.984 4.11-2.546h-8.97l-7.728-7.291-2.473 2.611 7.515 7.09v4.811zM169.118 66.56l-3.196 2.978-3.165-1.953 3.2-2.984-4.11-2.546h8.97l7.728-7.291 2.473 2.611-7.515 7.09v4.811zM208.873 39.063l3.196-2.978 3.165 1.952-3.2 2.984 4.11 2.547h-8.97l-7.728 7.29-2.473-2.61 7.515-7.09v-4.811z" style="fill:#383739"/>
                <path style="fill:#d22630" d="m212.122 69.002-2.871-2.677 2.406-1.49 2.875 2.68zm-7.205-.495V64.28l-7.337-6.921 1.884-1.99 7.541 7.114h7.636l-9.724 6.024zM165.87 36.62l2.872 2.677-2.407 1.49-2.875-2.68zm7.206.496v4.226l7.337 6.922-1.884 1.99-7.541-7.114h-7.636l9.724-6.024z"/>
                <path style="fill:#00843d" d="m212.122 36.62-2.871 2.677 2.406 1.49 2.875-2.68zm-7.205.496v4.226l-7.337 6.922 1.884 1.99 7.541-7.114h7.636l-9.724-6.024zM165.87 69.002l2.871-2.677-2.406-1.49-2.875 2.68zm7.205-.495V64.28l7.338-6.921-1.884-1.99-7.541 7.114h-7.636l9.723 6.024z"/>
                <path d="m208.856 52.812-19.859 13.235-19.859-13.235 19.859-13.236Z" style="fill:#383739"/>
                <path style="fill:#fff" d="m188.783 40.233-18.551 12.364h37.531l-18.551-12.364V65.39l18.552-12.365h-37.533l18.552 12.365z"/>
                <path d="M194.308 57.363v3.639h-10.62v-3.64h-6.874V48.26h6.873v-3.64h10.621v3.64h6.873v9.103z" style="fill:#383739"/>
                <path style="fill:#d22630" d="M184.116 45.048v3.64h-6.873v3.909h11.54v-7.549h-4.667zm5.096 7.549h11.54v-3.91h-6.872v-3.639h-4.668v7.549zm-11.969.428v3.91h6.873v3.639h4.667v-7.549h-11.54Zm11.97 7.549h4.667v-3.639h6.873v-3.91h-11.54v7.55z"/>
                <path d="M222.877 203.61v-5.83h15.988v-5.83h15.988v-52.682h-15.988v-5.83h-15.988v-5.83h-15.988v-5.83h-35.782v5.83h-15.989v5.83H139.13v5.83H123.14v52.682h15.989v5.83h15.988v5.83h15.989v5.83h35.782v-5.83Z" style="fill:#383739"/>
                <path style="fill:#ffc72c;fill-opacity:1" d="M171.558 122.193v5.826h-15.996v5.827h-15.996v5.826H123.57v51.854h15.996v5.827h15.996v5.825h15.996v5.826h34.903v-5.826h15.997v-5.825h15.997v-5.827h15.994v-51.854h-15.994v-5.826h-15.997v-5.827h-15.997v-5.826zm4.237 4.237h26.43v5.826h15.996v5.827h15.996v5.826h15.995v43.38h-15.995v5.826h-15.996v5.826h-15.997v5.825h-26.429v-5.825H159.8v-5.826h-15.996v-5.827h-15.996v-43.38h15.996v-5.825H159.8v-5.827h15.996z"/>
                <path style="fill:#d22630" d="M160.209 198.519v-5.83h-15.988v-5.83h-15.989v-42.5h15.989v-5.831h15.988v-5.83h15.988v-5.83h25.601v5.83h15.989v5.83h15.987v5.83h15.99v42.5h-15.99v5.83h-15.987v5.831h-15.989v5.83h-25.6v-5.83z"/>
                <path d="m163.921 137.014-4.141-3.13v6.01l-3.966 2.52-.01-3.762-3.803 3.416-3.804-3.416-.01 3.763-4.394-2.793v5.573l-3.552 2.571-.01-3.417-4.219 3.056-4.219-3.056-.01 3.417-3.98-2.881v16.881h-4.662v7.685h4.662v16.881l3.98-2.882.01 3.418 4.22-3.056 4.218 3.056.01-3.418 3.551 2.571v5.574l4.395-2.793.01 3.763 3.803-3.416 3.804 3.416.01-3.763 3.965 2.52v6.011l4.142-3.13.009 4.198 4.058-3.63 4.059 3.63.009-4.198 3.713 2.806v6.411l5.551-5.06v5.946l7.678-4.936 7.678 4.936v-5.946l5.551 5.06v-6.41l3.712-2.807.01 4.198 4.058-3.63 4.06 3.63.008-4.198 4.14 3.13v-6.011l3.967-2.52.01 3.763 3.804-3.416 3.803 3.416.01-3.763 4.395 2.793v-5.574l3.552-2.57.01 3.417 4.218-3.056 4.22 3.056.01-3.418 3.98 2.882V169.45h4.661v-7.685h-4.662v-16.881l-3.98 2.881-.01-3.417-4.219 3.056-4.219-3.056-.009 3.417-3.551-2.571v-5.573l-4.395 2.793-.01-3.763-3.804 3.416-3.804-3.416-.01 3.763-3.966-2.521v-6.01l-4.14 3.13-.01-4.199-4.058 3.63-4.06-3.63-.008 4.199-3.713-2.807v-6.41l-5.55 5.06v-5.946l-7.679 4.936-7.678-4.936v5.946l-5.55-5.06v6.41l-3.714 2.807-.009-4.199-4.059 3.63-4.058-3.63z" style="fill:#383739"/>
                <g style="fill:#00843d">
                    <path d="m132.21 148.604.01-3.418 3.793 2.748.127-.093 3.665-2.655.01 3.418 3.978-2.88v39.769l-3.978-2.88-.01 3.418-3.792-2.748-3.793 2.748-.01-3.418-3.978 2.88v-16.471h-4.662v-6.827h4.662v-16.47zM164.356 133.772l3.632 3.248 3.633-3.248.009 4.102 4.139-3.129v61.728l-4.14-3.13-.008 4.103-3.633-3.249-3.632 3.249-.008-4.102-4.139 3.129v-61.728l4.139 3.13zM213.64 133.772l-3.632 3.248-3.633-3.248-.009 4.102-4.138-3.129v61.728l4.138-3.13.01 4.103 3.632-3.249 3.632 3.249.009-4.102 4.139 3.129v-61.728l-4.139 3.13zM245.786 148.604l-.01-3.418-3.793 2.748-.128-.093-3.665-2.655-.01 3.418-3.977-2.88v39.769l3.977-2.88.01 3.418 3.793-2.748 3.793 2.748.01-3.418 3.977 2.88v-16.471h4.662v-6.827h-4.662v-16.47z"/>
                </g>
                <g style="fill:#ffc72c">
                    <path d="m148.623 139.611 3.377 3.034 3.378-3.034.01 3.583 4.392-2.792v50.413l-4.392-2.791-.01 3.582-3.378-3.033-3.377 3.033-.01-3.582-4.393 2.791v-50.413l4.393 2.792zM181.748 133.827l-5.551-5.06v73.683l5.551-5.06v6.131l7.249-4.66 7.25 4.66v-6.131l5.55 5.06v-73.683l-5.55 5.06v-6.131l-7.25 4.66-7.249-4.66zM229.373 139.611l-3.377 3.034-3.378-3.034-.01 3.583-4.393-2.792v50.413l4.394-2.791.009 3.582 3.378-3.033 3.377 3.033.01-3.582 4.393 2.791v-50.413l-4.393 2.792z"/>
                </g>
                <g id="f" style="fill:#383739">
                    <g id="e">
                        <path d="M134.288 158.366c.485.49 1.066.737 1.724.737.659 0 1.239-.247 1.725-.737 1.518-1.53 1.57-4.297 1.554-6.289l-2.072 2.19-1.207-2.083s-.985 1.702-1.207 2.083l-2.072-2.19c-.015 1.992.036 4.759 1.555 6.289zM150.966 154.08l-1.28-1.278v-2.546l-2.937 2.722L152 158.23l5.252-5.252-2.938-2.722v2.546l-1.279 1.278v-4.511l2.265-1.945-3.3-2.834-3.3 2.834 2.266 1.945zM166.953 149.02l-1.279-1.279v-2.546l-2.937 2.723 5.251 5.251 5.251-5.251-2.937-2.723v2.546l-1.28 1.279v-4.512l2.266-1.945-3.3-2.833-3.3 2.833 2.265 1.945z"/>
                        <path style="fill:#fff" d="m136.013 153.039 1.123 1.94 1.709-1.806c-.06 2.25-.553 4.026-1.412 4.89-.402.406-.88.612-1.42.612-.54 0-1.018-.206-1.42-.611-.859-.865-1.353-2.642-1.412-4.89l1.708 1.805 1.124-1.94zM168.595 144.312v5.743l2.136-2.135v-1.743l1.891 1.754-4.633 4.633-4.634-4.633 1.891-1.754v1.743l2.136 2.135v-5.743l-2.035-1.748 2.642-2.268 2.642 2.268z"/>
                        <path style="fill:#d22630" d="M152.607 149.372v5.743l2.136-2.136v-1.742l1.891 1.753-4.634 4.634-4.633-4.634 1.891-1.753v1.742l2.136 2.136v-5.743l-2.035-1.748 2.641-2.268 2.643 2.268z"/>
                    </g>
                    <use height="100%" width="100%" transform="matrix(-1 0 0 1 377.996 0)" xlink:href="#e"/>
                    <path d="m195.282 150.937-1.72-2.377 4.411-4.072-4.113-3.38v2.394l-1.72 1.472v-4.342l3.885-2.864-7.029-5.18-7.029 5.18 3.887 2.864v4.342l-1.72-1.472v-2.394l-4.114 3.38 4.412 4.072-1.72 2.377z"/>
                    <path style="fill:#d22630" d="m183.552 150.509 1.45-2.006-4.328-3.996 3.032-2.491v1.684l2.577 2.206v-5.49l-3.592-2.647 6.307-4.649 6.306 4.649-3.591 2.647v5.49l2.577-2.206v-1.684l3.032 2.491-4.329 3.996 1.451 2.006z"/>
                    <path d="m185.785 137.769 3.212 2.367 3.212-2.367-3.212-2.368-.127.095z"/>
                    <path style="fill:#00843d" d="m188.997 135.934 2.49 1.835-2.49 1.835-2.49-1.835 2.49-1.835z"/>
                </g>
                <use height="100%" width="100%" transform="matrix(1 0 0 -1 0 331.216)" xlink:href="#f" style="fill:#383739"/>
                <path d="M245.902 163.15h-7.037v-2.805h-21.511l-14.974-9.836h-26.765l-14.974 9.836h-21.51v2.805h-7.038v4.918h7.037v2.805h21.511l14.974 9.836h26.765l14.974-9.836h21.51v-2.805h7.038z" style="fill:#383739"/>
                <path style="fill:#d22630" d="m175.742 150.953-14.99 9.799h-21.186v2.807h-7.044v4.078h7.044v2.808h21.187l14.989 9.851h26.536l14.936-9.851h21.24v-2.808h7.044v-4.078h-7.044v-2.807h-21.24l-14.936-9.799Zm.318 1.43h25.847l13.718 9.004v1.377h15.308v5.72h-15.308v1.378l-13.718 8.951H176.06l-13.665-8.951v-1.377h-15.36v-5.72h15.36v-1.378z"/>
                <path style="fill:#d22630" d="m201.799 152.826 13.379 8.783v1.56h15.332v4.88h-15.332v1.559l-13.379 8.783h-25.604l-13.38-8.783v-1.56h-15.331v-4.88h15.332v-1.559l13.379-8.783z"/>
                <g style="fill:#383739">
                    <path d="m169.551 170.598 5.793 4.349 3.81-2.862-2.215-1.663-1.595 1.198-1.362-1.022 21.815-16.379h-4.43zm12.645 6.4h4.43l21.816-16.378-5.792-4.348-3.811 2.86 2.215 1.663 1.596-1.198 1.362 1.023zm9.171 0h4.43l-21.815-16.378 1.362-1.023 1.595 1.198 2.216-1.662-3.811-2.861-5.793 4.348zm12.645-6.4-1.362 1.022-1.596-1.198-2.215 1.663 3.811 2.862 5.792-4.349-21.816-16.379h-4.43zM165.164 165.609l3.893 2.586 3.894-2.586-3.894-2.586z"/>
                    <path d="m185.104 165.609 3.893 2.586 3.894-2.586-3.894-2.586zM212.832 165.609l-3.893 2.586-3.894-2.586 3.894-2.586z"/>
                    <path style="fill:#ffc72c" d="m207.729 170.598-5.078 3.813-3.098-2.326 1.502-1.127 1.596 1.198 2.075-1.558-21.245-15.95h3.003zm-13.216 5.972h-3.003l-21.244-15.95 5.079-3.813 3.096 2.326-1.501 1.126-1.595-1.198-2.076 1.559zm-8.029 0h-3.003l21.245-15.95-2.075-1.559-1.596 1.198-1.502-1.126 3.098-2.326 5.078 3.813zm5.026-21.922h3.003l-21.244 15.95 2.076 1.558 1.595-1.198 1.501 1.127-3.096 2.326-5.08-3.813z"/>
                    <path style="fill:#00843d" d="m169.057 163.538 3.119 2.071-3.119 2.071-3.119-2.07zM188.998 163.538l3.119 2.071-3.119 2.071-3.118-2.07zM208.939 163.538l-3.119 2.071 3.119 2.071 3.118-2.07z"/>
                </g>
                <g style="fill:#383739">
                    <path d="m120.514 274.151-1.528 2.16 2.739 2.095-2.74 2.094 1.528 2.16 3.182.37 3.081-2.38 7.682 4.88v-4.053l-4.835-3.071 4.835-3.071v-4.053l-7.682 4.88-3.08-2.38z"/>
                    <path d="m120.514 260.073-1.528 2.161 2.739 2.094-2.74 2.094 1.528 2.161 3.182.37 3.081-2.381 7.682 4.88v-4.053l-4.835-3.07 4.835-3.072v-4.053l-7.682 4.88-3.08-2.38zM120.514 296.739l-1.528-2.16 2.739-2.095-2.74-2.094 1.528-2.16 3.182-.37 3.081 2.38 7.682-4.88v4.053l-4.835 3.071 4.835 3.071v4.053l-7.682-4.88-3.08 2.38zM257.482 274.151l1.528 2.16-2.739 2.095 2.739 2.094-1.528 2.16-3.181.37-3.081-2.38-7.683 4.88v-4.053l4.836-3.071-4.836-3.071v-4.053l7.683 4.88 3.08-2.38z"/>
                    <path d="m257.482 260.073 1.528 2.161-2.739 2.094 2.739 2.094-1.528 2.161-3.181.37-3.081-2.381-7.683 4.88v-4.053l4.836-3.07-4.836-3.072v-4.053l7.683 4.88 3.08-2.38zM257.482 296.739l1.528-2.16-2.739-2.095 2.739-2.094-1.528-2.16-3.181-.37-3.081 2.38-7.683-4.88v4.053l4.836 3.071-4.836 3.071v4.053l7.683-4.88 3.08 2.38zM226.727 235.73v5.856h4.26v2.588h4.184v-4.713h-3.732v-3.731ZM239.283 244.965v5.855h4.255v2.589h4.189v-4.713h-3.732v-3.731zM151.269 235.73v5.856h-4.26v2.588h-4.184v-4.713h3.732v-3.731ZM226.727 321.083v-5.856h4.26v-2.588h4.184v4.712h-3.732v3.732zM151.269 321.083v-5.856h-4.26v-2.588h-4.184v4.712h3.732v3.732zM239.283 311.848v-5.855h4.255v-2.589h4.189v4.712h-3.732v3.732zM138.714 244.965v5.855h-4.256v2.589h-4.188v-4.713h3.732v-3.731zM138.714 311.848v-5.855h-4.256v-2.589h-4.188v4.712h3.732v3.732zM204.753 235.594l-3.25-3.156-3.194 2.959 2.783 2.701-3.592 3.488h5.334l1.919-1.863 1.92 1.863h5.333l-3.593-3.488 2.783-2.701-3.193-2.959c-1.085 1.05-2.167 2.104-3.25 3.156zM188.998 235.594l-3.25-3.156-3.193 2.959 2.783 2.701-3.593 3.488h5.334l1.919-1.863 1.92 1.863h5.333l-3.592-3.488 2.782-2.701-3.192-2.959c-1.085 1.05-2.167 2.104-3.251 3.156zM173.244 235.594l3.25-3.156 3.194 2.959-2.783 2.701 3.592 3.488h-5.334l-1.919-1.863-1.92 1.863h-5.333l3.593-3.488-2.783-2.701 3.193-2.959c1.085 1.05 2.167 2.104 3.25 3.156zM204.753 321.219l-3.25 3.155-3.194-2.958 2.783-2.701-3.592-3.488h5.334l1.919 1.863 1.92-1.863h5.333l-3.593 3.488 2.783 2.7-3.193 2.96c-1.085-1.051-2.167-2.104-3.25-3.156zM188.998 321.219l-3.25 3.155-3.193-2.958 2.783-2.701-3.593-3.488h5.334l1.919 1.863 1.92-1.863h5.333l-3.592 3.488 2.782 2.7-3.192 2.96c-1.085-1.051-2.167-2.104-3.251-3.156zM173.244 321.219l3.25 3.155 3.194-2.958-2.783-2.701 3.592-3.488h-5.334l-1.919 1.863-1.92-1.863h-5.333l3.593 3.488-2.783 2.7 3.193 2.96c1.085-1.051 2.167-2.104 3.25-3.156z"/>
                </g>
                <g style="fill:#00843d">
                    <path d="M134.029 281.713v3.037l-7.278-4.623-3.18 2.458-2.819-.327-1.178-1.668 2.856-2.184-2.856-2.184 1.179-1.667 2.817-.327 3.181 2.458 7.278-4.623v3.036l-5.206 3.307zM134.029 267.635v3.037l-7.278-4.623-3.18 2.458-2.819-.327-1.178-1.668 2.856-2.184-2.856-2.183 1.179-1.667 2.817-.328 3.181 2.458 7.278-4.623v3.037l-5.206 3.306zM134.029 289.178v-3.037l-7.278 4.623-3.18-2.458-2.819.327-1.178 1.668 2.856 2.184-2.856 2.184 1.179 1.667 2.817.327 3.181-2.458 7.278 4.623v-3.036l-5.206-3.307zM243.967 281.713v3.037l7.278-4.623 3.18 2.458 2.818-.327 1.179-1.668-2.856-2.184 2.856-2.184-1.179-1.667-2.818-.327-3.18 2.458-7.278-4.623v3.036l5.206 3.307zM243.967 267.635v3.037l7.278-4.623 3.18 2.458 2.818-.327 1.179-1.668-2.856-2.184 2.856-2.183-1.179-1.667-2.818-.328-3.18 2.458-7.278-4.623v3.037l5.206 3.306zM243.967 289.178v-3.037l7.278 4.623 3.18-2.458 2.818.327 1.179 1.668-2.856 2.184 2.856 2.184-1.179 1.667-2.818.327-3.18-2.458-7.278 4.623v-3.036l5.206-3.307zM231.011 236.159v3.732h3.731v3.855h-3.326v-2.588h-4.26v-4.999zM243.566 245.393v3.731h3.731v3.856h-3.327v-2.588h-4.259v-4.999zM146.985 236.159v3.732h-3.731v3.855h3.327v-2.588h4.259v-4.999zM231.011 320.653v-3.731h3.731v-3.855h-3.326v2.587h-4.26v4.999zM146.985 320.653v-3.731h-3.732v-3.855h3.327v2.587h4.26v4.999zM243.566 311.419v-3.731h3.731v-3.855h-3.327v2.587h-4.259v4.999zM134.43 245.393v3.731h-3.731v3.856h3.327v-2.588h4.259v-4.999zM134.431 311.419v-3.731h-3.732v-3.855h3.327v2.587h4.26v4.999zM201.496 233.029l3.257 3.162 3.257-3.162 2.564 2.375-2.776 2.694 3.151 3.06h-4.102l-2.094-2.033-2.094 2.033h-4.102l3.151-3.06-2.776-2.694 2.564-2.375zM185.741 233.029l3.257 3.162 3.257-3.162 2.563 2.375-2.775 2.694 3.151 3.06h-4.103l-2.093-2.033-2.094 2.033h-4.102l3.15-3.06-2.775-2.694 2.564-2.375zM176.502 233.029l-3.257 3.162-3.257-3.162-2.564 2.375 2.776 2.694-3.151 3.06h4.102l2.094-2.033 2.094 2.033h4.102l-3.151-3.06 2.776-2.694-2.564-2.375zM201.496 323.784l3.257-3.163 3.257 3.163 2.564-2.375-2.776-2.694 3.151-3.06h-4.102l-2.094 2.032-2.094-2.032h-4.102l3.151 3.06-2.776 2.694 2.564 2.375zM185.741 323.784l3.257-3.163 3.257 3.163 2.563-2.375-2.775-2.694 3.151-3.06h-4.103l-2.093 2.032-2.094-2.032h-4.102l3.15 3.06-2.775 2.694 2.564 2.375zM176.502 323.784l-3.257-3.163-3.257 3.163-2.564-2.375 2.776-2.694-3.151-3.06h4.102l2.094 2.032 2.094-2.032h4.102l-3.151 3.06 2.776 2.694-2.564 2.375z"/>
                </g>
                <path d="M146.58 306.421v9.234h84.836v-9.234h12.55v-56.03h-12.55v-9.233H146.58v9.234h-12.55v56.029z" style="fill:#383739"/>
                <path style="fill:#ffc72c;fill-opacity:1" d="M147.034 241.578v9.217h-12.553v55.19h12.553v9.217h83.95v-9.217h12.555v-55.19h-12.554v-9.217h-83.951zm5.403 3.55h73.146v8.897l3.019 2.226h11.388v44.332h-11.44l-2.967 2.171v8.951h-73.146v-8.898l-3.02-2.224h-11.44v-44.332h11.388l3.072-2.226v-8.898z"/>
                <path style="fill:#d22630" d="M152.86 245.551v8.158l11.017-8.158zm61.228 0 11.017 8.158v-8.158Zm-75.635 11.124v7.627l10.382-7.627h-10.381Zm90.679 0 10.434 7.68v-7.68zm10.434 35.75-10.434 7.734h10.434zm-101.113.053v7.681h10.381zm14.407 10.647v8.104h10.964zm72.245 0-10.963 8.104h10.963z"/>
                <path style="fill:#00843d" d="m213.377 245.559 26.188 19.342v27.01l-26.188 19.342h-48.76l-26.187-19.342V264.9l26.187-19.342z"/>
                <path d="m144.667 295.021-3.01-3.494 2.826-3.28-2.827-3.28 2.827-3.28-2.827-3.28 2.827-3.28-2.827-3.281 2.826-3.28-2.826-3.28 3.011-3.494h88.661l3.011 3.494-2.826 3.28 2.826 3.28-2.826 3.28 2.826 3.28-2.826 3.28 2.826 3.28-2.826 3.28 2.826 3.28-3.01 3.495zm60.946-45.236-3.495-3.011-3.28 2.826-3.28-2.826-3.28 2.826-3.28-2.826-3.28 2.826-3.281-2.826-3.28 2.826-3.28-2.826-3.494 3.01v57.244l3.494 3.011 3.28-2.827 3.28 2.826 3.28-2.826 3.28 2.826 3.28-2.826 3.28 2.826 3.28-2.826 3.281 2.827 3.495-3.011z" style="fill:#383739"/>
                <g style="fill:#ffc72c">
                    <path d="m198.623 249.981-3.065-2.642-3.066 2.642v56.85l3.066 2.641 3.065-2.641zM185.503 249.981l-3.066-2.642-3.065 2.642v56.85l3.065 2.641 3.066-2.641z"/>
                    <path d="m144.863 294.593-2.641-3.066 2.641-3.066h88.269l2.641 3.066-2.641 3.066zM233.132 275.34l2.642 3.066-2.642 3.065h-88.268l-2.642-3.065 2.642-3.066zM233.132 268.352l2.641-3.066-2.641-3.065h-88.269l-2.641 3.065 2.641 3.066z"/>
                </g>
                <g style="fill:#d22630">
                    <path d="m205.184 249.981-3.065-2.642-3.066 2.642v56.85l3.066 2.641 3.064-2.64zM178.943 249.981l-3.066-2.642-3.066 2.642v56.85l3.066 2.641 3.066-2.641z"/>
                    <path d="m144.864 288.032-2.642-3.066 2.642-3.066h88.268l2.642 3.066-2.642 3.066zM144.864 274.912l-2.642-3.066 2.642-3.066h88.268l2.642 3.066-2.642 3.066z"/>
                    <path d="m192.064 306.831-3.066 2.641-3.066-2.641v-56.85l3.066-2.642 3.066 2.642z"/>
                </g>
                <path d="M218.631 251.09h-59.48v4.724h-7.602v45.185h7.602v4.723h59.694v-4.723h7.602v-45.185h-7.602v-4.724Z" style="fill:#383739"/>
                <path style="fill:#d22630" d="M159.587 251.535v4.715h-7.627v44.332h7.627v4.714h6.25l-12.447-10.434V261.97l12.447-10.434h-6.25Zm52.596 0 12.393 10.434v32.893l-12.393 10.434h6.25v-4.714h7.574V256.25h-7.575v-4.715h-6.249z"/>
                <g style="fill:#00843d">
                    <path d="m166.525 251.535-12.712 10.646v32.468c.15.127 12.594 10.547 12.712 10.646h44.968l12.659-10.646v-32.468l-12.659-10.646zm.636 1.8h43.644l11.546 9.694v30.773l-11.546 9.64H167.16l-11.494-9.64v-30.773z"/>
                    <path d="m178.72 294.289 1.954.844.359 2.282-2.46 2.164 3.573 3.454h-3.437l-2.458-2.366-2.458 2.366h-3.438l3.573-3.454-2.46-2.164.36-2.282 1.953-.844 2.47 1.975.134-.107zM191.468 294.289l1.953.844.36 2.282-2.46 2.164 3.573 3.454h-3.437l-2.459-2.366-2.457 2.366h-3.438l3.573-3.454-2.46-2.164.36-2.282 1.953-.844 2.47 1.975.133-.107zM199.277 294.289l-1.953.844-.36 2.282 2.46 2.164-3.573 3.454h3.437l2.459-2.366 2.457 2.366h3.438l-3.573-3.454 2.46-2.164-.36-2.282-1.953-.844-2.47 1.975-.134-.107zM178.72 262.523l1.954-.844.359-2.281-2.46-2.164 3.573-3.454h-3.437l-2.458 2.365-2.458-2.365h-3.438l3.573 3.454-2.46 2.163.36 2.282 1.953.844 2.47-1.974.134.107zM191.468 262.523l1.953-.844.36-2.281-2.46-2.164 3.573-3.454h-3.437l-2.459 2.365-2.457-2.365h-3.438l3.573 3.454-2.46 2.163.36 2.282 1.953.844 2.47-1.974.133.107zM199.277 262.523l-1.953-.844-.36-2.281 2.46-2.164-3.573-3.454h3.437l2.459 2.365 2.457-2.365h3.438l-3.573 3.454 2.46 2.163-.36 2.282-1.953.844-2.47-1.974-.134.107zM221.901 266.167l-1.95 1.615 1.95 1.614v2.676l-2.999-2.471-2.152 1.95-2.308-.29-.813-1.5 1.986-1.98-1.986-1.98.813-1.5c.192-.023 2.135-.268 2.308-.29l2.152 1.95 2.999-2.47zM221.901 276.792l-1.95 1.615 1.95 1.613v2.677l-2.999-2.471-2.152 1.95c-.173-.022-2.116-.267-2.308-.29l-.813-1.5 1.986-1.98-1.986-1.98.813-1.5c.192-.023 2.135-.268 2.308-.29l2.152 1.95 2.999-2.47zM221.901 290.646l-1.95-1.615 1.95-1.614v-2.676l-2.999 2.471-2.152-1.95-2.308.29-.813 1.5 1.986 1.98-1.986 1.98.813 1.5c.192.023 2.135.268 2.308.29l2.152-1.95 2.999 2.47zM156.097 266.167l1.95 1.615-1.95 1.614v2.676l2.999-2.471 2.152 1.95 2.308-.29.813-1.5-1.986-1.98 1.986-1.98-.813-1.5c-.192-.023-2.136-.268-2.308-.29l-2.152 1.95-2.999-2.47zM156.097 276.792l1.95 1.615-1.95 1.613v2.677l2.999-2.471 2.152 1.95c.172-.022 2.116-.267 2.308-.29l.813-1.5-1.986-1.98 1.986-1.98-.813-1.5c-.192-.023-2.136-.268-2.308-.29l-2.152 1.95-2.999-2.47zM156.097 290.646l1.95-1.615-1.95-1.614v-2.676l2.999 2.471 2.152-1.95 2.308.29.813 1.5-1.986 1.98 1.986 1.98-.813 1.5c-.192.023-2.136-.268-2.308-.29l-2.152-1.95-2.999 2.47z"/>
                </g>
                <path style="fill:#d22630" d="M167.32 253.761c-.116.097-10.602 8.876-11.07 9.27.945.783 1.86 1.602 2.807 2.383.24-.217 2.066-1.855 2.066-1.855l2.701.371 1.06 1.96-1.907 1.907c.259.257 1.906 1.906 1.906 1.906l-1.059 1.96-2.701.318s-1.826-1.584-2.066-1.8l-2.966 2.488v.848c.998.826 1.965 1.664 2.966 2.49.24-.217 2.066-1.801 2.066-1.801l2.701.317 1.06 1.96-1.907 1.907c.259.257 1.906 1.907 1.906 1.907l-1.059 2.012-2.701.318s-1.826-1.636-2.066-1.854l-2.966 2.49v.9l2.966 2.49c.24-.217 2.066-1.854 2.066-1.854l2.701.37 1.06 1.96-1.907 1.907 1.906 1.907-1.059 1.96-2.701.37s-1.826-1.636-2.066-1.854c-.944.778-1.865 1.554-2.807 2.331l11.07 9.27h2.436l3.55-3.444-2.278-2.012.423-2.755 2.384-1.006 2.436 1.907 2.384-1.907 2.383 1.006.477 2.755-2.33 2.012 3.442 3.284 3.443-3.284-2.33-2.012.423-2.755 2.437-1.006 2.383 1.907 2.436-1.907 2.384 1.006.424 2.755-2.278 2.012 3.39 3.337 3.443-3.337-2.278-2.012.424-2.755 2.436-1.006 2.384 1.907 2.383-1.907 2.437 1.006.424 2.755-2.278 2.012 3.549 3.443h2.383l11.07-9.269c-.943-.777-1.862-1.551-2.807-2.33-.24.217-2.013 1.853-2.013 1.853l-2.701-.37-1.112-1.96 1.906-1.907-1.906-1.907 1.112-1.96 2.701-.37s1.773 1.637 2.013 1.854l2.966-2.49v-.9l-2.966-2.49c-.24.218-2.013 1.854-2.013 1.854l-2.701-.318-1.112-2.012 1.906-1.907-1.906-1.907 1.112-1.96 2.701-.317s1.773 1.584 2.013 1.8c.994-.819 1.974-1.62 2.966-2.436v-.953l-2.966-2.437c-.24.217-2.013 1.8-2.013 1.8l-2.701-.317-1.112-1.96 1.906-1.906-1.906-1.907 1.112-1.96 2.701-.37s1.773 1.637 2.013 1.853c.95-.782 1.911-1.548 2.86-2.33l-11.123-9.322h-2.383l-3.549 3.442 2.277 2.013-.423 2.754-2.437 1.06-2.383-1.907-2.384 1.907-2.436-1.06-.424-2.754 2.278-2.013-3.39-3.284-3.443 3.284 2.278 2.013-.424 2.754-2.384 1.06-2.436-1.907-2.383 1.907-2.437-1.06-.424-2.754 2.33-2.013-3.442-3.284-3.443 3.284 2.33 2.013-.476 2.754-2.383 1.06-2.384-1.907-2.436 1.907-2.384-1.06-.423-2.754 2.277-2.013-3.602-3.442zm-11.229 23.57v2.171l1.271-1.112z"/>
                <g style="fill:#fff">
                    <path d="m176.271 301.271-1.854 1.747h3.654zM188.983 301.271l-1.8 1.747h3.654zM201.747 301.271l-1.853 1.747h3.707zM174.364 253.761l1.907 1.8 1.854-1.8zM187.129 253.761l1.854 1.8 1.907-1.8zM199.895 253.761l1.853 1.8 1.854-1.8zM221.875 266.737l-1.271 1.06 1.271 1.006zM221.875 277.33l-1.271 1.06 1.271 1.059zM221.875 287.976l-1.271 1.06 1.271 1.059zM156.091 266.685v2.171l1.271-1.06zM156.091 277.33v2.171l1.271-1.112zM156.091 287.924v2.171l1.271-1.06z"/>
                </g>
                <g style="fill:#383739">
                    <path d="M199.901 274.857v-3.791h-3.837v-4.157h-14.132v4.157h-3.837v3.791h-5.299v7.098h5.3v3.79h3.836v4.158h14.132v-4.157h3.837v-3.791h5.299v-7.098z"/>
                    <path style="fill:#ffc72c" d="M188.783 267.338v4.285l-6.074 3.453v3.116h-9.485v-2.906h5.299v-3.791h3.837v-4.157zM189.212 289.475v-4.285l6.074-3.453v-3.116h9.485v2.906h-5.299v3.791h-3.837v4.157z"/>
                    <path style="fill:#fff" d="M195.286 278.192v-3.116l-6.074-3.453v-4.285h6.423v4.157h3.837v3.79h5.299v2.907zM173.225 278.621h9.484v3.116l6.075 3.453v4.285h-6.423v-4.157h-3.837v-3.791h-5.299z"/>
                    <path style="fill:#d22630" d="M183.138 278.621v2.888l5.645 3.21v-6.098z"/>
                    <path style="fill:#00843d" d="m188.783 272.094-5.645 3.21v2.888h5.645z"/>
                    <path style="fill:#d22630" d="M194.858 278.192v-2.888l-5.645-3.21v6.098z"/>
                    <path style="fill:#00843d" d="m189.212 284.719 5.645-3.21v-2.888h-5.645z"/>
                </g>
                <path d="M137.647 353.73v11.717h-11.165v10.627h-11.317v30.259h11.317v10.627h11.165v11.717h40.598l7.14 4.29-3.432 2.06h-14.476l-1.248-1.408h13.119l-3.696-3.721h-18.767l8.503 8.851h17.598l6.011-3.612 6.012 3.612h17.599l8.502-8.851h-18.766l-3.696 3.721h13.12l-1.25 1.409h-14.477l-3.43-2.061 7.14-4.29h40.597V416.96h11.166v-10.627h11.316v-30.259h-11.316v-10.627h-11.166V353.73h-40.597l-7.14-4.29 3.43-2.061h14.477l1.25 1.408h-13.12l3.696 3.722h18.766l-8.502-8.852h-17.6l-6.01 3.612-6.012-3.612h-17.598l-8.503 8.852h18.767l3.696-3.722h-13.12l1.25-1.408h14.475l3.431 2.062-7.14 4.289z" style="fill:#d22630;fill-opacity:1"/>
                <path style="fill:#ffc72c;fill-opacity:1" d="M199.629 428.23h40.307v-11.706h11.123v-10.646h11.335v-29.396h-11.335v-10.593h-11.123v-11.706H199.63l-16.737-10.116h-17.32l-7.68 7.998h17.584l2.86-2.86h-13.082l2.013-2.278h14.83l18.962 11.44h34.64v11.706h11.176v10.646h11.335v20.975h-11.335v10.646h-11.176v11.706h-34.64l-18.962 11.387h-14.83l-2.013-2.224h13.083l-2.86-2.86h-17.585l7.68 7.998h17.32zm-22.722-4.184h-34.64V412.34h-11.123v-10.646h-11.335v-20.975h11.335v-10.646h11.123v-11.705h34.64l19.014-11.441H210.7l2.013 2.278h-13.03l2.86 2.86h17.585l-7.68-7.998h-17.32l-16.737 10.116h-40.307v11.706h-11.176v10.593h-11.335v29.396h11.335v10.647h11.176v11.705h40.307l16.737 10.117h17.32l7.68-7.998h-17.585l-2.86 2.86h13.03l-2.013 2.224h-14.777z"/>
                <path style="fill:none" d="m188.983 351.59-11.97 7.203H142.69V370.5h-11.123v10.646h-11.335v20.127h11.335v10.646h11.123v11.706h34.322l11.97 7.15 11.97-7.15h34.322v-11.706h11.176v-10.646h11.335v-20.127H246.45V370.5h-11.176v-11.706h-34.322zm0 2.966 11.282 6.78h32.521v11.705h11.176v10.593h11.282v15.096h-11.282v10.646h-11.176v11.705h-32.521l-11.282 6.78-11.229-6.78h-32.521v-11.705h-11.176V398.73h-11.334v-15.096h11.334v-10.593h11.176v-11.705h32.521z"/>
                <path style="fill:#00843d" d="M232.342 408.954v11.717h-32.2l-11.145 6.696-11.144-6.696h-32.2v-11.717h-11.166v-10.628h-11.316V384.08h11.316v-10.627h11.166v-11.717h32.2l11.144-6.696 11.145 6.696h32.2v11.717h11.165v10.627h11.316v14.246h-11.316v10.628z"/>
                <g style="fill:#383739">
                    <path d="M149.869 404.849v11.34h17.7l-17.7-11.74zM149.869 377.558v-11.34h17.7l-17.7 11.739zM228.127 404.849v11.34h-17.7l17.7-11.74zM228.127 377.558v-11.34h-17.7l17.7 11.739z"/>
                    <path style="fill:#d22630" d="m150.298 405.248 15.85 10.513h-15.85ZM150.298 377.159c.616-.41 14.77-9.797 15.85-10.513h-15.85ZM227.698 405.248l-15.85 10.513h15.85zM227.698 377.159l-15.85-10.513h15.85z"/>
                </g>
                <g id="g" style="fill:#383739">
                    <path d="M172.445 388.094v-5.791h-1.975l-9.477-5.925-.113.071-9.362 5.854h-1.976v5.791h-4.455v6.22h4.455v5.79h1.976l9.475 5.925 9.477-5.925h1.975v-5.79h6.782v-6.22z"/>
                    <path style="fill:#d22630" d="m160.994 376.884 8.668 5.42h-17.335Zm8.667 23.22-8.667 5.42-8.666-5.42zM167.562 388.523v5.363h-10.809v-5.363z"/>
                    <g style="fill:#ffc72c">
                        <path d="M172.017 394.313v5.363h-10.809v-5.363zM160.78 394.313v5.363h-10.809v-5.363zM178.799 388.523v5.363H167.99v-5.363zM156.325 388.523v5.363h-10.809v-5.363zM172.017 382.732v5.362h-10.809v-5.362zM160.78 382.732v5.362h-10.809v-5.362z"/>
                    </g>
                    <path d="M153.349 389.714v2.98h-4.855v-2.98zM157.804 383.923v2.98h-4.855v-2.98zM169.04 383.923v2.98h-4.855v-2.98zM164.585 389.714v2.98h-4.855v-2.98zM175.822 389.714v2.98h-4.855v-2.98zM169.04 395.505v2.98h-4.855v-2.98zM157.804 395.505v2.98h-4.855v-2.98z"/>
                    <g style="fill:#fff">
                        <path d="M152.891 390.171h-3.94v2.065h3.94zM157.346 384.38h-3.94v2.065h3.94zM168.583 384.38h-3.94v2.065h3.94zM164.128 390.171h-3.94v2.065h3.94zM175.365 390.171h-3.94v2.065h3.94zM168.583 395.962h-3.94v2.065h3.94zM157.346 395.962h-3.94v2.065h3.94z"/>
                    </g>
                </g>
                <use height="100%" width="100%" transform="matrix(-1 0 0 1 377.995 0)" xlink:href="#g" style="fill:#383739"/>
                <g id="h" style="fill:#383739">
                    <path d="M200.449 378.42v5.79h-1.975l-9.477 5.926-.113-.071-9.362-5.854h-1.976v-5.791h-5.618v-6.22h5.618v-5.79h1.976l9.475-5.926 9.477 5.926h1.975v5.79h5.618v6.22z"/>
                    <path style="fill:#ffc72c" d="m188.998 389.63 8.668-5.42H180.33Zm8.667-23.22-8.667-5.42-8.666 5.42z"/>
                    <g style="fill:#d22630">
                        <path d="M200.021 372.2v-5.362h-10.809v5.362ZM188.784 372.2v-5.362h-10.809v5.362ZM205.639 377.991v-5.363H194.83v5.363zM194.402 377.991v-5.363h-10.809v5.363zM183.165 377.991v-5.363h-10.808v5.363zM200.021 383.782v-5.363h-10.809v5.363zM188.784 383.782v-5.363h-10.809v5.363z"/>
                    </g>
                    <path d="M185.807 368.029v2.98h-4.855v-2.98ZM197.044 368.029v2.98h-4.855v-2.98ZM180.188 373.82v2.98h-4.855v-2.98ZM191.426 373.82v2.98h-4.855v-2.98ZM202.663 373.82v2.98h-4.855v-2.98ZM185.807 379.611v2.98h-4.855v-2.98zM197.044 379.611v2.98h-4.855v-2.98z"/>
                    <g style="fill:#fff">
                        <path d="M185.35 368.486h-3.94v2.065h3.94zM196.587 368.486h-3.94v2.065h3.94zM179.731 374.277h-3.94v2.065h3.94zM190.969 374.277h-3.94v2.065h3.94zM202.205 374.277h-3.94v2.065h3.94zM185.35 380.068h-3.94v2.065h3.94zM196.587 380.068h-3.94v2.065h3.94z"/>
                    </g>
                </g>
                <use height="100%" width="100%" y="31.788" xlink:href="#h" style="fill:#383739"/>
                <path d="m127.676 479.354 42.052-22.631h38.539l42.051 22.631v37.29l-42.051 22.63h-38.54l-42.051-22.63Z" style="fill:#383739"/>
                <path style="fill:#00843d" d="m169.863 457.151-41.738 22.458v36.757l41.738 22.458h38.293l41.74-22.458V479.61l-41.74-22.458zm.74 3.019h36.812l39.514 21.239v33.21l-39.514 21.239h-36.834l-39.512-21.24v-33.21z"/>
                <path style="fill:#ffc72c" d="M189.212 497.784v37.64h18.095l39.183-21.087v-16.124h-57.706v-37.64h-18.095l-39.184 21.086v16.125z"/>
                <path style="fill:#fff" d="M188.783 497.784v37.64h-18.095l-39.183-21.087v-16.124h57.706v-37.64h18.096l39.183 21.086v16.125z"/>
                <path d="M192.514 533.317v-10.88l-3.517 2.232-3.518-2.231v10.879h-10.942l7.383-5.414v-7.723l-11.26-7.144h-7.867v-30.073h7.868l11.26-7.144v-7.723l-7.384-5.414h10.942v10.88l3.518-2.232 3.517 2.232v-10.88h10.942l-7.383 5.414v7.723l11.26 7.144h7.867v30.073h-7.868l-11.26 7.144v7.723l7.384 5.414z" style="fill:#383739"/>
                <path style="fill:#ffc72c" d="M192.956 463.135v11.229l-3.761-2.383v3.178l17.214 10.962h5.667v11.655h2.702v-14.407h-7.575l-11.545-7.31V467.9l6.513-4.766h-9.215zm-29.714 35.064v14.407h7.52l11.6 7.361v8.158l-6.514 4.766h9.216v-11.229l3.707 2.385v-3.285l-17.213-10.857h-5.615v-11.706h-2.701z"/>
                <path style="fill:#fff" d="m175.847 463.135 6.515 4.766v8.158l-11.6 7.31h-7.52v14.407h2.7V486.12h5.615l17.214-10.91v-3.23l-3.707 2.383v-11.229h-9.217zm36.229 35.064v11.705h-5.668l-17.214 10.858v3.285l3.761-2.385v11.229h9.216l-6.514-4.766v-8.158l11.546-7.36h7.574v-14.408h-2.701z"/>
                <path style="fill:#d22630" d="M166.352 509.458h5.338l17.307 10.98 17.307-10.98h5.338v-22.916h-5.338l-17.307-10.981-17.307 10.98h-5.338z"/>
                <path d="M200.977 503.445h3.695v-1.748h-2.78v-3.179h5.942v8.106h-5.696v5.53h-11.724v-7.946h5.16v3.178h-1.999v1.59h5.402v-3.039l-21.961-13.383h-3.695v1.748h2.78v3.178h-5.942v-8.104h5.696v-5.53h11.724v7.945h-5.16v-3.178h1.999v-1.589h-5.402v3.038zm-2-13.383v-3.038h-5.402v1.589h1.999v3.178h-5.16v-7.945h11.725v5.53h5.695v8.104h-5.941v-3.178h2.78v-1.748h-3.696l-21.96 13.383v3.038h5.4v-1.59h-1.998v-3.177h5.16v7.945h-11.724v-5.53h-5.696v-8.105h5.942v3.179h-2.78v1.748h3.695z" style="fill:#383739"/>
                <path style="fill:#fff" d="M199.406 505.697v3.707h-6.26v-2.446h2v-2.321h-4.303v7.088h10.867v-5.53h5.696v-7.247h-5.085v2.32h2.78v2.606h-4.244l-22.27-13.571v-3.707h6.26v2.446h-1.999v2.321h4.303v-7.088h-10.867v5.53h-5.695v7.247h5.083v-2.321h-2.78v-2.605h4.244zm1.451-13.571h4.245v2.605h-2.78v2.321h5.084v-7.248h-5.695v-5.53h-10.868v7.089h4.303v-2.321h-1.999v-2.446h6.259v3.707l-22.27 13.57h-4.243v-2.605h2.78v-2.321h-5.084v7.248h5.695v5.53h10.867v-7.089h-4.303v2.322h1.999v2.445h-6.26v-3.707z"/>
                <g style="fill:#383739">
                    <path d="M238.042 499.884v11.762h-5.005v-4.154h-5.046v4.154h-5.005v-11.762h5.005v4.154h5.046v-4.154zM220.132 515.499v11.762h-5.005v-4.154h-5.046v4.154h-5.005v-11.762h5.005v4.154h5.046V515.5zM238.042 496.113v-11.762h-5.005v4.154h-5.046v-4.154h-5.005v11.762h5.005v-4.154h5.046v4.154zM139.953 499.884v11.762h5.005v-4.154h5.046v4.154h5.005v-11.762h-5.005v4.154h-5.046v-4.154zM139.953 496.113v-11.762h5.005v4.154h5.046v-4.154h5.005v11.762h-5.005v-4.154h-5.046v4.154zM220.132 480.499v-11.762h-5.005v4.154h-5.046v-4.154h-5.005V480.5h5.005v-4.154h5.046v4.154zM157.864 515.499v11.762h5.005v-4.154h5.046v4.154h5.005v-11.762h-5.005v4.154h-5.046V515.5zM157.864 480.499v-11.762h5.005v4.154h5.046v-4.154h5.005V480.5h-5.005v-4.154h-5.046v4.154zM223.118 472.256v8.932h16.597zM154.877 523.742v-8.932H138.28zM154.877 472.256v8.932H138.28zM223.118 523.742v-8.932h16.597z"/>
                </g>
                <g style="fill:#d22630">
                    <path d="M233.465 507.064v4.154h4.148v-10.905h-4.148v4.154h-5.903v-4.154h-4.148v10.905h4.148v-4.154zM215.555 522.678v4.154h4.148v-10.905h-4.148v4.154h-5.903v-4.154h-4.148v10.905h4.148v-4.154zM233.465 488.934v-4.154h4.148v10.905h-4.148v-4.155h-5.903v4.155h-4.148V484.78h4.148v4.154zM144.53 507.064v4.154h-4.148v-10.905h4.148v4.154h5.903v-4.154h4.148v10.905h-4.148v-4.154zM144.53 488.934v-4.154h-4.148v10.905h4.148v-4.155h5.903v4.155h4.148V484.78h-4.148v4.154zM215.555 473.32v-4.154h4.148v10.905h-4.148v-4.155h-5.903v4.155h-4.148v-10.905h4.148v4.154zM162.44 522.678v4.154h-4.148v-10.905h4.148v4.154h5.903v-4.154h4.148v10.905h-4.148v-4.154zM162.44 473.32v-4.154h-4.148v10.905h4.148v-4.155h5.903v4.155h4.148v-10.905h-4.148v4.154z"/>
                </g>
                <path style="fill:#ffc72c" d="M223.57 472.986v7.786h14.461zm-83.58 42.268 14.46 7.786v-7.786h-14.46z"/>
                <path style="fill:#fff" d="m154.449 472.986-14.46 7.786h14.46zm69.12 42.268v7.786l14.461-7.786z"/>
                <path style="fill:#ffc72c" d="M256.896 530.824c-.799 3.407-3.508 5.979-4.153 9.513-1.293-3.685-2.484-6.773-1.595-10.804.637-2.883 3.062-4.94 3.343-7.902 2.644 2.377 3.214 5.749 2.405 9.193zm.67 14.276c-2.242 3.075-5.36 5.434-8.803 7.007.678-2.694-.594-4.722-2.005-6.86-1.701-2.574-2.53-5.103-1.144-8.067.646 1.541 1.514 2.821 2.533 4.139 1.507 2.055 2.497 3.883 2.73 6.52 1.742-1.292 2.508-3.22 3.44-5.086 1.42-2.673 3.712-4.908 6.344-6.369-.7 2.998-1.238 6.169-3.094 8.716zm-12.578 9.166c.48 1.708.893 3.4.8 5.186 1.483-1.597 3.45-2.799 5.206-4.085 2.391-1.934 5.178-3.298 7.133-5.76-.292 3.624-1.843 6.578-4.787 8.783-3.113 2.33-6.867 3.583-9.933 6.03.459-3.297-.752-5.937-1.785-8.967-.86-2.895-.027-5.834 1.936-8.04-.03 2.445.742 4.545 1.43 6.853zm-6.986 11.133c-.645 2.5-2.436 4.534-3.66 6.764 3.3-1.023 6.21-2.812 9.192-4.495 3.552-1.934 7.409-3.165 10.624-5.719-1.6 5.924-5.566 9.359-11.368 11.11-3.967 1.198-7.31.6-12.124 2.546.552-3.259 1.524-6.776 3.065-9.714 1.196-2.125 2.522-4.221 3.26-6.562 1.07 1.923 1.577 3.879 1.011 6.07zm-12.138 9.065a15.21 15.21 0 0 1-4.495 4.875c4.683.299 8.452-2.669 13.017-2.798 2.82-.08 5.497.796 8.373.533-3.413 2.303-6.986 4.314-11.14 4.851-5.402.699-10.383-.66-16.342-.129 2.785-1.965 4.178-4.595 5.914-7.423 2.26-3.533 4.393-6.05 8.79-6.618-1.765 1.983-2.792 4.44-4.117 6.71zm-16.632 7.773c8.25 1.403 16.156 3.218 24.582 3.301-9.432 3.288-18.318 3.883-27.672.488-5.055-1.835-8.931-2.817-12.749-2.544-5.58.401-12.36 2.603-19.864 10.517l-2.95-2.36c10.756-9.583 24.828-11.753 38.653-9.403z"/>
            </svg>
        `;
        
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);

        const fn = (x, y, w, h) => {
            const positions = [];
            const colors = [];
            
            // Colores
            const green = [0, 0.5176, 0.2392];    // Verde #00843d
            const white = [1, 1, 1];              // Blanco

            // CAPA 1: Fondo verde completo
            positions.push(x, y, x + w, y, x, y + h, x + w, y, x + w, y + h, x, y + h);
            colors.push(...Array(6).fill(green).flat());

            // CAPA 2: Luna creciente blanca (path complejo del SVG)
            // SVG Path analizado: forma de creciente con curvas bezier
            // Aproximación usando círculos para recrear la forma
            const moonScale = h / 600; // Escala basada en viewBox 600
            const moonOffsetX = x + w * (63 / 900) - 50 * moonScale; // Movida a la izquierda
            const moonOffsetY = y + h * (66.543 / 600);
            
            // Círculo exterior blanco (radio ~74.655)
            const moonR1 = 74.655 * moonScale;
            const moonCX1 = moonOffsetX + 417.403 * moonScale;
            const moonCY1 = moonOffsetY + 68.627 * moonScale;
            const moonRotation = 30 * Math.PI / 180; // +90 grados en radianes
            
            const moonSegments = 64;
            for (let i = 0; i < moonSegments; i++) {
                const a1 = (i * 2 * Math.PI) / moonSegments + moonRotation;
                const a2 = ((i + 1) * 2 * Math.PI) / moonSegments + moonRotation;
                positions.push(
                    moonCX1, moonCY1,
                    moonCX1 + moonR1 * Math.cos(a1), moonCY1 + moonR1 * Math.sin(a1),
                    moonCX1 + moonR1 * Math.cos(a2), moonCY1 + moonR1 * Math.sin(a2)
                );
                colors.push(...white, ...white, ...white);
            }
            
            // Círculo interior verde para crear el creciente (radio ~74.443)
            const moonR2 = 74.443 * moonScale;
            // Aplicar rotación al desplazamiento
            const offsetDist = 31.5 * moonScale;
            const moonCX2 = moonCX1 + offsetDist * Math.cos(Math.PI + moonRotation);
            const moonCY2 = moonCY1 + offsetDist * Math.sin(Math.PI + moonRotation);
            
            for (let i = 0; i < moonSegments; i++) {
                const a1 = (i * 2 * Math.PI) / moonSegments + moonRotation;
                const a2 = ((i + 1) * 2 * Math.PI) / moonSegments + moonRotation;
                positions.push(
                    moonCX2, moonCY2,
                    moonCX2 + moonR2 * Math.cos(a1), moonCY2 + moonR2 * Math.sin(a1),
                    moonCX2 + moonR2 * Math.cos(a2), moonCY2 + moonR2 * Math.sin(a2)
                );
                colors.push(...green, ...green, ...green);
            }

            // CAPA 3: 5 Estrellas blancas de 5 puntas (estilo Turquía)
            // Offsets de las 5 estrellas (según <use> tags del SVG, aumentados proporcionalmente):
            const starSeparation = 1.5; // Factor de separación
            const starOffsets = [
                { x: 0, y: -38.4 * starSeparation },        // Estrella 1 (arriba)
                { x: 37.937 * starSeparation, y: -18.722 * starSeparation }, // Estrella 2 (arriba-derecha)
                { x: 0, y: 0 },            // Estrella 3 (base/centro)
                { x: -37.936 * starSeparation, y: 18.722 * starSeparation }, // Estrella 4 (abajo-izquierda)
                { x: 0, y: 38.4 * starSeparation }          // Estrella 5 (abajo)
            ];
            
            const starScale = h / 1000; // Reducido de 800 a 1000 para hacerlas más pequeñas
            const starOffsetX = moonCX1 - 60 * moonScale; // Posicionadas a la derecha de la luna
            const starBaseX = 0; // Centradas respecto al nuevo punto
            const starBaseY = 121.42;
            
            // Radio de las estrellas (calculado desde el path original)
            const starOuterRadius = 26.033 * starScale; // Radio externo (distancia del centro a la punta)
            const starInnerRadius = starOuterRadius * 0.382; // Radio interno (proporción áurea)
            
            for (let s = 0; s < 5; s++) {
                const dx = starOffsets[s].x * starScale;
                const dy = starOffsets[s].y * starScale;
                
                const centerX = starOffsetX + starBaseX * starScale + dx;
                const centerY = moonCY1 + starBaseY * starScale + dy - 180 * starScale; // Movidas hacia arriba
                
                const starRotation = 120 * Math.PI / 180; // Rotación de 120 grados
                
                // Dibujar estrella de 5 puntas (estilo Turquía - mismo patrón)
                for (let i = 0; i < 5; i++) {
                    const angle1 = -Math.PI / 2 + (i * 2 * Math.PI) / 5 + starRotation;
                    const angle2 = angle1 + Math.PI / 5;
                    
                    positions.push(
                        centerX, centerY,
                        centerX + starOuterRadius * Math.cos(angle1), 
                        centerY + starOuterRadius * Math.sin(angle1),
                        centerX + starInnerRadius * Math.cos(angle2), 
                        centerY + starInnerRadius * Math.sin(angle2)
                    );
                    colors.push(...white, ...white, ...white);
                }
                
                for (let i = 0; i < 5; i++) {
                    const angle1 = -Math.PI / 2 + (i * 2 * Math.PI) / 5 + starRotation;
                    const angle2 = angle1 - Math.PI / 5;
                    
                    positions.push(
                        centerX, centerY,
                        centerX + starOuterRadius * Math.cos(angle1), 
                        centerY + starOuterRadius * Math.sin(angle1),
                        centerX + starInnerRadius * Math.cos(angle2), 
                        centerY + starInnerRadius * Math.sin(angle2)
                    );
                    colors.push(...white, ...white, ...white);
                }
            }

            return { positions, colors };
        };

        fn.overlay = (ctx, x, y, w, h) => {
            const drawIt = () => {
                // Dibujar la franja vertical decorativa en el lado izquierdo
                const stripeWidth = w * 0.48;  // 28% del ancho (252/900)
                const stripeHeight = h;
                const stripeX = x;
                const stripeY = y;
                
                ctx.save();
                ctx.drawImage(img, stripeX, stripeY, stripeWidth, stripeHeight);
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

    nepal: (x, y, w, h) => {
    const positions = [];
    const colors = [];

    const red = [0.76, 0.07, 0.18];   // rojo 
    const blue = [0.02, 0.16, 0.47];  // azul marino del borde
    const white = [1, 1, 1];          // blanco puro

    const size = Math.min(w, h);
    const baseWidth = size * 0.8;
    const height1 = size * 0.6;
    const height2 = size * 0.45;
    const overlap = size * 0.2;
    const offsetX = x + (w - baseWidth) / 2;
    const offsetY = y + (h - (height1 + height2)) / 2 + size * 0.12;
    const totalHeight = height1 + height2 - overlap;
    const borderOffset = 0.04 * size;

    function tri(A, B, C, color) {
        positions.push(A[0], A[1], B[0], B[1], C[0], C[1]);
        colors.push(...color, ...color, ...color);
    }

    function rect(x0, y0, x1, y1, color) {
        positions.push(x0, y0, x1, y0, x0, y1,
                       x1, y0, x1, y1, x0, y1);
        colors.push(...new Array(6).fill(color).flat());
    }

    // Fondo blanco detrás
    rect(
        offsetX - borderOffset,
        offsetY - borderOffset * 2,
        offsetX + baseWidth + borderOffset * 3.5,
        offsetY + totalHeight + borderOffset,
        white
    );

    // Bordes azules (ligeramente más grandes)
    const tri1Blue = [
        [offsetX - borderOffset, offsetY + height1 + height2 - overlap + borderOffset],
        [offsetX + baseWidth + borderOffset * 3.3, offsetY + height1 + height2 - overlap + borderOffset],
        [offsetX - borderOffset, offsetY + height2 - overlap - borderOffset * 2]
    ];

    const tri2Blue = [
        [offsetX - borderOffset, offsetY + height2 + borderOffset],
        [offsetX + baseWidth + borderOffset * 3.5, offsetY + height2 + borderOffset],
        [offsetX - borderOffset, offsetY - borderOffset * 2]
    ];

    tri(tri1Blue[0], tri1Blue[1], tri1Blue[2], blue);
    tri(tri2Blue[0], tri2Blue[1], tri2Blue[2], blue);

    // Triángulos rojos principales
    const tri1 = [
        [offsetX, offsetY + height1 + height2 - overlap],
        [offsetX + baseWidth, offsetY + height1 + height2 - overlap],
        [offsetX, offsetY + height2 - overlap]
    ];

    const tri2 = [
        [offsetX, offsetY + height2],
        [offsetX + baseWidth, offsetY + height2],
        [offsetX, offsetY]
    ];

    tri(tri1[0], tri1[1], tri1[2], red);
    tri(tri2[0], tri2[1], tri2[2], red);

    // ☀️ Sol blanco (idéntico formato al de Jordania)
    const cx = x + w * 0.37;  
    const cy = y + h * 0.73;  
    const R = h * 0.15;       
    const r = R * 0.6;        
    const rotation = -Math.PI / 2;
    const spikes = 12;
    const step = 2 * Math.PI / spikes;

    const outer = [], inner = [];
    for (let i = 0; i < spikes; i++) {
        const aOut = rotation + i * step;
        const aIn = rotation + i * step + step / 2;
        outer.push([cx + R * Math.cos(aOut), cy + R * Math.sin(aOut)]);
        inner.push([cx + r * Math.cos(aIn), cy + r * Math.sin(aIn)]);
    }

    for (let i = 0; i < spikes; i++) {
        const prev = (i + spikes - 1) % spikes;
        tri(outer[i], inner[i], inner[prev], white);
    }
    for (let i = 1; i < spikes - 1; i++) {
        tri(inner[0], inner[i], inner[i + 1], white);
    }



    // 🌙 Media luna blanca mirando hacia arriba
    const cx3 = x + w * 0.36;  // alineada con el sol
    const cy3 = y + h * 0.40;  // centrada en el triángulo superior
    const outerR = h * 0.12;   // radio exterior
    const innerR = h * 0.12;  // radio interior (más pequeño)
    const offset = h * 0.04;  // desplazamiento hacia arriba
    const segments = 80;       // suavidad

    // Círculo exterior blanco
    for (let i = 0; i < segments; i++) {
        const a1 = (i / segments) * 2 * Math.PI;
        const a2 = ((i + 1) / segments) * 2 * Math.PI;
        const p1 = [cx3 + outerR * Math.cos(a1), cy3 + outerR * Math.sin(a1)];
        const p2 = [cx3 + outerR * Math.cos(a2), cy3 + outerR * Math.sin(a2)];
        tri([cx3, cy3], p1, p2, white);
    }

    // Círculo interior rojo (recorte desplazado hacia arriba)
    for (let i = 0; i < segments; i++) {
        const a1 = (i / segments) * 2 * Math.PI;
        const a2 = ((i + 1) / segments) * 2 * Math.PI;
        const p1 = [cx3 + innerR * Math.cos(a1), cy3 - offset + innerR * Math.sin(a1)];
        const p2 = [cx3 + innerR * Math.cos(a2), cy3 - offset + innerR * Math.sin(a2)];
        tri([cx3, cy3 - offset], p1, p2, red);
    }

        // 🌙 Estrella blanca en el triángulo superior
    const cx2 = x + w * 0.36;  // mismo eje X que el sol
    const cy2 = y + h * 0.434;  // más arriba
    const R2 = h * 0.09;       // más pequeña
    const r2 = R2 * 0.7;       
    const rotation2 = -Math.PI / 2;
    const spikes2 = 16;
    const step2 = 2 * Math.PI / spikes2;

    const outer2 = [], inner2 = [];
    for (let i = 0; i < spikes2; i++) {
        const aOut = rotation2 + i * step2;
        const aIn = rotation2 + i * step2 + step2 / 2;
        outer2.push([cx2 + R2 * Math.cos(aOut), cy2 + R2 * Math.sin(aOut)]);
        inner2.push([cx2 + r2 * Math.cos(aIn), cy2 + r2 * Math.sin(aIn)]);
    }

    // Triángulos de las puntas
    for (let i = 0; i < spikes2; i++) {
        const prev = (i + spikes2 - 1) % spikes2;
        tri(outer2[i], inner2[i], inner2[prev], white);
    }
    // Relleno central
    for (let i = 1; i < spikes2 - 1; i++) {
        tri(inner2[0], inner2[i], inner2[i + 1], white);
    }
    return { positions, colors };
},


};

// Placeholder para banderas sin implementación
function createPlaceholderFlag(x, y, w, h) {
    const color = [
        131 / 255,
        197 / 255,
        190 / 255
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