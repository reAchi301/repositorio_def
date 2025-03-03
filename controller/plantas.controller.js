
//
//Funcion accion del controñador
//Para poder colgar la accion dentro del router se debe de incluir el controlador en rputes

const Planta = require ('../models/planta.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar_planta');
}; 



exports.post_agregar =  (request, response, next) => {
    console.log(request.body);
    const mi_planta = new Planta(request.body.nombre);
    mi_planta.save();

    response.render('lista_plantas', {
      plantas: Planta.fetchAll(),
    });
};