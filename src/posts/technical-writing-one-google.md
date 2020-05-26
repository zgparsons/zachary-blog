---
layout: layouts/post.njk
title: "'Words' - Technical Writing One - Google"
metaTitle: "'Words' from Technical Writing One - Google - My experience
  completing the Google module."
metaDesc: A post about completing the 'Words' section of the technical writing
  one module provided by Google - written by Zachary Parsons
socialImage: /images/glenn-carstens-peters-unsplash-words-post.jpg
date: 2020-05-26T12:19:04.383Z
tags:
  - Technical Writing
  - Google
  - blog
---

## Introduction

<small>This will be the first of several posts about the Technical Writing course provided by Google. Together they will form a general overview of the course. They will each be tagged [Technical Writing](https://zacharyparsons.co.uk/tags/technical%20writing/).</small>

<small>This particular post covers the first two units:

1 - Just Enough Grammar (Optional Unit)

2 - Words</small>

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



