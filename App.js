const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});
const plantasRoutes = require('./routes/plantas.routes');
app.use('/plantas', plantasRoutes);
app.use((request, response, next) => {
    console.log('Otro middleware!');
    
    //Manda la respuesta
    response.send('¡Hola mundo!'); 
    response.statusCode = 404;
    response.send('No se encuentra el recurso que estás buscando'); 
});
app.listen(3000);
