/*
1//
let btnCreate = document.querySelector (".create");
console.log(btnCreate);*/

/*
3//let btnCreate = document.querySelector ("#create");
    console.log =(btnCreate.style.backgroundColor = "green");
    // console.log(btnCreate);*/


4//
/*document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    alert(text);
})*/

5//

/*let todos =[]

const  createTodo = (text) => {
    todos.push(text)
}

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    console.log("texto añadido " + (text))

    if (text.length > 0) {
        createTodo(text)
    }

    console.log(todos);
})
*/


10//

let todos = []

const removeTodo = (todoEl) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.toLowerCase() === todoEl.textContent.toLowerCase()
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}
    
const renderTodos = (todos) => {
    const todoList = document.querySelector("#todos")
    todoList.innerHTML =  " "

    if (todos.length > 0) {
        todos.forEach((todo) => {todoList.appendChild(generateTodoDOM(todo))})
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are no todos to show'
        todoList.appendChild(messageEl)
    }

}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoText = document.createElement('span')

    todoText.textContent = todo
    containerEl.appendChild(todoText)

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    const removeButton = document.createElement('button')
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todoText)
        renderTodos(todos)
    })

    return todoEl
}

const createTodo = (text) => {
    todos.push(text)
}



document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    console.log("texto añadido: " + text)

     if (text.length > 0) {
        createTodo(text)
        renderTodos(todos)
        }
    console.log(todos);
})
