export default loadAbout;

function loadAbout() {
    const main = document.createElement('div');
    main.classList.add('main');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = 'Come On Aboard the Best Restaurant You Will Ever Taste!';
    main.appendChild(title);
    const content = document.createElement('div');
    content.classList.add('textCont')
    const img = document.createElement('img');
    img.classList.add('aboutImg');
    content.innerText = 'Our meticulously prepared meals have a taste like no other as our love for food is eternal!';
    main.appendChild(img);
    main.appendChild(content);
    return main;
}