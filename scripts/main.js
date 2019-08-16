// declare some variables
const input = document.querySelector("#todo");
const addbtn = document.querySelector(".addbutton");
const mylist = document.querySelector("#mylist");

function createStore() {
  let todos = JSON.parse(localStorage.getItem("todolist")); //get todolist from localstorage
  if (todos === null) {
    //if todolist doesnot exist
    localStorage.setItem("todolist", JSON.stringify([]));
    console.log(todos);

    return todos;
  } else {
    return todos;
  }
}
function createTodo() {
  let todos = createStore();
  todos.push(input.value); //then push the inputted text into the todolist
  localStorage.setItem("todolist", JSON.stringify(todos)); //update the todolist

  //return todos;
}
// createTodo();

function displayTodo() {
  let todolist = localStorage.getItem("todolist");
  todolist = JSON.parse(todolist);
  console.log(todolist);

  todolist.forEach(function(item,index) {
    const myli = document.createElement("li");
    const delbutton = document.createElement("button");
    myli.innerHTML = item;
    delbutton.innerHTML =  "delete";
    delbutton.className = "remove";
    delbutton.id = index; 
    myli.appendChild(delbutton);
    mylist.appendChild(myli);
  });
}

addbtn.onclick = createTodo;
displayTodo(); 

const delebtnList = document.querySelectorAll('.remove')
console.log(delebtnList)

function deleteTodo() {
     let todos = createStore()
     todos.splice(this.id, 1)
     localStorage.setItem("todolist", JSON.stringify(todos)); //update the todolist
     location.reload(true)
     const todo = this.parentElement
     todo.style.display = 'none'
     console.log(todo)

  }

  delebtnList.forEach(function(item){
  item.onclick = deleteTodo

})