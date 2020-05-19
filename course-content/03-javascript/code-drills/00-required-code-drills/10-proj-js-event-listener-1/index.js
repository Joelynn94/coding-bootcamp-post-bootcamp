// declare the variable we're storing the confirm dialogue in
let userConfirm;

// add event listener - listening for the keyup event
document.addEventListener('keyup', function (input) {
  // store the key the user pressed into a variable so we can
  // refer to it easier in this function and
  // change it to lower case to make our logic not case sensitive
  let userKey = input.key.toLowerCase();

  // log the key pressed to the console
  console.log(userKey);

  // check if the user pressed the 'h' key
  if (userKey === 'h') {
    userConfirm = confirm('You pressed the h key');
  }

  // check if the user pressed the 'k' key
  if (userKey === 'k') {
    // check whether the user had answered true to the previous confirm dialogue
    if (userConfirm) {
      // display the corresponding alert dialogue
      alert('Hello');
    } else {
      // display the corresponding alert dialogue
      alert('No thanks');
    }
  }
});
