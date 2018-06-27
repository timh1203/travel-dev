import React from 'react'
import Link from 'gatsby-link'
import { SectionA, Div, DivA, DivB, H1, H3, SpanA, P, A, ImgA } from '../assets/Matrix'

const ResourcesWeb = () => (
  <SectionA id="web">
    <DivA>
      <H1>📚 Web Development Resources</H1>
      <SpanA><Link to="#resources">Top☝</Link></SpanA>
    </DivA>
    <H3>I recommend free courses before buying paid courses.</H3>

    <DivB>
      <Div>
        <Div>
          <A href="https://www.freecodecamp.org/" target="_blank">
            <ImgA src="https://i.imgur.com/PuUow45.png" alt="Free Code Camp" />
          </A>
        </Div>
        <Div>
          <P>
            ♦️ <A href="https://www.freecodecamp.org/" target="_blank">Free Code Camp</A> is great place to learn to code with free challenges and friendly community. It’s considered a real school which you can list on LinkedIn and helps you get in contact with non-profits after you finish your certifications. However, many people get jobs way before they finish their certifications.
          </P>
        </Div>
      </Div>

      <Div>
        <Div>
          <A href="https://www.codecademy.com/" target="_blank">
            <ImgA src="https://i.imgur.com/BbOxoUm.png" alt="Codecademy" />
          </A>
        </Div>
        <Div>
          <P>
            ♦️ <A href="https://www.codecademy.com/" target="_blank">Codecademy</A> is a similar learning environment to Free Code Camp. Plenty of exercises and courses for you to sign up. It’s free and really fun to learn. Instruction is great to follow along but it does not have a large community to interact with. You can read, learn, and practice right on their platform. This is a great place to do just that!
          </P>
        </Div>
      </Div>

      <Div>
        <Div>
          <A href="https://www.udemy.com/" target="_blank">
            <ImgA src="https://i.imgur.com/ntULx0d.png" alt="Udemy" />
          </A>
        </Div>
        <Div>
          <P>
            ♦️ <A href="https://www.udemy.com/" target="_blank">Udemy</A> has plenty of awesome great courses from independent instructors. I recommend Colt Steele, Stephen Grider, Anthony Alicea, Andrew Mead to get start with. There are plenty of other good instructors. Please do not spend $200 on the course, Udemy has sales constantly and you can get courses for $10-15 easily. Be wary of buying a ton of courses since sales pop up all the time. Instead, buy more courses after you have completed one so you don't blow money on building a course collection that you never use.
          </P>
        </Div>
      </Div>
    </DivB>

    <Div>
      <P>
        ♦️ <A href="https://www.udemy.com/the-web-developer-bootcamp/" target="_blank">The Web Developer Bootcamp</A> is my personal favorite course on Udemy with focus on HTML, CSS, JavaScript, Node, Express, MongoDB, and more. It’s taught by Colt Steele who has taught numerous bootcamps in the past. I most enjoyed the style and pace of the course. Coding can be daunting for a beginner but the instructor who has teaching experience can help you feel like you’re making improvements every day. The technologies are starting with the very basics and takes you to the end. Some of the syntax and libraries might be older but learning foundation syntax is not a bad thing!
      </P>

      <P>
        ♦️ <A href="https://javascript30.com/" target="_blank">Javascript 30</A> is a free course to teach you vanilla javascript tricks. Wes Bos collected a ton of mini-projects and shows you how to create them without any library or framework. There are even some exercises to work on array methods, working with developer tools, and other cool things. The most interesting projects for me were Flexbox Panel, HTML Video Player, CSS and JS Clock.
      </P>

      <P>
        ♦️ <A href="https://es6.io/" target="_blank">ES6 For Everyone</A> is an awesome resource if you’re a JavaScript ninja. Get your chops down and learn all the updates that were released in 2015. Wes Bos is a great teacher and his videos are informative but do not leave you snoring. Wes covers template strings, promises, symbols, generators, proxies, and a ton more! Do yourself a favor if you doing JS and pick this up. Absolutely love this course and recommending to everyone I know!
      </P>

      <P>
        ♦️ <A href="https://reactforbeginners.com/" target="_blank">React For Beginners</A> is an awesome course to start learning React with the latest technologies, Google's Firebase, and other services as well. It's how I learned React myself and I highly recommend this instructor too. Wes is ball of fun rolled in with high-lelve expertise which makes picking up React a great experience for newbies.
      </P>
    </Div>
    <hr />
  </SectionA>
)

export default ResourcesWeb
