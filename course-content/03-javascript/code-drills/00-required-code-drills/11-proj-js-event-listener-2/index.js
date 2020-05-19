// declare a variable for the array we're storing the history of user key presses
// into and assign it to an empty array
userHistoryArray = [];

// declare a variable that is a string of all 26 lowercase letters in the english alphabet
// we can use a string in this situation because we're only checking against individual characters
// if we were to have to validate non-alphanumeric characters, we would have to use an array
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// create a key press listener
document.addEventListener('keyup', function (input) {
  // store the key the user pressed into a variable and
  // change it to lower case to make our logic not case sensitive
  let userKeyPressed = input.key.toLowerCase();

  // create an if statement that checks whether the key is part of our alphabet
  if (alphabet.includes(userKeyPressed)) {
    // if the key is part of the alphabet, set the text value of div on our webpage we're
    // using to display thecurrent key to that key
    document.querySelector('#user-key').textContent = userKeyPressed;

    // also store the key into the array we declared at the top of the file
    userHistoryArray.push(userKeyPressed);
    console.log(userHistoryArray);

    // finally set the text value of the key press history div to the array
    document.querySelector('#user-history').textContent = userHistoryArray;
    // if the key is not part of our alphabet, change the current key div to ask the user to press
    // a key that's a letter within our alphabet
    document.querySelector('#user-key').textContent =
      'Please enter a valid key';
  }
});
