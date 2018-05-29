import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, DivFeatured, H1, H3, Span, P, A, Img } from '../assets/Matrix'
 
const ResourcesSoftware = () => (
  <Section id='software' modifiers={['tLeft', 'my3A']}>
    <Div modifiers={['dFlex', 'fjcBetween']}>
      <H1>💿 Software Tools</H1>
      <Span modifiers={['rotateRight']}><Link to='#resources'>Top☝</Link></Span>
    </Div>
    <H3>If you're new to web development, make a new site with Namecheap + Bluehost + Divi Theme.</H3>

    <DivFeatured>
      <Div modifiers={['f1']}>
        <Div modifiers={['fjcCenter']}>
          <A href='https://namecheap.pxf.io/c/1244000/386170/5618' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/VHlW4oG.png' alt='Namecheap Domain Registration'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0A']}>
          <P>
            ♦️ <A href="https://namecheap.pxf.io/c/1244000/386170/5618" target='_blank'>Namecheap</A> allows you to buy custom domain names which I prefer over GoDaddy. There seems to be less promotion and it’s much easier to use. There’s a dashboard to keep of all the domain names you purchase and reminds you when domains start expiring.
          </P>
        </Div>
      </Div>

      <Div modifiers={['f1']}>
        <Div>
          <A href='http://www.bluehost.com/track/timothyhoang/' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/iBfHVDZ.png' alt='Bluehost Web Hosting'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0A']}>
          <P>
            ♦️ <A href="http://www.bluehost.com/track/timothyhoang/" target='_blank'>Bluehost</A> is a popular company for good reason. It’s affordable, easy to use, and has excellent support. I’ve already hosted six websites with them and they have not let me down yet. Consider a Plus plan if you plan on hosting many websites. Use <A href="http://www.bluehost.com/track/timothyhoang/">my affiliate link</A> if you decide to get it!
          </P>
        </Div>
      </Div>

      <Div modifiers={['f1']}>
        <Div>
          <A href='http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=48068&tid1=traveldev' target='_blank'>
            <Img modifiers={['mh300px']} src='https://i.imgur.com/3OZAEvD.png' alt='Divi Themes by Elegant Themes'/>
          </A>
        </Div>
        <Div modifiers={['w75', 'm0A']}>
          <P>
            ♦️ <A href="http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=48068&tid1=traveldev" target='_blank'>Divi Theme by Elegant Themes</A> makes building websites easy with drag-and-drop blocks that requires zero coding knowledge. With complete access to all themes, extensive tutorials, and unlimited usage; it’s a phenomenal value for the price. Please use <A href="http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=48068&tid1=traveldev">my affiliate link</A> if you decide to get it!
          </P>
        </Div>
      </Div>
    </DivFeatured>

    <Div modifiers={['w75', 'm0A']}>
      <P>
        ♦️ <A href="https://drive.google.com/settings/storage" target='_blank'>Google Drive 100GB</A> has a deal for $2/month, which gets you 100GB so you can store all your important files on a cloud. This is a boon for digital nomads who don’t want to carry around an external hard drive. I keep my important documents, music, ebooks, and audiobooks on there. You can even download the desktop app to make your work flow even more fluid.
      </P>
      <P>
        ♦️ <A href="https://www.lastpass.com/" target='_blank'>LastPass</A> is a password management software that can keep track of all your passwords and features a secure note section too.
      </P>
    </Div>
    <hr />
  </Section>
)

export default ResourcesSoftware
