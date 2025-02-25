const plantas = [];
const http = require('http');
const server = http.createServer( (request, response) => {  
@@ -134,6 +136,34 @@ const server = http.createServer( (request, response) => {
    request.on('end', () => {
      const string_datos_completos = Buffer.concat(datos_completos).toString();
      console.log(string_datos_completos);
      //split() separa un string por el parámetro recibido, 
      //y cada parte la pone en un arreglo
      const nueva_planta = string_datos_completos.split('=')[1];
      //Si fueran 2 inputs:
      //const nueva_planta = string_datos_completos.split('&')[0].split('=')[1];
      plantas.push(nueva_planta);
      response.setHeader('Content-Type', 'text/html');
      response.write(html_header);
      
      response.write(`<div class="columns">`);
      for(const planta of plantas) {
        response.write(`<div class="column">`);
        response.write(`<div class="card">
          <div class="card-content">
            <div class="content">`);
        response.write(planta);
        response.write(`</div>
            </div>
          </div>`);
        response.write(`</div>`);
      }
      response.write(`</div>`);
      response.write(html_footer);
      response.end();
    });
