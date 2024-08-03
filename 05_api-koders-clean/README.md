<!-----------Markdown---------->

# clean architecture

Aqui podemos ver un ejemplo de la arquitectura limpia en un sistema de archivos

## index.js

se encarga de iniciar nuestra aplicacion (el servidor)

## src/server.js

se encarga de albergar la descricion de nuestro servidor

## src/model

se encarga de albergar la descripcion de nuestro servidor de bases de datos

## src/ usecase

cada archivo tendra los casos de uso de cada uno de las entidades / recursos que
va a ocupar nuestra aplicacion

## src/router

un archivo por cada router (expres) que tenga nuestra API

## src/middleware

las funciones middleware que tenga nustra API

## src/lib

funciones utilitarias que no pertenecen a ninguna otra categoria

- el archivo de coneccion ala base de datos
- la configuracion de nuestros token
- configuracion de nuestra libreria de encriptado

### script

```
iniciar en produccion
```

iniciar modo desarrollo

````
```bash
npm rum
````
