# Trabajo Práctico N°3 - Programación III

## Universidad Tecnológica Nacional

**Carrera:** Tecnicatura Universitaria en Programación
**Materia:** Programación III
**Profesor:** Gustavo Ramoscelli
**Trabajo Práctico:** Node.js, Express, npm, consumo de APIs y deploys

---

# Grupo e Integrantes

**Grupo:** Grupo 8

## Integrantes

* Alejo Sanger
* Román Strizzi
* Julián Peralta Muñiz
* Nicolas Castellini
* Nazareno Negrete
* Gianfranco Tarulli



---

# TRABAJO PRACTICO N°3

# Plataforma Web con Frontend + Backend API REST

## Descripción General

El proyecto consiste en la adaptación del TP1 a una arquitectura cliente-servidor.

Anteriormente los datos eran estáticos dentro del frontend. En este TP se desarrolló un backend utilizando Node.js y Express para exponer información mediante endpoints REST.

El frontend consume esos datos utilizando `fetch`, funciones asíncronas y promesas.

La aplicación quedó separada en dos partes:

* Frontend → interfaz visual y consumo de API.
* Backend → servidor API REST y manejo de datos JSON.

---
# División de tareas entre integrantes

## Nicolas Castellini — Documentación Final y README (Perfil: Detallista)

Encargado de la documentación general del proyecto y de la parte teórica del trabajo práctico.

### Tareas realizadas:

* Redacción completa del archivo `README.md`.
* Explicación de la metodología de trabajo con Git y GitHub.
* Documentación de ramas, commits y pull requests.
* Explicación detallada del funcionamiento general del frontend y backend.
* Documentación y explicación del 90% de las funciones utilizadas.
* Inclusión de ejemplos de estructuras JSON utilizadas en el proyecto.
* Organización y estructura final de la documentación para la entrega.

---

## Alejo Sanger — Gestión de Datos y Configuración Inicial

Responsable de preparar los datos utilizados por la aplicación y configurar archivos esenciales del proyecto.

### Tareas realizadas:

* Creación de archivos JSON dentro de la carpeta `./data`.
* Generación de información para:

  * Servicios (mínimo 13 servicios).
  * Integrantes del equipo.
  * Usuarios para login y perfil.
* Organización de estructuras JSON utilizadas como base de datos simulada.
* Configuración del archivo `.gitignore`.
* Exclusión de carpetas y archivos sensibles como:

  * `node_modules`
  * `.env`
* Verificación de integridad y formato correcto de los archivos JSON.

---

## Román Strizzi — Configuración del Servidor y Rutas Base

Responsable de preparar la estructura inicial del backend y dejar operativo el servidor de la aplicación.

### Tareas realizadas:

* Inicialización del proyecto utilizando `npm init`.
* Instalación y configuración de dependencias necesarias:

  * `express`
  * `cors`
  * `dotenv`
  * `nodemon`
* Configuración de `app.js` y `server.js`.
* Creación de la estructura principal del backend.
* Configuración del servidor para escuchar en el puerto correspondiente.
* Definición inicial de endpoints GET y POST requeridos por el enunciado.
* Organización de rutas y conexión básica entre archivos.
* Configuración inicial de middlewares.

---

## Julián Peralta Muñiz — Integración y Front-end Async (Perfil: Experiencia Alta)

Responsable de integrar el frontend con el backend mediante consumo de API y funciones asíncronas.

### Tareas realizadas:

* Adaptación del código del TP1 para trabajar con datos obtenidos desde la API.
* Modificación de funciones JavaScript para utilizar `fetch`.
* Implementación de funciones asíncronas con `async/await`.
* Integración entre frontend y backend.
* Desarrollo de las nuevas páginas de Login y Perfil de Usuario.
* Adaptación de código reutilizado del proyecto “Cine Aurora”.
* Verificación del correcto renderizado dinámico de información.

---

## Nazareno Negrete — Lógica y Controladores (Perfil: Experiencia Alta)

Responsable de desarrollar la lógica principal del backend y dar funcionamiento a los endpoints de la API.

### Tareas realizadas:

* Creación de archivos dentro de la carpeta `./controllers`.
* Desarrollo de controladores como `serviciosController.js`, `equipoController.js` y `perfilController.js`.
* Implementación de la lógica para responder peticiones HTTP.
* Lectura y procesamiento de archivos JSON.
* Desarrollo de funciones asíncronas utilizando `async/await`.
* Manejo de errores mediante bloques `try/catch`.
* Conexión entre rutas y controladores del backend.

---

## Gianfranco Tarulli — Especialista en QA y UI/UX (Nivel Inicial)

Responsable de asegurar la calidad visual y funcional de la aplicación sin modificar el núcleo principal del sistema.

### Tareas realizadas:

* Testing general del frontend y backend.
* Verificación visual de páginas y componentes.
* Detección y reporte de errores de interfaz.
* Revisión de experiencia de usuario (UI/UX).
* Control del correcto funcionamiento de botones, formularios y navegación.
* Validación de consumo de datos desde la API.
* Apoyo en pruebas finales antes del deploy.


---
# FRONTEND

## Objetivo del Frontend

El frontend es la parte visual de la aplicación.

Se encarga de:

* Mostrar servicios.
* Mostrar integrantes del equipo.
* Mostrar perfiles.
* Consumir datos desde Render.
* Interactuar con el usuario.

---

## Tecnologías Utilizadas en Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API
* Async/Await
* GitHub Pages

---

## Funcionamiento General del Frontend

El frontend realiza peticiones HTTP al backend utilizando `fetch()`.

Ejemplo:

```js
const respuesta = await fetch("https://api-render.com/servicios")
const datos = await respuesta.json()
```

### Explicación

### `fetch()`

Realiza una petición HTTP al servidor.

### `await`

Espera la respuesta del backend.

### `.json()`

Convierte la respuesta a formato JSON.

---

## Flujo del Frontend

1. El usuario ingresa al sitio.
2. JavaScript realiza una petición al backend.
3. El backend devuelve datos JSON.
4. El frontend recibe los datos.
5. Se generan dinámicamente los elementos HTML.

---

## Funciones del Frontend

### Obtener servicios

```js
async function obtenerServicios() {
    try {
        const respuesta = await fetch(URL)
        const servicios = await respuesta.json()

        mostrarServicios(servicios)
    } catch(error) {
        console.log(error)
    }
}
```

## Explicación línea por línea

### `async function`

Declara una función asíncrona.

### `try/catch`

Permite manejar errores sin romper la aplicación.

### `await fetch(URL)`

Espera la respuesta del backend.

### `await respuesta.json()`

Convierte la respuesta a JSON.

### `mostrarServicios(servicios)`

Envía los datos a otra función encargada de renderizar HTML.

---

## Deploy Frontend

El frontend fue deployado utilizando GitHub Pages.

Esto permite acceder al sitio desde internet.

---

# BACKEND

## Objetivo del Backend

El backend se desarrolló utilizando Node.js y Express.

Su función es:

* Crear endpoints.
* Leer archivos JSON.
* Responder peticiones HTTP.
* Enviar datos al frontend.
* Simular una base de datos.

---

## Tecnologías Utilizadas en Backend

## Backend

* Node.js
* Express
* Cors
* Dotenv
* Nodemon
* ESLint

## Frontend

* HTML5
* CSS3
* JavaScript

## Herramientas

* Git
* GitHub
* Render
* GitHub Pages
* Visual Studio Code

---

# Metodología de Trabajo con Git y GitHub

El proyecto fue desarrollado utilizando una metodología basada en ramas para mantener un flujo de trabajo organizado.

## Estructura de ramas

* `main` → rama principal utilizada para la entrega final.
* `dev` → rama de desarrollo general.
* Ramas individuales por integrante para trabajar funcionalidades específicas.

## Flujo de trabajo

1. Cada integrante trabajó en su propia rama.
2. Se realizaron commits frecuentes describiendo claramente los cambios.
3. Se utilizaron Pull Requests para integrar cambios a `dev`.
4. Luego de probar el funcionamiento general, los cambios fueron mergeados a `main`.
5. Se realizaron pruebas de deploy utilizando Render y GitHub Pages.

## Ejemplo de comandos utilizados

```bash
git checkout -b NCastellini
git add .
git commit -m "Se agregan rutas de servicios"
git push origin NCastellini
```

---

# Distribución de Carpetas y Archivos

```text
TP3_Prog3_Grupo8/
│
├── app.js
├── package.json
├── package-lock.json
├── eslint.config.mjs
│
├── controllers/
│   ├── equipoController.js
│   ├── perfilController.js
│   └── serviciosController.js
│
├── data/
│   ├── equipo.json
│   ├── servicios.json
│   └── usuarios.json
│
├── models/
│   └── server.js
│
├── routes/
│   ├── equipoRoutes.js
│   ├── perfileRoutes.js
│   └── serviciosRoutes.js
```

---

# Explicación General del Backend

El backend fue desarrollado siguiendo una arquitectura modular.

Cada responsabilidad se separa en carpetas específicas:

* `routes` → define las rutas de la API.
* `controllers` → contiene la lógica de negocio.
* `data` → almacena los archivos JSON.
* `models` → configuración principal del servidor.

Esto permite mantener el código organizado, escalable y fácil de mantener.

---

# Explicación de Archivos y Funciones

## app.js

```js
const Server = require('./models/server');

const servidor = new Server()

servidor.listen()
```

### Explicación

### `const Server = require('./models/server')`

Importa la clase `Server` desde el archivo `server.js`.

### `const servidor = new Server()`

Crea una nueva instancia del servidor.

### `servidor.listen()`

Inicia el servidor y deja la API escuchando peticiones.

---

# models/server.js

```js
const express = require('express')
const cors = require('cors')
require('dotenv').config()
```

## Explicación

### `express`

Framework utilizado para crear el servidor y manejar rutas.

### `cors`

Permite que el frontend pueda comunicarse con el backend.

### `dotenv`

Carga variables de entorno desde el archivo `.env`.

---

## Constructor de la clase Server

```js
constructor() {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
}
```

### Explicación línea por línea

### `this.app = express()`

Crea la aplicación Express.

### `this.port = process.env.PORT || 3000`

Define el puerto del servidor. Si Render asigna un puerto, utiliza ese; si no, usa el puerto 3000.

### `this.middleware()`

Ejecuta las configuraciones intermedias.

### `this.rutas()`

Carga todas las rutas del proyecto.

---

## Método middleware()

```js
middleware() {
    this.app.use(cors())
}
```

### Explicación

Habilita CORS para permitir peticiones externas desde el frontend.

---

## Método rutas()

```js
rutas() {
    this.app.use("/servicios", require("../routes/serviciosRoutes"))
    this.app.use("/equipo", require("../routes/equipoRoutes"))
    this.app.use("/perfil", require("../routes/perfileRoutes"))
}
```

### Explicación

Define las rutas principales de la API.

### `/servicios`

Devuelve todos los servicios y también servicios por ID.

### `/equipo`

Devuelve información de los integrantes.

### `/perfil`

Devuelve información del perfil de usuario.

---

## Método listen()

```js
listen() {
    this.app.listen(this.port, () => {
        console.log(`Servidor corriendo en puerto ${this.port}`)
    })
}
```

### Explicación

Inicia el servidor y muestra un mensaje en consola indicando el puerto utilizado.

---

# Explicación de las Rutas

## routes/serviciosRoutes.js

```js
const { Router } = require("express")

const {
        getServicios,getServicioById
} = require("../controllers/serviciosController")

const rutas = Router()

rutas.get("/", getServicios)
rutas.get("/:id", getServicioById)

module.exports = rutas
```

## Explicación

### `Router()`

Permite crear rutas separadas del servidor principal.

### `rutas.get("/", getServicios)`

Endpoint para obtener todos los servicios.

### `rutas.get("/:id", getServicioById)`

Endpoint para obtener un servicio específico mediante su ID.

---

## routes/equipoRoutes.js

### Endpoint disponible

```http
GET /equipo
```

Devuelve el listado completo de integrantes.

---

## routes/perfileRoutes.js

### Endpoint disponible

```http
GET /perfil/:id
```

Devuelve la información de un usuario específico.

---

# Endpoints Implementados

| Método | Endpoint       | Descripción                  |
| ------ | -------------- | ---------------------------- |
| GET    | /servicios     | Obtiene todos los servicios  |
| GET    | /servicios/:id | Obtiene un servicio por ID   |
| GET    | /equipo        | Obtiene el equipo            |
| GET    | /perfil/:id    | Obtiene un perfil específico |

---

# Estructura de Archivos JSON

## servicios.json

```json
[
  {
    "id": 1,
    "nombre": "Desarrollo Web",
    "descripcion": "Creación de páginas web modernas",
    "precio": 50000
  }
]
```

## equipo.json

```json
[
  {
    "id": 1,
    "nombre": "Nicolas",
    "rol": "Backend Developer"
  }
]
```

## usuarios.json

```json
[
  {
    "id": 1,
    "nombre": "Juan Perez",
    "email": "juan@gmail.com",
    "fechaRegistro": "2026-05-10",
    "ultimosPedidos": [
      "Pedido 1",
      "Pedido 2",
      "Pedido 3"
    ]
  }
]
```

---

# Instalación del Proyecto

## Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar proyecto

```bash
npm run dev
```

---

# Deploys

## Backend

Deploy realizado en Render.

## Frontend

Deploy realizado en GitHub Pages.

---

# Buenas Prácticas Aplicadas

* Modularización del código.
* Uso de rutas separadas.
* Uso de variables de entorno.
* Uso de JSON como simulación de base de datos.
* Separación de responsabilidades.
* Uso de Git Flow.
* Uso de Express Router.
* Implementación de endpoints REST.

---

# Conclusión

Este trabajo práctico permitió aplicar conocimientos de backend utilizando Node.js y Express, además de trabajar en equipo utilizando Git y GitHub.

También se aprendió a consumir APIs desde el frontend, manejar archivos JSON, realizar deploys y estructurar proyectos reales de manera profesional.
