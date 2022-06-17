function homeTab() {
    const content = document.querySelector('#content')

    const section = document.createElement('div');
    section.classList.add('home')
    section.attributes.add('id','home')

    const h1 = document.createElement('h1')
    h1.textContent = "The Driveway Brunch"
    section.appendChild(h1)

    const h3 = document.createElement('h3')
    h3.textContent = "Established since the 1980s"
    section.appendChild(h3)

    content.appendChild(section)
    
}

export default homeTab