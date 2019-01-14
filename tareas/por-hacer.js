const fs = require('fs');

const filepath = 'bd/data.json';
let listadoPorHacer = [];

const cargarBD = () => {
    try {
        listadoPorHacer = require('../bd/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const guardarBD = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(filepath, data, err => {
        if (err) throw err;
    });
};

const crear = descripcion => {
    cargarBD();

    let porhacer = {
        descripcion,
        completado: 'false'
    };

    listadoPorHacer.push(porhacer);
    guardarBD();

    return porhacer;
};

const obtenerListado = completado => {
    cargarBD();

    let nuevaLista;

    if (completado == 'all')
        nuevaLista = listadoPorHacer;
    else
        nuevaLista = listadoPorHacer.filter(tarea => tarea.completado == completado);

    return nuevaLista;
};

const actualizar = (descripcion, completado = true) => {
    cargarBD();

    const index = listadoPorHacer.findIndex(tarea => tarea.descripcion == descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    }

    return false;
};

const eliminar = descripcion => {
    cargarBD();

    let nuevaLista = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevaLista.length !== listadoPorHacer.length) {
        listadoPorHacer = nuevaLista;
        guardarBD();
        return true;
    }

    return false;
};

module.exports = {
    crear,
    obtenerListado,
    actualizar,
    eliminar
};