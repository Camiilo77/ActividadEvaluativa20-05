# Actividad Evaluativa - 20 de Mayo

## Curso: Sistemas Distribuidos (60) – 8108268  
*Actividad:* Evaluación Contenedores  
*Periodo:* I - 2025  
*Fecha:* 20 de mayo de 2025  

---

## Integrantes del equipo

- *Edwin David Martinez Gomez* – Código: 202210815  
- *Camilo Andres Rodriguez Morales* – Código: 202221173

---

## Descripción del Proyecto

Esta es una aplicación web desarrollada con *Node.js y Express*, que consume el recurso posts del API pública de [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).

La aplicación permite:

- Ver todos los registros: GET /posts
- Ver un registro por ID: GET /posts/:id

---


### Construcción de la imagen

Ubícate en la carpeta raíz del proyecto (donde está el Dockerfile) y ejecuta:

bash

docker build -t actividad_evaluativa:latest .

### Ejecución del contenedor 
docker run -p 3000:3000 actividad-evaluativa:latest

## Despliegue desde DockerHub

### Descargar imagen
docker pull camiilo03/actividad-evaluativa:latest

### Ejecutar imagen descargada 
docker run -p 3000:3000 camiilo03/actividad-evaluativa