//variables
let numero = Number(prompt("Ingrese una cantidad"));

//ciclos
while (numero < 100){
    console.log("Estas libre de pagar impuestos")
    numero = numero +1;
}

//variables
let impuesto = 0.16;
let impuestoTotal = (numero * impuesto);
console.log(impuestoTotal)
let total = (+impuestoTotal + numero); 
console.log(total);

//constantes
const IVA = 0.16

//condicional 
if (numero <= 100) {
    alert("Estas libre de pagar impuestos")
} else {
    console.log("Por favor paga tus impuestos")
}

//funciones
function saludar (gracias){
    console.log("Gracias por consultar tus impuestos")
}
saludar("Ahora sabes cuantos debes pagar");