import metallica from './assets/metallica.jpg'


export function PageLoad(){
const contentDiv = document.querySelector('#content');
const heading = document.createElement('h1');
heading.textContent = "Hello and welcome";
contentDiv.appendChild(heading);

const Metallica = document.getElementById('Metallica')
Metallica.classList.add('backgroundimg')
Metallica.src = metallica;
contentDiv.appendChild(Metallica);

const p1 = document.createElement('p');
p1.textContent = "An upscale restuarant uno";
contentDiv.appendChild(p1);

const p2 = document.createElement('p');
p1.textContent = "An upscale restuarant uno";
contentDiv.appendChild(p2);

const p3 = document.createElement('p');
p1.textContent = "An upscale restuarant uno";
contentDiv.appendChild(p3);
}

export default openPage
