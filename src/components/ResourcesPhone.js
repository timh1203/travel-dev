import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, DivFeatured, H1, H3, Span, P, A, Img } from '../assets/Matrix'
 
const ResourcesPhone = () => (
  <Div id='phone' modifiers={['textLeft', 'my3Auto']}>
    <Div modifiers={['displayFlex', 'justifyBetween']}>
      <H1>📲 Phone Tools</H1>
      <Span modifiers={['rotateRight']}><Link to='#resources'>Top☝</Link></Span>
    </Div>
    <H3> My second lifeline after my laptop.</H3>

    <DivFeatured>
      <Div modifiers={['flex1']}>
        <Div modifiers={['w100', 'margin0Auto', 'justifyCenter']}>
          <A href='https://www.amazon.com/Samsung-Galaxy-S4-Touchscreen-International/dp/B00S3FEOAG/ref=sr_1_1?s=wireless&ie=UTF8&qid=1527001874&sr=1-1&keywords=samsung+galaxy+s4' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/JWqYQuo.png' alt='Samsung Galaxy S4 SGH-I337 Unlocked (International Version)'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0Auto']}>
          <P>
            ♦️ <A href="https://www.amazon.com/Samsung-Galaxy-S4-Touchscreen-International/dp/B00S3FEOAG/ref=sr_1_1?s=wireless&ie=UTF8&qid=1527001874&sr=1-1&keywords=samsung+galaxy+s4" target='_blank'>Samsung Galaxy S4 SGH-I337 Unlocked (International Version)</A> is not highly marked up like iPhones. Perfect for just adapting to local sim cards, snapping a few photos for instagrams, and making the occasional skype calls. Pro-tip: no need to be sporting the latest phone like the iPhone X when you're traveling,thieves would love to make a quick buck!
          </P>
        </Div>
      </Div>

      <Div modifiers={['flex1']}>
        <Div>
          <A href='https://www.amazon.com/gp/product/B003EM800S/ref=oh_aui_detailpage_o01_s01?ie=UTF8&psc=1' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/qkTn4QA.png' alt='Anker 7800mAh Extended Battery Combo'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0Auto']}>
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B00GNQ10VS/ref=oh_aui_search_detailpage?ie=UTF8&psc=1" target='_blank'>Anker 7800mAh Extended Battery Combo With TPU back cover included</A> gives your phone endurance when you're traveling. You want to be able to have your communications, navigation, and logistics powers up and running. This has helped me carry through 3-5 days when I'm traveling without having to worry about charging all the time. It's a little bit hefty but a small price to pay for not worrying about my phone ever missing in the action.
          </P>
        </Div>
      </Div>
      
      <Div modifiers={['flex1']}>
        <Div>
          <A href='https://www.amazon.com/Multiple-Universal-Lightning-ChromeBook-Android-Grey/dp/B076K5WQ4G/ref=sr_1_7?s=wireless&ie=UTF8&qid=1527097542&sr=1-7&keywords=mini+usb+cable+braided+1ft' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/9zr9zw4.png' alt='3-in-1 Usb Nylon Braided Cable 1ft Multiple USB Charging cord'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0Auto']}>
          <P>
            ♦️ The <A href="https://www.amazon.com/Multiple-Universal-Lightning-ChromeBook-Android-Grey/dp/B076K5WQ4G/ref=sr_1_7?s=wireless&ie=UTF8&qid=1527097542&sr=1-7&keywords=mini+usb+cable+braided+1ft" target='_blank'>3-in-1 Usb Nylon Braided Cable 1ft Multiple USB Charging cord</A> lets you charge all 3 ports at once from micro-USB, USB-Type C, and Lightning Port. It's great to share with your travel friends if they want to charge with you at the same time. Pair possibly with Belkin Surgeplus for becoming the most popular kid at the airport? 🔌
          </P>
        </Div>
      </Div>
    </DivFeatured>
    <hr />
  </Div>
)

export default ResourcesPhone
