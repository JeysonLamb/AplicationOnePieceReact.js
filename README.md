# Aplicación One Piece React

Este proyecto es una aplicación desarrollada en React que muestra información sobre los personajes de One Piece. Se implementaron varios componentes para mejorar la experiencia del usuario.

## Aplicación Desplegada en Netlify

[Visita el sitio aquí](https://671b3378312af1fb5c4b77a8--opcard.netlify.app/)

## Actualización de Funcionalidades

- **Carga de personajes**: Obtiene una lista de personajes mediante una API.
- **Estado de carga**: Muestra un indicador mientras se cargan los datos.
- **Cambio dinámico de imágenes**: Permite cambiar las imágenes de los personajes al pasar el mouse.
- **Estilo personalizado**: Se aplicaron estilos CSS para mejorar la presentación y se colocó un CSS para todo.
- **Componentes reutilizables**: Uso de componentes para representar cartas de personajes.

## Actualizaciones

- Mejora en la gestión del estado de carga en el componente `CharacterImagFetcher`.
- Se resolvieron errores de componentes.
- Optimización del proceso de obtención de datos y reorganización del código para mayor legibilidad.
- Se creó el componente `chartersImagImages` para manejar el cambio de imágenes y textos.
- Se renombró el componente `card` por `CharacterCard` para manejar la visualización de las imágenes añadiendo su descripción y se coloco como componente
- Se reorganizó la estructura de carpetas del proyecto para una mejor organización y mantenimiento del código.

## Detalles Técnicos

- **React Hooks**: Se utilizó `useState` para manejar el estado de carga y el índice de la imagen actual, y se implementó un hook personalizado para facilitar la gestión de datos.
- **Contexto Global**: Se implementó un contexto global para manejar el estado de la aplicación de manera más eficiente con su Provider
- **Suspense**: Se utilizó Suspense para gestionar la carga de componentes de manera más fluida y mejorar la experiencia del usuario. con un fallback
- **Caché de Datos**: Se añadió una caché que almacena los personajes obtenidos de la API, optimizando así las solicitudes y mejorando el rendimiento de la aplicación.
- **Eventos**: Se implementaron funciones para gestionar la navegacion entre ventanas haciendo clic en un boton



## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JeysonLamb/LearningReactJs.git

2. Instala las dependencias:
  
   ```bash
   npm install
   npm install wouter


Uso
Para ejecutar el proyecto en modo de desarrollo:

 ```bash
npm start
Esto abrirá la aplicación en tu navegador en http://localhost:3000.
