import avatar from './assets/avatar.jpg'

function contactTab() {
  const content = document.querySelector('#content')

  const section = document.createElement('div')

  const h1 = document.createElement('h1')
  h1.textContent = "Contact Us"
  h1.classList.add('contact')
  section.appendChild(h1)

  const av = document.createElement('img')
  av.src = avatar
  av.classList.add('profile')
  section.appendChild(av)


  const contactDetails = (tag, link, anchorText) => {
    const div = document.createElement('div')
    div.classList.add('contact-box')
    div.textContent = `${tag}:`

    const a = document.createElement('a')
    a.classList.add('contact-link')
    a.href = link
    a.textContent = anchorText
    div.appendChild(a)

    section.appendChild(div)
    
  }
  

  contactDetails ('Email', 'mailto:akaadesm@gmail.com', 'akaadesm@gmail.com')
  contactDetails ('Github', 'connectto:github.com/shadrxcc', 'github.com/shadrxcc')
  contactDetails ('Twitter', 'twitter.com/shadrxcc', 'twitter.com/shadrxcc')


  content.appendChild(section)
}

export default contactTab