---
layout: layouts/post.njk
title: "'Lists and Tables' - Technical Writing One - Google"
metaTitle: "'Lists and Tables' from Technical Writing One - Google - My experience
  completing the Google module."
metaDesc: A post about using lists and tables in technical writing to help create order from chaos. It covers a section of the technical writing one module provided by Google - written by Zachary Parsons.
socialImage: /images/glenn-carstens-peter-lists-and-tables.jpg
date: 2020-07-09
tags:
  - Technical Writing
  - Google
  - blog
excerpt: The aim in technical writing is to 'show the thing'.
---

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

