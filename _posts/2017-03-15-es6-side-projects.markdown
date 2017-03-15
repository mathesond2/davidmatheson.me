---
layout: post
title: "small ES6 projects"
date: 2017-03-15
categories: misc
---

For the past couple months, I've been creating small projects on my off-time to get a better feel for ES6, make cool things that I want to see, and to write Javascript all the time. This effort is ongoing, but I figured I'd share my most recent work. Lets start from the top.

TL;DR: Heres the [CODE](https://github.com/mathesond2/vanilla-js-projects).

#### Notepad Project
This project is a simple little notepad that lives in your browser, useful for writing down todos or thoughts while basically living in your laptop (like I do at times). It also allows you to click and drag a note to your desktop, which creates a file with the date so you'll remember. I learned more about localStorage and sessionStorage, as well as a few methods I'd never used, like `onDragStart()` and the dataTransfer object.

#### New York Squares
This was a small project created in conjunction with some stuff I'd learned from taking Wes Bos' [Javascript30](https://javascript30.com/) course about using the `Fetch()` API (I had previously used `XMLHttpRequests` before for AJAX calls) in addition to being a nice playground for learning more about ES6 promises. Basically, this program works by fetching a JSON array of objects, each with a NYC square name and Instagram location ID. For each object in the array, I formatted the square name using a regular expression so its name shows up without its descriptor (for example, 'Tompkins' rather than 'Tompkins Park'), and then used a 3rd party library called [Instafeed](http://instafeedjs.com/) to find the most recent Instagram photographs at that specific place using each square's location ID. After this, it's appended to the DOM. Nothing too crazy, but still a fun day project and a perfect reason to flex some plain ES6.

#### Waterfalls
This project was actually a continuation on a small project I had been tinkering with before coming to IBM. I had created a couple web scrapers that went to a site and scraped off the name, longitude, and latitude of over 11,000 different waterfalls in the United States. I created a MVP where a user would go to the site, and if they provided their geolocation, the 10 closest waterfalls would be given back to them, complete with a Google Maps address for each. I went back to this project a year and a half later, and decided to make a much more improved ES6 version.

This project was a great entryway into starting to think about modularizing my JS code, and I chose JSPM as my bundler/package manager of choice because my current product at work uses it, and this would be a great sandbox to get a better feel for it.

How this works is a user is first prompted to allow access to their geolocation and if so, the program takes the user's latitude and longitude, and uses the `map()` function to loop through each waterfall (grabbed via `fetch()`) and calculates if a waterfall is less than 50 miles away. If so, the waterfalls are added to an empty array, which are then sorted from closest-furthest and truncated at 10 results. Finally, those 10 results are added to the DOM with Google Maps links to each waterfall.

Note: There's also a TLC instrumental that plays once you give your location. 😛

Within this project I also wanted to work with multiple bits of functionality to get a better understanding of how to manage modules, so I included a filter functionality learned from a previous course. As stated earlier, this was a great simple project to start working with JSPM and start thinking much more modularly about how I write my Javascript.

#### Words With No Translation
I've always been fascinated by words that have no direct translation to English, and so a new ES6 project was a pretty great excuse to learn more about them!

The resulting program is a CRUD app I created via localStorage, and I learned SO MUCH from this project. The previous project was an intro to thinking more modularly, and this was the perfect follow-up.

This project helped me think more about the 'whys' of when to modularize your JS. I initially started out writing it all in one file to get the functionality down, and was going to create individual files for each functionality (one for 'create', one for 'update', etc). Through working through this project I let the code take its own shape and created JS modules based on maintaining complexity and only showing what was needed. I also learned a good deal about how difficult it can be to maintain state, and more clearly see the benefits and trade-offs made when choosing a client-side framework to do so.

Being solely browser-based, this project initially grabs data from a JSON file that gets pushed into an array named 'storedWordList' which is then put into localStorage. Then, another function maps over that array and for every item in it, html elements are pushed to the DOM with their corresponding 'word' values. Event Listeners are also added for 'update', 'delete', and 'create' functionality as well, and are added once the DOM is populated. The 'add' functionality takes the values from input fields and once submitted, are added as an object to the 'storedWordList' array currently existing in localStorage. This project actually helped drive home the point that localStorage only accepts strings, and so I had to use `JSON.stringify()` to store my values, and `JSON.parse()` to work with them as an array.

The 'read' and 'create' functionality, however, was the easy part. The hard part of this project was understanding how to update values on the fly, and make sure those values were updated in localStorage as well. I ended up writing a mountain of code for the 'update' functionality and while my functions were nice and only did one thing, there was a ton of duplication and the code itself was not easily understandable whatsoever. I knew I would have to separate the 'update' functionality into its own file, but still didn't know how to structure it out properly in order to reduce all of the duplication I'd seen. I did a good bit of research and ran into a great article about [The Module Pattern](https://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/) on CSS Tricks that gave me waaaaay more understanding than I had before, and while it is only **one way** to write your JS more modularly, it provided a great initial structure for me to work with.

I created an 'Update' module that had shared items in its own object, along with functions for editing a word's value, updating its value, and updating its meaning as well. Within the `editWordValue()` function, I make the clicked element editable, grab its index number from localStorage (found by matching it to the clicked word's `textContent`) and push it into an array for future use. I also add/remove styles and display the word's meaning to the DOM. Within the `updateWordValue()` function, I grab the **now-currently-being-edited** word and do the same matching function to find it within localStorage. If the word is being edited, it will come up as `undefined` and so at that point, I go back to the original localStorage array object, found from the previous function's index number, make its 'word' property value that of the currently edited word, and update the array in localStorage as well. `updateWordValue()` differs from `editWordValue()` in that it occurs on `blur`, when a user has clicked away and signifies that he/she is done. Finally, the last function, `updateWordMeaningValue()` does the same thing but for a word's meaning. All of this occurs on click handlers held in the `bindUIActions()` function, which is fired inside the Update module's `init()` function.

Being able to modularize my 'update' functionality made it much, much easier to sort through and understand my own code, in addition to being able to share it with others (or perhaps just myself 5 months from now 😏), and allowed for a much cleaner `main.js` file.

Finally, the delete functionality was created from a click event listener that fires off a function which matches the word's meaning to its `meaning` property value, and then splices it from the 'storedWordList' array, updates localStorage, and updates the DOM as well.

WHEW! That was a lot. If you got to this point, thanks! This is an ongoing project, so I'll keep posting as I keep making stuff. And I suppose really that thats the biggest point, to keep making stuff, and to keep learning.
