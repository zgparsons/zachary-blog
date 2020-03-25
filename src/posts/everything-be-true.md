---
layout: layouts/post.njk
title: Everything Be True
metaTitle: Everything Be True - Free Code Camp Solution and Walkthrough
date: 2020-01-29T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true):

> Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
> 
> In other words, you are given an array collection of objects. The predicate `pre` will be an object property and you need to return `true` if its value is `truthy`. Otherwise, return `false`.
> 
> In JavaScript, `truthy` values are values that translate to `true` when evaluated in a Boolean context.
> 
> Remember, you can access object properties through either dot notation or `[]` notation.
> 
> FreeCodeCamp - Everything Be True

For this challenge I decided to evaluate each item in the given object against the given predicate, and count the amount of times this check returned as true.

To do this, I began a for loop, and then used a conditional check to add one to the count variable, like so:
```
  for (let i = 0; i < amount; i++) {
    if (collection\[i\]\[pre\]) {
      count++;
    }
  }
```

If this counted amount was equal to the amount of items in the object then the function could go ahead and return true. If the amounts didn't match it could return false. So here I just needed a conditional return statement, like so:

```
  if (amount === count) {
    return true;
  } else {
    return false;
  }
```

My solution:

```javascript
function truthCheck(collection, pre) {
  // Is everyone being true?
  let amount = collection.length;
  let count = 0;

  for (let i = 0; i < amount; i++) {
    if (collection[i][pre]) {
      count++;
    }
  }

  if (amount === count) {
    // console.log(true)
    return true;
  } else {
    // console.log(false)
    return false;
  }
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```