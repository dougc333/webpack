
console.log("asdfasdf")
const fooDiv = document.getElementById('foo')
const labelElem = document.createElement('label')
labelElem.setAttribute("for","stuff")
labelElem.innerHTML="foo label"
fooDiv.appendChild(labelElem)

const inputElem = document.createElement('input')
inputElem.setAttribute('id', 'stuff')
inputElem.setAttribute('type','text')

fooDiv.appendChild(inputElem)