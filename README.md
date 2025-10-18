# 🌍 Flags of the World with WebGL

[![Deploy to GitHub Pages](https://github.com/ForLess01/Flags-of-the-world-with-WebGL/actions/workflows/deploy.yml/badge.svg)](https://github.com/ForLess01/Flags-of-the-world-with-WebGL/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://forless01.github.io/Flags-of-the-world-with-WebGL/)
[![WebGL](https://img.shields.io/badge/WebGL-Pure-orange)](https://www.khronos.org/webgl/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Galería interactiva de **195 banderas del mundo** renderizadas con **WebGL puro** (sin librerías externas).

## 🚀 Demo en Vivo

🔗 **[Ver Demo Aquí](https://forless01.github.io/Flags-of-the-world-with-WebGL/)**

---

## 📋 Tabla de Contenidos

- [¿Qué es este proyecto?](#-qué-es-este-proyecto)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#️-estructura-del-proyecto)
- [Instalación y Desarrollo](#-instalación-y-desarrollo)
- [Flujo de Trabajo (GitHub Actions)](#-flujo-de-trabajo-github-actions)
- [Reglas de Contribución](#-reglas-de-contribución)
- [Cómo Agregar una Nueva Bandera](#-cómo-agregar-una-nueva-bandera)
- [Banderas Implementadas](#-banderas-implementadas)
- [Equipo](#-equipo)

---

## 🎯 ¿Qué es este proyecto?

Este proyecto es una **galería interactiva de banderas** desarrollada como parte del curso de **Computational Graphics** (VII Semestre - UNAP). 

El objetivo principal es aprender y demostrar el uso de **WebGL puro** sin frameworks ni librerías externas, implementando:

- Renderizado acelerado por GPU
- Shaders GLSL personalizados
- Optimización con canvas offscreen
- Manipulación de buffers y geometría

---

## ✨ Características

- 🎨 **195 banderas de países** reconocidos por la ONU
- 🖥️ **Renderizado WebGL puro** con shaders vertex y fragment personalizados
- 🔍 **Búsqueda inteligente** con normalización automática de acentos
- 📱 **Diseño responsivo** con vista galería y fullscreen
- 🎯 **Redimensionamiento interactivo** de banderas en vista completa
- ⚡ **Optimizado** con canvas offscreen compartido para mejor rendimiento
- 🎨 **Placeholder elegante** (#83c5be) para banderas pendientes de implementar

---

## 🛠️ Tecnologías

| Tecnología | Propósito | Estado |
|------------|-----------|--------|
| **WebGL 1.0** | Renderizado 3D acelerado por GPU | ✅ Puro |
| **GLSL ES 1.0** | Shaders personalizados | ✅ Custom |
| **HTML5 Canvas** | Output final 2D | ✅ Nativo |
| **JavaScript ES6+** | Lógica de aplicación | ✅ Vanilla |
| **CSS3** | Estilos y animaciones | ✅ Puro |
| **GitHub Actions** | CI/CD automático | ✅ Configurado |
| **GitHub Pages** | Hosting estático | ✅ Desplegado |

**Sin dependencias externas** - 100% código nativo del navegador.

---

## 🏗️ Estructura del Proyecto

```
Flags-of-the-world-with-WebGL/
├── .github/
│   └── workflows/
│       └── deploy.yml          # 🤖 GitHub Actions para despliegue automático
├── index.html                  # 📄 Estructura HTML principal
├── script.js                   # 🧠 Lógica WebGL y definición de banderas
├── styles.css                  # 🎨 Estilos CSS
├── README.md                   # 📚 Este archivo
└── LICENSE                     # 📜 Licencia del proyecto (MIT)
```

### 📂 Descripción de archivos clave

| Archivo | Líneas | Descripción |
|---------|--------|-------------|
| `index.html` | ~50 | Estructura del DOM, canvas y controles |
| `script.js` | ~670 | WebGL, shaders, banderas y lógica de interacción |
| `styles.css` | ~200 | Diseño responsivo, tema oscuro, animaciones |
| `deploy.yml` | ~40 | Configuración de despliegue automático |

---

## 💻 Instalación y Desarrollo

### 📥 Clonar el Repositorio

```bash
# Usando GitHub CLI (recomendado)
gh repo clone ForLess01/Flags-of-the-world-with-WebGL

# O usando Git tradicional
git clone https://github.com/ForLess01/Flags-of-the-world-with-WebGL.git
cd Flags-of-the-world-with-WebGL
```

### 🚀 Ejecutar Localmente

**Opción 1: Python (más simple)**
```bash
# Python 3.x
python -m http.server 8000

# Abrir en navegador
# http://localhost:8000
```

**Opción 2: Node.js**
```bash
# Instalar servidor estático
npm install -g serve

# Ejecutar
serve

# Abrir en navegador
# http://localhost:3000
```

**Opción 3: VS Code Live Server**
1. Instalar extensión "Live Server"
2. Click derecho en `index.html`
3. Seleccionar "Open with Live Server"

### 🔍 Requisitos del Sistema

- **Navegador:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **WebGL:** Soporte de WebGL 1.0 (verificar en `chrome://gpu`)
- **Resolución:** Mínimo 1024x768 (óptimo 1920x1080)

---

## 🔐 Reglas de Contribución

### 📜 Ruleset Configurado

El repositorio tiene protección en la rama `main` con las siguientes reglas:

| Regla | Configuración | Propósito |
|-------|--------------|-----------|
| **Eliminación** | 🚫 Bloqueada | Evita borrado accidental de `main` |
| **Force Push** | 🚫 Bloqueado | Protege el historial de commits |
| **Pull Requests** | ✅ Obligatorio | Todo cambio requiere PR |
| **Revisiones** | 1 aprobación requerida | Control de calidad del código |
| **Stale Reviews** | Se descartan al hacer push | Asegura revisión del código actualizado |
| **Merge Methods** | Merge + Squash | Mantiene historial limpio |

### 🔄 Flujo de Trabajo del Equipo

#### 1️⃣ Crear una Rama para tu Feature

```bash
# Actualizar repositorio
git pull origin main

# Crear rama para tu cambio
git checkout -b feature/bandera-colombia
# Otros ejemplos:
# git checkout -b feature/bandera-argentina
# git checkout -b fix/corregir-peru
# git checkout -b docs/actualizar-readme
```

#### 2️⃣ Hacer tus Cambios

```bash
# Editar archivos (ej: script.js)
# Agregar implementación de la bandera

# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: Add Colombia flag implementation"
```

**📝 Convención de Commits:**
```
feat: Nueva característica
fix: Corrección de bug
docs: Cambios en documentación
style: Formato de código (sin cambios funcionales)
refactor: Refactorización de código
test: Agregar tests
chore: Mantenimiento general
```

#### 3️⃣ Subir tu Rama

```bash
# Push de tu rama
git push origin feature/bandera-colombia
```

#### 4️⃣ Crear Pull Request

1. Ve a GitHub: https://github.com/ForLess01/Flags-of-the-world-with-WebGL
2. Verás un banner amarillo: **"Compare & pull request"** → Click
3. Completa el formulario:
   ```markdown
   ## Descripción
   Implementación de la bandera de Colombia con sus colores oficiales.
   
   ## Cambios realizados
   - ✅ Agregada función `colombia` en `script.js`
   - ✅ Probada en vista galería y fullscreen
   - ✅ Colores validados según especificación oficial
   
   ## Checklist
   - [x] El código sigue las convenciones del proyecto
   - [x] Probado localmente
   - [x] Sin errores en consola
   ```
4. Click en **"Create pull request"**

#### 5️⃣ Revisión y Aprobación

- **1 miembro del equipo** debe revisar y aprobar
- El revisor verifica:
  - ✅ Código funcional
  - ✅ Sin errores
  - ✅ Sigue el patrón establecido
  - ✅ Colores correctos de la bandera

#### 6️⃣ Merge a Main

Una vez aprobado:
1. Click en **"Squash and merge"** o **"Merge pull request"**
2. Confirmar el merge
3. **GitHub Actions desplegará automáticamente** 🚀

---

## 🎨 Cómo Agregar una Nueva Bandera

### 📋 Paso a Paso

#### 1. Investigar la Bandera

Busca información oficial sobre:
- Colores exactos (valores RGB o Hex)
- Proporciones y diseño
- Elementos especiales (estrellas, escudos, etc.)

#### 2. Agregar al Objeto `flags` en `script.js`

```javascript
// filepath: script.js
// Busca el objeto "flags" (línea ~375) y agrega:

const flags = {
    // ...existing flags...
    
    // Nueva bandera
    colombia: (x, y, w, h) => {
        const h3 = h / 3;
        return {
            positions: [
                // Franja amarilla (50% superior)
                x, y, x+w, y, x, y+h/2, 
                x+w, y, x+w, y+h/2, x, y+h/2,
                
                // Franja azul (25% medio)
                x, y+h/2, x+w, y+h/2, x, y+h*0.75, 
                x+w, y+h/2, x+w, y+h*0.75, x, y+h*0.75,
                
                // Franja roja (25% inferior)
                x, y+h*0.75, x+w, y+h*0.75, x, y+h, 
                x+w, y+h*0.75, x+w, y+h, x, y+h
            ],
            colors: [
                // Amarillo (12 valores = 6 vértices * 2 triángulos)
                ...new Array(12).fill([1, 0.84, 0]).flat(),
                
                // Azul (6 valores)
                ...new Array(6).fill([0, 0.2, 0.63]).flat(),
                
                // Rojo (6 valores)
                ...new Array(6).fill([0.81, 0.13, 0.18]).flat()
            ]
        };
    }
};
```

#### 3. Entender el Sistema de Coordenadas

```
(x, y)                    (x+w, y)
  ┌─────────────────────────┐
  │                         │ h (alto)
  │        BANDERA          │
  │                         │
  └─────────────────────────┘
(x, y+h)    w (ancho)    (x+w, y+h)
```

**Conceptos clave:**
- **Posiciones:** Coordenadas (x,y) de cada vértice de triángulos
- **Colores:** RGB normalizado (0-1) para cada vértice
- **Proporción:** Siempre mantiene aspect ratio 5:8 (0.625)

#### 4. Formato de Colores

```javascript
// Hexadecimal a RGB normalizado
// Ejemplo: #FFD700 (amarillo oro)

const color = [
    0xFF / 255,  // R: 255/255 = 1.0
    0xD7 / 255,  // G: 215/255 = 0.843
    0x00 / 255   // B: 0/255   = 0.0
];

// Resultado: [1, 0.843, 0]
```

#### 5. Probar Localmente

```bash
# Ejecutar servidor local
python -m http.server 8000

# Abrir navegador
# http://localhost:8000

# Buscar la bandera en la galería
# Verificar en vista fullscreen
# Revisar consola por errores (F12)
```

#### 6. Crear Pull Request

Sigue el [Flujo de Trabajo del Equipo](#-flujo-de-trabajo-del-equipo).

---

## 🎯 Banderas Implementadas

### ✅ Completadas (12/195)

| Bandera | País | Complejidad | Implementador |
|---------|------|-------------|---------------|
| 🇵🇪 | Perú | ⭐ Fácil | [ForLess01](https://github.com/ForLess01) |
| 🇰🇵 | Corea del Norte | ⭐⭐ Media | [ForLess01](https://github.com/ForLess01) |
| 🇹🇷 | Turquía | ⭐ Fácil | [ForLess01](https://github.com/ForLess01) |
| 🇩🇿 | Argelia | ⭐ Fácil | [ForLess01](https://github.com/ForLess01) |
| 🇪🇸 | España | ⭐⭐ Media | [ForLess01](https://github.com/ForLess01) |
| 🇭🇳 | Honduras | ⭐ Fácil | [ForLess01](https://github.com/ForLess01) |
| 🇲🇭 | Islas Marshall | ⭐ Fácil | [ForLess01](https://github.com/ForLess01) |
| 🇲🇾 | Malasia | ⭐ Fácil | [ForLess01](https://github.com/ForLess01) |
| 🇲🇳 | Mongolia | ⭐ Fácil | [ForLess01](https://github.com/ForLess01) |
| 🇳🇷 | Nauru | ⭐ Fácil | [ForLess01](https://github.com/ForLess01) |
| 🇰🇳 | San Cristóbal y Nieves | ⭐ Fácil | [ForLess01](https://github.com/ForLess01) |
| 🇿🇦 | Sudáfrica | ⭐ Fácil | [ForLess01](https://github.com/ForLess01) |

### 🎨 Pendientes (183/195)

Usan placeholder color `#83c5be`. **¡Tu contribución es bienvenida!**

### 📊 Clasificación por Dificultad

| Nivel | Criterio | Ejemplos |
|-------|----------|----------|
| ⭐ **Fácil** | Franjas horizontales/verticales simples | Francia, Italia, Alemania |
| ⭐⭐ **Media** | Múltiples franjas con escudo simple | España, México, Ecuador |
| ⭐⭐⭐ **Difícil** | Patrones complejos, estrellas, lunas | USA, Brasil, Turquía (con luna) |
| ⭐⭐⭐⭐ **Muy Difícil** | Geometría compleja, símbolos elaborados | Nepal, Reino Unido, Sudáfrica |

---

## 👥 Equipo

### 🎓 Curso
**Computational Graphics** - VII Semestre  
**Universidad Nacional del Altiplano (UNAP)**  
**Año:** 2025

### 👨‍💻 Colaboradores

| Nombre | GitHub | Rol |
|--------|--------|-----|
| **ForLess01** | [@ForLess01](https://github.com/ForLess01) | Lead Developer |
| _Tu nombre aquí_ | _@tu-usuario_ | Contributor |
| _Tu nombre aquí_ | _@tu-usuario_ | Contributor |

**¿Quieres contribuir?** ¡Abre un Pull Request siguiendo las [Reglas de Contribución](#-reglas-de-contribución)!

---

## 📝 Convenciones de Código

### JavaScript

```javascript
// ✅ BIEN: Nombres descriptivos en camelCase
const flagWidth = 320;
const vertexShader = `...`;

// ✅ BIEN: Constantes en UPPER_SNAKE_CASE
const CANVAS_CONFIG = { ... };

// ✅ BIEN: Funciones con verbos
function drawFlagToCanvas() { ... }

// ❌ MAL: Nombres genéricos
const data = 320;
const x = `...`;
```

### CSS

```css
/* ✅ BIEN: BEM naming convention */
.flag-item { ... }
.flag-item__canvas { ... }
.flag-item--highlighted { ... }

/* ✅ BIEN: Variables CSS para colores */
:root {
    --primary-color: #83c5be;
}
```

### Git Commits

```bash
# ✅ BIEN: Descriptivo y específico
git commit -m "feat: Add Colombia flag with official colors"
git commit -m "fix: Correct Peru flag proportions"
git commit -m "docs: Update README with contribution guide"

# ❌ MAL: Genérico
git commit -m "changes"
git commit -m "fix"
```

---

## 🐛 Solución de Problemas

### ❌ WebGL no disponible

**Problema:** El navegador no soporta WebGL.

**Solución:**
```javascript
// Verificar en consola:
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl');
console.log(gl ? 'WebGL ✅' : 'WebGL ❌');

// Habilitar en Chrome: chrome://flags/#ignore-gpu-blocklist
```

### ❌ La bandera no se muestra

**Problema:** Canvas en blanco o error en consola.

**Checklist:**
- [ ] ¿El nombre de la función coincide con el `key` en `FLAGS_CONFIG`?
- [ ] ¿Los arrays `positions` y `colors` tienen la longitud correcta?
- [ ] ¿Cada triángulo tiene 6 coordenadas (3 vértices × 2 coordenadas)?
- [ ] ¿Cada vértice tiene 3 valores de color (RGB)?

**Debug:**
```javascript
// Agregar console.log en la función
colombia: (x, y, w, h) => {
    console.log('Rendering Colombia:', { x, y, w, h });
    // ...
    console.log('Positions:', positions.length);
    console.log('Colors:', colors.length);
    return { positions, colors };
}
```

### ❌ GitHub Actions falla

**Problema:** El despliegue no se completa.

**Solución:**
1. Ve a **Actions** → Click en el workflow fallido
2. Revisa los logs rojos
3. Errores comunes:
   - Permisos: Verifica en **Settings → Pages → Source: GitHub Actions**
   - Sintaxis: Valida el YAML en https://www.yamllint.com/

---

## 📚 Recursos Adicionales

### 📖 Documentación

- [WebGL Fundamentals](https://webglfundamentals.org/)
- [MDN WebGL Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial)
- [GLSL Reference](https://www.khronos.org/opengl/wiki/Core_Language_(GLSL))
- [GitHub Actions Docs](https://docs.github.com/en/actions)

### 🎨 Recursos de Banderas

- [Flags of the World](https://www.crwflags.com/fotw/flags/)
- [Wikipedia: List of National Flags](https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags)
- [Vexilla Mundi](http://www.vexilla-mundi.com/)

### 🛠️ Herramientas

- **Color Picker:** [HTML Color Codes](https://htmlcolorcodes.com/)
- **Convertir Hex a RGB:** `parseInt('FF', 16) / 255`
- **Validador HTML:** [W3C Validator](https://validator.w3.org/)
- **Validador YAML:** [YAML Lint](https://www.yamllint.com/)

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 ForLess01

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
de este software y archivos de documentación asociados, para usar el Software
sin restricciones, incluyendo sin limitación los derechos de uso, copia,
modificación, fusión, publicación, distribución, sublicencia y/o venta de copias.
```

---

## 🙏 Agradecimientos

- **UNAP** - Universidad Nacional del Altiplano
- **Khronos Group** - Por WebGL
- **GitHub** - Por hosting y Actions gratuitos
- **MDN** - Por su excelente documentación

---

## 📞 Contacto

- **Issues:** [GitHub Issues](https://github.com/ForLess01/Flags-of-the-world-with-WebGL/issues)
- **Discussions:** [GitHub Discussions](https://github.com/ForLess01/Flags-of-the-world-with-WebGL/discussions)
- **Email:** [tu-email@unap.edu.pe](mailto:tu-email@unap.edu.pe)

---

<div align="center">

**⭐ Si te gustó este proyecto, dale una estrella en GitHub!**

[![GitHub stars](https://img.shields.io/github/stars/ForLess01/Flags-of-the-world-with-WebGL?style=social)](https://github.com/ForLess01/Flags-of-the-world-with-WebGL/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ForLess01/Flags-of-the-world-with-WebGL?style=social)](https://github.com/ForLess01/Flags-of-the-world-with-WebGL/network/members)

Made with ❤️ by the UNA - P Team by ForLess01(leadteam 11)

</div>