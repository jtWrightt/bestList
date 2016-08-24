var todoItems = [];

/*function that runs when the add-todo-button is clicked
  sets var item to the input text and sends the text to
  addToTodoList()
  */
$('.add-todo-button').click(function() {
  var item = $('.todo-input').val();
  todoItems.push(item);
  saveList();
  $('.todo-input').val('');
})

/*function that saves the todolist to localStorage, so you can always see your items
  does so by itterating a forloop and saving each index to localStorage
  note: clears localStorage
  runs showList at end
  */
function saveList() {
  localStorage.clear();
  for (i=0; i<todoItems.length; i++) {
    localStorage.setItem(i, todoItems[i]);

  }
  showList();
}

/*function that first clears the todo list
  then adds an li for each of todoItems indexes
  */
function showList() {
  $('.todo-list').empty();
  todoItems = [];
  var i = 0;
  while (localStorage.getItem(i) != null) {
    $('.todo-list').append('<li class="todo-item">' + localStorage.getItem(i) + ' <i class="fa fa-times" id="' + localStorage.getItem(i) + '" aria-hidden="true"></i> </li>');
    todoItems.push(localStorage.getItem(i));
    i++;
  }
}

 /* Function for deleting list items
 runs savelist after deletion of items from todoItems
 */
 
$('.todo-list').on('click', '.fa-times', function() {
  var index = this.id;
  todoItems = jQuery.grep(todoItems, function(value) {
  return value != index;
});
  saveList();
})