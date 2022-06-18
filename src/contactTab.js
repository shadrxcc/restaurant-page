import avatar from './assets/avatar.jpg'

function contactTab() {
  const content = document.querySelector('#content')

  const section = document.createElement('div')
  

  

  contactDetails ('Email', 'mailto:akaadesm@gmail.com', 'akaadesm@gmail.com')
  contactDetails ('Github', 'connectto:github.com/shadrxcc', 'github.com/shadrxcc')
  contactDetails ('Twitter', 'twitter.com/shadrxcc', 'twitter.com/shadrxcc')


  content.appendChild(section)
}

export default contactTab