const celsius = document.querySelector('#cel');
const kelvin = document.querySelector('#kel');
const fahrenheit = document.querySelector('#fahr');

function celTokelTofahr() {
    const cel = parseFloat(celsius.value);
    const kel = 273.15 + cel;
    const fahr = (9 / 5) * cel + 32;
    kelvin.value = kel;
    fahrenheit.value = fahr;
}
celsius.addEventListener('input', celTokelTofahr);
celTokelTofahr();

function kelTocelTofahr() {
    const kel = parseFloat(kelvin.value);
    const cel = kel - 273.15;
    const fahr = (kel - 273.15) * (9 / 5) + 32;
    celsius.value = cel;
    fahrenheit.value = fahr;
}
kelvin.addEventListener('input', kelTocelTofahr);
kelTocelTofahr();

function farTocelTokel() {
    const fahr = parseFloat(fahrenheit.value);
    const cel = (fahr - 32) * (5 / 9);
    const kel = (fahr - 32) * (5 / 9) + 273.15;
    celsius.value = cel;
    kelvin.value = kel;
}
fahrenheit.addEventListener('input', farTocelTokel);
farTocelTokel();
