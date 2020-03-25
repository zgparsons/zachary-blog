---
layout: layouts/post.njk
title: Sorted Union
metaTitle: Sorted Union - Free Code Camp Solution and Walkthrough
date: 2020-01-19T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union):

> Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
> 
> In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
> 
> The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
> 
> Check the assertion tests for examples.
> 
> FreeCodeCamp - [Sorted Union](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union)

For this challenge it's necessary to loop through the given arguments in order to check what elements are in the first, then the second, and so on. And then to return unique values (in their given order) in an array.

In order to achieve this, one way is to nest another loop within the first to check the contents of each element, and add any unique elements into the array that will be returned. This is how I approached this challenge. As usual with coding challenges I have no doubt that there are other ways. Especially with modern javascript!

My solution:

```javascript
function uniteUnique(arr) {
  // console.log(arguments)
  let response = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!response.includes(arguments[i][j])) {
        response.push(arguments[i][j]);
      }
    }
  }
  return response;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

For this challenge I originally thought that I could just copy over the first argument into the return array, and then only loop through any additional arrays if they existed. Below is my code / pseudo-code.

function uniteUnique(arr) {
  let returnArr = arguments[0];
  if (arguments.length > 1) {
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] contains elements not in returnArr) {
        returnArr.push(elements)
      }
    }
  }
  return returnArr;
}

Unfortunately this did not work as intended. This is because I would still need to nest a loop (I'd need two layers of loop) in order to access and check each item in the subsequent given arrays.

So for example the first test says:

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` should return `[1, 3, 2, 5, 4]`.

One loop would let the function access each of the given arrays, like so:

`[1, 3, 2]` - or ' arguments[0] - this would become the return array.

`[5, 2, 1, 4]` - 'arguments[1]' - and

`[2, 1]` - 'arguments[2]'

Each of these arrays would be checked by the for loop, but without another nested array each of the elements contained within these arrays would not be inspected. So the 5, 2, 1 and 4 would be looked at as one, and not as individual numbers. The first array includes '1' and '2', but it's not the same as the second array. So my code / pseudo-code above would return:

`[1, 3, 2, [5, 2, 1, 4], [2, 1]]`

Using another for loop we can get the code to access each array, and then (in the nested for loop) each item in those arrays. Doing so will check the return array for '5', '2', '1' and '4' (and so on) individually, and so will end up returning the desired array:

`[1, 3, 2, 5, 4]`

Cool. 😎

If you did this challenge - how did you / would you solve it?