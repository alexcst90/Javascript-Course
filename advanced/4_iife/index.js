console.log("%cImmediately Invoked Function Expression", 'color: #3913B8; font-size: 20px;');

// 1. Primera variante de IIFE
console.log("%c1. Primera variante de IIFE", 'color: #229179; font-size: 16px;');
(function() {
    alert("1. Estás usando IIFE")
}());

// 2. Segunda variante de IIFE
console.log("%c2. Segunda variante de IIFE", 'color: #229179; font-size: 16px;');
(function() {
    console.log("2. Estas usando IIFE")
})();

// 3. Comprobar el scope de IIFE
console.log("%c3. Tercera variante de IIFE", 'color: #229179; font-size: 16px;');
(function() {
    var newName = "Lucas";
    console.log(newName);
}());

(function() {
    var newName = "Maria";
    console.log(newName);
}());

console.log(window.newName);


function delayedFunction(x){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        },0);
    });
};

// (async function(x) {
//     let p_a = delayedFunction(20);
//     let p_b = delayedFunction(30);
//     return x + await p_a + await p_b;
// })(0).then(v => {
//     console.log(v);
// });

const chargeBattery = (percentaje) => ((copyPercentage) => {
    let percentage = copyPercentage;
    const internalMechanism = ()=>{
        console.log('Direccionando bateria a este dispositivo');
    };
    internalMechanism();
    return {
        charge(amount) {
            if(percentage >= amount){
                percentage -= amount;
                return percentage;
            }
            return 'Bateria insuficiente';
        },
    };
    
})(percentaje);

const firstPhone = chargeBattery(100);
console.log(firstPhone.percentage);
console.log(firstPhone.charge(10));
console.log(firstPhone.charge(30));
console.log(firstPhone.doBadThings);
const secondPhone= chargeBattery(20);
console.log('secondPhone: ' + secondPhone.charge(30));
console.log('secondPhone: ' + secondPhone.charge(20));