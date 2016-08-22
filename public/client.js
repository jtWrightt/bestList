var todoItems = ["testItem1", "testItem2", "testItem3"];

/*function that runs when the add-todo-button is clicked
  sets var item to the input text and sends the text to
  addToTodoList()
  */
$('.add-todo-button').click(function() {
  var item = $('.todo-input').val();
  todoItems.push(item);
  saveList();
})

/*function that saves the todolist to localStorage, so you can always see your items
  does so by itterating a forloop and saving each index to localStorage
  runs showList at end
  */
function saveList() {
  for (i=0; i<todoItems.length; i++) {
    console.log(todoItems[i]);
    localStorage.setItem(i, todoItems[i]);
  }
  showList();
}

/*function that first clears the todo list
  then adds an li for each of todoItems indexes
  */
function showList() {
  $('.todo-list').empty();
  var i = 0;
  while (localStorage.getItem(i) != null) {
    $('.todo-list').append('<li class="todo-item">' + localStorage.getItem(i) + '</li>');
    alert(localStorage.getItem(i));
    alert(isItem);
    i++;
  }
}
