# Documentación de la API REST de Frutas

## Introducción

Bienvenida a la documentación de nuestra API RESTFUL de frutas. Esta API te permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos de frutas.
A continuación, detallamos la información esencial para comenzar a utilizar esta API.

- **URL Base:** http://localhost:3008/api/v1/

## Métodos

- GET: Obtener frutas.
- POST: Agregar una nueva fruta.
- PUT: Actualizar una fruta existente.
- DELETE: Eliminar una fruta.

### Ejemplos de Uso

A continuación, se presentan ejemplos de uso de cada uno de los métodos disponibles en la API.

#### GET - Obtener una lista de frutas

GET http://localhost:3008/api/v1/frutas

### POST - Crear una fruta

POST http://localhost:3008/api/v1/frutas

Body:
{
"nombre": "Nueva Fruta",
"imagen": "🍇",
"importe": 400,
"stock": 30
}

#### PUT - Actualizar fruta existente

PUT http://localhost:3008/api/v1/frutas/{id}

Body:
{
"stock": 40
}

#### DELETE - Eliminar una fruta

DELETE /rutas/{id}

## Sumario

- [Introducción](#introducción-al-proyecto-backend-de-frutas)
- [URL Base](#url-base)
- [Ejemplos de Uso de Métodos](#ejemplos-de-uso-de-métodos)
  - [GET - Obtener Todas las Frutas](#get---obtener-todas-las-frutas)
  - [POST - Agregar una Nueva Fruta](#post---agregar-una-nueva-fruta)
  - [PUT - Actualizar una Fruta Existente](#put---actualizar-una-fruta-existente)
  - [DELETE - Eliminar una Fruta](#delete---eliminar-una-fruta)
- [Ejemplo de Archivo .env para Conexión a MongoDB](#ejemplo-de-archivo-env-para-conexión-a-mongodb)


### Tabla de EndPoints
A continuación, se presenta una tabla que enumera los endpoints disponibles en la API y su ruta base:

 | Método | Ruta                  | Descripción                  |
 |--------|-----------------------|------------------------------|
 | GET    | /api/v1/frutas        | Obtener todas las frutas     |
 | POST   | /api/v1/frutas        | Agregar una nueva fruta      |
 | PUT    | /api/v1/frutas/{id}   | Actualizar una fruta         |
 | DELETE | /api/v1/frutas/{id}   | Eliminar una fruta           |

## Ejemplo de Código

A continuación, se muestra un ejemplo de código para realizar una solicitud POST para agregar una nueva fruta:

```json
POST http://localhost:3008/api/v1/frutas

Body:
{
    "nombre": "Nueva Fruta",
    "imagen": "🍇",
    "importe": 400,
    "stock": 30
}