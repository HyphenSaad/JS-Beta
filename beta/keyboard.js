let isCaps = false;
let urdu = ''

document.querySelector('#key-caps').addEventListener('click', () => {
    if (!isCaps) {
        isCaps = true;
        document.getElementById('key-q').classList.add('hide');
        document.getElementById('key-w').classList.add('hide');
        document.getElementById('key-e').classList.add('hide');
        document.getElementById('key-r').classList.add('hide');
        document.getElementById('key-t').classList.add('hide');
        document.getElementById('key-y').classList.add('hide');
        document.getElementById('key-u').classList.add('hide');
        document.getElementById('key-i').classList.add('hide');
        document.getElementById('key-o').classList.add('hide');
        document.getElementById('key-p').classList.add('hide');

        document.getElementById('key-a').classList.add('hide');
        document.getElementById('key-s').classList.add('hide');
        document.getElementById('key-d').classList.add('hide');
        document.getElementById('key-f').classList.add('hide');
        document.getElementById('key-g').classList.add('hide');
        document.getElementById('key-h').classList.add('hide');
        document.getElementById('key-j').classList.add('hide');
        document.getElementById('key-k').classList.add('hide');
        document.getElementById('key-l').classList.add('hide');

        document.getElementById('key-z').classList.add('hide');
        document.getElementById('key-x').classList.add('hide');
        document.getElementById('key-c').classList.add('hide');
        document.getElementById('key-v').classList.add('hide');
        document.getElementById('key-b').classList.add('hide');
        document.getElementById('key-n').classList.add('hide');
        document.getElementById('key-m').classList.add('hide');
    } else {
        isCaps = false;
        document.getElementById('key-q').classList.remove('hide');
        document.getElementById('key-w').classList.remove('hide');
        document.getElementById('key-e').classList.remove('hide');
        document.getElementById('key-r').classList.remove('hide');
        document.getElementById('key-t').classList.remove('hide');
        document.getElementById('key-y').classList.remove('hide');
        document.getElementById('key-u').classList.remove('hide');
        document.getElementById('key-i').classList.remove('hide');
        document.getElementById('key-o').classList.remove('hide');
        document.getElementById('key-p').classList.remove('hide');

        document.getElementById('key-a').classList.remove('hide');
        document.getElementById('key-s').classList.remove('hide');
        document.getElementById('key-d').classList.remove('hide');
        document.getElementById('key-f').classList.remove('hide');
        document.getElementById('key-g').classList.remove('hide');
        document.getElementById('key-h').classList.remove('hide');
        document.getElementById('key-j').classList.remove('hide');
        document.getElementById('key-k').classList.remove('hide');
        document.getElementById('key-l').classList.remove('hide');

        document.getElementById('key-z').classList.remove('hide');
        document.getElementById('key-x').classList.remove('hide');
        document.getElementById('key-c').classList.remove('hide');
        document.getElementById('key-v').classList.remove('hide');
        document.getElementById('key-b').classList.remove('hide');
        document.getElementById('key-n').classList.remove('hide');
        document.getElementById('key-m').classList.remove('hide');
    }
});

document.getElementById('key-space').addEventListener('click', () => {
    urdu += ' ';
    urduText(urdu);
});

document.getElementById('key-fullstop').addEventListener('click', () => {
    urdu += '۔';
    urduText(urdu);
});

document.getElementById('key-special-1').addEventListener('click', () => {
    urdu += '؛';
    urduText(urdu);
});

document.getElementById('key-enter').addEventListener('click', () => {
    urdu += '\n';
    urduText(urdu);
});

document.getElementById('key-q').addEventListener('click', () => {
    urdu += 'ق';
    urduText(urdu);
});

document.getElementById('key-q-').addEventListener('click', () => {
    urdu += 'ث';
    urduText(urdu);
});

document.getElementById('key-w').addEventListener('click', () => {
    urdu += 'و';
    urduText(urdu);
});

document.getElementById('key-w-').addEventListener('click', () => {
    urdu += 'ڈ';
    urduText(urdu);
});

document.getElementById('key-e').addEventListener('click', () => {
    urdu += 'ع';
    urduText(urdu);
});

document.getElementById('key-e-').addEventListener('click', () => {
    urdu += 'غ';
    urduText(urdu);
});

document.getElementById('key-r').addEventListener('click', () => {
    urdu += 'ر';
    urduText(urdu);
});

document.getElementById('key-r-').addEventListener('click', () => {
    urdu += 'ح';
    urduText(urdu);
});

document.getElementById('key-t').addEventListener('click', () => {
    urdu += 'ت';
    urduText(urdu);
});

document.getElementById('key-t-').addEventListener('click', () => {
    urdu += 'خ';
    urduText(urdu);
});

document.getElementById('key-y').addEventListener('click', () => {
    urdu += 'ے';
    urduText(urdu);
});

document.getElementById('key-y-').addEventListener('click', () => {
    urdu += 'ض';
    urduText(urdu);
});

document.getElementById('key-u').addEventListener('click', () => {
    urdu += 'ء';
    urduText(urdu);
});

document.getElementById('key-u-').addEventListener('click', () => {
    urdu += 'ں';
    urduText(urdu);
});

document.getElementById('key-i').addEventListener('click', () => {
    urdu += 'ی';
    urduText(urdu);
});

document.getElementById('key-i-').addEventListener('click', () => {
    urdu += 'ۃ';
    urduText(urdu);
});

document.getElementById('key-o').addEventListener('click', () => {
    urdu += 'ہ';
    urduText(urdu);
});

document.getElementById('key-o-').addEventListener('click', () => {
    urdu += 'ص';
    urduText(urdu);
});

document.getElementById('key-p').addEventListener('click', () => {
    urdu += 'پ';
    urduText(urdu);
});

document.getElementById('key-p-').addEventListener('click', () => {
    urdu += 'ٹ';
    urduText(urdu);
});

document.getElementById('key-a').addEventListener('click', () => {
    urdu += 'ا';
    urduText(urdu);
});

document.getElementById('key-s').addEventListener('click', () => {
    urdu += 'س';
    urduText(urdu);
});

document.getElementById('key-d').addEventListener('click', () => {
    urdu += 'د';
    urduText(urdu);
});

document.getElementById('key-f').addEventListener('click', () => {
    urdu += 'ف';
    urduText(urdu);
});

document.getElementById('key-g').addEventListener('click', () => {
    urdu += 'گ';
    urduText(urdu);
});

document.getElementById('key-h').addEventListener('click', () => {
    urdu += 'ھ';
    urduText(urdu);
});

document.getElementById('key-j').addEventListener('click', () => {
    urdu += 'ج';
    urduText(urdu);
});

document.getElementById('key-k').addEventListener('click', () => {
    urdu += 'ک';
    urduText(urdu);
});

document.getElementById('key-l').addEventListener('click', () => {
    urdu += 'ل';
    urduText(urdu);
});

document.getElementById('key-a-').addEventListener('click', () => {
    urdu += 'ئ';
    urduText(urdu);
});

document.getElementById('key-s-').addEventListener('click', () => {
    urdu += 'ظ';
    urduText(urdu);
});

document.getElementById('key-d-').addEventListener('click', () => {
    urdu += 'ؤ';
    urduText(urdu);
});

document.getElementById('key-f-').addEventListener('click', () => {
    urdu += 'ژ';
    urduText(urdu);
});

document.getElementById('key-g-').addEventListener('click', () => {
    urdu += 'آ';
    urduText(urdu);
});

document.getElementById('key-h-').addEventListener('click', () => {
    urdu += 'ُ';
    urduText(urdu);
});

document.getElementById('key-j-').addEventListener('click', () => {
    urdu += 'ّ';
    urduText(urdu);
});

document.getElementById('key-k-').addEventListener('click', () => {
    urdu += 'ِ';
    urduText(urdu);
});

document.getElementById('key-l-').addEventListener('click', () => {
    urdu += 'َ';
    urduText(urdu);
});

document.getElementById('key-z').addEventListener('click', () => {
    urdu += 'ز';
    urduText(urdu);
});

document.getElementById('key-x').addEventListener('click', () => {
    urdu += 'ش';
    urduText(urdu);
});

document.getElementById('key-c').addEventListener('click', () => {
    urdu += 'چ';
    urduText(urdu);
});

document.getElementById('key-v').addEventListener('click', () => {
    urdu += 'ط';
    urduText(urdu);
});

document.getElementById('key-b').addEventListener('click', () => {
    urdu += 'ب';
    urduText(urdu);
});

document.getElementById('key-n').addEventListener('click', () => {
    urdu += 'ن';
    urduText(urdu);
});

document.getElementById('key-m').addEventListener('click', () => {
    urdu += 'م';
    urduText(urdu);
});

document.getElementById('key-z-').addEventListener('click', () => {
    urdu += '؟';
    urduText(urdu);
});

document.getElementById('key-x-').addEventListener('click', () => {
    urdu += 'ﷺ';
    urduText(urdu);
});

document.getElementById('key-c-').addEventListener('click', () => {
    urdu += 'ۓ';
    urduText(urdu);
});

function clearText() {
    urdu = urdu.slice(0, -1);
    document.getElementById('key-clear').addEventListener('click', urduText(urdu));
}