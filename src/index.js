import './style.css';
import loadAbout from './about';
import loadPage from './page';
import loadMenu from './menu';
import loadContact from './contact';


const doc = document.querySelector('#content');
loadPage(doc);


document.querySelector('.about').addEventListener('click', function() {
    doc.removeChild(document.querySelector('.main'));
    doc.appendChild(loadAbout());
});

document.querySelector('.menu').addEventListener('click', function() {
    doc.removeChild(document.querySelector('.main'));
    doc.appendChild(loadMenu());
});

document.querySelector('.contact').addEventListener('click', function() {
    doc.removeChild(document.querySelector('.main'));
    doc.appendChild(loadContact());
});