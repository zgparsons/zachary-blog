---
layout: layouts/post.njk
title: "Technical Writing One - Google"
metaTitle: "Technical Writing One - Google - My experience
  completing the Google module."
metaDesc: A post about completing the 'Words', 'Active Voice', 'Clear Sentences', 'Short Sentences' and 'Lists and Tables' sections of the technical writing one module provided by Google - written by Zachary Parsons
socialImage: /images/glenn-carstens-peters-unsplash-words-post.jpg
date: 2020-05-26T12:19:04.383Z
tags:
  - Technical Writing
  - Google
  - blog
excerpt: Words are the most important part of any writing. This is no different in technical writing and documentation.
draft: True
---

# Words

## Introduction

<small>Originally this was the first of several posts about the Technical Writing course provided by Google. I have amalgamated all posts on this topic together into this post. Each post has an introduction section which explains what will be covered until the next introduction section.</small>

<small>This particular post covers the first two units:</small>

<small>1 - Just Enough Grammar (Optional Unit)</small>

<small>2 - Words</small>

<small>The course itself goes in to more detail in each topic, but these notes aim to be a brief review in order to better fortify the concepts covered.</small>
<small>There is also an in-class component which will not be covered here.</small>

<div class="bg-highlight color-primary-shade pad-top-base pad-bottom-base text-300 pad-left-base">

<div class="pad-left-base gap-bottom-base">
<p class="text-500">Learning Outcomes</p>
"Technical Writing One teaches you how to write clearer documentation."

>
According to the welcome page this course teaches the fundamentals of technical writing.

This post covers the first two learning outcomes:
</div>

- Use terminology consistently.
- Recognize and disambiguate pesky pronouns.

<div class="pad-left-base pad-top-base">
<a class="button weight-bold font-base" target="_blank" href="https://developers.google.com/tech-writing/one#learning_objectives">See full list on course site ↗</a>
</div>

</div>

---

## Just Enough Grammar (Optional Unit)

An optional unit which covers the parts of speech and grammar relevant to the course.

It includes a short explanation and exercise for each of the following:

| Part of speech | Definition                               | Example               |
|:---------------|:-----------------------------------------|:----------------------|
| Noun      | A person, place, concept or thing        | **Sam** runs **races**         |
| Pronoun   | A noun that substitutes for another noun | **He** likes to compete      |
| Adjective | A word or phrase that modifies a noun    | Sam wears **blue** shoes     |
| Verb      | An action word or phrase                 | Sam **runs** races           |
| Adverb    | A word or phrase that modifies a verb, an adjective, or an adverb | Sam runs **slowly** |
| Preposition| A word of phrase specifying the positional relationship of two nouns | Sam's sneakers are seldom **on** his shelf |
 Conjunction| A word or phrase that connects two phrases | Sam's trophies **and** ribbons live only in his imagination |
| Transition| A word or phrase that connects two sentences | Sam runs races weekly. **However** he finishes races weakly. |

The explanations and exercises for each are short and informative. They are worth the 5 - 10 minutes it takes to read this section.

---

## Words

Words are the most important part of any writing. This is no different in technical writing and documentation.

This section of the course directs the reader on how they should correctly:

__1. Define new or unfamiliar terms__

You should be able to recognise when a term may be unfamiliar to all or some of your target audience and then define that term in one of two ways:

- If it already exists, link to a good existing explanation.
- If the document you are writing is introducing the term, define the term.

If the document you are writing is introducing many terms, collect the definitions into a glossary.

__2. Use terms consistently__

You should always apply the same unambiguous word or term consistently throughout your document. If you are introducing a term, be consistent with the use of that term.
  
For example if your document introduces the term **floober**, continue to use that term throughout - do not begin referring to the same item or concept as a **flub** later on.

If you are clear when introducing a term (**floober**) that it is also known by a shortened name (**flub**), then you may use that shortened name throughout the rest of the document.

><small>"Floobers (or flubs for short) are a state of mind..."</small>

__3. Use acronyms properly__

On initial use of an acronym, use the full term, followed by the acronym in parentheses. Use emphasis, such as **bold**, on both the term and the acronym.

><small>"A **Three Letter Acronym** (**TLA**) is an acronym that uses three letters."</small>

You may then use the acronym throughout the rest of the document. However, you should also first assess if an acronym is needed.

Acronyms are a level of [abstraction ↗](https://www.techopedia.com/definition/3736/abstraction). Readers must mentally expand recently learned acronyms to the full term to make sense of it. Because of this, if it is not necessary to create an acronym you should not do it.

The course gives the following guidelines for using (or not using) acronyms:
- Don't define acronyms that would only be used a few times.
- Do define acronyms that meet both of the following:
  - The acronym is significantly shorter than the full term.
  - The acronym appears many times in the document.

__4. Disambiguate pronouns__

Using a pronoun is a way of pointing to a previously introduced noun. Improper use of a pronoun can cause your writing to be difficult to interpret by the reader.

In many cases you can simply avoid using a pronoun and reuse the original noun. That is not always the case though:

><small>The utility of a pronoun sometimes outweighs **its** risk (as in this sentence).</small>

In general you should:

- Only use a pronoun after you've introduced the noun. Never use a pronoun before introducing the noun.
- Place the pronoun as close as possible to the referring noun. If more than five words seperate your noun and pronoun, you should instead consider repeating the noun.
- If introducing a second noun between the first noun and pronoun, reuse the original noun instead of using a pronoun.

1 - 'It' and 'They', 'Them' and 'Their'

These can cause a lot of confusion in technical writing. Here are two examples taken directly from the course:

><small>Python is interpreted, while C++ is compiled. **It** has an almost cult-like following.</small>
>
><small>Be careful when using Frambus or Carambola with HoobyScooby or BoiseFram because a bug in **their** core may cause accidental mass unfriending.</small>

In the first example the use of the pronoun (in bold) could be referring to either of the other nouns. Similarly, in the second example the pronoun could be referring to either group of previously mentioned nouns.

2 - 'This' and 'That'

Use of 'this' and 'that' as pronouns can lead to ambiguous sentences. Replacing the use of 'this' or 'that' with the appropriate noun, or placing the appropriate noun immediately after the use of 'this' or 'that' can help to disambiguate sentences.

This text is ambiguous:

><small>You may use either Frambus or Foo to calculate derivatives. **This** is not optimal.</small>

The following two texts include the appropriate noun to disambiguate the meaning of the text:

><small>You may use either Frambus or Foo to calculate derivatives. **Overlapping functionality** is not optimal.</small>
>
><small>You may use either Frambus or Foo to calculate derivatives. **This overlapping functionality** is not optimal.</small>

---
---

# Active Voice

## Introduction

<small>This is the second of several posts about the Technical Writing course provided by Google. They will each be tagged [Technical Writing](https://zacharyparsons.co.uk/tags/technical%20writing/).</small>

<small>This particular post covers the third unit:</small>

<small>3 - Active Voice</small>

<small>The course itself goes in to more detail in each topic, these notes aim to be a brief review in order to better fortify the concepts covered.</small>

<div class="bg-highlight color-primary-shade pad-top-base pad-bottom-base text-300 pad-left-base">

<div class="pad-left-base gap-bottom-base">
<p class="text-500">Learning Outcomes</p>
"Technical Writing One teaches you how to write clearer documentation."

>
According to the welcome page this course teaches the fundamentals of technical writing.

This post covers the following learning outcomes:
</div>

- Distinguish active voice from passive voice.
- Convert passive voice sentences to active voice.
- Identify three ways in which active voice is superior to passive voice.

<div class="pad-left-base pad-top-base">
<a class="button weight-bold font-base" target="_blank" href="https://developers.google.com/tech-writing/one#learning_objectives">See full list on course site ↗</a>
</div>

</div>

---

## Active Voice

Sentences in technical writing should usually be written in active voice.

### How to Distinguish Active Voice from Passive Voice

In an active voice sentence, an actor acts on a target. In a passive voice sentence this formula is reversed.

See the two formula below, followed by a basic example of each:

```javascript
Active Voice:
actor + verb + target
'The cat sat on the mat.'

Passive Voice:
target + verb + actor
'The mat was sat on by the cat.'
```

In each example the actor, the verb and the target remain the same:

```javascript
Actor: the cat
Verb: (was) sat
Target: the mat
```

The passive voice can also sometimes omit the actor. In this case the actor is unknown. Eg: `The mat was sat on.`

Omission of the actor can lead to a sentence being amiguous - in this case the reader is unaware of who sat on the mat. It may have been a dog, or any other animal. Good technical writing will be clear about who is doing an action.

### How to Recognise Passsive Verbs

A passive verb will usually be made up of __a form of *be*__ and the __past participle verb__. To make sense of that, you can break it down further:

- __A form of *be*__ will typically be:
    - is / are
    - was / were
- __The past participle verb__ will typically be the plain verb plus the suffix *ed*. Some examples are:
    - interpreted
    - generated
    - formed

There are also some irregular past participle verbs. In these cases the past participle form does not end with *ed*. Some examples are:
- sat
- known
- frozen

Some of the same examples as passive verbs are:
- was interpreted
- is generated
- was formed
- is frozen
- are known

If the phrase does contain an actor, a preposition ordinarily follows the passive verb. For example:
- was interpreted as
- is generated by
- was formed by

### Imperative Verbs are Typically Active

An __imperative verb__ is a command. Sentences that start with an imperative command are typically in active voice. They can often be confused as passive though because they do not usually contain an actor - however, the use of an imperative verb implies an actor. The implied actor is __you__.

A usual example of active voice with an imperative verb is in a list:

><small>1 - Open the configuration file</small>
>
><small>2 - Set the `Frombus` variable to `False`.</small>

### Some Examples

These images are taken directly from the course website (I hope google do not mind...):

![Passive & passive voice example](/images/passive-passive.png)

![Active & active voice example](/images/active-active.png)

### Use Active Voice More Often than Passive Voice

Active voice should be used most of the time. Passive voice should be used sparingly. Active voice has a few advantages for writers and readers:

- Most readers will mentally convert passive voice to active voice in order to better understand. Sticking to active voice removes this processing time for readers.
- Passive voice reports action indirectly. In doing so, it obfuscates the presented ideas.
- Passive voice can omit the actor altogether which forces the reader to guess critical information which could have been provided to them if the active voice had been used.
- Generally active voice is shorter than passive voice.

__Be bold — be active.__

---
---

# Clear Sentences

## Introduction

<small>This is the third of several posts about the Technical Writing course provided by Google. They will each be tagged [Technical Writing](https://zacharyparsons.co.uk/tags/technical%20writing/).</small>

<small>This particular post covers the unit:</small>

<small>Clear Sentences</small>

<small>The course itself goes in to more detail in each topic, these notes aim to be a brief review in order to better fortify the concepts covered.</small>

<div class="bg-highlight color-primary-shade pad-top-base pad-bottom-base text-300 pad-left-base">

<div class="pad-left-base gap-bottom-base">
<p class="text-500">Learning Outcomes</p>
"Technical Writing One teaches you how to write clearer documentation."

>
According to the welcome page this course teaches the fundamentals of technical writing.

This post covers the following learning outcomes:
</div>

- Develop at least three stratgies to make sentences clearer and more engaging.

<div class="pad-left-base pad-top-base">
<a class="button weight-bold font-base" target="_blank" href="https://developers.google.com/tech-writing/one#learning_objectives">See full list on course site ↗</a>
</div>

</div>

---

## Clear Sentences

><small>Comedy writers seek the funniest results, horror writers strive for the scariest, and technical writers aim for the clearest. In technical writing, clarity takes precedence over all other rules. This unit suggests a few ways to make your sentences beautifully clear.</small>

The aim in technical writing is to ['show the thing' ↗](https://gds.blog.gov.uk/2019/08/27/podcast-on-writing/).

Clarity takes precedence over style and 'all other rules' - to ensure clarity you should not dress up the thing you are presenting. Don't use metaphors, and explain clearly what the thing is and how it works.

### Choose Strong Verbs

The verb can be the most important part of a sentence. Choosing the correct verb allows the rest of the sentence to take care of itself. Take a little more time while writing to pick the right verb for the situation and your writing will yield more satisfying results than sticking to a small set of safe and widely re-used verbs.

Some examples of widely used and repeated verbs are:

- forms of **be**: is, are, am, was, were etc.
- occur
- happen

And some examples of switching these for a stronger, more precise, verb are:

| Weak Verb                                            | Strong Verb                         |
|:-----------------------------------------------------|:------------------------------------|
| The error **occurs** when clicking the Submit button.| Clicking the Submit button **triggers** the error.       |
| The error message **happens** when...        | The system **generates** this error message when... |
| We **are** very careful to ensure...         | We carefully **ensure**...                          |

Reliance on forms of **be** is very common in writing. Using different verbs can help your writing to be more direct, readable and informative. However, remember that a form of **be** is sometimes the best choice of verb - it does not need to be eliminated completely from your writing.

<small>Note: Generic verbs may also be a signal of other issues with your writing. They can indicate an imprecise or missing actor in a sentence, or a passive voice sentence.</small>

#### Examples

1 When a variable declaration doesn't have a datatype, a compiler error happens.

2 Compiler errors occur when you leave off a semicolon at the end of a statement.

<p align="center">⬇</p>

1 "When a variable declaration does not **specify** a datatype the compiler **generates** an error."

2 "A missing semicolon at the end of a statement **triggers** a compiler error."

---

### Reduce There is / There are

Using **There is** or **There are** at the beginning of a sentence can sometimes be simply unneccessary, and at other times be too generic. For example:

><small>There is a variable called `met_trick` that stores...</small>

In this situation **There is** can be removed by simply referring directly to the variable:

><small>A variable called `met_trick` stores...</small>

In a different situation removing the **There are** can be achieved by moving the true subject and true verb from the end to the beginning:

><small>There are two disturbing facts about Perl you should know.</small>
>
><small>You should know two disturbing facts about Perl.</small>

Or in some cases the inclusion of **There is** or **There are** means the sentence is omitting the true subject or verb. In this situation, consider creating a subject:

><small>There is no guarantee that the updates will be received in sequential order.</small>
>
><small>**Clients** may not receive the updates in sequential order.</small>

---

### Minimise Certain Adjectives and Adverbs

Adjectives and adverbs have their place in language and writing - they perform very well in fiction, poetry, drama and speech for example.

><small>Thanks to adjectives, plain old grass becomes **prodigal** and **verdant**, while lifeless hair transforms into something **silky** and **flowing**. Adverbs push horses to run **madly** and **freely** and dogs to bark **loudly** and **ferociously**. </small>

They do not perform so well in technical writing. In general they are too loosely defined and subjective to be useful for technical readers. Their use can make technical writing read too much like marketing material.

The example and explanation which the Google training module uses is:

><small>Setting this flag makes the application run **screamingly** fast.</small>

"Granted, screamingly fast gets readers attention but not necessarily in a good way. Feed your technical readers factual data instead of marketing speak. Refactor amorphous adverbs and adjectives into objective numerical information."

><small>Setting this flag makes the application run 225-250% faster.</small>

"Does the preceding change strip the sentence of some of its charm? Yes, a little, but the revamped sentence gains accuracy and believability."

---
---

# Short Sentences

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

---
---

# Lists and Tables

## Introduction

<small>This is the fifth of several posts about the Technical Writing course provided by Google. They will each be tagged [Technical Writing](https://zacharyparsons.co.uk/tags/technical%20writing/).</small>

<small>This particular post covers the unit:</small>

<small>Lists and Tables</small>

<small>The course itself goes in to more detail in each topic, these notes aim to be a brief review in order to better fortify the concepts covered.</small>

<div class="bg-highlight color-primary-shade pad-top-base pad-bottom-base text-300 pad-left-base">

<div class="pad-left-base gap-bottom-base">
<p class="text-500">Learning Outcomes</p>
"Technical Writing One teaches you how to write clearer documentation."

>
According to the welcome page this course teaches the fundamentals of technical writing.

This post covers the following learning outcomes:
</div>

- Understand the difference between bulleted lists and numbered lists.
- Create helpful lists.

<div class="pad-left-base pad-top-base">
<a class="button weight-bold font-base" target="_blank" href="https://developers.google.com/tech-writing/one#learning_objectives">See full list on course site ↗</a>
</div>

</div>

---

## Lists and Tables

### Types of Lists

Generally a list will read easier than prose. This is especially true in a technical context.

There are three types of list which are regularly used in technical writing:

- Bulleted lists
- Numbered lists
- Embedded lists

A **bulleted list** is used for *unordered* items. A **numbered list** is used for *ordered* items.

- Rearranging the items in a bulleted list *does not* change the list's meaning.
- Rearranging the items in a numbered list *does* change the list's meaning.

Examples:

>Bash provides the following string manipulation mechanisms:
>
>* deleting a substring from the start of a string
>* reading an entire file into one string variable

>Take the following steps to reconfigure the server:
>
>1. Stop the server.
>2. Edit the configuration file.
>3. Restart the server.

An **embedded list** contains items within a sentence.

Example:

>The llamacatcher API enables callers to create and query llamas, analyze alpacas, delete vicugnas, and track dromedaries.

Generally, an embedded list is not a great way to present technical information. Transforming an embedded list into a bulleted or numbered list usually provides a more clear way for the information to be processed by the reader. For example:

>The llamacatcher API enables callers to do the following:
>
>* Create and query llamas.
>* Analyze alpacas.
>* Delete vicugnas.
>* Track dromedaries.


### Parallel List Items

Keeping list items parallel with one another ensures that list will be effective. Defective lists tend to include nonparallel items. Items in a parallel list will match along the following parameters:

* grammar
* logical category
* capitalisation
* punctuation

Examples:

> Parallel list items:
>
> * carrots
> * potatoes
> * cabbages

> Nonparallel list items:
>
> * carrots
> * Potatoes.
> * The summer light obscures all memories of winter,

>"The first item in the list establishes a pattern that readers expect to see repeated in subsequent items."
>
><cite>[Google Technical Writing ↗](https://developers.google.com/tech-writing/one/lists-and-tables)</cite>

### Numbered Lists and Imperative Verbs

A numbered list can often have each item begin with an imperative verb. An imperative verb is a command, such as **open** or **start**.

Example:

> 1. Download the Frambus app from Google Play or iTunes.
> 2. Configure the Frambus app's settings.
> 3. Start the Frambus app.

Example of a nonparallel numbered list (two items begin with an imperative verb, the third does not):

> 1. Instantiate the Froobus class.
> 2. Invoke the Froobus.Salmonella() method.
> 3. The process stalls.

### Punctuate List Items

For a complete sentence, use capitalisation and punctuation. Otherwise do not. However, within each list, be consistent (as covered above).

Example:

> * Most carambolas have five ridges.

> * the colour of lemons

## Useful Tables

When there is a choice between reading multiple paragraphs or reading the key information in a table, many analytical minds will choose to use the table to find out what they need to know.

Some guidelines for creating tables:

* Label each column with a meaningful header. Don't make the reader guess what that column holds.
* Avoid putting too much text into a table cell. If a table cell holds more than two sentences, ask yourself whether that information belongs in another format.
* Although different columns can hold different types of data, strive for parallelism within individual columns. For instance, the cells within a particular table column should not be a mixture of numerical data and famous circus elephants*.

><small>*Taken directly from Google's training page! 🐘</small>

### Introduce Lists and Tables

A short and well written introduction for each list and table tells the reader what the list or table represents. It will give the reader context for the list or table. The sentence can be terminated with a colon instead of a full-stop.

Use of the word **following** is regularly appropriate. For example, consider the following introductory sentences:

>The following list identifies key performance parameters:
>
>Take the following steps to install the Frambus package:
>
>The following table summarises our product's features:

The following table is an example of an effective table:

| Language          | Inventor      | Year Introduced   | Key Feature   |
|:------------------|:--------------|:------------------|:--------------|
| Lisp              | John McCarthy | 1958              | recursion     |
| C++               | Bjarne Stroustrup| 1979           | OOP           |
| Python            | Guido van Rossum | 1994           | simplicity    |
