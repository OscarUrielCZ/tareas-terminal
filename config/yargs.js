const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: 'true',
    desc: 'Marca una tarea como completada o como pendiente'
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .command('listar', 'Listado de las tareas guardadas', {
        completado: {
            alias: 'c',
            default: 'all',
            desc: 'Mostrar las tareas completadas, no completadas o todas'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};