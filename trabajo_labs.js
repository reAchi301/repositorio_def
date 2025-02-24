
//se va ejecutando de corrido el javascript.    
//consola (log, info, warn, error, assert)


console.log("Aqui se habla de plantas") //Prototipo de la consola de javascript con un monton de funciones
console.info("las plantas sirven para muchas cosas")
console.warn("Cuidado con las plantas venenosas")
console.error("No las vayas a ahogar")
console.assert(1 == 1)//es como un if recibe un parametro y actua comoo condicional
console.assert(1 === 1)
console.assert(1 == "1") // el == es igual a y el === es estrictamente ese valor y validad valor y tipo


//variables y constantes


//Js es mas simple solo tienes que poner que vas a declarar una variable, ejemplo:


var comestible = "espinaca" //forma antigua de hacer vairables ya que es menos segura


let flor = "rosa"; //forma correcta y adecuada de poder definir una variable


const precio = 99.99


//alcance de las variables


for (let i=0;i<10; i++){
    console.log(i);
}


console


//alert, prompt, confirm


alert("hola");


const miplantafav = prompt("dime tu planta favorita");


const is_hungry = confirm("Tienes ambre?");


//Como declarar funciones tradicionales


function regar(){
    console.log("Se regaron las plantas")
    return miplantafav;
}
regar();






//Funciones modernas dentro de java, llamadas ArrowFunctions


() => {}




//Asignar una función anónima a la variable mi_funcion
const mi_funcion = () => {
    console.log("Funcion anónima")
}


//Ejecuta la función anónima por medio del nombre de la variable
mi_funcion();


//const arreglo = new Array()


const arreglo = ["Elemento"];


const arreglo2 = new Array()


arreglo.push("Otro Ejemplo");


arreglo[10] = "Uno más";


arreglo[0] = "Elemento modificado";


arreglo["uno"] = 1; // Dirección que se llama uno que tiene un uno








//arreglos asociativos


//recorrido tradicional del arreglo
for (let i =0; i <arreglo.length){
    console.log(arreglo[i])
}


//recorridos alternativos del arreglo


for (let  posicion of arreglo){
    console.log(posicion);
}




for (let valor of arreglo){
    console.log(valor);
}


//Objetos


const objeto = {};


objeto.color ="verde";
objeto.tipo ="orquidea";


//Modificar HTML


document.getElementById("boton_regar");
console.log(boton);


boton.onclick = () => {
    console.log("click");
}
