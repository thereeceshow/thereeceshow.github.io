# Reece Walter
![Reece's Face](https://avatars.githubusercontent.com/u/58195393?s=400&u=8558a8fe90be60184330fbdcb54a0d1496e83cee&v=4)

---
> "The happiness of your life depends upon the quality of your thoughts."

> "You have power over your mind - not outside events. Realize this, and you will find strength."

> "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment."

#### - Marcus Aurelius

***

## Chronicling an Awesome Coding Journey

***

### Week 5
#### Saturday, Feb 27th, 2021

*What is the number one thing that held you back this week? Why?*

  >Jumping into Bootstrap unlocked a new world, and also a created lot of places to get hung up.  For one, there are so many easy to implement options, but that can lead to death by indecision.  Also, the understanding of what each class does is still a learning opportunity.  Some are easy to grasp and make sense, i.e. mx-1, text-center, etc.  Others will take more time to figure out (the 10 different Nav classes in a Nav bar).

  >If anything is holding me back, its understanding the mechanics of all the classes on the more complex Bootstrap molecules and organisms.  Its is an time-based impediment.  Its a bottleneck.  A Navbar has several divs with different nav classes. Finding the right div that affects what I'm targeting is not as intuitive as I would like.  I'm spending a lot of time with the Dev Tools inspector, trying to find what class is controlling things at multiple breakpoints.

  >If "The Obstacle is the Way", its helping me do a few other things besides just get more familiar with BootStrap classes..
  
  > * I'm getting good practice in with Dev Tools, and finding styles in very complicated CSS sheets.
  > * I'm getting good at inspecting things I didn't write (BootStrap's Classes).  Where the naming convention isn't the way I would name something necessarily.

  >  [x] Understand the BootStrap Layout & Grid System.
  >  [x] Understand the principles of Atomic Design.
  >  [ ] Understand how to rework a complex Bootstrap Molecule to factor in several changes.
  >  [ ] Completely understanding when something is a molecule vs and organism.


 
*What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures)?*

  > I think we have been shown a little about the existence, and structure of JavaScript Objects.  I think seeing where these have real power will be helpful.  Hopefully we can see them in action more.  Maybe some of the Katas will start to introduce them.


 
*What is one thing you would like to learn more about regarding Bootstrap or Atomic Design?*

  > I'm a little fuzzy on exactly when a molecule becomes an organism.  I can see the difference in a lot of cases.  I like the comparison of a molecule being reusable, and an organism being a single use item... but that makes me me think some organisms are more simple than other molecules.

  > For example, if this still holds true... there should only be on `<h1>` on a page.  A header is certainly only a molecule... but in this case would it also be an Organism (I know its not... but this is just the most extreme example I can think of... other cases seem more ambiguous.)

***

### Week 4
#### Friday, Feb 18th, 2021

This is the end of the prework portion of our bootcamp.  I'm excited to see everyone in person.

[Checkout my watch project.](http://thereeceshow.github.io/clock/)

### Week 3
#### Friday, Feb 11th, 2021

<br>

The Questions Are:

1. What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing user experience?
  * I heard these described as the essential elements in a sentence.
    * **Noun**
      * ***HTML*** The subject of the page, the main content.
    * **Adjective**
      * ***CSS*** How it looks, CSS describes the HTML.
    * **Verb**  
      * ***JavaScript*** Action.  JS is all about doing.

Luckily we also have the dictionary, MDN.

1. What are some objects that your blog incorporates?

  I'm not sure in includes any Objects currently, and a Web Dev since of the word.



#### Tuesday, Feb 9th, 2021

<br>

Here is a little mid-week question.

For vs While

For loops for a specified number of times. While runs for as long as a condition is true.

But how is that not the same thing?

See below:

> <code>var i = 0</code>

These results are the same:

> <code>while (i < 10) {
  console.log("The number is " + i);
  i++;
}</code>

> <code>for (let i = 0; i <10; i++) {
>  console.log(‘’The number is ‘ + i);
> }</code>

***

### Week 2
#### Friday, Feb 5th, 2021

<br>

We have just finished week 2 of our pre-work.  Everyone on <abbr title="Smith, Katy, Harris, Steven, Scott, Eric, and myself">Team Hopper</abbr> had good presentations today for our strangely similar Splash page's.

We had a good talk about uses of Dev Tools and the Document Object Model, or DOM.  We got into talking about the ethics of viewing, borrowing, and using other's code.

Justin and Ian spoke about learning to write code by writing code is much better than not learning to write code by copying code.

That reminded me of a story I read in [Flash Boys by Michael Lewis](https://www.amazon.com/Flash-Boys-Wall-Street-Revolt/dp/0393351599) where it talks about why Russia was producing some of the best programmers ever.  In the West, students had tons of access to computers, but didn't code as well as the Russians who had limited *Machine Time*.

Because the Russian programers may only have an hour or so time on the actual computer a week, they wrote all their code out on paper, and debugged it in their minds.  Not talking about pesudocode either.  This was precise, perfect syntax, and everything.  They also didn't have <u>Stack Exchange</u> to look anything up either...

***Scarce resources are valuable.***

Thinking about that story makes me think I need to reconsider just how valuable pseduocode can be, especially as we add more and more layers and complexity to our projects.

If you aren't familiar with <u>Flash Boys</u>, check it out.  Its the story of how some coders changed Wall Street \(and not in a good way\), long before Reddit, and Robinhood.

* * *

### Day 1
#### Monday, Jan 25th, 2021

<br>

There is a lot to learn. 

- [ ] Git
- [ ] GitHub
- [ ] Markdown
- [ ] CLI/Terminal/Bash/Zsh
- [x] Bash does **NOT** care that Get sounds the same as Git
- [x] It also case sensitive... *$ git add -a* and *$ git add -A* are not the same.  

### Here are something I have learned so far though.

1. *The Cliffs of Confusion might be a National Park with many cliffs.*
![Cliffs of Confusion?](https://c.files.bbci.co.uk/166B4/production/_107082819_413a9fc2-e8ef-4dc9-9b0b-c5fa6324f1ab.jpg)
![Clifty Wilderness of Confusion](https://www.outragegis.com/pixel/_data/i/galleries/120127_CliftyWilderness/Clifty%20Wilderness-cu_e520x360.jpg)
![Falling off Cliff](https://thumbs.gfycat.com/BothDarkIguana-small.gif)
1. Git makes more sense when I actually do it.
1. Its probably best is we don't let the *designers* see these pages yet.

### How to do a collapsable list with MD:

<details> 
<summary> Use this code </summary>

# `# "Whatever heading you want here"`

`<details>`

`<summary> Click this to Expand the List </summary>`

*`Put your list items here`*

`1. One`

`1. Two`

`1. Thirteenteen`

`1. Shfifty-Five`

`</details>`

These tags look more like traditional HTML tags than what we have been using in MD so far.

</details>

### *Here is something I learned,  and I am testing:*

* On my old device (Macbook Pro) my directory containing everything in here was backed up to iCloud.
* When I added my Desktop and Documents to be connected to my iCloud on the new device, all the exisiting folders and files showed up.
* When I ran newcomputer % ls -a on the new device, the .git file was there.
* Now I am making these changes we see right now to see if I can push it up the GitHub.  I will update:
* Note:  Any changes I make to the files on either device will change on the other device too, iCloud will sync the most current version of each one.  I may have to experiment and see what happens if I open both at the same time and make different changes.  I imagine it'll be whichever is saved last.
* There is another intresteing thing I'm curious about right now... but as a security issue... I'm not sure I should publish it on the interwebs.  I'll talk about it on our standup.

### Test 2
### Test Again.  Pushing Once at EST: 11:40 AM Monday Feb 1