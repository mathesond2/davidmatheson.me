---
layout: post
title:  "HomeTrackR: (UI Design and Development)"
date:   2015-03-06
---

You know Carfax, right? Imagine that for your house. Imagine if you were able to grab every bit of info on your home since records started being kept on it. What would be uncovered? What value would that have for you as a homeowner? What about as a potential homebuyer or homeseller? [HomeTrackR](https://hometrackr.com/) is a company focused on creating that value and providing it to consumers, real estate agents, and home inspectors as well.

I was incredibly honored to **completely redesign the UI and do the front-end development** for HomeTrackR's initial flagship product, the Home History Report, containing a vast array of data pulled from various sources about (you guessed it) a home's history. This included records, permits, indications of home damage (fire/water/pest) and more, all to be displayed in a single, clean, easily understood interface.

#### Lets get to it.
The initial UI, while a great MVP, was in need of some serious TLC.

<a href="{{ site.baseurl }}/assets/img/hometrackr-ui/old-screen.png"><img src="{{ site.baseurl }}/assets/img/hometrackr-ui/old-screen.png"></a>

I started by looking at the existing site and assets, drawing a visual relationship between previous mocks from another designer, the HomeTrackR marketing site, and what we already had in the Home History Report.

###### previous designer screen
<a href="{{ site.baseurl }}/assets/img/hometrackr-ui/previous-designer-mocks.png"><img src="{{ site.baseurl }}/assets/img/hometrackr-ui/previous-designer-mocks.png"></a>

###### marketing site screen
<a href="{{ site.baseurl }}/assets/img/hometrackr-ui/website-screen.png"><img src="{{ site.baseurl }}/assets/img/hometrackr-ui/website-screen.png"></a>

Using [Sketch](http://bohemiancoding.com/sketch/), I designed a stronger hierarchy within the layout, organizing each section into its own module, with submodules inside where necessary (see the permits section). Likewise, I gave the typography a facelift, further breaking apart the sections in addition to providing points of interest to the users, and organizing the data in a manner that could be understood at a glance. I kept the colors from the previous designer's mocks, using them to further reinforce the hierarchies created by layout and type.

#### The Timeline
The first section of the Home History Report was incredibly pertinent: before they purchased a report, a user would quickly need to know how many records had been found about their selected property, and the property's timeline needed to not only be visible, but underlined a few times over for further understanding.

###### The initial timeline:
<a href="{{ site.baseurl }}/assets/img/hometrackr-ui/screens.png"><img src="{{ site.baseurl }}/assets/img/hometrackr-ui/initial-timeline.png"></a>

From a business standpoint, **the design of this timeline was so important because users were purchasing reports often thinking that they had records since the very beginning of the house's existence, which was often was NOT the case**; the report only had records since records had started being kept on the property, which varied widely depending on location and circumstance. **Some customers had asked for their money back, and the new timeline needed to clearly show the discrepancy between the timeline of the home records and timeline of the home itself**. I remedied this issue by placing the timeline at the very beginning of the report, showing animated markers for when the home had been built, when home coverage had began, and when it had ended (if not ongoing). To further state this point, an explanation in text was shown below with the same animated marker. The updated timeline did this so successfully that it was used not only in the Home History Report but in other areas of the marketing site to illustrate those very points. Not bad!!

###### The final timeline
<a href="{{ site.baseurl }}/assets/img/hometrackr-ui/final-timeline.png"><img src="{{ site.baseurl }}/assets/img/hometrackr-ui/final-timeline.png"></a>


#### Permits
One of the biggest design challenges of the initial MVP was to take that massive chunk of data in the "Permits" section and condense it without taking away valuable information. I resolved this fairly easily with the idea for accordion dropdowns for each permit panel, each to be nested inside of the main "Permits" panel itself. These accordion panels would initially be collapsed except for the first one, giving the user a visual understanding of the expand/collapse nature of the accordion if they were unfamiliar, while also having an option to expand/collapse all panels. Inside the individually expanded accordion, the permit attributes were further condensed with tighter inline lists, and the icons were made smaller and the same color as text, to denote a new section while keeping the noise low. At the bottom of the Permits section, a data source section was designed as its own panel, keeping where the information had come from at the forefront of the report.

**Check out how condensed this bad boy gets:**

<img src="{{ site.baseurl }}/assets/img/hometrackr-ui/old-vs-new-report.png">

**BAM!!**

Finally, while a contractor list had been provided in each of the permits, another section was created to display the total list of contractors at a glance, which would be incredibly helpful if there had been a lot of activity.

I almost forgot to mention: As the HomeTrackR market is in real estate, **many real estate agents still print out documents and give them to prospective customers...so this had to be designed for print as well!** In creating the print version, I used a more muted color pallette, turned the animations solid (to prevent the timeline from disappearing), automatically expanded all permit panels, and made it perfectly fit a standard 8.5 x 11 page.

The end result is a clean, lightweight interface that is incredibly easy to take in at a glance, simple to understand, with clear options to pursue each section further if they wish (through accordion dropdowns, tooltips, and contact info always at the forefront). The Home History Report was easily my funnest project to date, hands down!

**Take a look:**

<a href="{{ site.baseurl }}/assets/img/hometrackr-ui/all-new.png"><img src="{{ site.baseurl }}/assets/img/hometrackr-ui/all-new.png"></a>


#### Wanna hear about the UI Development? OK, well I...

* switched icons from .pngs to .svg-based font-icons (via [Icomoon](https://icomoon.io/)).
* created a stylized google map to match the new design in addition to preventing the common scroll issues with Google Maps (getting lost in the zoom/scroll).
* further condensing Alert info in tooltips
* organized out the front-end code in a SMACSS-style format
* wrote styles using SASS
* developed the report responsively, from 1400-450px.
* chunked out the html mark-up using partials ("gas-permit.html", "electrical-permit.html", etc).
* used [Github Pages](https://pages.github.com/) to display up-to-the-minute updates to keep the team in the loop.

**Want more? Just ask. :)**
