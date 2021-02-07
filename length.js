const meter = document.querySelector('#meter');
const kilometer = document.querySelector('#kilo-meter');
const centimeter = document.querySelector('#centi-meter');
const millimeter = document.querySelector('#milli-meter');
const foot = document.querySelector('#foot');
const inch = document.querySelector('#inch');

function meterToLength() {
    const m = parseFloat(meter.value);
    const km = 0.001 * m;
    const cm = 100 * m;
    const mm = 1000 * m;
    const ft = 3.28083 * m;
    const inc = 39.37007 * m;
    kilometer.value = km;
    centimeter.value = cm;
    millimeter.value = mm;
    foot.value = ft;
    inch.value = inc;
}
meter.addEventListener('input', meterToLength);
meterToLength();

function kilometerToLength() {
    const km = parseFloat(kilometer.value);
    const m = 1000 * km;
    const cm = 100000 * km;
    const mm = 1000000 * km;
    const ft = 3280.83985 * km;
    const inc = 39370.07874 * km;
    meter.value = m;
    centimeter.value = cm;
    millimeter.value = mm;
    foot.value = ft;
    inch.value = inc;
}
kilometer.addEventListener('input', kilometerToLength);
kilometerToLength();

function centimeterToLength() {
    const cm = parseFloat(centimeter.value);
    const m = 0.01 * cm;
    const km = 0.00001 * cm;
    const mm = 10 * cm;
    const ft = 0.0328083 * cm;
    const inc = 0.3937007 * cm;
    meter.value = m;
    kilometer.value = km;
    millimeter.value = mm;
    foot.value = ft;
    inch.value = inc;
}
centimeter.addEventListener('input', centimeterToLength);
centimeterToLength();

function millimeterToLength() {
    const mm = parseFloat(millimeter.value);
    const m = 0.001 * mm;
    const km = 0.000001 * mm;
    const cm = 0.1 * mm;
    const ft = 0.00328083 * mm;
    const inc = 0.03937007 * mm;
    meter.value = m;
    kilometer.value = km;
    centimeter.value = cm;
    foot.value = ft;
    inch.value = inc;
}
millimeter.addEventListener('input', millimeterToLength);
millimeterToLength();

function footToLength() {
    const ft = parseFloat(foot.value);
    const m = 0.3048 * ft;
    const km = 0.0003048 * ft;
    const cm = 30.48 * ft;
    const mm = 304.8 * ft;
    const inc = 12 * ft;
    meter.value = m;
    kilometer.value = km;
    centimeter.value = cm;
    millimeter.value = mm;
    inch.value = inc;
}
foot.addEventListener('input', footToLength);
footToLength();

function inchToLength() {
    const inc = parseFloat(inch.value);
    const m = 0.0254 * inc;
    const km = 0.0000254 * inc;
    const cm = 2.54 * inc;
    const ft = 0.083333 * inc;
    const mm = 25.4 * inc;
    meter.value = m;
    kilometer.value = km;
    centimeter.value = cm;
    foot.value = ft;
    millimeter.value = mm;
}
inch.addEventListener('input', inchToLength);
inchToLength();
