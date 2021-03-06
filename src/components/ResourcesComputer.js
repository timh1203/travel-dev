import React from 'react'
import Link from 'gatsby-link'
import { SectionA, DivA, DivB, H1, H3, SpanA, P, A } from '../assets/Matrix'
import ResourcesEntry from './ResourcesEntry'

const ResourcesComputer = () => (
  <SectionA id="computer">
    <DivA>
      <H1>💻 Computer Tools</H1>
      <SpanA><Link to="#resources">Top☝</Link></SpanA>
    </DivA>
    <H3>I use these tools daily and always working towards the perfect setup.</H3>

    <DivB>
      <ResourcesEntry
        href="https://www.amazon.com/gp/product/B00XZGUL8W/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1"
        src="https://i.imgur.com/aWsiTyf.png"
        alt="Macbook Pro 2015 (15-inch 2.5Ghz Retina Display)"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B00XZGUL8W/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1" target="_blank">Macbook Pro 2015 (15-inch 2.5Ghz Retina Display)</A> is designed with the developer in mind, there's no better laptop in my opinion! Why the 2015? It's the best generation with usb ports, a headphone jack, a mag-safe charger, and retina display. There's none of that gimmicky touchbar deal. Weighs 4.49 pounds. Want to see my technical specs?
            <br />
            <A href="https://www.amazon.com/gp/product/B00XZGUL8W/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1" target="_blank">Amazon Posted Specs</A> | <A href="https://support.apple.com/kb/sp719?locale=en_US" target="_blank">Apple Stock Specs</A>
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.amazon.com/Roost-Laptop-Stand-Adjustable-Portable/dp/B01C9KG8IG/ref=sr_1_4?ie=UTF8&qid=1527001259&sr=8-4&keywords=roost+stand"
        src="https://i.imgur.com/LN7qZbz.png"
        alt="Roost Laptop Stand"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/Roost-Laptop-Stand-Adjustable-Portable/dp/B01C9KG8IG/ref=sr_1_4?ie=UTF8&qid=1527001259&sr=8-4&keywords=roost+stand" target="_blank">Roost Laptop Stand</A> is an ergonomic solution which has dramatically help my long sessions of coding and watching video tutorials. There are going to be a couple imitations out there for cheap but get the original so it doesn't fail on the road. Very durable construction compared to others as I've read/researched about. Shell out the money, buy it once, and make it count. Weighs 5.8 ounces.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.amazon.com/gp/product/B01LQQH86A/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1"
        src="https://i.imgur.com/Rhmtyup.jpg"
        alt="Western Digital 4TB Black My Passport Portable External Hard Drive - USB 3.0"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B01LQQH86A/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1" target="_blank">Western Digital 4TB Black My Passport Portable External Hard Drive - USB 3.0</A> is a beast for the price! I'm using it to back up all my essentials like code, songs, movies, courses, etc. It also has some great software that comes along with it too. I use this drive for file backup and another external drive with Apple's Time Machine. Weighs 0.54 pounds.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.amazon.com/gp/product/B077GPYD96/ref=oh_aui_detailpage_o03_s01?ie=UTF8&psc=1"
        src="https://i.imgur.com/3LMvviA.png"
        alt="iLeadon Macbook Pro 15 Inch Case, Nebula Map"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B077GPYD96/ref=oh_aui_detailpage_o03_s01?ie=UTF8&psc=1" target="_blank">iLeadon Macbook Pro 15 Inch Case, Nebula Map</A> gives a really nice rubbery grip with a world map silhouette, what's not to love? Oh, it helps hide that Macbook glowing apple logo which might garner the attention of thieves.😉 Weighs 8.2 ounces.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.amazon.com/gp/product/B00PIMIUPW/ref=oh_aui_detailpage_o03_s01?ie=UTF8&psc=1"
        src="https://i.imgur.com/QTzZgD3.png"
        alt="Anker Ultra Compact Slim Profile Wireless Bluetooth Keyboard with Rechargeable Battery"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B00PIMIUPW/ref=oh_aui_detailpage_o03_s01?ie=UTF8&psc=1" target="_blank">Anker Ultra Compact Slim Profile Wireless Bluetooth Keyboard with Rechargeable Battery</A> is an awesome cheap keyboard with keys mapped the same as your macbook keyboard. Adaptation to the keys is a breeze and the battery lasts! Sometimes bluetooth connections disconnect (as with many macbooks bluetooth connections) but reconnects almost instantly! Weighs 0.71 pounds.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.amazon.com/gp/product/B01LF37K80/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1"
        src="https://i.imgur.com/bBR4DZZ.png"
        alt="Logitech M720 Triathalon Multi-Device Wireless Mouse"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B01LF37K80/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1" target="_blank">Logitech M720 Triathalon Multi-Device Wireless Mouse</A> is for those multi-platform switchers between their laptop, computer, and work computer. It's a bluetooth that uses a single AA battery. This one does not disconnect at all with my Macbook Pro, which I can't say for the other cheapo $15 bluetooth mouse I bought before this. There are forward and back buttons as well as a hidden for Mac's "Mission Control" feature. It's near your thumb. Weighs 4.64 ounces.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.amazon.com/Wireless-ENACFIRE-Bluetooth-Playtime-Headphones/dp/B078WP9M4F/ref=sr_1_3?s=electronics&ie=UTF8&qid=1527001311&sr=1-3&keywords=enacfire+e18+bluetooth+earbuds"
        src="https://i.imgur.com/HENi1vX.png"
        alt="EnacFire E18 Bluetooth Earbuds"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/Wireless-ENACFIRE-Bluetooth-Playtime-Headphones/dp/B078WP9M4F/ref=sr_1_3?s=electronics&ie=UTF8&qid=1527001311&sr=1-3&keywords=enacfire+e18+bluetooth+earbuds" target="_blank">EnacFire E18 Bluetooth Earbuds</A> are Apple Airpods for half the price! I've used them for working out and coding sessions. They are comfortable for a few hours but get sore after that, which is a perfect time to let you know to take them off and take a break. The case charges the earbuds and supposedly lasts 12 hours with multiple charges. Pairs great for with my phone and laptop. Weighs 4.59 ounces.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.amazon.com/gp/product/B003EM800S/ref=oh_aui_detailpage_o01_s01?ie=UTF8&psc=1"
        src="https://i.imgur.com/cviddmF.png"
        alt="Panasonic ErgoFit In-Ear Earbud Headphones"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B003EM800S/ref=oh_aui_detailpage_o01_s01?ie=UTF8&psc=1" target="_blank">Panasonic ErgoFit In-Ear Earbud Headphones</A> are my backup earbuds for when I just want to listen to music on a long plane ride without having to worry about it dying on me or having to turn off airplane mode. They're comfy and dirt cheap so I got 2 pairs. You can never had too many earbuds. The sound quality are pretty great on these. Weighs 1 ounce.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.amazon.com/gp/product/B00ATZJ5YS/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1"
        src="https://i.imgur.com/49iVrKY.png"
        alt="Belkin SurgePlus USB Swivel Surge Protector and Charger (Power strip with 3 AC Outlets, 2 USB Ports 2.1 AMP/10 Watt) and rotating plug"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B00ATZJ5YS/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1" target="_blank">Belkin SurgePlus USB Swivel Surge Protector and Charger (Power strip with 3 AC Outlets, 2 USB Ports 2.1 AMP/10 Watt) and rotating plug</A> is a compact, convenient way to make friends really easily at the airport. Has 3 plugs and 2 USB jacks to help charge up all your devices at once. The plug swivels 360 degrees and perfect for those tight spots where you need some flexibility. Weighs 2 pounds.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.amazon.com/gp/product/B0114C1TM0/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1"
        src="https://i.imgur.com/RXAkJs3.png"
        alt="TSA Luggage Locks (2 Pack) - 4 Digit Combination Steel Padlocks"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/gp/product/B0114C1TM0/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1" target="_blank">TSA Luggage Locks (2 Pack) - 4 Digit Combination Steel Padlocks</A> is a great lock when you're on the go. No more worrying about lost or mangled keys. No more worrying about forgetting the combinations for those than combination locks either. Always, always get 4 digits rather than 3 digits as thieves take 10x longer to crack the lock! Weighs 2.6 ounces each.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.rei.com/product/880839/rei-co-op-trail-40-pack-mens"
        src="https://i.imgur.com/gTUMOU1.png"
        alt="REI Trail 40"
        text={
          <P>
            ♦️ <A href="https://www.rei.com/product/880839/rei-co-op-trail-40-pack-mens" target="_blank">REI Trail 40</A> is a 40L internal-frame backpack that has organization and comfort features. This is my "suitcase" backpack and keeps all my clothes and bathroom items. It comes with a raincover stowed in its own zipper pocket in case you run into any unfavorable weather. It even has a slot for a water bladder which I have not used yet but great for slipping in a raincoat. Go with the black color! Dimensions are 21.625 x 13.125 x 10.5 inches. Weighs 2 pounds and 14 ounces.
          </P>
        }
      />
      <ResourcesEntry
        href="https://www.amazon.com/Under-Armour-Hustle-Backpack-Black/dp/B077H6F887/ref=sr_1_2?s=pc&ie=UTF8&qid=1527002564&sr=8-2&keywords=Under%2BArmour%2BTeam%2BHustle%2B3.0%2BBackpack&th=1&psc=1"
        src="https://i.imgur.com/Hh3eHm2.png"
        alt="Under Armour UA Hustle 3.0 Backpack"
        text={
          <P>
            ♦️ <A href="https://www.amazon.com/Under-Armour-Hustle-Backpack-Black/dp/B077H6F887/ref=sr_1_2?s=pc&ie=UTF8&qid=1527002564&sr=8-2&keywords=Under%2BArmour%2BTeam%2BHustle%2B3.0%2BBackpack&th=1&psc=1" target="_blank">Under Armour UA Hustle 3.0 Backpack</A> is a 30L backpack I got from leftover travel airline points. This is my "tech" daypack and has my electronics. It holds up to 15-inch laptop comfortably and feature a lower compartment for dirty shoes or wet items. A bit small on the size but fits my needs perfectly while still slingin that clean, city-slick aesthetic. Dimensions are 9.3 x 13.6 x 18.9 inches. Weighs 1.4 pounds.
          </P>
        }
      />
    </DivB>

    <hr />
  </SectionA>
)

export default ResourcesComputer
