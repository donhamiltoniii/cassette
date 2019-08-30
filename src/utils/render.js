export function render (child, parent) {
  parent.appendChild(child)
}

export function create (element, attributes = {}, content = '') {
  const newElement = document.createElement(element)

  Object.keys(attributes).forEach(key => {
    if (key.startsWith('on')) {
      const event = key.split('on')[1].toLowerCase()
      newElement.addEventListener(event, attributes[key])
    } else {
      newElement.setAttribute(key, attributes[key])
    }
  })

  content instanceof Array
    ? content.forEach(childElement => newElement.appendChild(childElement))
    : content instanceof HTMLElement
      ? newElement.appendChild(content)
      : newElement.textContent = content

  return newElement
}
