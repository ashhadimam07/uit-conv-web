const rupee = document.querySelector('#indian-rs');
const euro = document.querySelector('#euro');
const dollar = document.querySelector('#dollar');
const dirham = document.querySelector('#dirham');
const adollar = document.querySelector('#adollar');
const cyuan = document.querySelector('#cyuan');

function rupeeToDollarToEuroToDirham() {
    const ir = parseFloat(rupee.value);
    const er = 0.011 * ir;
    const dl = 0.014 * ir;
    const dr = 0.05 * ir;
    const ad = 0.018 * ir;
    const cy = 0.089 * ir;
    euro.value = er;
    dollar.value = dl;
    dirham.value = dr;
    adollar.value = ad;
    cyuan.value = cy;
}
rupee.addEventListener('input', rupeeToDollarToEuroToDirham);
rupeeToDollarToEuroToDirham();

function euroToRupeeToDollarToDirham() {
    const er = parseFloat(euro.value);
    const ir = 87.7 * er;
    const dl = 1.2 * er;
    const dr = 4.42 * er;
    const ad = 1.56 * er;
    const cy = 7.79 * er;
    rupee.value = ir;
    dollar.value = dl;
    dirham.value = dr;
    adollar.value = ad;
    cyuan.value = cy;
}
euro.addEventListener('input', euroToRupeeToDollarToDirham);
euroToRupeeToDollarToDirham();

function dollarToRupeeToEuroToDirham() {
    const dl = parseFloat(dollar.value);
    const ir = 72.79 * dl;
    const er = 0.83 * dl;
    const dr = 3.67 * dl;
    const ad = 1.302 * dl;
    const cy = 6.46 * dl;
    rupee.value = ir;
    euro.value = er;
    dirham.value = dr;
    adollar.value = ad;
    cyuan.value = cy;
}
dollar.addEventListener('input', dollarToRupeeToEuroToDirham);
dollarToRupeeToEuroToDirham();

function dirhamToRupeeToEuroToDollar() {
    const dr = parseFloat(dirham.value);
    const ir = 19.82 * dr;
    const er = 0.23 * dr;
    const dl = 0.27 * dr;
    const ad = 0.35 * dr;
    const cy = 1.76 * dr;
    rupee.value = ir;
    euro.value = er;
    dollar.value = dl;
    adollar.value = ad;
    cyuan.value = cy;
}
dirham.addEventListener('input', dirhamToRupeeToEuroToDollar);
dirhamToRupeeToEuroToDollar();

function ausDollarToCurrency() {
    const ad = parseFloat(adollar.value);
    const er = 0.6371 * ad;
    const ir = 55.8795 * ad;
    const cy = 4.9644 * ad;
    const dl = 0.77 * ad;
    const dr = 2.82 * ad;
    rupee.value = ir;
    euro.value = er;
    cyuan.value = cy;
    dollar.value = dl;
    dirham.value = dr;
}
adollar.addEventListener('input', ausDollarToCurrency);
ausDollarToCurrency();

function chineseYuanToCurrency() {
    const cy = parseFloat(cyuan.value);
    const er = 0.1283 * cy;
    const ir = 11.2558 * cy;
    const ad = 0.2014 * cy;
    const dl = 0.1546 * cy;
    const dr = 0.57 * cy;
    rupee.value = ir;
    euro.value = er;
    adollar.value = ad;
    dollar.value = dl;
    dirham.value = dr;
}
cyuan.addEventListener('input', chineseYuanToCurrency);
chineseYuanToCurrency();
