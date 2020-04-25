---
title: Nunjucks & Templating
description: An introduction to Nunjucks, other templating languages and HTML preprocessing
layout: layouts/post.njk
metaTitle: An introduction to Nunjucks and HTML preprocessing
metaDesc: A post about templating languages such as Nunjucks - written by
  Zachary Parsons and published at zacharyparsons.co.uk
date: 2020-05-15T00:00:00.000Z
tags:
  - Jamstack
  - Static Sites
---

# Nunjucks & Other Templating Languages

Though it may be done differently, they each do the same thing essentially: preprocess HTML. This means they process one or more files and output HTML. Nunjucks is nice because it *is* HTML, the only difference is you can use templating syntax to add

## HTML Preprocessing


## Layout Structuring

Those layout files can be stacked too. So it's very likely that your 'post' layout will first include the 'base' layout, and then have a slightly different layout from cornerstone pages or generic pages.

For example the 'base' layout would include the site's HTML elements that every page shares. The 'home' layout will include first that 'base' layout, and then only the layout which the home page has. The 'post' layout will include the 'base' layout, and then the layout which all of the blog posts share.

