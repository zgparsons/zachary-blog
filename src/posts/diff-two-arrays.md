---
layout: layouts/post.njk
title: Diff Two Arrays
metaTitle: Diff Two Arrays - Free Code Camp Solution and Walkthrough
date: 2020-01-11T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - blog
---
From the FreeCodeCamp Intermediate Algorithms Challenges:

> Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
> 
> **Note:** You can return the array with its elements in any order.
> 
> FreeCodeCamp – [Diff Two Arrays](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays)

For this one I haven’t gone into an in-depth code review but instead here is my solution, and then also another solution from the FreeCodeCamp website which I thought is a bit more [eloquent](https://eloquentjavascript.net/)…

I did this one fairly quickly but immediately I noticed that it wasn’t the best solution (though it does do the job…). It would probably be better to not use 2 for loops. This is because some of it is redundant and if they were large arrays this would probably take a long time to run!

```javascript
function diffArray(arr1, arr2) {
  var newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  // Same, same; but different.
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// [4]
```

FreeCodeCamp solution – below. This solution concatenates the two arrays into one, and then filters through that array checking each item against arr1 and arr2, returning this filter. By doing this it becomes one pass through the array instead of multiple passes.

```javascript
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// [4]
```