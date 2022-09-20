/*
1//
let btnCreate = document.querySelector (".create");
console.log(btnCreate);*/

/*
3//let btnCreate = document.querySelector ("#create");
    console.log =(btnCreate.style.backgroundColor = "green");
    // console.log(btnCreate);*/


4//
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    alert(text);
})



