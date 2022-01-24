export default loadPage;

import loadHeader from './header';
import loadAbout from './about';

function loadPage(doc) {
    let header = loadHeader();
    let main = loadAbout();
    doc.appendChild(header);
    doc.appendChild(main);
};