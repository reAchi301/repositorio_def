const express = require('express');
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

const session = require ('express-session')

app.use(session({
    secret: 'mi string secreto debe ser uno aleatorio no este',
    resave: false,
    saveUninitialized: false, 
}))

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const usersRoutes = require('./routes/users.routes')



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
    response.statusCode = 404;
    response.send('No se encuentra el recurso que estás buscando'); 
});

app.listen(3000);
