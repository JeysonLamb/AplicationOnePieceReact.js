# Aplicación One Piece React

Este proyecto es una aplicación desarrollada en React que muestra información sobre los personajes de One Piece. Se implementaron varios componentes para mejorar la experiencia del usuario.

## Aplicación Desplegada en Netlify

[Visita la sitio aquí](https://opcard.netlify.app/)

## Actulizacion de Funcionalidades

- **Carga de personajes**: Obtiene una lista de personajes mediante una API.
- **Estado de carga**: Muestra un indicador mientras se cargan los datos.
- **Cambio dinámico de imágenes**: Permite cambiar las imágenes de los personajes al pasar el mouse.

- **Estilo personalizado**: Se aplicaron estilos CSS para mejorar la presentación y se coloco un CSS para todo
- **Componentes reutilizables**: Uso de componentes para representar cartas de personajes.

## Actualizaciones

- Mejora en la gestión del estado de carga en el componente `CharacterFetcher`.
- Se resolvieron errores de componentes.
- Optimización del proceso de obtención de datos y reorganización del código para mayor legibilidad.
- Se creó el componente `chartersImages` para manejar el cambio de imágenes y textos.

- se renombro el componente`card` por `chartersCard`para manejar la visualizacion de las imaganes añadiendo su descripcion

## Detalles Técnicos

- **React Hooks**: Se utilizó `useState` para manejar el estado de carga y el índice de la imagen actual.
- **Eventos**: Se implementaron funciones para gestionar eventos de clic que actualizan las imágenes y textos.
- **API**: Integración con una API para obtener la información de los personajes de One Piece.
Este proyecto forma parte de mi aprendizaje en **React**. He implementado una funcionalidad que permite cambiar imágenes y texto dinámicamente utilizando el estado local, eventos y funciones.

## Actualización

### Implementación de Funcionalidad

En esta actualización, se han añadido las siguientes características:

- **Cambio de imágenes**: Al hacer clic en una imagen, esta cambiará a la siguiente en la lista asociada al personaje.
- **Cambio de texto**: Al hacer clic en el nombre de un personaje, el texto cambiará entre "Tripulación Mugiwara" y el nombre real del personaje.

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
