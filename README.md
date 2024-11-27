Proyecto NestJS con API Gateway y Microservicios
Este proyecto está basado en NestJS y utiliza una arquitectura de microservicios. Está compuesto por:

API Gateway: Punto de entrada principal para interactuar con los microservicios.
Microservicio de Tareas: Un microservicio que maneja la lógica relacionada con las tareas.
Microservicio de Usuarios: Un microservicio que maneja la lógica relacionada con los usuarios.
RabbitMQ: Utilizado para la comunicación entre los microservicios.
MongoDB: Base de datos para almacenar datos de usuarios y tareas.
Requisitos Previos
Node.js (versión recomendada: v16 o superior).
RabbitMQ: Necesitas tener un servidor RabbitMQ corriendo.
MongoDB: Necesitas tener una instancia de MongoDB en funcionamiento o usar una base de datos en la nube como MongoDB Atlas.
Instalación
1. Clonar el repositorio
Primero, clona el repositorio desde GitHub:

git clone https://github.com/jhon0210/microServicios.git
cd tu-repositorio

cd api-gateway
npm install

cd ../testMicroservicios-tasks
npm install

cd ../testMicroservicios-users
npm install

MONGO_URI=mongodb://localhost:27017/tu-base-de-datos

MONGO_URI=mongodb://localhost:27017/nestjs_microservices
RABBITMQ_URI=amqp://localhost:3000
JWT_SECRET=mi_clave_secreta

npm run start:dev

.
├── api-gateway/               # API Gateway para manejar las peticiones
├── testMicroservicios-tasks/  # Microservicio para manejar las tareas
├── testMicroservicios-users/  # Microservicio para manejar los usuarios
├── .gitmodules                # Configuración de submódulos (si aplica)
├── package.json               # Dependencias generales
├── README.md                  # Este archivo
└── .env                       # Variables de entorno
