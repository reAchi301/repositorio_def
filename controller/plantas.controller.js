//
//Funcion accion del controñador
//Para poder colgar la accion dentro del router se debe de incluir el controlador en rputes

const plantas = [];

exports.get_agregar = (request, response, next) => {
    response.render('agregar_planta');
}; 

exports.post_agregar =  (request, response, next) => {
    console.log(request.body);
    plantas.push(request.body.nombre);

    response.render('lista_plantas', {
      plantas: plantas,
    });
};