let seg = 0;
let min = 0;
let hr = 0;
let interval;

function twoDigits(digit) {
    if (digit < 10) {
        return '0' + digit;
    } else {
        return digit;
    }
}

function play() {
    watch();
    interval = setInterval(watch, 1000)
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    seg = 0; min = 0; hr = 0;
    document.getElementById('watch').innerHTML = '00:00:00';
}

function watch() {
    seg++;
    if (seg == 60) {
        seg = 0;
        min++;
        if (min == 60) {
            min = 0;
            hr++;
            if (hr == 24) {
                hr = 0;
            }
        }
    }
    document.getElementById('watch').innerHTML = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(seg);
}