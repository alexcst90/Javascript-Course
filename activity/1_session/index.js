// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
console.log('Ejercicio 2')
console.log('Primero se ejecuta el contenido al fichero aboutme.js, debido a que JavaScript es un lenguaje mono-hilo JavaScript es un lenguaje mono-hilo, no bloqueante, asincrono y concurrente como vemos en la documentacion, y al estar primero el "import"  en el archivo index.js JavaScript ejecuta primero lo que contiene ese fichero antes de continuar con el resto del codigo.')
// Ejercicio 3

let herramienta1 = 'Inspector';
let herramienta2 = 'Console';
let herramienta3 = 'Networking'

console.log(`La herramienta ${herramienta1}: Muestra como se ve el HTML en tu navegador en tiempo de ejecucion, permite modificar el HTML y tambien indica que elemento CSS se esta aplicando a la pagina.`)
console.log(`La herramienta ${herramienta2}: Permite ejecutar lineas de JavaScript en la pagina que se encuentre cargada en el navegador y nos puede detallar errores que se puedan presentar en nuestro codigo.`)
console.log(`La herramienta ${herramienta3}: Permite ver y analizar las solicitudes de red que realiza cada pagina de manera individual, se puede utilizar para investigar las causas por las que una pagina se comporta de manera lenta e identificar bugs que afecten al performance de la misma.`)
// Ejercicio 4
console.log('Ejercicio 4')
let n = 1;
let res= 0;
while(n <= 100){
    res = n % 7
    if(res == 0 ) {console.log(n)}
    n++;
}
// Ejercicio 5

// Ejercicio 6

