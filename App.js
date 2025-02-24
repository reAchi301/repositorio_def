//const filesystem = require('fs');
//filesystem.writeFileSync('hola.txt', 'Hola desde node');
// const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];
// for (let item of arreglo) {
//     setTimeout(() => {
//         console.log(item);
//     }, item);
// } 
// const http = require('http');
// const server = http.createServer( (request, response) => {    
//     console.log(request.url);
//     response.setHeader('Content-Type', 'text/html');
//     response.write("");
//     response.end();
// });
// server.listen(3000);
const html_header = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Plantas!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
  </head>
  <body>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>
      </svg>
      
          </a>
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>
      
            <a class="navbar-item">
              Documentation
            </a>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item is-selected">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Invernadero
            </h1>
            `;
            
const html_form = `<form action="/agregar" method="POST">
              <label for="nombre" class="label">Nombre de la planta</label>
              <input
                class="input is-info"
                type="text"
                placeholder="Orquídea"
                id="nombre"
                name="nombre"
              />
              <br><br>
              <input class="button is-info" type="submit" value="Enviar">
            </form>`;
const html_footer = `</div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
            The source code is licensed
            <a href="https://opensource.org/license/mit">MIT</a>. The
            website content is licensed
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
              >CC BY NC SA 4.0</a
            >.
          </p>
        </div>
      </footer>
      <script src="js/introjs.js"></script>
  </body>
</html>
`;
const http = require('http');
const server = http.createServer( (request, response) => {  
  
  if(request.method == "GET" && (request.url == "/agregar" || request.url == "/")) {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header + html_form + html_footer);
    response.end();
  } else if(request.method == "POST" && request.url == "/agregar") {

    request.on('data', ()=>{
        console.log(data);
        datos_completos.push(data);
    });

    request.on('end', ()=>{
        datos_completos = Buffer.concat(datos_completos).toString();
        console.log(string_datos_completos);
    })

  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header);
    response.write('<div class="notification is-danger">La página no existe</div>');
    response.write(html_footer);
    response.end();
  }
    
});
server.listen(3000);
