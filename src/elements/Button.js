import { create } from "../utils/render"

const Button = ({ fetchUser }) => {
  return create(
    'button',
    {
      class: "main-header__button",
      onClick: fetchUser
    },
    'Fetch User'
  )
}

export default Button
