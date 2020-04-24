---
layout: layouts/post.njk
title: Missing Letters
metaTitle: Missing Letters - Free Code Camp Solution and Walkthrough
metaDesc: A post about the Free Code Camp problem Missing Letters -
  written by Zachary Parsons and published at zacharyparsons.co.uk
date: 2020-01-18T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms
[here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters):

> Find the missing letter in the passed letter range and return it.
> 
> If all letters are present in a range, return undefined.
> 
> FreeCodeCamp - [Missing Letters](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters)

There's not too much to say about this one. One thing which I can note
is that JavaScript, as a language, is extremely helpful.

In this challenge you need to iterate through the given string, and
essentially check that each item is in alphabet order. If an item is not
in alphabet order it means that a letter has been missed out (that's
obviously only specifically in this challenge - and you may have to do
other checks IRL). So once you've found that there is a missing letter,
you can 'ascii-ertain' what that letter is and return it (...see what I
did there? Not funny, I know.)

The [ASCII table](https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html)
shows how computers, and programming languages, interpret characters -
in decimal format.

Coupled with the helpful JavaScript String methods:
`String.fromCharCode()` and `charCodeAt()` you can return the missing
letter with some simple maths!

My solution:

```javascript
function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

fearNotLetter("abce");
```

The [FreeCodeCamp forum](https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-missing-letters/16023)
has some extra information, and some helpful links about the String
global object and it's methods.