console.log('hello comfort!')

const form = document.querySelector('form')
const input = document.querySelector('input')
const  button = document.querySelector('button')
const ul = document.querySelector('li')
form.addEventListener("submit", function(e){
    e.preventDefault()
    let li=document.createElement("li")
    li.textContent=input.value 
    input.value = '' 
     console.log(li)
})