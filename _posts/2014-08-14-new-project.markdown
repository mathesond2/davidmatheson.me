---
layout: post
title:  "Yes, A Side Project"
---

<img src="{{ site.baseurl }}/assets/img/sketch-2.png">

A few months back, I published [my first Chrome extension](https://chrome.google.com/webstore/detail/we-out-here/iggdjonhgnnoobmehknpkboenhppeaeh?hl=en-US) to the Chrome web store. It felt pretty good to do that. So my wheels kept turning, "What else could I make?" 

Lately, I've been leaning heavily toward the UX side of Life, and I started bugging friends about their jobs and what their frustrations were. What exactly was the biggest pain in the ass for them? And could something tech-based actually help? I was talking to my friend George, a traveling tattoo artist (cue the music) who described the hardest part of his job being getting the client to actually show up. "It's not like a doctor's appointment", he says, "they aren't gonna call you and reschedule for next Thursday. They just won't show." We got to talking about down deposits, about how, if the client had already put their money down, they'd be more unlikely to try any funny business. We chatted about Square, Stripe, etc to solve this issue but after talking, it all seemed a bit cumbersome, like this:

* First, he'd go into his planner and schedule them. 
* Then, he'd enter their phone number into his contacts, and save it.
* Then, he'd go into square/stripe,choose the amount, and go through that whole process. 
* Then the day before the date, he'd call them up to remind them again. 

This is all obviously do-able, but it requires a good bit of effort..maybe too much effort. Perhaps we could knock a few steps out, instead of going from one app to another, we could pull them all in (Gcal, Square, txt notifications, phone contacts) into one simple interface? Seemed like a good enough excuse to make something to me, and something that could have some serious utilitarian value to it. Think about it: tattoo artists are largely self-employed at the shops they work at. This means that this app could extend beyond tattooing and into hair stylists, make-up artists, basically anyone self-employed that has to make appointments and does business on the go. 

So I started to get a lil excited. 

We began running through the scenarios of when/where this would be used. As it would be used in the midst of a conversation between the person and their prospective client, I'd have to make something small and simple that wouldn't break the flow of dialogue between the two. Whatever it'd be, it'd have to be quiet and fast. Likewise, as money was being transacted, there would have to be strong signs that the transaction had actually went through, so both parties would be able to trust it. 

After mapping out the scenario, we began to map out the steps that would be involved:
	
1. Get the client's deposit down.
2. Get their name and phone number.
3. Book the appointment date.

Should it be more? Seemed a little sparse, honestly. Then again, this is all it really needed to do. After figuring out those steps, I decided to start sketching a few ideas for the interface. 

I've been loosely taking an [HCI class](https://www.coursera.org/course/hciucsd) on Coursera lately, and decided to test out a few methods. After a rough understanding of the interface, how the user would go about using it, I decided to make a few paper prototypes and actually go through the process myself, mocking out everything that I had drawn..each screen as a sheet of paper, with each component (buttons, dropdowns) also, using my own iphone to mock out the approximate sizes. Through acting out the user's process, I came to several realizations:

 * "Hey, they should probably initially log in"
 * "Let's consolidate a screen or two"
 * "Instead of two inputs for name, just make it one."
 * "Do they really need their email address? Nah."

This also was a great excuse to test out Sketch, a UI Design tool made by the good people at [Bohemian Coding](http://bohemiancoding.com/sketch/). I'd heard plenty, but didn't have a reason to work with it until now. Sketch comes chock-full of tools, from existing UI elements to stock artboards and so on. I'm not going to front: I'm not a pro yet, but what I've seen, I've liked. My favorite thing about Sketch is the consistency between artboards, both with type and shapes. Simply put, if you change a specific text size in one artboard, it can do it for all. This consistency is INCREDIBLY useful, and made creating wireframes for multiple screens a total dream. Yea yea, I know Sketch isn't a wireframing tool but whatevs. I like it.

<img src="{{ site.baseurl }}/assets/img/sketch-1.png">


The initial mock screens weren't the cutest, but they got the job done in translating my ideas from paper to the small-screen. 

Now I started thinking, "How the hell do I actually build this thing??" Of course, a couple dev friends have mentioned Swift, but I had no interest in throwing myself another curveball in this side project. Likewise, I didn't want to go the Objective C route. As a front end dev, I know html/css/js, and [Phonegap](http://phonegap.com/) came through to save the day. I've only recently started hearing about Phonegap, and decided to do my homework. It seems pretty promising, particularly using [Phonegap Build](https://build.phonegap.com/), in addition to the larger-than-I-thought Phonegap Dev community. I downloaded a few phonegap apps from the App Store, played around with them...they seemed to work pretty damn well. All the talk of slow response, and a lack of "native-like" interactions..I didn't see too much of it. Thus, Phonegap got the green light.

This led to my first digital prototype. 

As written above, I often find excuses in my side projects to use new things, new frameworks, methods, elves, etc. I'd been looking into Twitter's mobile prototyping framework, [Ratchet](http://goratchet.com/), and decided to give it a spin. I whipped up a server, used the [emulation feature](https://developer.chrome.com/devtools/docs/device-mode) with Chrome DevTools (seriously awesome), and started throwing down some code. It was a breeze, though obviously a bit visually sparse.

<img src="{{ site.baseurl }}/assets/img/prototype-1.png">

This leads me to where I am at the moment, about to take the REAL deep dive into the code: What do I use to make the deposit transaction (Stripe? Square? Paypal? Huh?) and how the HELL do I do that? I'll be wading through documentation this week. Updates soon!