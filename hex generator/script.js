const html = document.querySelector('html')
const subtitle = document.querySelector('.subtitle')

function randomHex(size) {
    let res = [];
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let i = 0; i < size; i++) {
        res.push(hex[Math.floor(Math.random() * 16)]);
    }

    return res.join('');
}

function randomDirection() {
    return Math.floor(Math.random() * 180)
}


function generate() {
    let color1 = randomHex(6);
    let color2 = randomHex(6);
    let direction = randomDirection();
    html.style.background = 'linear-gradient(' + direction +'deg, ' + '#' + color1 + ',' + '#' + color2 + ')';

    subtitle.textContent = 'background: linear-gradient(' + direction + 'deg, ' + '#' + color1 + ', ' + '#' + color2 + ');';
}

generate();
