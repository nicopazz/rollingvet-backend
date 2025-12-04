# 🐾 RollingVet - Backend

API RESTful desarrollada para el sistema de gestión de la veterinaria **RollingVet**.  
Este servidor maneja la lógica de negocio, la conexión a base de datos y la autenticación de usuarios.

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** – Entorno de ejecución  
- **Express** – Framework web  
- **MongoDB** – Base de datos NoSQL  
- **Mongoose** – Modelado de datos (ODM)  
- **JWT (JSON Web Token)** – Autenticación y seguridad  
- **Bcrypt.js** – Encriptación de contraseñas  
- **Cors** – Gestión de acceso cruzado  
- **Morgan** – Logger de peticiones HTTP  

---

## 📋 Prerrequisitos

Para ejecutar este proyecto necesitas tener instalado:

- **Node.js** (v16 o superior)  
- **MongoDB** (local o una conexión a Atlas)

---

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el repositorio

git clone <URL_DE_TU_REPOSITORIO>
cd rollingvet-backend

### 2️⃣ Instalar dependencias

npm install

### 3️⃣ Configurar Variables de Entorno

Crear un archivo .env en la raíz del proyecto y añadir:
PORT=4000
DATABASE_URI=mongodb+srv://usuario:password@cluster.xxxxxx.mongodb.net/rollingvet
SECRET_JWT=MiPalabraSecretaSuperSegura

### 4️⃣ Ejecutar el servidor

➤ Modo desarrollo (con reinicio automático):
npm run dev

➤ Modo producción:
npm start

🔗 Endpoints de la API
URL base: http://localhost:4000/api

## 🔗 API Endpoints

A continuación se detallan las rutas disponibles en la API, organizadas por módulo.

### 🔐 Autenticación (Usuarios)

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| **POST** | `/auth/registro` | Registrar un nuevo usuario o admin. |
| **POST** | `/auth/login` | Iniciar sesión (devuelve Token). |

---

### 🐶 Pacientes

| Método | Ruta | Descripción | Protegido (JWT) |
| :--- | :--- | :--- | :---: |
| **GET** | `/pacientes` | Obtener lista de pacientes. | ✅ |
| **GET** | `/pacientes/:id` | Obtener paciente por ID. | ❌ |
| **POST** | `/pacientes` | Crear un nuevo paciente. | ✅ |
| **PUT** | `/pacientes/:id` | Editar un paciente. | ✅ |
| **DELETE** | `/pacientes/:id` | Eliminar un paciente. | ✅ |

---

### 📅 Turnos

| Método | Ruta | Descripción | Protegido (JWT) |
| :--- | :--- | :--- | :---: |
| **GET** | `/turnos` | Listar todos los turnos. | ✅ |
| **POST** | `/turnos` | Reservar un turno. | ❌ |
| **PUT** | `/turnos/:id` | Modificar un turno. | ✅ |
| **DELETE** | `/turnos/:id` | Cancelar/Borrar un turno. | ✅ |

---

### 🏥 Servicios

| Método | Ruta | Descripción | Protegido (JWT) |
| :--- | :--- | :--- | :---: |
| **GET** | `/servicios` | Ver servicios disponibles. | ✅ |
| **POST** | `/servicios` | Crear un servicio. | ❌ |
| **PUT** | `/servicios/:id` | Editar un servicio. | ✅ |
| **DELETE** | `/servicios/:id` | Eliminar un servicio. | ✅ |

🔐 Uso del Token

Para acceder a las rutas protegidas debes incluir el token en el header:
x-token: <TU_TOKEN_JWT>


### ✒️ Autor
**Paz Nicolas** – *Desarrollador Full Stack*