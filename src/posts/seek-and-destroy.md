---
layout: layouts/post.njk
title: Seek And Destroy
metaTitle: Seek And Destroy - Free Code Camp Solution and Walkthrough
date: 2020-01-12T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp Intermediate Algorithms Challenges, [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy):

> You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
> 
> Note: You have to use the `arguments` object.
> 
> FreeCodeCamp – [Seek and Destroy](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy)

The ‘note’ in the challenge description is very helpful on this one.

If you can put all of the arguments into an array, then this new array can be checked against the given array (the first argument) quite simply by using a for loop.

A quick search, and a general understanding of javascript logic, will lead you to the `Array.from()` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), which is a helpful method on the standard ‘built-in’ array object.

So you can call the new array made up of the arguments given ‘args’. With a for loop and by using another handy standard Array method – `Array.includes()` you can check if the ‘args’ array includes (or, with negation, doesn’t include) each item in the original given array. At the same time you can push any which it does not include into a third array, which can be called ‘res’ for example.

This final array, ‘res’, can then be returned by the function.

My solution:
```javascript
function destroyer(arr) {
  // Remove all the values
  const args = Array.from(arguments);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// [1, 1]
```

One issue with my solution is that the ‘args’ array includes the given array. This means that, in the for loop, some computation (not much with only small arrays) is wasted. It doesn’t make a difference to the outcome because the check is only checking one item at a time, and the array only gets checked as a singular item of the args array.

That’s a little confusing but let’s try with an example. So if the function is passed `[1, 2, 3, 1, 2, 3], 2, 3`, as in my solution, once the ‘args’ array is created we have:

1.  The given array – `arr` = [1, 2, 3, 1, 2, 3]
2.  The arguments array – `args` = [[1, 2, 3, 1, 2, 3], 2, 3]

If we are checking each item in ‘arr’ to see if it has an identical entry in ‘args’, you can see that [1, 2, 3, 1, 2, 3] cannot be identical to [1], [2] or [3], despite it containing each of those values. So therefore once the for loop has finished doing it’s checks the result is that [1, 2, 3, 1, 2, 3] is not in ‘arr’, but [2] and [3] are in ‘arr’, and so only [1] and [1] are added to ‘res’, as expected.

However, to avoid this complication completely is quite easy. You can still create ‘args’ in the same way – by using `Array.from(arguments)`. But you can also chain onto this a .slice() argument with a 1 value. Like this:

`const args = Array.from(arguments).slice(1);`

This ‘slices’ the first element of the array which is produced from the given arguments. So the ‘args’ array is in fact:

[2, 3]

Instead of being:

[[1, 2, 3, 1, 2, 3], 2, 3].

One of the given solutions from FreeCodeCamp does just this. The given solutions also use both [higher order functions](https://eloquentjavascript.net/05_higher_order.html) and the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (is this an operator…? Not sure.). Both of which I would like to learn more about and am enjoying beginning to understand how they work and can be useful. The result is more concise code, which many would argue is more readable, logical, and eloquent/elegant.

FreeCodeCamp solutions:

// One:
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

// Two:
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));