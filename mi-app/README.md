# Panel de Desembarques - React

## Descripción

Este proyecto consiste en el desarrollo de una aplicación web SPA utilizando React, cuyo objetivo es visualizar, filtrar y gestionar los desembarques de una pesquera de la Región del Biobío.

La aplicación consume una API REST, permite filtrar los registros y marcar desembarques como prioritarios, almacenando esta información en el navegador mediante Local Storage.

---

## 🧩 Elementos de React utilizados

- **Componentes:**  
  Se utilizaron componentes funcionales como App, ListaDesembarques y FilaDesembarque para organizar la aplicación.

- **Props:**  
  Se utilizaron props para pasar datos entre componentes, como los desembarques, los prioritarios y las funciones de interacción.

- **useState:**  
  Se utilizó para manejar estados como:
  - lista de desembarques
  - filtro del usuario
  - lista de prioritarios

- **useEffect:**  
  Se utilizó para:
  - consumir la API
  - manejar el loading y error
  - guardar datos en localStorage

- **JSX:**  
  Se utilizó para renderizar la interfaz de usuario de forma dinámica.

- **Eventos:**  
  Se usaron eventos como onChange y onClick para interactuar con el usuario.

---

## 🌐 Consumo de API

Se consumió la API utilizando fetch con async/await:

http://localhost:3001/desembarques

Se manejaron correctamente:
- estados de carga
- errores de conexión

---

## 💾 Uso de Local Storage

Se implementó el marcado de desembarques como prioritarios, guardando los IDs en localStorage.

Esto permite mantener la información incluso al recargar la página.

---

## 🔍 Filtro de datos

Se implementó un filtro que permite buscar por:
- especie
- estado

Se valida la entrada del usuario transformando el texto a minúsculas y eliminando espacios innecesarios.

---

## 🔐 Buenas prácticas de seguridad

- Validación de entrada del usuario
- Uso de variable de entorno (`.env`) para la URL de la API
- Manejo de errores en la petición
- Uso de localStorage de forma controlada

---

## 🤖 Uso de IA

Se utilizó GitHub Copilot para sugerencias de código, especialmente en la implementación de:
- useEffect
- manejo de estados
- filtros dinámicos

Las sugerencias fueron aceptadas y ajustadas según las necesidades del proyecto.

---

## 🔎 Análisis con Sonar

Se identificaron mejoras como:
- simplificación de funciones
- mejor manejo de dependencias en useEffect

Se aplicaron ajustes para mejorar la calidad del código.

---