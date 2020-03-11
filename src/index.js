import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import data from './data.json';

function component() {
    const element = document.createElement('div');
    element.classList.add('hello')
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const icon = new Image();
    icon.src = Icon;

    element.appendChild(icon);
    console.log(data);
    return element;
}

document.body.appendChild(component());