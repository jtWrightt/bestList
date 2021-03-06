// global variables for the arrays that act as an in app list of todo items and a list of ideas and a list of all the font awesome icons up to 4.3
var todoItems = [];
var ideaItems = [];
var fontAwesome = ["fa-adjust", "fa-adn", "fa-align-center", "fa-align-justify", "fa-align-left", "fa-align-right", "fa-ambulance", "fa-anchor", "fa-android", "fa-angellist", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-apple", "fa-archive", "fa-area-chart", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows", "fa-arrows-alt", "fa-arrows-h", "fa-arrows-v", "fa-asterisk", "fa-at", "fa-automobile", "fa-backward", "fa-ban", "fa-bank", "fa-bar-chart", "fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-bed", "fa-beer", "fa-behance", "fa-behance-square", "fa-bell", "fa-bell-o", "fa-bell-slash", "fa-bell-slash-o", "fa-bicycle", "fa-binoculars", "fa-birthday-cake", "fa-bitbucket", "fa-bitbucket-square", "fa-bitcoin", "fa-bold", "fa-bolt", "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-briefcase", "fa-btc", "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-bus", "fa-buysellads", "fa-cab", "fa-calculator", "fa-calendar", "fa-calendar-o", "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-down", "fa-caret-left", "fa-caret-right", "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up", "fa-caret-up", "fa-cart-arrow-down", "fa-cart-plus", "fa-cc", "fa-cc-amex", "fa-cc-discover", "fa-cc-mastercard", "fa-cc-paypal", "fa-cc-stripe", "fa-cc-visa", "fa-certificate", "fa-chain", "fa-chain-broken", "fa-check", "fa-check-circle", "fa-check-circle-o", "fa-check-square", "fa-check-square-o", "fa-chevron-circle-down", "fa-chevron-circle-left", "fa-chevron-circle-right", "fa-chevron-circle-up", "fa-chevron-down", "fa-chevron-left", "fa-chevron-right", "fa-chevron-up", "fa-child", "fa-circle", "fa-circle-o", "fa-circle-o-notch", "fa-circle-thin", "fa-clipboard", "fa-clock-o", "fa-close", "fa-cloud", "fa-cloud-download", "fa-cloud-upload", "fa-cny", "fa-code", "fa-code-fork", "fa-codepen", "fa-coffee", "fa-cog", "fa-cogs", "fa-columns", "fa-comment", "fa-comment-o", "fa-comments", "fa-comments-o", "fa-compass", "fa-compress", "fa-connectdevelop", "fa-copy", "fa-copyright", "fa-credit-card", "fa-crop", "fa-crosshairs", "fa-css3", "fa-cube", "fa-cubes", "fa-cut", "fa-cutlery", "fa-dashboard", "fa-dashcube", "fa-database", "fa-dedent", "fa-delicious", "fa-desktop", "fa-deviantart", "fa-diamond", "fa-digg", "fa-dollar", "fa-dot-circle-o", "fa-download", "fa-dribbble", "fa-dropbox", "fa-drupal", "fa-edit", "fa-eject", "fa-ellipsis-h", "fa-ellipsis-v", "fa-empire", "fa-envelope", "fa-envelope-o", "fa-envelope-square", "fa-eraser", "fa-eur", "fa-euro", "fa-exchange", "fa-exclamation", "fa-exclamation-circle", "fa-exclamation-triangle", "fa-expand", "fa-external-link", "fa-external-link-square", "fa-eye", "fa-eye-slash", "fa-eyedropper", "fa-facebook", "fa-facebook-f", "fa-facebook-official", "fa-facebook-square", "fa-fast-backward", "fa-fast-forward", "fa-fax", "fa-female", "fa-fighter-jet", "fa-file", "fa-file-archive-o", "fa-file-audio-o", "fa-file-code-o", "fa-file-excel-o", "fa-file-image-o", "fa-file-movie-o", "fa-file-o", "fa-file-pdf-o", "fa-file-photo-o", "fa-file-picture-o", "fa-file-powerpoint-o", "fa-file-sound-o", "fa-file-text", "fa-file-text-o", "fa-file-video-o", "fa-file-word-o", "fa-file-zip-o", "fa-files-o", "fa-film", "fa-filter", "fa-fire", "fa-fire-extinguisher", "fa-flag", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", "fa-flickr", "fa-floppy-o", "fa-folder", "fa-folder-o", "fa-folder-open", "fa-folder-open-o", "fa-font", "fa-forumbee", "fa-forward", "fa-foursquare", "fa-frown-o", "fa-futbol-o", "fa-gamepad", "fa-gavel", "fa-gbp", "fa-ge", "fa-gear", "fa-gears", "fa-genderless", "fa-gift", "fa-git", "fa-git-square", "fa-github", "fa-github-alt", "fa-github-square", "fa-gittip", "fa-glass", "fa-globe", "fa-google", "fa-google-plus", "fa-google-plus-square", "fa-google-wallet", "fa-graduation-cap", "fa-gratipay", "fa-group", "fa-h-square", "fa-hacker-news", "fa-hand-o-down", "fa-hand-o-left", "fa-hand-o-right", "fa-hand-o-up", "fa-hdd-o", "fa-header", "fa-headphones", "fa-heart", "fa-heart-o", "fa-heartbeat", "fa-history", "fa-home", "fa-hospital-o", "fa-hotel", "fa-html5", "fa-ils", "fa-image", "fa-inbox", "fa-indent", "fa-info", "fa-info-circle", "fa-inr", "fa-instagram", "fa-institution", "fa-ioxhost", "fa-italic", "fa-joomla", "fa-jpy", "fa-jsfiddle", "fa-key", "fa-keyboard-o", "fa-krw", "fa-language", "fa-laptop", "fa-lastfm", "fa-lastfm-square", "fa-leaf", "fa-leanpub", "fa-legal", "fa-lemon-o", "fa-level-down", "fa-level-up", "fa-life-bouy", "fa-life-buoy", "fa-life-ring", "fa-life-saver", "fa-lightbulb-o", "fa-line-chart", "fa-link", "fa-linkedin", "fa-linkedin-square", "fa-linux", "fa-list", "fa-list-alt", "fa-list-ol", "fa-list-ul", "fa-location-arrow", "fa-lock", "fa-long-arrow-down", "fa-long-arrow-left", "fa-long-arrow-right", "fa-long-arrow-up", "fa-magic", "fa-magnet", "fa-mail-forward", "fa-mail-reply", "fa-mail-reply-all", "fa-male", "fa-map-marker", "fa-mars", "fa-mars-double", "fa-mars-stroke", "fa-mars-stroke-h", "fa-mars-stroke-v", "fa-maxcdn", "fa-meanpath", "fa-medium", "fa-medkit", "fa-meh-o", "fa-mercury", "fa-microphone", "fa-microphone-slash", "fa-minus", "fa-minus-circle", "fa-minus-square", "fa-minus-square-o", "fa-mobile", "fa-mobile-phone", "fa-money", "fa-moon-o", "fa-mortar-board", "fa-motorcycle", "fa-music", "fa-navicon", "fa-neuter", "fa-newspaper-o", "fa-openid", "fa-outdent", "fa-pagelines", "fa-paint-brush", "fa-paper-plane", "fa-paper-plane-o", "fa-paperclip", "fa-paragraph", "fa-paste", "fa-pause", "fa-paw", "fa-paypal", "fa-pencil", "fa-pencil-square", "fa-pencil-square-o", "fa-phone", "fa-phone-square", "fa-photo", "fa-picture-o", "fa-pie-chart", "fa-pied-piper", "fa-pied-piper-alt", "fa-pinterest", "fa-pinterest-p", "fa-pinterest-square", "fa-plane", "fa-play", "fa-play-circle", "fa-play-circle-o", "fa-plug", "fa-plus", "fa-plus-circle", "fa-plus-square", "fa-plus-square-o", "fa-power-off", "fa-print", "fa-puzzle-piece", "fa-qq", "fa-qrcode", "fa-question", "fa-question-circle", 
"fa-quote-left", "fa-quote-right", "fa-ra", "fa-random", "fa-rebel", "fa-recycle", "fa-reddit", "fa-reddit-square", "fa-refresh", "fa-remove", "fa-renren", "fa-reorder", "fa-repeat", "fa-reply", "fa-reply-all", "fa-retweet", "fa-rmb", "fa-road", "fa-rocket", "fa-rotate-left", "fa-rotate-right", "fa-rouble", "fa-rss", "fa-rss-square", "fa-rub", "fa-ruble", "fa-rupee", "fa-save", "fa-scissors", "fa-search", "fa-search-minus", "fa-search-plus", "fa-sellsy", "fa-send", "fa-send-o", "fa-server", "fa-share", "fa-share-alt", "fa-share-alt-square", "fa-share-square", "fa-share-square-o", "fa-shekel", "fa-sheqel", "fa-shield", "fa-ship", "fa-shirtsinbulk", "fa-shopping-cart", "fa-sign-in", "fa-sign-out", "fa-signal", "fa-simplybuilt", "fa-sitemap", "fa-skyatlas", "fa-skype", "fa-slack", "fa-sliders", "fa-slideshare", "fa-smile-o", "fa-soccer-ball-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", "fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", "fa-soundcloud", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-spotify", "fa-square", "fa-square-o", "fa-stack-exchange", "fa-stack-overflow", "fa-star", "fa-star-half", "fa-star-half-empty", "fa-star-half-full", "fa-star-half-o", "fa-star-o", "fa-steam", "fa-steam-square", "fa-step-backward", "fa-step-forward", "fa-stethoscope", "fa-stop", "fa-street-view", "fa-strikethrough", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-subscript", "fa-subway", "fa-suitcase", "fa-sun-o", "fa-superscript", "fa-support", "fa-table", "fa-tablet", "fa-tachometer", "fa-tag", "fa-tags", "fa-tasks", "fa-taxi", "fa-tencent-weibo", "fa-terminal", "fa-text-height", "fa-text-width", "fa-th", "fa-th-large", "fa-th-list", "fa-thumb-tack", "fa-thumbs-down", "fa-thumbs-o-down", "fa-thumbs-o-up", "fa-thumbs-up", "fa-ticket", "fa-times", "fa-times-circle", "fa-times-circle-o", "fa-tint", "fa-toggle-down", "fa-toggle-left", "fa-toggle-off", "fa-toggle-on", "fa-toggle-right", "fa-toggle-up", "fa-train", "fa-transgender", "fa-transgender-alt", "fa-trash", "fa-trash-o", "fa-tree", "fa-trello", "fa-trophy", "fa-truck", "fa-try", "fa-tty", "fa-tumblr", "fa-tumblr-square", "fa-turkish-lira", "fa-twitch", "fa-twitter", "fa-twitter-square", "fa-umbrella", "fa-underline", "fa-undo", "fa-university", "fa-unlink", "fa-unlock", "fa-unlock-alt", "fa-unsorted", "fa-upload", "fa-usd", "fa-user", "fa-user-md", "fa-user-plus", "fa-user-secret", "fa-user-times", "fa-users", "fa-venus", "fa-venus-double", "fa-venus-mars", "fa-viacoin", "fa-video-camera", "fa-vimeo-square", "fa-vine", "fa-vk", "fa-volume-down", "fa-volume-off", "fa-volume-up", "fa-warning", "fa-wechat", "fa-weibo", "fa-weixin", "fa-whatsapp", "fa-wheelchair", "fa-wifi", "fa-windows", "fa-won", "fa-wordpress", "fa-wrench", "fa-xing", "fa-xing-square", "fa-yahoo", "fa-yelp", "fa-yen", "fa-youtube", "fa-youtube-play", "fa-youtube-square"];

randomFA();
/* function that runs when the add-todo-button is clicked
  sets var item to the input text and sends the text to
  addToTodoList()
  */
$('.add-todo-button').click(function() {
  var item = $('.todo-input').val();
  todoItems.push(item);
  saveList();
  
  $('.todo-input').val('');
});

/* function that saves the todolist to localStorage, so you can always see your items
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

/* function that first clears the todo list
  then adds an li for each of todoItems indexes
  each li has a br after it to keep them in place, came in 0.0.2
  */
function showList() {
  $('.todo-list').empty();
  todoItems = [];
  var i = 0;
  while (localStorage.getItem(i) != null) {
    x = checkIfChecked(localStorage.getItem(i));
    if (x == 'checked') {
      $('.todo-list').append('<i class="fa fa-times" id="' + localStorage.getItem(i).replace(/ /g, "-") + '"></i><i class="ph" id="' + localStorage.getItem(i).replace(/ /g, "-") + '"></i><input type="checkbox" '+x+' class="check" title="Done!" id="' + localStorage.getItem(i).replace(/ /g, "-") + '" aria-hidden="true" /> •<li class="todo-item"> '+ localStorage.getItem(i) +' <i class="fa fa-chevron-up" title="Move up" id="' + localStorage.getItem(i) + '" aria-hidden="true"></i> <i class="fa fa-chevron-down" tile="Move down" id="' + localStorage.getItem(i) + '" aria-hidden="true"></i> <i class="fa fa-pencil" title="Delete"id="' + localStorage.getItem(i).replace(/ /g, '-') + '" aria-hidden="true"></i><input class="edit" type="text" id="' + localStorage.getItem(i).replace(/ /g, "-") + '" placeholder="Whats new?" /> <i class="fa fa-check" id="' + localStorage.getItem(i).replace(/ /g, '-') + '" aria-hidden="true"></i></li><br>');
    } else {
    $('.todo-list').append('<i class="ph" id="' + localStorage.getItem(i).replace(/ /g, "-") + '"></i><input type="checkbox" '+x+' class="check" title="Done!" id="' + localStorage.getItem(i).replace(/ /g, "-") + '" aria-hidden="true" /> •<li class="todo-item"> '+ localStorage.getItem(i) +' <i class="fa fa-chevron-up" title="Move up" id="' + localStorage.getItem(i) + '" aria-hidden="true"></i> <i class="fa fa-chevron-down" tile="Move down" id="' + localStorage.getItem(i) + '" aria-hidden="true"></i> <i class="fa fa-pencil" title="Delete"id="' + localStorage.getItem(i).replace(/ /g, '-') + '" aria-hidden="true"></i><input class="edit" type="text" id="' + localStorage.getItem(i).replace(/ /g, "-") + '" placeholder="Whats new?" /> <i class="fa fa-check" id="' + localStorage.getItem(i).replace(/ /g, '-') + '" aria-hidden="true"></i></li><br>');
    }
    todoItems.push(localStorage.getItem(i));
    i++;
  }
}

/* function that adds a check box to mark off items without deletion
  after you check you can then delete
  system somebody wanted
  */
$('.todo-list').on('click', 'input', function() {
  if($('input:checkbox[id="'+this.id+'"]').is(':checked')) {
     $("#" + this.id).prepend('<i class="fa fa-times" id="'+this.id+'"></i>');
     localStorage.setItem(this.id, "checked");
  } else {
     $("#" + this.id+ ".fa-times").remove();
     localStorage.setItem(this.id, "unchecked");
  }
});

 /* Function for deleting list items
 runs savelist after deletion of items from todoItems
 */
$('.todo-list').on('click', '.fa-times', function() {
  var index = this.id.replace(/-/g, " ");
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
    $('.idea-list').append('<li class="'+ideaItems[i][0]+'">' + ideaItems[i][1] + ' <i class="fa fa-thumbs-up" id="'+ideaItems[i][0]+'" aria-hidden="true"></i> <i class="fa fa-thumbs-down" id="'+ideaItems[i][0]+'" aria-hidden="true"></i> <span class="likes" id="'+ideaItems[i][0]+'"> |Likes: ' +ideaItems[i][2]+ '</span></li>');
  }
}

/* function for liking an idea
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

/* function for disliking an idea
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

/* takes in button id, most likly an fa-thumbs-/up/down id
  function for hiding like/dislike buttons
  takes both items for the specific id and sets them to not display
*/
function hideButtons(id) {
  $("#"+id + ".fa-thumbs-up").css('display', 'none');
  $("#"+id + ".fa-thumbs-down").css('display', 'none');
}

/* takes in button id, most likly an fa-thumbs-up/down id
  function for updating a specific idea's like span
  does this by setting var likeCount to an int of the likes from a firebase db search
  then sets html of the specific span to the like count and shows new span content
*/
function updateLikes(id) {
  var likeCount;
  firebase.database().ref('ideas/'+id+"/likes").on("value", function(snapshot) {
    likeCount = snapshot.val();
  });

  $('span#'+ id).html("|Likes: " + likeCount);   
}

/* function for stylistic purposes only
  takes a random index from an array from all the fontAwesome icons
  then returns one and sets it to the footer
  kinda like on some websites, ive seen it before
*/
function randomFA() {
  var random = Math.floor(Math.random() * 592);

  $(".footer").addClass(fontAwesome[random]);
}

/* function for changing the index of a specific todo item by -1
  this moves the item up on the list, allowing for item reordering
  checks if shiftUpInx != 0 so an undefined object wont be made
  runs saveList to show list
*/
$('.todo-list').on('click', '.fa-chevron-up', function() {
  var id = this.id;
  var shiftUpInx = $.inArray(id,todoItems);
  
  if (shiftUpInx != 0) {
    var shiftDownInx = shiftUpInx - 1;
    var shiftDownText = todoItems[shiftDownInx];
    todoItems[shiftDownInx] = id;
    todoItems[shiftUpInx] = shiftDownText;
    saveList();
  }
});

/* function for changing the index of a specific todo item by +1
  this moves the item down on the list, allowing for item reordering
  checks if shiftUpInx != todoItems.length - 1 so an undefined object wont be made
  runs saveList to show list
*/
$('.todo-list').on('click', '.fa-chevron-down', function() {
  var id = this.id;
  var shiftDownInx = $.inArray(id,todoItems);
  
  if (shiftDownInx != (todoItems.length - 1)) {
    var shiftUpInx = shiftDownInx + 1;
    var shiftUpText = todoItems[shiftUpInx];
    todoItems[shiftUpInx] = id;
    todoItems[shiftDownInx] = shiftUpText;
    saveList();
  }
});

/* function that sets up enviroment for a todo edit
  shows and hides a few id specific list elements
  all these items' ids have dashes instead of spaces
*/
$('.todo-list').on('click', '.fa-pencil', function() {
  $("#" + this.id + ".fa-pencil" ).css('display', 'none');
  $("#" + this.id + ".edit").css('display', 'initial');
  $("#" + this.id + ".fa-check").css('display', 'initial');
});

/* function that saves the newly edited todo item's text
  does this by setting a temp varaible to the edit text
  then replacing the old todo in the array with the new text
  runs savelist()
  */
$('.todo-list').on('click', '.fa-check', function() {
  var newTodo = $("#" + this.id + ".edit").val();
  var oldTodo = this.id.replace(/-/g, " ");
  var oldTodoInx = $.inArray(oldTodo,todoItems);
  todoItems[oldTodoInx] = newTodo;
  saveList();
});

/*  function that checks if a todo item is checked off or not
  does this through local storage
  used in the showlist() function
  */
function checkIfChecked(name) {
  var x = "";
  if (localStorage.getItem(name) == "checked") {
    x = "checked";
    return x;
  } else {
    return x;
  }
}