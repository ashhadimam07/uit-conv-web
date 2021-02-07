const gram = document.querySelector('#gram');
const kgram = document.querySelector('#kgram');
const mgram = document.querySelector('#mgram');
const pound = document.querySelector('#pound');
const ounce = document.querySelector('#ounce');
const carrat = document.querySelector('#carrat');

function gramToWeight() {
    const g = parseFloat(gram.value);
    const kg = 0.001 * g;
    const mg = 1000 * g;
    const p = 0.002204 * g;
    const o = 0.035273 * g;
    const c = 5 * g;
    kgram.value = kg;
    mgram.value = mg;
    pound.value = p;
    ounce.value = o;
    carrat.value = c;
}
gram.addEventListener('input', gramToWeight);
gramToWeight();

function kilogramToWeight() {
    const kg = parseFloat(kgram.value);
    const g = 1000 * kg;
    const mg = 1000000 * kg;
    const p = 2.204622 * kg;
    const o = 35.273961 * kg;
    const c = 5000 * kg;
    gram.value = g;
    mgram.value = mg;
    pound.value = p;
    ounce.value = o;
    carrat.value = c;
}
kgram.addEventListener('input', kilogramToWeight);
kilogramToWeight();

function milligramToWeight() {
    const mg = parseFloat(mgram.value);
    const g = 0.001 * mg;
    const kg = 0.000001 * mg;
    const p = 0.0000022 * mg;
    const o = 0.00003527 * mg;
    const c = 0.005 * mg;
    gram.value = g;
    kgram.value = kg;
    pound.value = p;
    ounce.value = o;
    carrat.value = c;
}
mgram.addEventListener('input', milligramToWeight);
milligramToWeight();

function poundToWeight() {
    const p = parseFloat(pound.value);
    const kg = 0.45359 * p;
    const g = 453.59237 * p;
    const mg = 453592.37 * p;
    const o = 16 * p;
    const c = 2267.96185 * p;
    gram.value = g;
    kgram.value = kg;
    mgram.value = mg;
    ounce.value = o;
    carrat.value = c;
}
pound.addEventListener('input', poundToWeight);
poundToWeight();

function ounceToWeight() {
    const o = parseFloat(ounce.value);
    const kg = 0.028349 * o;
    const g = 28.349523 * o;
    const mg = 28349.523 * o;
    const p = 0.0625 * o;
    const c = 141.74761 * o;
    gram.value = g;
    kgram.value = kg;
    mgram.value = mg;
    pound.value = p;
    carrat.value = c;
}
ounce.addEventListener('input', ounceToWeight);
ounceToWeight();

function carratToWeight() {
    const c = parseFloat(carrat.value);
    const kg = 0.0002 * c;
    const g = 0.2 * c;
    const mg = 200 * c;
    const p = 0.00044 * c;
    const o = 0.00705 * c;
    gram.value = g;
    kgram.value = kg;
    mgram.value = mg;
    pound.value = p;
    ounce.value = o;
}
carrat.addEventListener('input', carratToWeight);
carratToWeight();
