// Declaramos una función con el nombre exacto "formEuroToDollar"

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * oneEuroIs.USD / oneEuroIs.JPY;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * oneEuroIs.JPY / oneEuroIs.GBP;
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar }

