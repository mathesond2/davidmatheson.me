---
layout: post
title: "Side Project: 'Words Without Translation', a NPM Package"
date: 2017-08-05
categories: side project
---

````
let getRandomWordWithLanguage = wordsWithoutTranslation.getRandomWordWithLanguage('Chinese');
console.log(getRandomWordWithLanguage);

/*
{ name: 'Xingfu',
  meaning: 'A sort of happiness or contentedness felt through having everything you want in life and/or not having any looming worries. It describes a long-term feeling about one’s life situation rather than a happiness achieved through a singular outcome or situation.',
  language: 'Chinese',
  tags: [ 'happiness', 'life', 'positive' ] }
*/
````

I wanted to learn how to create my own NPM Module, so I took a weekend out and decided to do it. I've always been fascinated by words that have no direct English translation, and I came across a pretty huge blog with over 500 words and definitions with no direct English translation. Using [webscraper.io](http://webscraper.io/), I created a quick web scraper to grab all the data, and then planned out the functionality I'd give to a user of this NPM Module, finally translating the functionality to code and making sure the appropriate tests were implemented and working. 

Check it out [here](https://github.com/mathesond2/words-without-translation).
