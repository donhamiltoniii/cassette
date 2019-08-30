export function render (child, parent) {
  parent.appendChild(child)
}

export function create (element, attributes = {}, content = '') {
  const newElement = document.createElement(element)
  Object.keys(attributes).forEach(key => {
    newElement.setAttribute(key, attributes[key])
  })
  content instanceof HTMLElement ? newElement.appendChild(content) : newElement.textContent = content

  return newElement
}
