<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.64.0-blue.svg" alt="React Native 0.64.0">
  <img src="https://img.shields.io/badge/Firebase-Authentication-orange.svg" alt="Firebase Authentication">
  <img src="https://img.shields.io/badge/Redux-State%20Management-green.svg" alt="Redux State Management">
  <img src="https://img.shields.io/badge/Expo-Location-yellow.svg" alt="Expo Location">
</p>

# 🛍️ E-Commerce App - React Native

Una aplicación de comercio electrónico desarrollada con React Native que ofrece una experiencia de compra completa y totalmente intuitiva.

## Funcionalidades Principales

### Pantalla de Cuenta
- **Acceso seguro:** Solo los usuarios autenticados pueden acceder a la  pantalla de perfil y realizar compras.

### Autenticación con Firebase
- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.

### Pantalla de Categorías
- Muestra una selección de categorías en tarjetas.
- Al hacer clic en una categoría, se navega a la pantalla de productos correspondiente.

### Pantalla de Productos
- Lista todos los productos en tarjetas con nombre y foto.
- Incluye un buscador para filtrar productos por nombre.
- Al hacer clic en un producto, se navega a la pantalla de detalles del producto.

### Pantalla de Detalles del Producto
- Proporciona una descripción detallada del producto.
- Muestra el precio y foto del producto.
- Permite agregar el producto al carrito.

## Pestañas de Navegación

1. **Productos:** Categorías y productos (stack principal).
2. **Carrito:** Detalles del carrito de compras con resumen, botón para eliminar algún producto seleccionado y botón para finalizar la orden. En el caso de no tener productos en el carrito, aparece un botón que te redirecciona a la pestaña de productos.
3. **Ordenes:** Historial de órdenes realizadas.
4. **Perfil:** Pestaña en la cual podés agregar una foto de perfil y ubicación. Ambas opciónes pueden ser modificadas posteriormente.

## Tecnologías Utilizadas

- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Bottom Tab:** Facilita la navegación entre pestañas.
- **Expo-Image-Picker:** Simplifica la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.
- **Toast-Message:** Se ocupa de notificar ciertas acciones vía toasts.

## Instalación

1. Clona el repositorio: `git clone https://github.com/kikidemar/proyectoAppDemarchi.git`
2. Instala las dependencias: `npm install`
3. Ejecuta la aplicación: `npm start`


## Contacto

Para preguntas o soporte, contáctame a [demarchi.christiann@gmail.com].
