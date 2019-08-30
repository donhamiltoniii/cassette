import { create } from '../utils/render'

const Title = ({ title }) => {
  return create(
    'h1',
    { class: 'main-header__title' },
    title
  )
}

export default Title
