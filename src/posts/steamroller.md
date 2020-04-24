---
layout: layouts/post.njk
title: Steamroller
metaTitle: Steamroller - Free Code Camp Solution and Walkthrough
metaDesc: A post about the Free Code Camp problem Steamroller -
  written by Zachary Parsons and published at zacharyparsons.co.uk
date: 2020-01-25T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it):

> Flatten a nested array.
> 
> You must account for varying levels of nesting.
> 
> FreeCodeCamp - Steamroller

A quick post today about flattening nested arrays down to one array.

However a quick google of 'flatten nested arrays in javascript' lead me [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat).

... which essentially takes care of this algorithm for us.

My solution:

```javascript
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.flat(Infinity);
}

steamrollArray([1, [2], [3, [[4]]]]);
```

Interesting stack overflow answer about accessing different levels of arrays [here](https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json).