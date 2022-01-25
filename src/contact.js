export default loadContact;

function loadContact() {
    const main = document.createElement('div');
    main.classList.add('main');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = 'Contact Us!';
    main.appendChild(title);
    const content = document.createElement('div');
    content.classList.add('textCont');
    content.innerText = '☎️  : 1-234-567-8901';
    const email = document.createElement('p');
    email.innerHTML = 'Email: foodeatersreal@gmail.com';
    content.appendChild(email);
    const residence = document.createElement('p');
    residence.innerHTML = '🏠  : Food Avenue 1234; Nown Town, UNK 49459';
    content.appendChild(residence);
    main.appendChild(content);
    return main;
}