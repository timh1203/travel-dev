---
path: '/easy-habit'
date: 'June 22, 2018'
title: 'After 365 Days of Code — A Habit Made Easy to Keep, Harder to Quit (Part 1 of 3)'
author: 'Timothy Hoang'
tagline: 'Pharmacist to Developer'
link: 'https://medium.com/@timh1203/after-365-days-of-code-a-habit-made-easy-to-keep-harder-to-quit-part-1-of-3-529706598e0d'
image: 'https://cdn-images-1.medium.com/max/1600/1*0K__GLghuzwXj1wLpqdlow.png'
tags: '#100DaysOfCode, 365 Days of Code, Coding Everyday, Habit Building'
photoAuthor: 'Timothy Hoang'
---

![](https://cdn-images-1.medium.com/max/1600/1*u6L5s4kSNzjxFcXiwlmhJA.png)
<span class="figcaption_hack">I’m not perfect but with our fumbling efforts, we advance.</span>

I’m not anyone special; I just really love coding. For 365 days, I did something
related to coding whether it’s practicing Javascript chops or light head-banging
web apps. In this article, I want to share with you what happened since the [200
Days of Code Article](https://medium.com/@timh1203/introduction-b64d03d47b39),
[Pearls from a Self-Taught Web
Developer](http://traveldev.net/developer-pearls)
(Part 2), and finally [The Extraordinary
Plans](http://traveldev.net/extraordinary-plans)
(Part 3). Before I go any further, I want to send out some special mentions of
people in the #100DaysofCode coding community who either has inspired me or been
a positive force in my progress. Thanks to [Joe
Previte](https://medium.com/@jjprevite), [Peter
Cruckshank](https://medium.com/@petecruckshank), and [Sibylle
Sehl](https://medium.com/@s_ibs) who makes me want to become a better developer
everyday. 😃

## Phase 1: Free Code Camp Certification

![](https://cdn-images-1.medium.com/max/1600/1*qXeO1wJA87MFXZi9KMIyAw.png)
<span class="figcaption_hack">A cool moment for me!</span>

I started the Free Code Camp curriculum (pre-beta) at the beginning of 2017 and
I just finished in March 2018. I jumped around to other courses to reinforce my
learning alongside Free Code Camp. Colt Steele and Wes Bos courses were really
helpful in my case. Around this time, I also got a take-home challenge from a
company that used React/Node/React Native but unfortunately it didn’t fall
through. Oh well. To reach the certification, I had to complete a couple more
projects including the [Javascript
calculator](https://timh1203.github.io/calculator-app) (finished Feb 6th),
[Pomodoro timer](https://timh1203.github.io/pomodoro-app/) (finished Feb 12th),
[Tic-Tac-Toe game](https://timh1203.github.io/tictactoe-game) (finished Mar
5th), and [Simon game](https://timh1203.github.io/simon-game) (finished Mar
14th).

![](https://cdn-images-1.medium.com/max/1600/1*gFEcqg-FVq5oj2dn2lM8WQ.png)
<span class="figcaption_hack">Don’t use the eval() method!</span>

With the Javascript calculator, I initially used the eval() method to make the
calculations but also read that it was a big no-no due to security
vulnerabilities. Eventually, I figured out my way around this. With the Pomodoro
timer, the toughest issue would probably be formatting the minutes and hours but
otherwise pretty straightforward. *The Tic-Tac-Toe game was probably the hardest
due to implementation the MiniMax recursive algorithm*. I got stuck on this for
a week or so until I decided to wipe the table and start all over. Second time
was a charm I guess! The Simon game wasn’t too difficult conceptually. It’s
pretty much storing a pattern and double checking if the user input matches that
pattern. The async nature of javascript might trip you up though but don’t give
in! I used React to build the last two game projects. Feel free to check out
[portfolio](http://timothyhoang.net/) if you want to see my code. 🔥

![](https://cdn-images-1.medium.com/max/1600/1*gUev-PYntv9MWibivjH52g.png)
<span class="figcaption_hack">One of the harder projects from the curriculum!</span>

I was pretty excited to receive my front end certification I knew that learning
is never truly over and I didn’t want to stop. I’ll tell you a truth though,
you’ll learn to better deal with javascript fatigue and frustration once you get
past a certain stage. *The biggest realization was probably knowing that
off-screen time was just as important as on-screen time, as stepping away was
somehow magically just as productive*. 🎩

## Phase 2: Diving into the ME(R)N stack

Yup, I was learning MEN (MongoDB, Express, and Node) as I didn’t use React
during this phase. I continued with Colt Steele’s Web Development Course to go
into back-end development as I have previously finished all the front-end
lessons already. It’s a really great foundational introduction but it uses ES5
syntax at most points, which I later refactored to ES6. I picked up a lot
building the Yelpcamp app featured in the course as well as the extra add-ons
like Google Maps, Cloudinary, password reset, flash messages, and more. I
finished the whole course on April 9th and promptly started my own backend app
called “[Wanderlustoria](https://wanderlustoria.herokuapp.com/)”.

![](https://cdn-images-1.medium.com/max/1600/1*noti08QguLnhiOOG6hx-wg.jpeg)
<span class="figcaption_hack">Too frantic, loud, and bright for my tastes.</span>

During this time, I also went to a hackathon called Bitcamp 2018 and had my
first ever taste of soylent (Cafe chai if you’re wondering). The taste was
reminiscent of thick soy milk. The hackathon experience itself left a bland
taste in my mouth. It was too frantic, too loud, and too bright under the
stadium lights to actually be productive. I will just stick to seminars, talks,
and recruitment events for awhile.

![](https://cdn-images-1.medium.com/max/1600/1*VxOHZ6jU2s8FLPp492Vm3g.png)
<span class="figcaption_hack">Learned a lot with this monolithic app.</span>

So back to the MEN stack and Wanderlustoria, I started the project on April 10th
and finished on May 30th. I definitely picked up a lot working with different
packages. Some things I didn’t know before were MongoDB/Mongoose, PassportJS,
mLab, connect-flash, and nodemon. It definitely felt like putting together a
huge puzzle with all the packages to make this monolithic app. In the end, it
also rekindled my knowledge of Bootstrap and basic javascript. If I had to
describe the back-end, I would say it’s like interior design and there’s a
million products at Home Depot that you can get off the shelf to construct each
room. It’s take a more organized mind for the back-end.

Phase 3: Back to the front-end

I was totally missing React so I opened up a past tech, GatsbyJS. This time, I
was set out to reconstruct my travel blog. Enter
[travelDev](http://traveldev.net/), a website about travel and web development
with emphasis in digital nomadism/expatriatism (if that last one is even a real
term). Joe (Twitter @jjprevite) and I teamed up to form #TeamGatsby on May 4th
to learn and build a proper GatsbyJS website. We diligently worked under the
clock as to finish before it struck June 1st and just in time for my upcoming
plans (See [The Extraordinary
Plans](http://traveldev.net/extraordinary-plans))!

<span class="figcaption_hack">Where I learned a lot about GatsbyJS and Styled Components.</span>

I learned a ton as always and comfortably established my own styling system with
styled-components inspired by [Alan
Smith](https://tech.decisiv.com/structuring-our-styled-components-part-i-2bf21fa64b28).
You would think that GatsbyJS would be pretty easy to make links, put up
pictures, make the site responsive, and the other things we understand using
vanilla javascript. Well, let me tell you that sometimes it’s not all that
intuitive, at least for me.

I finished my travel blog website but want to reinforce my knowledge even
further so fired up the old Architect portfolio website for my friend with a
small twist. I knew Flexbox pretty well already but heard so much about CSS
Grid. I mixed in Wes Bos CSS Grid course on June 4th. I worked furiously to
re-adapt the previous code written months ago with Bootstrap and Flexbox into
strictly CSS Grid. There are still certain things that are Flexbox-only but I
thoroughly enjoy Grid since it offers so much more options and writing media
queries was a breeze using `grid-template-areas`. If you know Flexbox, you’ll
pick up CSS Grid pretty quick.

<span class="figcaption_hack">My friend absolutely loved the site!</span>

I finished up the architect portfolio website (June 12th) and it would be my
last project for the 365 days of code. I learned even more about styled
components with this project and adapted Alan Smith’s bootstrappy styled
component classes called “modifiers”. I also implemented a “matrix” styling
system, somewhat akin to a global css file, in this project. I hope to share
with you this system in the future. I will present it as the M&M method. 🍬

For the remainder of my days, I picked up “Javascript 30” course with Wes Bos to
work on my Javascript. As you already know, I tend to circle back to foundations
after diving deep into other subjects. You’ve got to come up for air and revisit
familiar waters!

## Conclusion

So why did I name this article with “harder to quit”? I felt really guilty if I
didn’t get to code at least 4 hours a day. An hour or half-hour was barely
enough for me to satisfy that itch. You’ll experience so many concepts, new
friends, and establish such a die-hard habit along the way. Looking your twitter
feed and watching what other people do is really inspiring and provides many
ideas for you to innovate on. I think a lot of new devs dwell on the
frustrations and forget quickly about how many victories they have won. It’s
better to hang on to that “cloud 9” feeling after you have built an incredible
project and don’t forget to reward yourself! Persistence, optimism, and
self-preservation will help you win this “game”. But you didn’t need to hear
that from me, you guys are all rockstars already for learning to code. Cheers.
🏆

So that’s it? Nope, continue reading part 2 and 3 as I promise it’s going to get
even more interesting. Thanks for reading and hope that you have enjoyed this
article.

Where’s part 2 and 3?<br> Part 2: [Pearls from a Self-Taught Web
Developer](http://traveldev.net/developer-pearls)<br>
Part 3: [The Extraordinary
Plans](http://traveldev.net/extraordinary-plans)

If you enjoyed my thoughts, you’re welcome to follow my<br> BLOG ➞
[http://traveldev.net](http://traveldev.net/)<br> TWITTER ➞
[https://twitter.com/traveldev](https://twitter.com/traveldev) <br> YOUTUBE ➞
[https://goo.gl/fFfWq4](https://goo.gl/fFfWq4)<br> INSTAGRAM ➞
[https://www.instagram.com/travel_Dev](https://www.instagram.com/travel_Dev/)
