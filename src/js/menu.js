import menuTemplate from './menu.hbs';
import menuData from '../menu.json';

const menuDivRef = document.querySelector('ul.js-menu');

function createMenuMarkup(data) {
    return data.map(menuTemplate).join('');
}

const menuMarkup = createMenuMarkup(menuData);

menuDivRef.insertAdjacentHTML('beforeend', menuMarkup);