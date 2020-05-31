---
layout: layouts/post.njk
title: "'Clear Sentences' - Technical Writing One - Google"
metaTitle: "'Clear Sentences' from Technical Writing One - Google - My experience
  completing the Google module."
metaDesc: A post exploring the importance of writing clear sentences in technical writing. It covers a section of the technical writing one module provided by Google - written by Zachary Parsons.
socialImage: /images/cathryn-lavery-unsplash-clear-sentences.jpg
date: 2020-05-28
tags:
  - Technical Writing
  - Google
  - blog
excerpt: The aim in technical writing is to 'show the thing'.
---

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