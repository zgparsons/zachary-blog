---
layout: layouts/post.njk
title: Search & Replace
metaTitle: Search and Replace - Free Code Camp Solution and Walkthrough
date: 2020-01-16T00:00:00.000Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp Intermediate Algorithms Challenges,
[here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace):

> Perform a search and replace on the sentence using the arguments
> provided and return the new sentence. First argument is the sentence
> to perform the search and replace on. Second argument is the word that
> you will be replacing (before). Third argument is what you will be
> replacing the second argument with (after).
> 
> FreeCodeCamp – [Search &
 Replace](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace)

This is the seventh of 21 ‘Intermediate Algorithm Scripting’
lessons/challenges on FreeCodeCamp. That means I’m a third of the way
through this section\!

I’ve not really written too much about this one… it’s further practice
with regular expressions and with both string and array methods. All of
which is great practice.

Looking back 👀 at my code I can see that:

  - I split the given sentence into an array of words.
  - I checked each word in the array to see if it matched the given
    ‘before’ variable.
      - If it did match I assigned it to a new variable called ‘word’.
      - Then I checked to see if it had a capital letter at the
        beginning by using a regular expression test.
          - If it did I created a new string called ‘afterCap’ for the
            given ‘after’ word and assigned it the word but with a
            capital letter.
      - I then used the splice method to replace the ‘before’ word with
        either the given ‘after’ word or the ‘afterCap’ word based on if
        the ‘before’ word had a capital or not.
  - Finally I returned the array as a string by using the join method.

👍

My solution:

```javascript
function myReplace(str, before, after) {
  let sentence = str.split(' ');
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == before) {
      let word = sentence[i];
      if (/[A-Z]/.test(word[0])) {
        let afterCap = after.charAt(0).toUpperCase() + after.slice(1);
        sentence.splice(i,1,afterCap);
      } else {
        sentence.splice(i,1,after);
      }
    }
  }
  return sentence.join(' ');
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```