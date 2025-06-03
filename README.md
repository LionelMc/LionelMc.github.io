# Lionel Mc's Portfolio

Bienvenido a mi portafolio personal. Este proyecto está desarrollado en React y tiene como objetivo mostrar mis habilidades, experiencia, proyectos y formación de manera profesional.

---

## Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Uso](#instalación-y-uso)
- [Despliegue en GitHub Pages](#despliegue-en-github-pages)
- [Dependencias](#dependencias)
- [Personalización](#personalización)
- [Licencia](#licencia)

---

## Características

- **Diseño responsivo:** Se adapta a cualquier tamaño de pantalla y navegador.
- **Secciones claras:** Sobre mí, habilidades, ruta de aprendizaje, experiencia y proyectos destacados.
- **Visual atractivo:** Uso de badges, tarjetas y estilos modernos.
- **Fácil de mantener:** Separación de datos y componentes para facilitar actualizaciones.
- **Despliegue sencillo:** Preparado para publicar en GitHub Pages.

---

## Estructura del Proyecto

```
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── assets/
│   │   └── style.css
│   ├── components/
│   │   ├── About.js
│   │   ├── Badge.js
│   │   ├── Button.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── MainContent.js
│   │   ├── Projects.js
│   │   └── Sidebar.js
│   └── data/
│       ├── education.js
│       ├── experience.js
│       ├── profile.js
│       └── projects.json
├── .gitignore
├── package.json
└── README.md
```

---

## Instalación y Uso

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/LionelMc/LionelMc.github.io.git
   cd LionelMc.github.io
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**

   ```bash
   npm start
   ```

   El sitio estará disponible en `http://localhost:3000`.

---

## Despliegue en GitHub Pages

1. **Instala la dependencia para despliegue:**

   ```bash
   npm install --save gh-pages
   ```

2. **Agrega los scripts de despliegue en `package.json`:**

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

3. **Configura la propiedad `homepage` en `package.json`:**

   ```json
   "homepage": "https://lionelmc.github.io/LionelMc.github.io/"
   ```

4. **Despliega el sitio:**

   ```bash
   npm run deploy
   ```

   El portafolio estará disponible en la URL configurada.

---

## Dependencias

- [React](https://reactjs.org/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [react-scripts](https://www.npmjs.com/package/react-scripts)
- [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css) (CDN en `public/index.html`)

---

## Personalización

- **Datos personales y habilidades:** Edita [`src/data/profile.js`](src/data/profile.js)
- **Experiencia:** Edita [`src/data/experience.js`](src/data/experience.js)
- **Educación:** Edita [`src/data/education.js`](src/data/education.js)
- **Proyectos:** Edita [`src/data/projects.json`](src/data/projects.json)
- **Estilos:** Modifica [`src/assets/style.css`](src/assets/style.css)

---

## Licencia

Este proyecto está bajo la licencia MIT. 
---

**Recuerda:**  
Este README sirve como guía rápida para entender, modificar y desplegar tu portafolio en cualquier momento.
