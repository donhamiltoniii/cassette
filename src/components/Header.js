import { create } from '../utils/render'

import Title from './Title'

const Header = () => {
  return create(
    'header',
    { 'class': 'header', 'id': 'main-header' },
    Title()
  )
}

export default Header
