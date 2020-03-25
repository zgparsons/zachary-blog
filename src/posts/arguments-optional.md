---
layout: layouts/post.njk
title: Arguments Optional
metaTitle: Arguments Optional - Free Code Camp Solution and Walkthrough
date: 2020-02-03T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional):

> Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
> 
> For example, `addTogether(2, 3)` should return `5`, and `addTogether(2)` should return a function.
> 
> Calling this returned function with a single argument will then return the sum:
> 
> `var sumTwoAnd = addTogether(2);`
> 
> `sumTwoAnd(3)` returns `5`.
> 
> If either argument isn't a valid number, return undefined.
> 
> FreeCodeCamp - Arguments Optional

Forgive me for not writing out my thought process! I got excited for getting so close to the end of the Intermediate algorithms and just moved on! My code is below though!

My solution:

```javascript
function addTogether() {
  let x = arguments[0];
  let y = arguments[1];

  if (typeof x !== 'number') {
    return undefined;
  }
  
  if (typeof x === 'number' && typeof y === 'number') {
    // console.log('yess')
    return x + y;
  } else if (typeof y === 'undefined') {
    return function() {
      if (typeof arguments[0] === 'number') {
        return x + arguments[0];
      } else {
        return undefined;
      }
    }
  }
}

addTogether(2, 3);
```