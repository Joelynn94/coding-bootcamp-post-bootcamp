// Practice with timers

console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
function questionOne() {
  alert("Question 1");
}

setTimeout(questionOne, 5000);

console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
function questionTwo() {
  alert("Question 2");
}

const timer = setTimeout(questionTwo, 1000 * 15);

// Remove the timer you just made for Question 2
clearTimeout(timer);

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
function questionThreePartOne() {
  alert("Question 3 part 1");
}

const secondTimer = setTimeout(questionThreePartOne, 1000 * 15);

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
function questionThreePartTwo() {
  alert("Question 3 part 2");
}

setTimeout(questionThreePartTwo, 1000 * 16);

console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(secondTimer);

console.log("==================== Question 05 ====================");
// Create a timer that console logs "Question 5 Completed!" after 11 seconds
function questionFive() {
  alert("Question 5 Completed!");
}

setTimeout(questionFive, 1000 * 11);
