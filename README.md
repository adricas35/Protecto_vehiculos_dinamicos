# Proyecto de vehiculos dinamicos Visitar Website https://adricas35.github.io/Protecto_vehiculos_dinamicos/

Este proyecto es una aplicación web desarrollada con HTML, CSS y JavaScript que permite agregar vehículos a un catálogo, 
visualizarlos en tarjetas (cards), y añadirlos a un carrito de compras. Los datos se guardan temporalmente en `localStorage`, 
y se muestran también en una tabla resumen.

---

## Descripción del proyecto

El objetivo de este proyecto es construir una aplicación interactiva que permita:

- Registrar vehículos a través de un formulario.
- Visualizarlos como tarjetas con su respectiva información.
- Agregarlos a un carrito de compras.
- Calcular el total en tiempo real.
- Mostrar un resumen del carrito en una tabla.
- Almacenar toda la información usando `localStorage` del navegador.

---

## Contenido del repositorio

### Formulario y Catálogo (`index.html` + `app.js`)
- Formulario para ingresar:
  - Imagen del vehículo
  - Nombre
  - Marca
  - Modelo
  - Kilometraje
  - Precio
- Cada vehículo se muestra como una **tarjeta** con:
  - Botón **Comprar**: agrega el vehículo al carrito
  - Botón **Eliminar**: elimina el vehículo del catálogo
- Se actualiza el **total del carrito** dinámicamente.
- Los datos se almacenan en `localStorage`.

### Carrito de Compras

- Al presionar **Comprar**, se agrega el vehículo a una sección del carrito.
- Se actualiza el precio total automáticamente.
- También se guarda en `localStorage`.
- Puede eliminarse cualquier vehículo del carrito.

### Tabla de Resumen (`resumen.html` + `resumen.js`)

- Segunda vista con un resumen del carrito en una **tabla HTML**.
- Se listan los vehículos agregados con:
  - Nombre
  - Marca
  - Modelo
  - Kilometraje
  - Precio
- Se calcula y muestra el **total general** de la compra.
- Todo se carga automáticamente desde `localStorage`.

---

## Funcionalidades Técnicas

- Manipulación del DOM con JavaScript.
- Captura y validación de formularios.
- Eventos personalizados como `click`, `submit`, y `DOMContentLoaded`.
- Generación dinámica de elementos HTML.
- Persistencia de datos con `localStorage`.

---

## Contribuciones

Las contribuciones son bienvenidas. Si deseas ayudar a mejorar este proyecto, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea tu propia rama (git checkout -b mi-rama).
3. Realiza tus cambios y haz commit (git commit -m 'Agregué algo').
4. Sube tu rama (git push origin mi-nueva-rama).
5. Envía un pull request.

---

## Contacto y redes sociales

Puedes encontrarme y seguirme en:

- **GitHub:** https://github.com/adricas35
- **LinkedIn:** https://www.linkedin.com/in/adriana-castillo-05aa10368/
- **Correo Electrónico:** adricasra1993@gmail.com

---

> ¡Gracias por visitar este repositorio! Espero que te sea de gran ayuda. 
> ¡Feliz aprendizaje!











