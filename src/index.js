import './assets/fonts/iconfont.css';
import './assets/css/style.css';
import image from './assets/images/bridge.png';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.classList.add('iconfont');
    element.classList.add('icon-wode');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

function createBackImage() {
    var element = document.createElement('div');
    element.classList.add('hello');
    return element;
}

function createImage() {
    var element = document.createElement('img');
    element.src = image;
    return element;
}

function createCube() {
    var element = document.createElement('pre');
    element.innerHTML  = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ];
    return element;
}

document.body.appendChild(component());
document.body.appendChild(createImage());
document.body.appendChild(createBackImage());
document.body.appendChild(createCube());
// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }