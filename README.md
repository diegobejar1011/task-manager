# Task Manager API

## 📋 Descripción del Proyecto

Task Manager es una API REST que permite gestionar tareas con operaciones CRUD básicas. El sistema integra múltiples entidades relacionadas como **Comentarios**, **Usuarios** y **Tags**, logrando la abstracción de estas relaciones en la lógica de dominio a partir de las relaciones entre las entidades del dominio.

## 🏗️ Arquitectura

El proyecto implementa una **Arquitectura Hexagonal** con tres capas:
```
├── domain/          # Capa de Dominio
├── application/     # Capa de Aplicación
└── infrastructure/  # Capa de Infraestructura y Presentación
```

La arquitectura respeta el **desacoplamiento de la tecnología** mediante:

- **Clara separación de responsabilidades** entre capas
- **Mappers** que permiten la correcta comunicación entre las capas
- Implementación de puertos e interfaces que mantienen el dominio independiente

## 🔐 Seguridad

Las rutas que abordan las tareas están protegidas. Para acceder:

1. Crear un usuario
2. Autenticarse con credenciales
3. Obtener un token de sesión
4. Usar el token para acceder a las rutas protegidas

## 🛡️ Manejo de Errores y Respuestas

- **Filters**: Se declararon filtros que abordan excepciones específicas arrojadas por los diferentes escenarios
- **Wrapper Global**: Implementado para devolver siempre una respuesta estándar y mantener coherencia en toda la API

## ⚙️ Variables de Entorno

Se implementó la **validación de variables de entorno** que permite una correcta ejecución del proyecto, incluyendo las credenciales correspondientes.

## 📦 Instalación
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Iniciar la aplicación
npm run start:dev
```

## 🚀 Uso Básico

1. Registrar usuario en `/auth/register`
2. Autenticarse en `/auth/login` para obtener token
3. Usar el token en las peticiones a `/tasks` para gestionar tareas