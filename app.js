const colors = require('colors');

const argv = require('./config/yargs').argv;
const porHacer = require('./tareas/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tg = porHacer.crear(argv.descripcion);
        console.log(tg);
        break;
    case 'listar':
        let listado = porHacer.obtenerListado(argv.completado);
        for (let tarea of listado) {
            console.log('======== Por hacer ========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==========================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.eliminar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}