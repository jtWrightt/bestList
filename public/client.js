//global variables for the arrays that act as an in app list of todo items and a list of ideas
var todoItems = [];
var ideaItems = [];
/*function that runs when the add-todo-button is clicked
  sets var item to the input text and sends the text to
  addToTodoList()
  */
$('.add-todo-button').click(function() {
  var item = $('.todo-input').val();
  todoItems.push(item);
  saveList();
  $('.todo-input').val('');
});

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
});

/* function that saves idea text to firebase, the best thing ever
  clears idea text input box
  */
$('.add-idea').click(function() {
  firebase.database().ref('ideas/').push ({
    idea: $('.idea-text').val(),
    likes: 0
  });
  $('.idea-text').val('');
});

$('.idea-list').ready(function() {
  pullIdeas();
})

/* function that uses a firebase database call to pull the idea list from a db
  pushes ideas to array ideaItems
  runs showIdeas after
  */
function pullIdeas() {
  firebase.database().ref('ideas/').on('child_added', function(snapshot) {
    ideaItems.push([snapshot.key, snapshot.val().idea, snapshot.val().likes]);
    showIdeas();
  });
}

/* function that shows ideas on idea-list by appending them to idea-list
  clears idea-list to start
  */
function showIdeas() {
  $('.idea-list').empty();
  for(i=0;i<ideaItems.length;i++) {
    $('.idea-list').append('<li class="'+ideaItems[i][0]+'">' + ideaItems[i][1] + ' <i class="fa fa-thumbs-up" id="'+ideaItems[i][0]+'" aria-hidden="true"></i> <i class="fa fa-thumbs-down" id="'+ideaItems[i][0]+'" aria-hidden="true"></i> Likes: ' +ideaItems[i][2]+ '</li>');
  }
}

$('.idea-list').on('click', '.fa-thumbs-up', function() {
  var likeCount = $('#'+this.id).
  console.log(this.id);
  firebase.database().ref('ideas/' + this.id).update({
    likes
  });
});