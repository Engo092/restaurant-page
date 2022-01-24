export default loadHeader;

function loadHeader() {
    const header = document.createElement('div');
    const name = document.createElement('span');
    const tabs = document.createElement('div');
    const aboutTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');

    header.classList.add('header');

    name.innerHTML = "Food Eaters!";
    name.classList.add('name');

    aboutTab.innerHTML = "Home";
    aboutTab.classList.add('headBtn');
    aboutTab.classList.add('about');
    menuTab.innerHTML = "Menu";
    menuTab.classList.add('headBtn');
    menuTab.classList.add('menu');
    contactTab.innerHTML = "Contact Us";
    contactTab.classList.add('headBtn');
    contactTab.classList.add('contact');

    tabs.appendChild(aboutTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);
    tabs.classList.add('tabs');
    header.appendChild(name);
    header.appendChild(tabs);

    return header;
}