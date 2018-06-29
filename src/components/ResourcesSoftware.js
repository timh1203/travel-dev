import React from 'react'
import Link from 'gatsby-link'
import { SectionA, DivA, DivB, H1, H3, SpanA, P, A } from '../assets/Matrix'
import ResourcesEntry from './ResourcesEntry'

const ResourcesSoftware = () => (
  <SectionA id="software">
    <DivA>
      <H1>💿 Software Tools</H1>
      <SpanA><Link to="#resources">Top☝</Link></SpanA>
    </DivA>
    <H3>If you're new to web development, make a new site with Namecheap + Bluehost + Divi Theme.</H3>

    <DivB>
      <ResourcesEntry
        href="https://namecheap.pxf.io/c/1244000/386170/5618"
        src="https://i.imgur.com/VHlW4oG.png"
        alt="Namecheap Domain Registration"
        text={
          <P>
            ♦️ <A href="https://namecheap.pxf.io/c/1244000/386170/5618" target="_blank">Namecheap</A> allows you to buy custom domain names which I prefer over GoDaddy. There seems to be less promotional hype and it’s much easier to use. There’s a dashboard to keep of all the domain names you purchase and reminds you when domains start expiring.
          </P>
        }
      />
      <ResourcesEntry
        href="http://www.bluehost.com/track/timothyhoang/"
        src="https://i.imgur.com/iBfHVDZ.png"
        alt="Bluehost Web Hosting"
        text={
          <P>
            ♦️ <A href="http://www.bluehost.com/track/timothyhoang/" target="_blank">Bluehost</A> is a popular company for good reason. It’s affordable, easy to use, and has excellent support. I’ve already hosted six websites with them and they have not let me down yet. Consider a Plus plan if you plan on hosting many websites. Use <A href="http://www.bluehost.com/track/timothyhoang/">my affiliate link</A> if you decide to get it!
          </P>
        }
      />
      <ResourcesEntry
        href="http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=48068&tid1=traveldev"
        src="https://i.imgur.com/3OZAEvD.png"
        alt="Divi Themes by Elegant Themes"
        text={
          <P>
            ♦️ <A href="http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=48068&tid1=traveldev" target="_blank">Divi Theme by Elegant Themes</A> makes building websites easy with drag-and-drop blocks that requires zero coding knowledge. With complete access to all themes, extensive tutorials, and unlimited usage; it’s a phenomenal value for the price. Please use <A href="http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=48068&tid1=traveldev">my affiliate link</A> if you decide to get it!
          </P>
        }
      />
      <ResourcesEntry
        href="https://drive.google.com/settings/storage"
        src="https://i.imgur.com/zmDqiAM.png"
        alt="Google Drive 100GB"
        text={
          <P>
            ♦️ <A href="https://drive.google.com/settings/storage" target="_blank">Google Drive 100GB</A> has a deal for $2/month, which gets you 100GB so you can store all your important files on a cloud. This is a boon for digital nomads who don’t want to carry around an external hard drive. I keep my important documents, music, ebooks, and audiobooks on there. You can even download the desktop app to make your work flow even more fluid.
          </P>
        }
      />
      <ResourcesEntry
        href="https://play.google.com/store/apps/details?id=com.doubleTwist.cloudPlayer"
        src="https://i.imgur.com/8527Jh8.png"
        alt="Cloud Player"
        text={
          <P>
            ♦️ <A href="https://play.google.com/store/apps/details?id=com.doubleTwist.cloudPlayer" target="_blank">Cloud Player</A> is a audio cloud player that is paired perfectly with Google Drive, Dropbox, or OneDrive. No longer do you have to import your songs to your phone via a cable, just use this service over Wi-Fi instead. Use this to sync all your mp3's, audiobooks, and audio medias. Expect it to take at least an hour and more if you have a larger music collection. The basic version is a 30-day trial of the premium version with full features. The premium version is a one time purchase for $7.99 on Google Play store.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.lastpass.com/"
        src="https://i.imgur.com/HKIXxTV.png"
        alt="LastPass"
        text={
          <P>
            ♦️ <A href="https://www.lastpass.com/" target="_blank">LastPass</A> is a password management software that can keep track of all your passwords and features a secure note section too. There's a website app, chrome app, as well as a mobile app for your phone.
          </P>
        }
      />
    </DivB>

    <hr />
  </SectionA>
)

export default ResourcesSoftware
