const plantas = [];

module.exports = class Planta {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        plantas.push(this.nombre)
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        
    }

}
                    
//Para usar el modelo en el controlador:

const Modelo = require('../models/modelo');

//Para crear un objeto de nuestro modelo
const objeto = new Modelo('Valor de la instancia');
objeto.save();

//Para recuperar la lista de objetos del modelo
const objetos = Modelo.fetchAll();