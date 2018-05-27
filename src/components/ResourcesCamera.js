import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, DivFeatured, H1, H3, Span, P, A, Img } from '../assets/Matrix'
 
const ResourcesCamera = () => (
  <Div id='camera' modifiers={['textLeft', 'my3Auto']}>
    <Div modifiers={['displayFlex', 'justifyBetween']}>
      <H1>📹 Camera Tools</H1>
      <Span modifiers={['rotateRight']}><Link to='#resources'>Top☝</Link></Span>
    </Div>
    <H3>My recording process is pretty minimal and I love portability.</H3>

    <DivFeatured>
      <Div modifiers={['flex1']}>
        <Div modifiers={['w100', 'margin0Auto', 'justifyCenter']}>
          <A href='https://www.amazon.com/GoPro-CHDHX-502-HERO5-Black/dp/B01M14ATO0/ref=sr_1_3?s=electronics&ie=UTF8&qid=1527001969&sr=1-3&keywords=gopro+5+camera' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/2NFjYsr.png' alt='Go Pro Hero 5 Black'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0Auto']}>
          <P>
            ♦️ <A href="https://www.amazon.com/GoPro-CHDHX-502-HERO5-Black/dp/B01M14ATO0/ref=sr_1_3?s=electronics&ie=UTF8&qid=1527001969&sr=1-3&keywords=gopro+5+camera" target='_blank'>GoPro HERO5 Black</A> has been through so many adventures with me including soaring 5,000 feet above the ground to the warm waters of Taganga. It's a great vlogging camera with the excellent video and audio and not having to worry about water damage or dust due to it's naked open case protection.
          </P>
        </Div>
      </Div>

      <Div modifiers={['flex1']}>
        <Div>
          <A href='https://www.amazon.com/gp/product/B00GTZJA7Y/ref=oh_aui_detailpage_o08_s00?ie=UTF8&psc=1' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/7tyMhGR.png' alt='Joby Gorilla Pod'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0Auto']}>
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B00GTZJA7Y/ref=oh_aui_detailpage_o08_s00?ie=UTF8&psc=1" target='_blank'>Joby Gorilla Pod Action Video Tripod</A> is a really flexible attachment for your Go Pro which helps attach it to weird objects and serve as a nice tool to do a time lapse at a coffee shop. I've had more rigid stands before this one and would never go back to those.
          </P>
        </Div>
      </Div>
      
      <Div modifiers={['flex1']}>
        <Div>
          <A href='https://www.amazon.com/gp/product/B004M8SSZK/ref=oh_aui_detailpage_o09_s00?ie=UTF8&psc=1' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/olTahT5.jpg' alt='Digital Flash Voice Recorder'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0Auto']}>
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B004M8SSZK/ref=oh_aui_detailpage_o09_s00?ie=UTF8&psc=1" target='_blank'>Sony Digital Flash Voice Recorder (ICD-PX312)</A> gives you really great audio quality. You can hook it up with the lavalier microphone and create the seamless speech volume from whatever distance you want as there are no wireless signals you have to worry about. Battery life and features are magnificent!
          </P>
        </Div>
      </Div>
    </DivFeatured>
    
    <Div modifiers={['w75', 'm0Auto']}>
      <P>
        ♦️ <A href="https://www.amazon.com/gp/product/B01HU3Q6S4/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1" target='_blank'>SanDisk Extreme 64GB microSDXC UHS-I Card with Adapter</A> is a great card that supports 4K recording and welcomed by your Go Pro to keep up with the high-paced recording speed. SanDisk are usually paired with Go Pro's and usually work out pretty well for a fair price. I have had no problems so far with it!
      </P>

      <P>
        ♦️ <A href="https://www.amazon.com/gp/product/B002HJ9PTO/ref=oh_aui_detailpage_o08_s01?ie=UTF8&psc=1" target='_blank'>Audio-Technica ATR-3350 Lavalier Omnidirectional Condenser Microphone</A> lets you become that spy/informant/snitch you might have always wanted to be, here's an awesome microphone that picks up your voice and then some of the other person as well. It's mic is small and discreet and wires are long enough to loop from your feet to your head, even if you're 7 feet tall which I doubt!
      </P>
    </Div>
    <hr />
  </Div>
)

export default ResourcesCamera
