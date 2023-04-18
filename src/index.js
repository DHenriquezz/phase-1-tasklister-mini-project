document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addTodo(e.target.querySelector('#new-task-description').value)
    form.reset()
  })

   function addTodo(todo){
    let li = document.createElement('li')
    li.textContent = ` ${todo}`
    document.querySelector('#tasks').appendChild(li)
    li.style.color = "red"
    li.style.fontFamily = 'Verdana'
    let btn = document.createElement('button')
    btn.textContent = 'x'
    btn.addEventListener('click', deleteTask)
    li.appendChild(btn)


   }
  
   function deleteTask (e) {
    e.target.parentNode.remove()
   }

  
   
  

});

