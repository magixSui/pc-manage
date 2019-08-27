import './assets/fonts/iconfont.css';
import './css/style.css';
import image from './assets/bridge.png';

function component() {
    var element = document.createElement('div');
    element.classList.add('iconfont');
    element.classList.add('icon-wode');
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
document.body.appendChild(component());
document.body.appendChild(createImage());
document.body.appendChild(createBackImage());