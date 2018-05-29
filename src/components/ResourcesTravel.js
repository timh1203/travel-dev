import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, DivFeatured, H1, H3, P, A, Img } from '../assets/Matrix'
 
const ResourcesTravel = () => (
  <Section id='travel' modifiers={['tLeft', 'my3A']}>
    <hr />
    <Div modifiers={['dFlex', 'fjcBetween']}>
      <H1>✈️ Travel Tools</H1>
    </Div>
    <H3>These are the services I like to use when I travel.</H3>

    <DivFeatured>
      <Div modifiers={['f1']}>
        <Div modifiers={['fjcCenter']}>
          <A href='https://www.referyourchasecard.com/19/94WOW0DVSW' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/PfzBvlC.png' alt='Chase Sapphire Reserve'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0A']}>      
          <P>
            ♦️ <A href='https://www.referyourchasecard.com/19/94WOW0DVSW' target='_blank'>Chase Sapphire Reserve</A> has $300 annual travel credit, 50% more on travel redemption, Complimentary Lounge Membership, Global Entry/TSA Pre-Check Reimbursement, and no foreign transaction fee. Without a doubt, one of the best travel cards out there.
          </P>
        </Div>
      </Div>

      <Div modifiers={['f1']}>
        <Div>
          <A href='https://content.schwab.com/web/retail/public/get-started/checking/' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/4yww8sB.png' alt='Charles Schwab Debit Card'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0A']}>
          <P>
            ♦️ <A href="https://content.schwab.com/web/retail/public/get-started/checking/" target='_blank'>Charles Schwab Debit Card</A> has no foreign transaction fees and will reimburse you for foreign ATM withdrawals, which I took full advantage of in Colombia. No minimum balance and a very nice card. 
          </P>
        </Div>
      </Div>
      
      <Div modifiers={['f1']}>
        <Div>
          <A href='https://www.worldnomads.com/' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/lcQ10xg.png' alt='World Nomad Travel Insurance'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0A']}>
          <P>
            ♦️ <A href="https://www.worldnomads.com/" target='_blank'>World Nomads</A> insured me fo my Europe, Colombia, and Japan trip and seriously one of the best traveler's insurance sites out there with really great rates. They refunded me $500 bucks when I had problems with my laptop!
          </P>
        </Div>
      </Div>
    </DivFeatured>

    <Div modifiers={['w75', 'm0A']}>
      <P>
        ♦️ <A href="https://www.capitalone.com/bank/checking-accounts/online-checking-account/" target='_blank'>Capital One 360 Credit or Debit Account</A> is my backup card in case of emergencies. I had both their credit and debit card and experienced solid service every time. With the debit services, I really enjoy not having to maintain a minimum balance and ability to deposit cash at a branch right across the street from my house.
      </P>

      <P>
        ♦️ <A href="https://www.airbnb.com/" target='_blank'>AirBnB</A> was my go-to for quick accomodations and booked them too many times to count. I've used it in the states and abroad in Europe and Colombia. A lot of people use it around the world and I found some pretty great homes when I was traveling in Santa Marta, Colombia.
      </P>

      <P>
        ♦️ <A href="https://www.uber.com/" target='_blank'>Uber</A> is a great option for a quick ride. Most of the time I took public transportation or use local taxi apps (IE EasyTaxi in Colombia). Uber is the way to go if you don't yet have the local currency and want to pay with your credit card or you're just not sure about safety.
      </P>
    </Div>
    <hr />
  </Section>
)

export default ResourcesTravel
