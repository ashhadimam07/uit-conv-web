const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const millisecond = document.querySelector('#millisecond');
const hour = document.querySelector('#hour');
const microsecond = document.querySelector('#microsecond');
const nanosecond = document.querySelector('#nanosecond');

function minuteToSecToMillisecToHour() {
    const min = parseFloat(minute.value);
    const sec = 60 * min;
    const hr = (1 / 60) * min;
    const ms = 60000 * min;
    const mics = 60000000 * min;
    const ns = 60000000000 * min;
    second.value = sec;
    millisecond.value = ms;
    hour.value = hr;
    microsecond.value = mics;
    nanosecond.value = ns;
}
minute.addEventListener('input', minuteToSecToMillisecToHour);
minuteToSecToMillisecToHour();

function secondToMinToMillisecToHour() {
    const sec = parseFloat(second.value);
    const min = (1 / 60) * sec;
    const hr = 0.0002777778 * sec;
    const ms = 1000 * sec;
    const mics = 1000000 * sec;
    const ns = 1000000000 * sec;
    minute.value = min;
    millisecond.value = ms;
    hour.value = hr;
    microsecond.value = mics;
    nanosecond.value = ns;
}
second.addEventListener('input', secondToMinToMillisecToHour);
secondToMinToMillisecToHour();

function msTominTohrTosec() {
    const ms = parseFloat(millisecond.value);
    const sec = 0.001 * ms;
    const hr = 0.0000002778 * ms;
    const min = 0.0000166667 * ms;
    const mics = 1000 * ms;
    const ns = 1000000 * ms;
    second.value = sec;
    minute.value = min;
    hour.value = hr;
    microsecond.value = mics;
    nanosecond.value = ns;
}
millisecond.addEventListener('input', msTominTohrTosec);
msTominTohrTosec();

function hrTominTosecToms() {
    const hr = parseFloat(hour.value);
    const min = 60 * hr;
    const sec = 3600 * hr;
    const ms = 3600000 * hr;
    const mics = 3600000000 * hr;
    const ns = 3600000000000 * hr;
    minute.value = min;
    second.value = sec;
    millisecond.value = ms;
    microsecond.value = mics;
    nanosecond.value = ns;
}
hour.addEventListener('input', hrTominTosecToms);
hrTominTosecToms();

function microsecondToTime() {
    const mics = parseFloat(microsecond.value);
    const m = 0.000000016 * mics;
    const s = 0.000001 * mics;
    const h = 0.00000000027 * mics;
    const ms = 0.001 * mics;
    const ns = 1000 * mics;
    minute.value = m;
    second.value = s;
    hour.value = h;
    millisecond.value = ms;
    nanosecond.value = ns;
}
microsecond.addEventListener('input', microsecondToTime);
microsecondToTime();

function nanosecondToTime() {
    const ns = parseFloat(nanosecond.value);
    const m = 0.000000000016 * ns;
    const s = 0.000000001 * ns;
    const h = 0.00000000000027 * ns;
    const ms = 0.000001 * ns;
    const mics = 0.001 * ns;
    minute.value = m;
    second.value = s;
    hour.value = h;
    millisecond.value = ms;
    microsecond.value = mics;
}
nanosecond.addEventListener('input', nanosecondToTime);
nanosecondToTime();
