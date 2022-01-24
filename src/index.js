import './style.css';
import loadAbout from './about';
import loadPage from './page';


const doc = document.querySelector('#content');
loadPage(doc);


document.querySelector('.about').addEventListener('click', function() {
    doc.removeChild(document.querySelector('.main'));
    doc.appendChild(loadAbout());
});

