/********************
 * HELPER FUNCTIONS *
 ********************/


/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(todos) {
  return todos.map((todo) => todo.text)
}

const priorities = function(todos) {
  
  return todos.map((todo) => todo.priority);
}

const namesAndPriorities = function(todos) {
  let result = [];

  for (const list of todos) {
    if (list.priority === 1) {
      result.push(`${list.text} - Low`)
    }
    if (list.priority === 2) {
      result.push(`${list.text} - High`)
    }
  }
  return result;
}

const justNotComplete = function(todos) {
  return todos.filter((todo) => todo.complete === false);
}

const justComplete = function(todos) {
  return todos.filter((todo) => todo.complete === true);
}

const priority2Only = function(todos) {
  return todos.filter((todo) => todo.priority === 2);
}

const priority1Only = function(todos) {
  return todos.filter((todo) => todo.priority === 1)
}












// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
