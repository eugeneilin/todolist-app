// Create initial prompt
// use let because we will be reassigning its value over and over
let input = prompt('What would you like to do?');

// Create todos array for storage
const todos = ['Write code for 5 hours', 'Call a friend'];

// Leave a way of escape any time
// while the input is not 'quit' and not 'q'
// 'or' will not work because we want to make sure that BOTH 'quit' and 'q' are not equal to input, not just 1 of them.
// in grammar it makes sense to say 'or', but in JS logic, it has to be 'and'. We're stating 2 conditions that have to be broken.
// In other words, BOTH have to be false to run the while loop
while (input !== 'quit' && input !== 'q') {
  // If user doesn't quit app, keep going

  // LIST
  if (input === 'list') {
    console.log('*********************');
    // loop through the todos array
    // i is just a counter that we create and increment
    // we use this counter to loop through the todos array while the counter is less than the length of the array
    for (let i = 0; i <= todos.length - 1; i++) {
      // add 1 to i to create a list beginning with 1, not with 0; the list number would not be the index anymore, but we will call it an ID
      // use i to access the array items via their respective indexes
      console.log(`#${i + 1}: ${todos[i]}`);
    }
    console.log('*********************');

    // ADD
  } else if (input === 'add') {
    // save user's new todo to newTodo
    let newTodo = prompt('Ok, what is the new todo?');
    // add-on newTodo to the todos array
    todos.push(newTodo);
    // print message
    console.log(`${newTodo} was added to the list.`);

    // DELETE
  } else if (input === 'delete') {
    // ask user (make sure it's a number!) what todo ID they want to delete and save it to toDelete
    let toDelete = parseInt(prompt('Ok, what is the ID?'));
    // while toDelete is NaN or while toDelete is greater than todos.length, prompt user again
    // In this case, both conditions don't have to be true for the loop to run; if either condition is true, the code runs.
    while (toDelete > todos.length || Number.isNaN(toDelete)) {
      // Print out message
      console.log('That todo does not exist!');
      // Prompt user and update toDelete with new input
      toDelete = parseInt(
        prompt('Hey, enter a valid ID of the todo to delete')
      );
    }
    // subtract 1 from toDelete to access the index
    let index = toDelete - 1;
    // delete item from todos array beginning from the index, and delete only 1 item
    todos.splice(index, 1);
    // Print message
    console.log(`Todo #${toDelete} was removed.`);
  }
  // Make sure JS keeps prompting user, otherwise JS will loop through the body of the for-loop forever (since the input wasn't 'quit' or 'q', and there would be no other prompt to change input)
  input = prompt('what would you like to do next?');
}

// Print out quit message if the condition in the while loop is not met
console.log('To-do list quit.');
