# Aplicación de terminal de comandos de tareas

Una aplicación construida en nodejs para la terminal de comandos para poder administrar tus tareas.

## Requerimientos

Tener instalado npm y nodejs.

## Instalación

Desde la terminal de comandos en la raíz del proyecto, ejecuta el comando para descargar todas las dependencias:
```
npm install
```

## Ejecución del programa

Dentro de la raíz del programa ejecuta alguno de los siguientes comandos:

* crear (crear una nueva tarea)
* listar (listar las tareas)
* actualizar (actualizar el estádo de una tarea)
* borrar (borrar una tarea)

```
node app comando --opciones
```

Para ver la ayuda, ejecutar:
```
node app --help
```

## Ejemplo

En la siguiente imagen se crean 2 tareas y se listan. Una vez hecho esto se marca la primera como hecha y se vuelven a listar dos veces, la primera sin filtro y la segunda con filtro. Finalmente se borra la tarea ya hecha y se vuelven a mostrar todas las tareas
![Imagen de la aplicación](https://raw.githubusercontent.com/OscarUrielCZ/tareas-terminal/master/assets/imagen1.png)