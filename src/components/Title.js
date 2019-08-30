import { create } from '../utils/render'

const Title = () => {
  return create(
    'h1',
    { class: 'main-header__title' },
    'Cassette'
  )
}

export default Title
