function contactTab() {
  const content = document.querySelector('#content')
  
  const section = document.createElement('div')
  section.classList.add('contact-box')

  const h1 = document.createElement('h1')
  h1.textContent = 'Contact Us'
  h1.classList.add('reach')
  section.appendChild(h1)

  const contactBox = (name, link, anchortext)=> {
    const div = document.createElement('div')
    div.classList.add('contacts')
    div.textContent = `${name}:`

    const a = doucment.createElement('a')
    a.classList.add('links')
    a.textContent = anchortext
    a.href = link
    div.appendChild(a)

    section.appendChild(div)
  }
  contactItem('Email', 'mailto:timpkelly1@gmail.com', 'timpkelly1@gmail.com')
  contactItem('LinkedIn', 'https://www.linkedin.com/in/tim-patrick-kelly/', 'linkedin.com/in/tim-patrick-kelly')
  contactItem('Github', 'https://github.com/timkellytk', 'timkellytk')

  content.appendChild(section)
  
}

export default contactTab
