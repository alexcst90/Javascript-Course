// Ejercicio 1
//  Escribe una arrow funtion que tome como entrada un objeto y devuelva una lista con sus propiedades.
//  Solo puede tener como entrada un objeto y el tipo de vuelta tiene que ser un array.

const person = {
  name: "Alexander",
  age: 33,
  proffession: "Software developer",
};

// var person = function(name, age, proffession) {
//   this.name = name;
//   this.age = age;
//   this.proffession = proffession;
// }

// let me = new person("Alexander", 33, "Software Architect");

function returnArray(obj) {
  let personArray = [];
  personArray = Object.keys(obj);
  return personArray;
}

let resp = returnArray(person);

console.log("Resultado: " + JSON.stringify(resp));

// Ejercicio 2
// 1.  Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.
//    - puede tener un valor global
console.log(this.document === document);
console.log(this === window);

this.number = 33;
console.log(window.number);

//    - Puede tener valor dependiendo del contexto de una funcion
function value() {
  return this;
}

console.log(value() === window);

function value2() {
  console.log(this === window);
}

value2();

//    - valor indefinido, por ejemplo en una  funcion en modo estricto
function value() {
  "use strict";
  return this;
}

console.log(value() === undefined);

//    - en una funcion cuando se llama como metodo de un objeto

let obj = {
  description: "valor de prueba",
  objFun() {
    console.log(this.description);
  },
};

obj.objFun();

// 2.  ¿Qué diferencias hay entre las arrow functions y las function expressions?

// -  ¿Qué diferencias hay entre las arrow functions y las function expressions?

// - La sintaxis es una de las mayores diferencias, teniendo por ejemplo Arrow Function: (parameters) => { function body }  Function expressions: function (parameters) { function body }
// - Las Arrow functions son mas simples de usar.
// - arrow function es una alternativa mas compacta que las function expressions.
// - La palabra 'function' se omite a la hora de declarar una arrow function.
// - Las arrow function pueden ser Asincronas utilizando la palabra clave "async"
// - Las arrow function no pueden ser usadas como un metodo ya que no contienen su propio this

// Ejercicio 3
console.log("Ejercicio 3");
//Crea una clase a la que llamaremos "InvertirCadena"

class InvertirCadena {
  constructor(cadenaInvertir) {
    this.cadenaInvertir = cadenaInvertir;
  }

  invertir() {
    let invertido = "";
    try {
      if (this.cadenaInvertir == "") {
        throw new SyntaxError("La cadena no puede estar vacia.");
      }
      for (let i = this.cadenaInvertir.length - 1; i >= 0; i--) {
        invertido += this.cadenaInvertir[i];
      }
    } catch (err) {
      console.log("Error: " + err.message);
    }

    return invertido;
  }
}
// Instanciamos la clase

// Ejecuta primero la función sin cambiar cadenaInvertir. ¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?.
// R//: controlamos los errores con try catch y validando la variable que estamos utilizando  en nuestro metodo
let invertirCadena = new InvertirCadena("");
console.log(invertirCadena.invertir());

// Ahora cambia el valor a cadenaInvertir y vuelve a llamar la función. ¿Cuál es el resultado?
//R//: El metodo devuelve la cadena invertida.
let invertirCadena2 = new InvertirCadena("Hola mundo");
console.log(invertirCadena2.invertir());

// Por último, intenta acceder al siguiente método invertirCadena.nuevoMetodo(). ¿Cómo podemos hacer para que no de un error? R// Crear el metodo NuevoMetodo() dentro de nuestra clase
//invertirCadena.nuevoMetodo();

// Ejercicio 4
console.log("Ejercicio 4.");
//•	Crea una clase con el formato ES6. Esta clase va a tener dos atributos, “username” y “password” y un método login()
// que compruebe que username tiene el valor “admin” y password el valor “passwd” y en caso positivo, lance una alerta diciendo
// que el usuario esté logeado, en caso contrario, que diga que el usuario o la contraseña son incorrectas.

const ADMIN_USER = "admin";
const ADMIN_PASS = "passwd";

class UserLogin {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.login();
  }

  login() {
    if (this.username === ADMIN_USER && this.password === ADMIN_PASS) {
      alert(`Bienvenido ${this.username}`);
    } else {
      alert("Usuario o contraseña incorrectas.");
    }
  }
}

//let loginUser = new UserLogin("admin", "passwd");

//let loginBad = new UserLogin("alex", "alex1234");

// Ejercicio 5
document
  .getElementById("loginSuccess")
  .addEventListener("click", loginSuccess());

function loginSuccess() {
  let loginUser = new UserLogin("admin", "passwd");
}

document
  .getElementById("loginFailure")
  .addEventListener("click", loginFailure());

function loginFailure() {
  let loginBad = new UserLogin("alex", "alex1234");
}

// Ejercicio 6

// loginSuccessAsync  loginFailureAsync

document
  .getElementById("loginSuccessAsync")
  .addEventListener("click", loginSuccessAsync());

function loginSuccessAsync() {
  let loginBad = new UserLogin("alex", "alex1234");
}

document
  .getElementById("loginFailureAsync")
  .addEventListener("click", loginFailureAsync());

function loginFailureAsync() {
  let loginBad = new UserLogin("alex", "alex1234");
}

let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};

let loginButtonAsync = document.querySelector("#loginSuccessAsync");
let loginErrorAsync = document.querySelector("#loginFailureAsync");

loginButtonAsync.addEventlistener("click", async () => {
  try {
    await loginWitUsername("admin", "passwd");
    console.log("User logged in");
  } catch (err) {
    console.log("Se genero un error." + err);
  }
});

loginErrorAsync.addEventlistener("click", async () => {
  try {
    await loginWitUsername("pepe", "pass");
    console.log("Error: invalid username or password");
  } catch (err) {
    console.log(err);
  }
});
