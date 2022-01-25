export default loadMenu;
import createMenuItem from "./menuItem";

function loadMenu() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.classList.add('menuMain');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.classList.add('menuTitle');
    title.innerHTML = 'Check Out Our Menu!';
    main.appendChild(title);
    const content = document.createElement('div');
    content.classList.add('menuDisplay');

    for (let i = 1; i <= 6; i++) {
        content.appendChild(createMenuItem(i));
    }
    
    main.appendChild(content);
    return main;
}