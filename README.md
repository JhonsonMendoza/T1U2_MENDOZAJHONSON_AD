# Práctica: Consultas Avanzadas y Relaciones en MongoDB

## Portada

**Título del proyecto:** Consultas Avanzadas y Relaciones entre Colecciones en MongoDB usando Mongoose y Docker
**Nombre del estudiante:** Jhonson Benigno Mendoza Jaramillo
**Carrera / Curso:** Aplicaciones Distribuidas
**Fecha de entrega:** Julio 2025

---

## Introducción

La presente práctica tiene como propósito explorar y dominar el uso de consultas avanzadas y relaciones entre colecciones en bases de datos NoSQL, específicamente MongoDB, apoyándonos en la herramienta Mongoose y contenedores Docker. En un mundo donde los sistemas distribuidos y las aplicaciones en la nube son el estándar, es vital comprender cómo manejar datos complejos de manera eficiente y flexible. MongoDB, como base de datos orientada a documentos, nos brinda una arquitectura poderosa que facilita el desarrollo ágil de aplicaciones escalables.

Esta experiencia de laboratorio permite al estudiante no solo comprender la estructura de datos en MongoDB, sino también aplicar operaciones fundamentales como filtrado, agregación y modelado de relaciones entre entidades, ya sea de forma referenciada o embebida, aspectos esenciales para un backend robusto y bien diseñado.

---

## Objetivos

### Objetivo General

Implementar un entorno funcional para consultas avanzadas en MongoDB y establecer relaciones entre colecciones utilizando Mongoose y Docker, con el fin de comprender su funcionamiento y aplicabilidad en proyectos distribuidos.

### Objetivos Específicos

1. Configurar un entorno de desarrollo basado en contenedores Docker para levantar MongoDB y Mongo Express, facilitando la administración y visualización de datos.
2. Desarrollar e implementar consultas avanzadas en MongoDB utilizando Mongoose, incluyendo agregaciones, filtros complejos y relaciones entre colecciones.

---

## Entorno de Desarrollo

Para esta práctica se implementó un entorno basado en contenedores con `Docker Compose`. Se levantaron dos servicios principales: `mongo` (la base de datos) y `mongo-express` (una interfaz web para interactuar con la base de datos de forma visual). Se estableció un volumen para persistir los datos. A continuación, se detallan los pasos realizados:

Primero, se instaló Docker Desktop en el sistema operativo Windows 10. Luego se creó el archivo `docker-compose.yml` y se definieron los servicios. Para levantar el entorno, se usó el comando:

**docker-compose up -d**

Una vez activos los servicios, se accedió a Mongo Express desde el navegador en el puerto 8081 para gestionar visualmente las colecciones.

Posteriormente, se instaló el entorno Node.js con las siguientes dependencias:

* mongoose
* dotenv
* express

Estas se instalaron mediante el uso de npm con el comando:

**npm install mongoose dotenv express**

---

## Modelado de Datos

El modelo de datos elegido para esta práctica simula una aplicación de gestión de productos y usuarios. Se diseñaron las siguientes colecciones:

* **Usuarios**: con campos como nombre, email, y una relación hacia productos favoritos.
* **Productos**: con campos como nombre, precio, categoría y disponibilidad.

Se trabajaron tanto relaciones referenciadas como documentos embebidos, lo que permitió evaluar distintos enfoques del modelado en MongoDB.

**Estructura y Relaciones:**

* Un usuario puede tener varios productos favoritos → relación uno a muchos (referenciada).
* Un producto puede tener múltiples reseñas como documentos embebidos → relación uno a muchos (anidada).

**\[Fotografía 1: Diagrama de relación entre colecciones]**
![grafico1](https://imgur.com/iG7ee7J.png)
---

## Desarrollo de Consultas

Durante la práctica se implementaron diferentes tipos de consultas utilizando Mongoose. Estas incluyeron:

**Filtrado y proyección:**

* Buscar productos con un precio mayor a 100.
* Mostrar únicamente el nombre y precio de los productos.

**Ordenamiento:**

* Ordenar productos de forma ascendente por nombre.
* Ordenar usuarios por fecha de creación descendente.

**Operadores avanzados:**

* `$in` para buscar productos dentro de un conjunto de categorías.
* `$gte` para filtrar precios mayores o iguales.
* `$regex` para encontrar coincidencias en texto parcial (nombres).
* `$exists` para verificar campos opcionales.

**Agregaciones con `aggregate`:**

* Se calculó el precio promedio por categoría.
* Se filtraron productos con más de una reseña.

**\[Fotografía 2: Resultados de consultas en Mongo Express]**

---

## Relaciones entre Colecciones

Se aplicó el método `.populate()` de Mongoose para realizar referencias cruzadas entre colecciones. Esta técnica permitió traer los datos completos de los productos favoritos de un usuario desde su propia colección, evitando múltiples consultas manuales.

Ejemplo:

* Al consultar un usuario, se utilizaron las referencias para incluir los detalles de los productos marcados como favoritos directamente en la respuesta.

También se exploraron relaciones embebidas con subdocumentos, especialmente útil para anidar reseñas dentro de productos sin crear una colección aparte.

**\[Fotografía 3: Resultado de populate mostrando productos favoritos de un usuario]**

---

## Instrucciones de Ejecución

1. Crear el archivo `docker-compose.yml` con los servicios mongo y mongo-express.
2. Ejecutar el comando: **docker-compose up -d**.
3. Acceder a la interfaz web de Mongo Express en: **[http://localhost:8081](http://localhost:8081)**.
4. Para ejecutar las consultas en Node.js:

   * Crear un archivo `app.js`.
   * Conectar a MongoDB usando Mongoose.
   * Definir esquemas y modelos.
   * Ejecutar los métodos de consulta y mostrar resultados en consola.

**\[Fotografía 4: Consola de Node.js mostrando resultados de consultas]**

---

## Capturas de Pantalla

* Diagrama de estructura de colecciones y relaciones.
* Mongo Express mostrando las consultas.
* Consola de Node.js mostrando resultados de las agregaciones y filtros.

Estas imágenes permiten evidenciar el funcionamiento correcto de la base de datos, la ejecución de consultas complejas y la correcta visualización de datos relacionados.

---

## Conclusiones

1. Esta práctica permitió comprender en profundidad cómo funcionan las consultas avanzadas y las relaciones en bases de datos NoSQL, lo cual representa una habilidad esencial para cualquier desarrollador backend que trabaje con estructuras dinámicas de datos. El uso de Mongoose facilitó la implementación de modelos y consultas, ofreciendo una abstracción potente sobre la sintaxis nativa de MongoDB.

2. La utilización de Docker como entorno de desarrollo resultó altamente beneficiosa, ya que permitió replicar de forma consistente el entorno entre diferentes equipos y evitar problemas de configuración local. La integración con Mongo Express permitió validar visualmente los datos y acelerar la depuración.

3. Las relaciones entre colecciones, tanto referenciadas como embebidas, abren múltiples posibilidades en el diseño de aplicaciones. La experiencia de usar `.populate()` evidenció su utilidad para consultas cruzadas eficientes, mientras que los subdocumentos demostraron ser ideales para estructuras internas y acopladas.

---

## Recomendaciones

1. Se sugiere documentar cada consulta realizada para futuras referencias y mantenimiento.
2. Validar los datos antes de insertar documentos para mantener la integridad del modelo.
3. Usar archivos `.env` para gestionar credenciales y configuraciones del entorno de manera segura.

---

## Referencias

* MongoDB Official Documentation: [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
* Mongoose Docs: [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/)
* Docker Docs: [https://docs.docker.com/](https://docs.docker.com/)
* Mongo Express GitHub: [https://github.com/mongo-express/mongo-express](https://github.com/mongo-express/mongo-express)
