// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

test("3.5 euros should be approximately 3.7245 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected, 4);
});


test("3.5 dollars should be approximately 547.75 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * oneEuroIs.USD / oneEuroIs.JPY;
    expect(yen).toBeCloseTo(expected, 2);
});


test("3.5 yen should be approximately 3.0475 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(3.5);
    const expected = 3.5 * oneEuroIs.JPY / oneEuroIs.GBP;
    expect(pound).toBeCloseTo(expected, 4);
});


