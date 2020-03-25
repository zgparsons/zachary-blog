---
layout: layouts/post.njk
title: Spinal Tap Case
metaTitle: Spinal Tap Case - Free Code Camp Solution and Walkthrough
date: 2020-01-14T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp Intermediate Algorithms Challenges, [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case):

> Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
> 
> FreeCodeCamp – [Spinal Tap Case](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case)

This was a great problem to learn more about [RegEx](https://en.m.wikipedia.org/wiki/Regular_expression) and just how powerful it can be…

Surely like most others attempting this problem, I began by stringing together `.toLowerCase()` and `.replace()`, and just included within the replace parenthesis a simple RegEx: `/\s|_/g` which looks for either white space or an underscore globally (so throughout the whole string) and then replace it with a dash by passing ‘-‘ as the second argument in the replace method.

Of course like everyone else I quickly hit the issue here… What about ‘camelCase’, or just CapitalisedWordsWithoutSpaces!?

I did some searching and found that I was unaware of two powerful things about RegEx!

1.  That RegEx is able to to search for multiple groups of matches. By using parenthesis you can search for one group and then follow it up with a search for another grouping. The example here being ‘search this string for one lowercase letter followed by an uppercase letter’, or in RegEx language: `/(a-z)(A-Z)/g`.
2.  That the RegEx created can be referred to, and re-substituted back into use by using `$1`, or `$2` – with the number referring to the grouping in the original RegEx. So in this example we can replace the string with a new string like this `let regexStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");`.

Fantastic! So all we need to do is make sure any words that are capitilised but without spaces get spaces added to them (we need to remember to create a new string to do this, because strings are immutable), and then we can return another new string which replaces any spaces or underscores with dashes, and rock on!

My solution:

```javascript
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let regexStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return regexStr.toLowerCase().replace(/\s|_/g, '-');
}
spinalCase('This Is Spinal Tap');
```

FreeCodeCamp solutions:

```javascript
// One:
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}
// test here
spinalCase("This Is Spinal Tap");
// Two:
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
```
The second FCC solution is using a different method – changing the string into an array (with breaks at white space, underscores or single capital letters), then back to a string (by joining each array entry with a dash between then), and then altering that string to be lowercase.

It sounds a little long winded when explaining, but it actually makes for quite concise and clean code.