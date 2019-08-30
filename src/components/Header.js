import { create } from '../utils/render'

import Input from '../elements/Input'
import Title from './Title'

const Header = () => {

  function fetchUser () {
    const userId = document.querySelector('.main-header__input').value
    fetch('http://jsonplaceholder.typicode.com/users/' + userId)
      .then(res => res.json())
      .then(res => updateTitle(res.name))
      .catch(err => console.error(err))
  }

  function updateTitle (value) {
    document.querySelector('.main-header__title').textContent = value
  }

  return create(
    'header',
    { 'class': 'header', 'id': 'main-header' },
    [
      Title({ title: "Dondon!" }),
      Input(),
      create(
        'button',
        {
          class: "main-header__button",
          onClick: fetchUser
        },
        'Fetch User'
      )
    ]
  )
}

export default Header
