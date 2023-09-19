// Function to zip two lists without using Underscore
function zipList(list1, list2) {
  const result = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }

  return result;
}

// Function to zip two lists using Underscore
function zipListTheSimpleWay(list1, list2) {
  const result = [];

  // Use _.each to iterate through the indices of the lists
  _.each(list1, function (value, index) {
    // Push the elements from both lists into the result array
    result.push(value, list2[index]);
  });

  return result;
}

// Example usage:
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

// Using zipList
const zippedList = zipList(list1, list2);
console.log(zippedList); // Output: ['a', 1, 'b', 2, 'c', 3]

// Using zipListTheSimpleWay
const zippedListUnderscore = zipListTheSimpleWay(list1, list2);
console.log(zippedListUnderscore); // Output: ['a', 1, 'b', 2, 'c', 3]
