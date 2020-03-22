---
layout: layouts/post.njk
title: Pig Latin
metaTitle: Pig Latin - Free Code Camp Solution and Walkthrough
date: 2020-01-15T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - blog
---
From the FreeCodeCamp Intermediate Algorithms Challenges,
[here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin):

> Translate the provided string to pig latin.
> 
> [Pig Latin](http://en.wikipedia.org/wiki/Pig_Latin) takes the first
> consonant (or consonant cluster) of an English word, moves it to the
> end of the word and suffixes an “ay”. If a word begins with a vowel
> you just add “way” to the end. If a word does not contain a vowel,
> just add “ay” to the end. Input strings are guaranteed to be English
> words in all lowercase.
> 
> FreeCodeCamp – [Pig
> Latin](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin)

When first approaching this problem I thought it may involve regex – but
I was concerned that it might have been quite complex, and perhaps I’d
need to spend some time learning more complex regex patterns.

However, I was surprised to find that I really only needed a consonant
regex, and a vowel regex. Some quick searching also let me know that I
could use `{1,}` to get the regex to check for one or more of each
consonant or vowel, which is helpful.

Initially I tackled the word beginning with a vowel – I recalled that
the `.search()` method would be useful as it returns the index of first
occurrence of the tested regex. So as long as that equaled zero, the
word must begin with a vowel. That would mean that all I’d need to do is
concatenate the given string and ‘way’.

Then to tackle the word beginning with one or more consonants, I thought
I could actually do something quite similar. My consonant regex will
already be checking for one or more so I had consonant clusters covered.
Even if the regex found was more than one character the `.search()`
would still need to be equal to zero for the consonant/cluster to be at
the start of the word.

From here all I’d need to do is create a new string which is from the
old string but had the instance of the regex replaced with nothing
(which is this line of code: `let newStr = str.replace(regex, '');`),
and then concatenate the new string, the found regex and ‘ay’, which
will create the correct return string.

My solution:

```javascript
function translatePigLatin(str) {
  let regex = /[bcdfghjklmnpqrstvwxyz]{1,}/;
  let vowelRegex = /[aeiou]{1,}/;
  let found = str.match(regex);
  if (str.search(vowelRegex) == 0) {
    return str += 'way';
  } else if (str.search(regex) == 0) {
    let newStr = str.replace(regex, '');
    return newStr + found + 'ay';
  }
}

translatePigLatin('consonant'); // 'onsonantcay'
```