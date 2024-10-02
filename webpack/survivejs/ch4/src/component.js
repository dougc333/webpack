
const component = (text="hello there") => {
  
  const element = document.createElement("div")
  element.innerHTML = text
  
  return (element)
}

export default component
