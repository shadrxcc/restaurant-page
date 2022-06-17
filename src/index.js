import openPage from './generateJoke'
import './styles/main.scss'
import metallica from './assets/metallica.jpg'
import PageLoad from './page-load'

const Metallica = document.getElementById('Metallica')
Metallica.src = metallica

console.log(generateJoke());
openPage();

let tabSwitch = (function() {
    const homeTab = document.querySelector("home");
    homeTab.addEventListener("click", openPage);

    const menuTab = document.querySelector("menu");
    menuTab.addEventListener("click", menu);

    const contactTab = document.querySelector("contact");
    contactTab.addEventListener("click", contact);

})();