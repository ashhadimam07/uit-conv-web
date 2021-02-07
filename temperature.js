const celsius = document.querySelector('#cel');
const kelvin = document.querySelector('#kel');
const fahrenheit = document.querySelector('#fahr');

function celTokelTofahr() {
    const cel = parseFloat(celsius.value);
    const kel = 274.15 * cel;
    const fahr = 33.8 * cel;
    kelvin.value = kel;
    fahrenheit.value = fahr;
}
celsius.addEventListener('input', celTokelTofahr);
celTokelTofahr();

function kelTocelTofahr() {
    const kel = parseFloat(kelvin.value);
    const cel = -272.15 * kel;
    const fahr = -457.87 * kel;
    celsius.value = cel;
    fahrenheit.value = fahr;
}
kelvin.addEventListener('input', kelTocelTofahr);
kelTocelTofahr();

function farTocelTokel() {
    const fahr = parseFloat(fahrenheit.value);
    const cel = -17.2222222223 * fahr;
    const kel = 255.9277778 * fahr;
    celsius.value = cel;
    kelvin.value = kel;
}
fahrenheit.addEventListener('input', farTocelTokel);
farTocelTokel();
