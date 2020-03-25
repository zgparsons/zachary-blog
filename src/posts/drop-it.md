---
layout: layouts/post.njk
title: Drop It
metaTitle: Drop It - Free Code Camp Solution and Walkthrough
date: 2020-01-24T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it):

> Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
> 
> Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
> 
> FreeCodeCamp - [Drop It](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it)

This challenge seems so simple. But as per usual with simple looking challenges there are a few different places where you can really trip up. All you need to do in this one is go through the array, check if each item is false according to the given function and then remove the item if it is false - once you get to the first true item (according to the given function) break the loop and return the rest of the array. Easy.

I started writing a for loop and then thought: Hang on! I've been learning about mapping arrays, reducing arrays and filtering them, and sometimes this just needs one line - maybe I can do this in one line of code! I knew it wouldn't be reduce because this returns only one value, but filter seems like it will work. So I scrapped the for loop and wrote this line:

`console.log(arr.filter(func));`

That should do right? Nope. The key thing to remember in this challenge is that it actually asks you to iterate through and then stop once you get to a true value. The filter function mentioned will check every value and only return the values which evaluate to true. This means anything after the first true element that is false will be lost too. For example in the array [0, 1, 0, 1] and with the function: 'return n === 1', using the filter mentioned above will only return [1, 1], but we actually need it to return [1, 0, 1].

So... back to the for loop it is then. And after a quick google to find the best way to remove an item from an array, and after throwing .pop(), .splice() and .slice() away (they are useful in the correct context, but here we just need to remove the item which we are currently inspecting), .shift() comes out as the winner here!

Easy - so we'll check the item is false, remove it if so, and then move onto the next item. If it is not false, we'll check if it's true and then break from the loop if so and return the array.

Great - it works... but not for all of the tests! What is this....? The test it is failing for is this one:

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

I popped in some 'console.log(arr)''s (everywhere!), and found that the loop was running twice and then stopping despite not having reached a true value, and so the returned array was [3, 4] and not the empty array expected. How could this be!? After some testing I could see it had to do with the way I had written my for loop. I'd gone for the standard `for (let i = 0; i < arr.length; i++)`. But within the for loop we are purposefully resizing the array, and so we can't rely on arr.length to be correct. In fact in the test given above the loop functions correctly twice (2 times), and then stops - because the new length of the array is 2. And so the loop has done what's expected of it already - looped through 2 times.

This is an easy fix - we need the loop to go through right to the end, or to break once it finds a true value. So we just need to fix the amount of loops based on the array's original length by declaring a variable outside of the for loop.

My solution:

```javascript
function dropElements(arr, func) {
  // Drop them elements.
  // create varible for length of original array
  let loop = arr.length;
  // start loop
  for (let i = 0; i < loop; i++) {
    // if false remove, if true break
    if (!func(arr[0])) {
      console.log('remove item', arr);
      arr.shift(i);
    } else if (func(arr[0])) {
      break;
    }
  }
  // return array
  return arr;
  // console.log(arr.filter(func));
}

dropElements([1, 2, 3, 4], function(n) {return n > 5; });
```