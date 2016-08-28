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
  ideaItems = [];
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
    $('.idea-list').append('<li class="'+ideaItems[i][0]+'">' + ideaItems[i][1] + ' <i class="fa fa-thumbs-up" id="'+ideaItems[i][0]+'" aria-hidden="true"></i> <i class="fa fa-thumbs-down" id="'+ideaItems[i][0]+'" aria-hidden="true"></i> <span class="likes" id="'+ideaItems[i][0]+'"> Likes: ' +ideaItems[i][2]+ '</span></li>');
  }
}

/*
  function for liking an idea
  does this by adding one to the likes section in hte items firebase db
  runs updateLikes();
  runs hideButtons();
*/
$('.idea-list').on('click', '.fa-thumbs-up', function() {
  var likeCount = 0;
  firebase.database().ref('ideas/'+this.id+"/likes").on("value", function(snapshot) {
    likeCount = snapshot.val();
  });
  firebase.database().ref('ideas/' + this.id).update({
    likes: likeCount + 1
  });
  updateLikes(this.id);
  hideButtons(this.id);
});

/*
  function for disliking an idea
  subtracts 1 from likes section in firebase db
  runs updateLikes()
  runs hideButtons()
*/
$('.idea-list').on('click', '.fa-thumbs-down', function() {
  var likeCount = 0;
  firebase.database().ref('ideas/'+this.id+"/likes").on("value", function(snapshot) {
    likeCount = snapshot.val();
  });
  firebase.database().ref('ideas/' + this.id).update({
    likes: likeCount - 1
  });
  updateLikes(this.id);
  hideButtons(this.id);
});

/*
  takes in button id, most likly an fa-thumbs-/up/down id
  function for hiding like/dislike buttons
  takes both items for the specific id and sets them to not display
*/
function hideButtons(id) {
  $("#"+id + ".fa-thumbs-up").css('display', 'none');
  $("#"+id + ".fa-thumbs-down").css('display', 'none');
  $
}

/*
  takes in button id, most likly an fa-thumbs-up/down id
  function for updating a specific idea's like span
  does this by setting var likeCount to an int of the likes from a firebase db search
  then sets html of the specific span to the like count and shows new span content
*/
function updateLikes(id) {
  var likeCount;
  firebase.database().ref('ideas/'+id+"/likes").on("value", function(snapshot) {
    likeCount = snapshot.val();
  });

  $('span#'+ id).html(likeCount);   
}