import  foo from './component.js'

foo()
console.log("hi")

const checkBox = document.getElementById('name')
checkBox.addEventListener('change',(e)=>{
  if (e.currentTarget.checked){
    console.log('checked')
  }else{
    console.log("not checked")
  }
})
