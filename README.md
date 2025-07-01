# Gestión de Consultas y Relaciones en MongoDB con Node.js y Docker

## Portada

**Título del proyecto:** Desarrollo de Consultas Avanzadas y Relaciones en MongoDB usando Node.js y Docker Compose
**Nombre completo del estudiante:** Jhonson Benigno Mendoza Jaramillo
**Carrera / Curso:** Aplicaciones Distribuidas – Sexto Semestre
**Fecha de entrega:** 01 de julio del 2025

---

## Introducción

En el contexto actual de desarrollo de software, la gestión de datos juega un papel crucial. Esta práctica tiene como finalidad introducir y afianzar los conocimientos sobre el uso de bases de datos NoSQL, particularmente MongoDB, enfocándose en el diseño de modelos de datos, consultas avanzadas y relaciones entre colecciones. La actividad está dirigida a fortalecer la capacidad de estructurar datos de forma eficiente, usando herramientas modernas como Docker y librerías como Mongoose, en un entorno de desarrollo profesional.

MongoDB, al ser una base de datos orientada a documentos, permite una alta flexibilidad a la hora de representar información compleja, lo cual lo hace ideal para proyectos en constante evolución. A través de esta tarea, no solo se configura un entorno funcional sino que también se exploran las posibilidades que ofrece este ecosistema para el desarrollo backend.

---

## Objetivos

### Objetivo General

Implementar y ejecutar consultas avanzadas en una base de datos MongoDB utilizando Node.js y Docker, integrando modelos de datos con relaciones entre colecciones mediante Mongoose.

### Objetivos Específicos

1. Diseñar e implementar un modelo de datos relacional en MongoDB, estructurado a través de colecciones y referencias adecuadas.
2. Realizar consultas complejas sobre la base de datos empleando operadores avanzados y mecanismos de agregación.

---

## Entorno de Desarrollo

El entorno de desarrollo fue construido utilizando contenedores con Docker Compose para facilitar el levantamiento y gestión de los servicios. Se desplegaron los siguientes componentes:

* MongoDB como base de datos principal.
* Mongo Express como interfaz gráfica web para gestionar la base de datos de manera visual.

**Pasos para levantar el entorno:**

Se creó un archivo `docker-compose.yml` con los servicios necesarios. El levantamiento se realizó usando el comando: `docker-compose up -d`.

Se instalaron las siguientes dependencias en el proyecto de Node.js:

* mongoose
* dotenv
* express

Estas herramientas permitieron manejar la conexión a la base de datos, definir esquemas, y probar consultas desde una API REST.

## 🔧 Estructura del Proyecto

```plaintext
.
├── src/
│   ├── database/
│   │   └── connection.js        # Conexión a MongoDB
│   ├── models/
│   │   └── Course.js            # Modelo de curso
│   ├── routes/
│   │   └── courses.js           # Rutas del backend
│   ├── insertDatos.js          # Inserta datos de prueba
│   ├── consultas.js            # Ejecuta consultas sobre la BD
│   └── index.js                # Punto de entrada del backend
├── docker-compose.yml          # Define contenedor MongoDB
├── README.md
```

**Figura 1. Estructura del proyecto**

---

## Modelado de Datos

El modelo de datos diseñado contiene múltiples relaciones. Se definieron tres colecciones principales: `Usuarios`, `Cursos` y `Inscripciones`.

* La colección **Usuarios** contiene información básica del usuario.
* La colección **Cursos** contiene datos del curso ofrecido.
* La colección **Inscripciones** referencia a ambos: usuarios y cursos, estableciendo una relación muchos a muchos.

Se optó por el uso de referencias (ObjectId) entre colecciones para poder hacer uso de `.populate()` y así consultar los datos relacionados de forma sencilla y eficiente.


**Estructura y Relaciones:**

* Un usuario puede tener varios productos favoritos → relación uno a muchos (referenciada).
* Un producto puede tener múltiples reseñas como documentos embebidos → relación uno a muchos (anidada).

**Figura 2. Diagrama de relación entre colecciones**

![grafico2](https://imgur.com/iG7ee7J.png)

---
## Inserción de Datos Iniciales

Se desarrolló el script insertData.js con el propósito de poblar la base de datos con registros de prueba representativos. Este archivo realiza los siguientes pasos de forma secuencial:

- Elimina todos los documentos existentes de las colecciones involucradas para garantizar un entorno limpio.

- Inserta usuarios con distintos roles predefinidos (ej. docentes, encargados).

- Crea laboratorios de ejemplo con sus respectivas configuraciones.

- Asocia equipos a los laboratorios creados, simulando el inventario real.

- Este proceso facilita las pruebas y la visualización funcional del sistema completo desde el frontend.


![grafico3](https://imgur.com/0v4fEHA.png)

![grafico4](https://imgur.com/9yd0YO7.png)

### Figura 3.Códifo de insertData.js y su ejecución exitosa

## Desarrollo de Consultas

Durante el desarrollo se probaron múltiples consultas utilizando tanto MongoDB directamente desde la terminal, como a través de Mongoose en Node.js.

Entre las operaciones implementadas se encuentran:

* Filtrado por campos específicos (nombre, edad, curso).
* Proyección de campos particulares.
* Ordenamiento ascendente y descendente.
* Operadores como `$in`, `$gte`, `$regex`, `$exists`.
* Agregaciones mediante `aggregate()` para contar registros, agrupar por campos o calcular promedios.

También se integró el uso de `.populate()` para hacer relaciones efectivas entre documentos y acceder a los datos de forma anidada.

### Figura 4. Resultados en Mongo Express de Consultas

![grafico5](https://imgur.com/YVOrah3.png)

### Figura 5. Resultado desde Node.js

![grafico6](https://imgur.com/LA3ptYQ.png)


---

## Consultas y resultados obtenidos

- Resultados obtenido de todos los usuarios enlistados.

![grafico7](https://imgur.com/muCOMir.png)

![grafico8](https://imgur.com/1xdBnvR.png)

### Figura 6. Resultado desde Node.js

- Equipos disponibles con su laboratorio

![grafico9](https://imgur.com/AzOv6BH.png)

![grafico10](https://imgur.com/MEBWKBV.png)

### Figura 7. Resultado de equipos disponibles

- Usuarios con correo @universidad.edu

![grafico11](https://imgur.com/37cctO7.png)

![grafico12](https://imgur.com/OKhYKTv.png)

### Figura 8. Resultado de usuarios con @universidad

- Promedio de equipos por laboratorio

![grafico13](https://imgur.com/muCOMir.png)

![grafico14](https://imgur.com/1xdBnvR.png)

### Figura 9. Resultado de promedios



---

## Instrucciones de Ejecución

1. Asegúrese de tener Docker instalado.
2. Posicionarse en el directorio del proyecto y ejecutar:
   docker-compose up -d
3. Verificar el acceso a Mongo Express en el puerto 8081.
4. Desde el backend en Node.js, ejecutar las consultas mediante endpoints definidos en Express o directamente desde consola con Node.

---

## Capturas de Pantalla

### Docker corriendo

![grafico5](https://imgur.com/c9IZw9D.png)

### Acceso a Mongo Express

![grafico6](https://imgur.com/26d5kfb.png)

---

## Conclusiones

1. **Durante el desarrollo de esta práctica se reafirmó la importancia de estructurar de forma adecuada los datos, especialmente cuando se trabaja con múltiples colecciones relacionadas.** El uso de referencias en MongoDB facilita el mantenimiento y la escalabilidad del sistema, además de hacer más claras las relaciones y dependencias entre documentos.

2. **El uso de herramientas modernas como Docker y Mongo Express permitió simular un entorno real de producción y facilitó enormemente la gestión de la base de datos.** Docker Compose simplificó la configuración inicial, evitando errores comunes y permitiendo que el entorno se levante en pocos minutos.

3. **La integración de consultas avanzadas con Mongoose resultó una experiencia enriquecedora, ya que permite trabajar a un alto nivel de abstracción sin perder el control sobre los datos.** El uso de agregaciones, operadores y métodos como populate mostró el verdadero poder de MongoDB para representar estructuras complejas de datos.

---

## Recomendaciones

* Documentar bien cada esquema y relación antes de implementarlos.
* Siempre probar las consultas primero desde la terminal o Mongo Express antes de llevarlas a código.
* Usar `.populate()` solo cuando sea estrictamente necesario, ya que puede afectar el rendimiento en colecciones grandes.

---

## Referencias

* MongoDB Official Docs: [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
* Mongoose Documentation: [https://mongoosejs.com/docs/guide.html](https://mongoosejs.com/docs/guide.html)
* Docker Docs: [https://docs.docker.com/](https://docs.docker.com/)
* Mongo Express GitHub: [https://github.com/mongo-express/mongo-express](https://github.com/mongo-express/mongo-express)
