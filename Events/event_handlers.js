// Java Script

//Event Handler Registration

// let readMore = document.getElementById('read-more')
// let moreInfo = document.getElementById('more-info')
// // Write your code here:
// readMore.onclick = function() {
//  moreInfo.display = 'block';
// }

// Adding Event Handlers

// Add the code you want to test below:
// let view = document.getElementById('view-button');
// let close = document.getElementById('close-button');
// let codey = document.getElementById('codey');
// let open = function() {
//   codey.style.display = 'block';
//   close.style.display = 'block';
// };
// let hide = function() {
//   codey.style.display = 'none';
//   close.style.display = 'none';
// };
// view.onclick = open;
// close.onclick = hide;
// // Write your code here
// let textChange = function() {
//   view.innerHTML = "Hello World";
// }
// view.addEventListener('click', textChange);
// let textReturn = function() {
//   view.innerHTML = "View";
// }
// close.addEventListener('click', textReturn);

// Removing Event Handlers
// The .removeEventListener() method is used to reverse the .addEventListener() method. 
// eventTarget.removeEventListener('click', eventHandlerFunction);

// Event Object Properties
// JavaScript stores events as event objects with their related data and functionality as properties and methods.
// the .target property to access the element that triggered the event.
// the .type property to access the name of the event.
// the .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered
// let social = document.getElementById('social-media');
// let share = document.getElementById('share-button');
// let text = document.getElementById('text');
// // Write your code below
// let sharePhoto = function(event) {
//   event.target.style.display = 'none';
//   text.innerHTML = event.timeStamp;  
// }
// share.addEventListener('click', sharePhoto);