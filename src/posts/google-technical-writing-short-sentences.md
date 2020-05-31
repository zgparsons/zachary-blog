---
layout: layouts/post.njk
title: "'Short Sentences' - Technical Writing One - Google"
metaTitle: "'Short Sentences' from Technical Writing One - Google - My experience
  completing the Google module."
metaDesc: A post exploring the importance of writing short sentences in technical writing. It covers a section of the technical writing one module provided by Google - written by Zachary Parsons.
socialImage: /images/andrew-neel-unsplash-short-sentences.jpg
date: 2020-05-31
tags:
  - Technical Writing
  - Google
  - blog
excerpt: 
---

## Introduction

<small>This is the fourth of several posts about the Technical Writing course provided by Google. They will each be tagged [Technical Writing](https://zacharyparsons.co.uk/tags/technical%20writing/).</small>

<small>This particular post covers the unit:</small>

<small>Short Sentences</small>

<small>The course itself goes in to more detail in each topic, these notes aim to be a brief review in order to better fortify the concepts covered.</small>

<div class="bg-highlight color-primary-shade pad-top-base pad-bottom-base text-300 pad-left-base">

<div class="pad-left-base gap-bottom-base">
<p class="text-500">Learning Outcomes</p>
"Technical Writing One teaches you how to write clearer documentation."

>
According to the welcome page this course teaches the fundamentals of technical writing.

This post covers the following learning outcomes:
</div>

- Develop at least four stratgies to shorten sentences.

<div class="pad-left-base pad-top-base">
<a class="button weight-bold font-base" target="_blank" href="https://developers.google.com/tech-writing/one#learning_objectives">See full list on course site ↗</a>
</div>

</div>

---

## Short Sentences

In software engineering keeping the number of lines of code to the minimum possible is generally positive because:

- Shorter code is typically easier for others to read.
- Shorter code is typically easier to maintain than longer code.
- Extra lines of code introduce additional points of failure.

Technical writing is similar in the following respects:

- Shorter documentation reads faster than longer documentation.
- Shorter documentation is typically easier to maintain than longer documentation.
- Extra lines of documentation introduce additional points of failure.

><small> ℹ Both of the above lists are taken directly from [the google course page ↗](https://developers.google.com/tech-writing/one/short-sentences).</small>

Reaching the shortest possible documentation may take extra time. It is worthwhile though. Short sentences communicate better than longer ones, and they are usually easier to understand.

### Focus Each Sentence on a Single Idea

A single idea, thought or concept is enough for each sentence. Each task in a program should ideally be executed by a single statement. The same formula should be followed in technical writing.

Google's examples:

```javascript
A sentence containing multiple thoughts / ideas:
"The late 1950s was a key era for programming languages because IBM introduced Fortran in 1957 and John McCarthy introduced Lisp the following year, which gave programmers both an iterative way of solving problems and a recursive way."

The same sentence broken into a succession of single idea sentences:
"The late 1950s was a key era for programming languages. IBM introduced Fortran in 1957. John McCarthy invented Lisp the following year. Consequently, by the late 1950s, programmers could solve problems iteratively or recursively."
```

### Convert Some Long Sentences to Lists

Often a long sentence can be broken into a list instead. This is especially true in technical writing. For example:

<small>"To alter the usual flow of a loop, you may use either a `break` statement (which hops you out of the current loop) or a `continue` statement (which skips past the remainder of the current iteration of the current loop)."</small>

If ever a long sentence contains the conjunction **or**, you should consider refactoring the sentence into a bulleted list. If a longer sentence includes a list of items or tasks, you should consider refactoring the sentence into a bulleted or numbered list. For example:

<small>"To alter the usual flow of a loop, call one of the following statements:</small>

<small> - `break`, which hops you out of the current loop.</small>

<small> - `continue`, which skips past the remainder of the current iteration of the current loop."</small>

### Eliminate or Reduce Extraneous Words

Sentences often contain filler. The same meaning can often be conveyed with a few less words.

A good example of this is:

><small>This design document provides a detailed description of Project X.</small>

This sentence can loose four whole words (and alter one slightly) and mean exactly the same thing:

><small>This design document details Project X.</small>

Below are some more examples of concise alternatives to wordy phrases. This is a non-exhaustive list. Find the meaning of the phrase and see if it can be conveyed in one or two words, often it can.

| Wordy                                 | Concise      |
|:--------------------------------------|:-------------|
| at this point in time                 | now          |
| determine the location of             | find         |
| is able to                            | can          |
| in spite of the fact that...          | although...  |
| enhances the clarification of         | clarifies    |
| ...                                   | ...          |

### Reduce Subordinate Clauses

Sentences regularly contain one or more subordinate clauses. A **clause** is an independent fragment of a sentence which contains an actor and an action. Every sentence has a main clause, and can then contain zero or more subordinate clauses.

><small>Python is an interpreted programming language, which was invented in 1991.</small>
>
><small>**main clause**: "Python is an interpreted programming language"</small><br>
><small>**subordinate clause**: "which was invented in 1991"</small>

In some short sentences subordinate clauses can be helpful, but not in all. When writing, or editing, keep the idea that one sentence should contain one idea in mind. Does the subordinate clause _extend_ the single idea, or does it _branch off_ to another idea? Consider dividing the subordinate clause into a separate sentence if it contains a separate idea.

Some words which often introduce subordinate clauses in sentences:

- which
- that
- because
- whose
- until
- unless
- since
- ...

A more complex example (containing multiple clauses):

><small>"Bash is a modern shell scripting language that takes many of its features from KornShell 88, which was developed at Bell Labs."</small><br>

The first subordinate clause extends the main idea, but the second subordinate clause goes in another direction. Below the sentence is divided in two, with the main clause in **bold** and the relevant subordinate clause in _emphasis_.

><small>**Bash is a modern shell scripting language** _that takes many of its features from Kornshell 88_. Bash was developed at Bell labs.</small>

#### **That** and **Which**

To avoid confusion around different conventions in the English language (British, American and translations) **that** should be used for restrictive clauses, and **which** for non-restrictive clauses. A restrictive clause is an essential subordinate clause - the sentence can't live without it. A non-restrictive clause is the opposite - the sentence will still be fine without the subordinate clause.

The example which Google gives in the lesson is the following:

><small>Python is an interpreted language, **which** Guido van Rossum invented.</small>
>
><small>"Python is an interpreted language." - This sentence is fine without the above subordinate clause.

And in contrast:

><small>Fortran is perfect for mathematical calculations **that** don't involve linear algebra.</small>
>
><small>"Fortran is perfect for mathematical calculations." - This sentence means something different from the one above.</small>

Another example using one of the previous examples but re-arranged:

><small>**Bash is a modern shell scripting language,** _which was developed at Bell labs_. Bash takes many of its features from Kornshell 88.</small>

You can also usually place a comma before the use of **which**, but not before the use of **that**.