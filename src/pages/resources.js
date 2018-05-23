import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Section, Div, H1, H2, H3, P, A, Img } from '../assets/Matrix'

const ResourcesPage = () => (
  <Section>
    <H1 modifiers={['my3']}>🌐 Resources</H1>
    <hr />
    <Div modifiers={['textLeft', 'my3Auto']}>
      <H1>✈️ Travel Resources</H1>
      <H3>These are the services I like to use when I travel.</H3>

      <Div modifiers={['displayFlex', 'justifyCenter', 'textCenter']}>
        <Div modifiers={['flex1']}>
          <Div modifiers={['w100', 'margin0Auto', 'justifyCenter']}>
            <A href='https://www.referyourchasecard.com/19/94WOW0DVSW' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/PfzBvlC.png' alt='Chase Sapphire Reserve'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>      
            <P>
              ♦️ <A href='https://www.referyourchasecard.com/19/94WOW0DVSW' target='_blank'>Chase Sapphire Reserve</A> has $300 annual travel credit, 3x points on travel/dining worldwide, 50% more on travel redemption, Complimentary Priority Pass Lounge Membership, , Global Entry/TSA Pre-check Fee Credit, and no foreign transaction fee. Without a doubt, one of the best travel cards out there.
            </P>
          </Div>
        </Div>

        <Div modifiers={['flex1']}>
          <Div>
            <A href='https://content.schwab.com/web/retail/public/get-started/checking/' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/4yww8sB.png' alt='Charles Schwab Debit Card'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ <A href="https://content.schwab.com/web/retail/public/get-started/checking/" target='_blank'>Charles Schwab Debit Card</A> has no foreign transaction fees and will reimburse you for foreign ATM withdrawals which I took full advantage of in Colombia. No minimum balance and a very nice card.
            </P>
          </Div>
        </Div>
        
        <Div modifiers={['flex1']}>
          <Div>
            <A href='https://www.worldnomads.com/' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/lcQ10xg.png' alt='World Nomad Travel Insurance'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ <A href="https://www.worldnomads.com/" target='_blank'>World Nomads</A> was used it for my Europe, Colombia, and Japan trip and seriously one of the best traveler's insurance sites out there with really great rates. They refunded me $500 bucks when I had problems with my laptop!
            </P>
          </Div>
        </Div>
      </Div>

      <Div modifiers={['w75', 'm0Auto']}>
        <P>
          ♦️ <A href="https://www.capitalone.com/bank/checking-accounts/online-checking-account/" target='_blank'>Capital One 360 Credit or Debit Account</A> is my backup card in case of emergencies. I had both their credit and debit card and solid service every time. I every used the travel mileage I've earned and it was great!
        </P>

        <P>
          ♦️ <A href="https://www.airbnb.com/" target='_blank'>AirBnB</A> was my go-to and booked them too many times to count in the states and abroad in Europe and Colombia. A lot of people use it around the world and I found some pretty great homes when I was traveling in Santa Marta, Colombia.
        </P>

        <P>
          ♦️ <A href="https://www.uber.com/" target='_blank'>Uber</A> is a great option even I usually don't need it in South American countries. Most of the time you will take public transportation or use local taxi apps (IE EasyTaxi in Colombia). But when you're just not sure about safety or want to use your credit card, Uber is the app to use.
        </P>
      </Div>
    </Div>

    
    <hr />
    <Div modifiers={['textLeft', 'my3Auto']}>
      <H1>💻 My Computer Tools</H1>
      <H3>I use these tools daily and I want to make sure I got the perfect setup.</H3>

      <Div modifiers={['displayFlex', 'justifyCenter', 'textCenter']}>
        <Div modifiers={['flex1']}>
          <Div modifiers={['w100', 'margin0Auto', 'justifyCenter']}>
            <A href='https://www.amazon.com/gp/product/B00XZGUL8W/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/aWsiTyf.png' alt='Macbook Pro 15-inch 2015'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ The <A href="https://www.amazon.com/gp/product/B00XZGUL8W/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1" target='_blank'>Macbook Pro 2015 (15-inch 2.5Ghz Retina Display)</A> is meant for you if you're a developer/design person, there's no better laptop! Why the 2015? It's the best generation with usb, headphones, magsafe, and retina display. None of that gimmicky touchbar deal. Want to see my technical specs?
              <br />
              <A href='https://www.amazon.com/gp/product/B00XZGUL8W/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1' target='_blank'>Amazon Posted Specs</A> | <A href='https://support.apple.com/kb/sp719?locale=en_US' target='_blank'>Apple Stock Specs</A>
            </P>
          </Div>
        </Div>

        <Div modifiers={['flex1']}>
          <Div>
            <A href='https://www.amazon.com/Roost-Laptop-Stand-Adjustable-Portable/dp/B01C9KG8IG/ref=sr_1_4?ie=UTF8&qid=1527001259&sr=8-4&keywords=roost+stand' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/LN7qZbz.png' alt='Roost Laptop Stand'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ The <A href="https://www.amazon.com/Roost-Laptop-Stand-Adjustable-Portable/dp/B01C9KG8IG/ref=sr_1_4?ie=UTF8&qid=1527001259&sr=8-4&keywords=roost+stand" target='_blank'>Roost Laptop Stand</A> is an ergonomic solution which has dramatically help my long sessions of coding and video tutorials. There are going to be a couple imitations out there for cheap but I wanted a quality product that doesn't fail on me while on the road. Very durable construction compared to others as I've read. Shell up the money and buy it once.
            </P>
          </Div>
        </Div>

        <Div modifiers={['flex1']}>
          <Div>
            <A href='https://www.amazon.com/gp/product/B01LQQH86A/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/Rhmtyup.jpg' alt='WD 4TB External Hard Drive'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ The <A href="https://www.amazon.com/gp/product/B01LQQH86A/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1" target='_blank'>Western Digital 4TB Black My Passport  Portable External Hard Drive - USB 3.0</A> is a beast for the price! I'm using them to back up all my essentials like code, songs, movies, courses, etc. It also has some great software that comes along with it too. I use this drive for file backup and another drive for Apple's Time Machine.
            </P>
          </Div>
        </Div>
      </Div>

      <Div modifiers={['w75', 'm0Auto']}>
        <P>
          ♦️ <A href="https://www.amazon.com/gp/product/B077GPYD96/ref=oh_aui_detailpage_o03_s01?ie=UTF8&psc=1" target='_blank'>iLeadon Macbook Pro 15 Inch Case, Nebula Map</A> gives a really nice rubbery grip with a world map silhouette, what's not to love? Oh, helps hide that you have a Macbook when you travel to deter thieves if they don't know any better by not having that glowing Apple logo. 😉
        </P>

        <P>
          ♦️ <A href="https://www.amazon.com/gp/product/B00PIMIUPW/ref=oh_aui_detailpage_o03_s01?ie=UTF8&psc=1" target='_blank'>Anker Ultra Compact Slim Profile Wireless Bluetooth Keyboard with Rechargeable Battery</A> is an awesome cheap keyboard with keys mapped the same as your macbook keyboard. Adaptation is a breeze and the battery lasts! Sometimes bluetooth connections disconnect (as with many macbooks) but reconnects instantly!
        </P>

        <P>
          ♦️ <A href="https://www.amazon.com/gp/product/B01LF37K80/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1" target='_blank'>Logitech M720 Triathalon Multi-Device Wireless Mouse</A> is for those multi-platform switchers between their laptop, computer, and work computer. It's a bluetooth that uses a single AA battery.
        </P>

        <P>
          ♦️ <A href="https://www.amazon.com/Wireless-ENACFIRE-Bluetooth-Playtime-Headphones/dp/B078WP9M4F/ref=sr_1_3?s=electronics&ie=UTF8&qid=1527001311&sr=1-3&keywords=enacfire+e18+bluetooth+earbuds" target='_blank'>EnacFire E18 Bluetooth Earbuds</A> are Apple Airpods for half the price! I've used them for working out and coding sessions. They are comfortable for a few hours but get sore after that, which is a perfect time to let you know to take them off and take a aurical break. The case charges the earbuds and supposedly lasts 12 hours with multiple charges.
        </P>

        <P>
          ♦️ <A href="https://www.amazon.com/gp/product/B003EM800S/ref=oh_aui_detailpage_o01_s01?ie=UTF8&psc=1" target='_blank'>Panasonic ErgoFit In-Ear Earbud Headphones RP-HJE120-S (Silver) Dynamic Crystal Clear Sound, Ergonomic Comfort-Fit</A> are my backup earbuds for when I just want to listen to music on a long plane ride. They're comfy and dirt cheap so I got 2 pairs. You can never had too many earbuds. The sound quality are pretty great on these.
        </P>

        <P>
          ♦️ <A href="https://www.amazon.com/gp/product/B00ATZJ5YS/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1" target='_blank'>Belkin SurgePlus USB Swivel Surge Protector and Charger (Power strip with 3 AC Outlets, 2 USB Ports 2.1 AMP/10 Watt) and rotating plug</A> is a compact, convenient way to make friends really easily at the airport. Has 3 plugs and 2 USB jacks to help charge up all your devices at once. The plug swivels 360 degrees and perfect for those tight spots where you need some flexibility.
        </P>

        <P>
          ♦️ <A href="https://www.amazon.com/gp/product/B0114C1TM0/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1" target='_blank'>TSA Luggage Locks (2 Pack) - 4 Digit Combination Steel Padlocks</A> is always, always better than 3 digits! This is a great lock when you're on the go. No more worrying about lost or mangled keys. No more worrying about forgetting the combinations for those than combination locks either. 
        </P>

        <P>
          ♦️ <A href="https://www.amazon.com/Under-Armour-Hustle-Backpack-Black/dp/B077H6F887/ref=sr_1_2?s=pc&ie=UTF8&qid=1527002564&sr=8-2&keywords=Under%2BArmour%2BTeam%2BHustle%2B3.0%2BBackpack&th=1&psc=1" target='_blank'>Under Armour UA Hustle 3.0 Backpack</A> is a 30L backpack I got from leftover travel airline points. It holds up to 15-inch laptop comfortably and feature a lower compartment for dirty shoes or wet items. A bit small on the size but fits my needs perfectly while still rockin that clean, slick aesthetic. Recommended for a day work packpack or a makeshift hiking backpack.
        </P>
      </Div>
    </Div>

    <hr />

    <Div modifiers={['textLeft', 'my3Auto']}>
      <H1>📲 My Phone Tools</H1>
      <H3> My second lifeline after my laptop. I recommend a sub-300 phone so you don't attract attention of pickpockets and willing to part ways if falls out of your possession.
      </H3>

      <Div modifiers={['displayFlex', 'justifyCenter', 'textCenter']}>
        <Div modifiers={['flex1']}>
          <Div modifiers={['w100', 'margin0Auto', 'justifyCenter']}>
            <A href='https://www.amazon.com/Samsung-Galaxy-S4-Touchscreen-International/dp/B00S3FEOAG/ref=sr_1_1?s=wireless&ie=UTF8&qid=1527001874&sr=1-1&keywords=samsung+galaxy+s4' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/JWqYQuo.png' alt='Samsung Galaxy S4 SGH-I337 Unlocked (International Version)'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ <A href="https://www.amazon.com/Samsung-Galaxy-S4-Touchscreen-International/dp/B00S3FEOAG/ref=sr_1_1?s=wireless&ie=UTF8&qid=1527001874&sr=1-1&keywords=samsung+galaxy+s4" target='_blank'>Samsung Galaxy S4 SGH-I337 Unlocked (International Version)</A> are not highly marked up like iPhones. Perfect for just adapting to local sim cards, snapping a few photos for instagrams, and making the occasional skype calls. What else do you really need when you already have your laptop with you right?
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
              ♦️ <A href="https://www.amazon.com/gp/product/B00GNQ10VS/ref=oh_aui_search_detailpage?ie=UTF8&psc=1" target='_blank'>Anker 7800mAh Extended Battery Combo With TPU back cover included</A> gives your phone endurance when you're traveling. The same goes for your phone. You want to be able to have your communications, navigation, and logistics planning powers up and running. This has helped me carry through 3-5 days when I'm traveling without having to worry about charging it all the time. It's a little bit hefty but a small price to pay for not worrying about my phone ever missing in the action.
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
              ♦️ The <A href="https://www.amazon.com/Multiple-Universal-Lightning-ChromeBook-Android-Grey/dp/B076K5WQ4G/ref=sr_1_7?s=wireless&ie=UTF8&qid=1527097542&sr=1-7&keywords=mini+usb+cable+braided+1ft" target='_blank'>3-in-1 Usb Nylon Braided Cable 1ft Multiple USB Charging cord</A> lets you charge 3 items at once with micro-USB, USB-Type C, Lightning Port. It's great to share with your travel friends if they want to charge with you at the same time.
            </P>
          </Div>
        </Div>
      </Div>
    </Div>
    <hr />
    <Div modifiers={['textLeft', 'my3Auto']}>
      <H1>📹 My Camera Tools</H1>
      <H3>My recording process is pretty minimal and I love portability.</H3>

      <Div modifiers={['displayFlex', 'justifyCenter', 'textCenter']}>
        <Div modifiers={['flex1']}>
          <Div modifiers={['w100', 'margin0Auto', 'justifyCenter']}>
            <A href='https://www.amazon.com/GoPro-CHDHX-502-HERO5-Black/dp/B01M14ATO0/ref=sr_1_3?s=electronics&ie=UTF8&qid=1527001969&sr=1-3&keywords=gopro+5+camera' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/2NFjYsr.png' alt='Go Pro Hero 5 Black'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ <A href="https://www.amazon.com/GoPro-CHDHX-502-HERO5-Black/dp/B01M14ATO0/ref=sr_1_3?s=electronics&ie=UTF8&qid=1527001969&sr=1-3&keywords=gopro+5+camera" target='_blank'>GoPro HERO5 Black</A> has been through so many adventures with me including soaring 5,000 feet above the ground to the warm waters of Taganga. It's a great vlogging camera with the excellent video and audio and not having to worry about water damage due to it's built-in open case protection. Perfect for stealth recording too as you can clasp your hand around it.
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
              ♦️ <A href="https://www.amazon.com/gp/product/B00GTZJA7Y/ref=oh_aui_detailpage_o08_s00?ie=UTF8&psc=1" target='_blank'>Joby Gorilla Pod Action Video Tripod</A> is a really flexible attachment for your Go Pro which helps attach it to weird objects and serve as a nice piece to do a time lapse at a coffee shop. I have not tested this in what but I don't think I would want to.
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
              ♦️ <A href="https://www.amazon.com/gp/product/B004M8SSZK/ref=oh_aui_detailpage_o09_s00?ie=UTF8&psc=1" target='_blank'>Sony Digital Flash Voice Recorder (ICD-PX312)</A> gives you really great audio quality and have the look like a pro in the field, you can hook it up with the lavalier microphone and create the seamless speech volume from whatever distance you want as there is no signal or wires you have to worry about. Afterwards, just import it and sync it with your videos.
            </P>
          </Div>
        </Div>
      </Div>
      
      <Div modifiers={['w75', 'm0Auto']}>
        <P>
          ♦️ <A href="https://www.amazon.com/gp/product/B01HU3Q6S4/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1" target='_blank'>SanDisk Extreme 64GB microSDXC UHS-I Card with Adapter</A> is a perfect card that supports 4K recording and accepted by your Go Pro to keep up with the recording speed. SanDisk are usually paired with Go Pro's and usually work out pretty well for a fair price. I have had no problems so far with it!
        </P>

        <P>
          ♦️ <A href="https://www.amazon.com/gp/product/B002HJ9PTO/ref=oh_aui_detailpage_o08_s01?ie=UTF8&psc=1" target='_blank'>Audio-Technica ATR-3350 Lavalier Omnidirectional Condenser Microphone</A> lets you become that spy/informant/snitch you might have always wanted to be, here's an awesome microphone that picks up your voice and then some of the other person as well. It's mic is small and discreet and wires are long enough to loop from your feet to your head, even if you're 7 feet tall which I doubt!
        </P>
      </Div>
    </Div>

    <hr />

    <Div modifiers={['textLeft', 'my3Auto']}>
      <H1>💿 Software Products & Services</H1>
      <H3>
        If you're new to web development, make a new site with Namecheap + Bluehost + Divi Theme.
      </H3>

      <Div modifiers={['displayFlex', 'justifyCenter', 'textCenter']}>
        <Div modifiers={['flex1']}>
          <Div modifiers={['w100', 'margin0Auto', 'justifyCenter']}>
            <A href='https://www.namecheap.com/' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/VHlW4oG.png' alt='Namecheap Domain Registration'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ <A href="https://www.namecheap.com/" target='_blank'>Namecheap</A> allows you to buy custom domain names which I prefer over GoDaddy. There seems to be less promotion and it’s much easier to use. There’s a dashboard to keep of all the domain names you purchase and reminds you when domains start expiring.
            </P>
          </Div>
        </Div>

        <Div modifiers={['flex1']}>
          <Div>
            <A href='http://www.bluehost.com/track/timothyhoang/' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/iBfHVDZ.png' alt='Bluehost Web Hosting'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ <A href="http://www.bluehost.com/track/timothyhoang/" target='_blank'>Bluehost</A> is a popular company for good reason. It’s affordable, easy to use, and has excellent support. Compared to other hosting company, I’ve found Bluehost offers a great deal and excellent perks. I’ve already hosted six websites with them and they have not let me down yet. I would really recommend them for anyone wanting to start a new website. Consider a Plus plan if you plan on hosting many websites. Use <A href="http://www.bluehost.com/track/timothyhoang/">my affiliate link</A> if you decide to get it!
            </P>
          </Div>
        </Div>

        <Div modifiers={['flex1']}>
          <Div>
            <A href='http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=33802' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/3OZAEvD.png' alt='Divi Themes by Elegant Themes'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ <A href="http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=33802" target='_blank'>Divi Theme by Elegant Themes</A> is a modern solution that makes website building easy with building blocks and modules. With complete access to all themes including 87 at this point, extensive tutorial section, and unlimited website usage; it’s a phenomenal value for the price. I’ve created more than 3 websites with their product and love it. Coding knowledge is NOT required but you won’t be limited if you want to use CSS either. There’s split testing, visual builder, template saver, and many other functions. Play with their demo and see if it’s a good fit for you. Please use <A href="http://www.elegantthemes.com/affiliates/idevaffiliate.php?id=33802">my affiliate link</A> if you decide to get it!
            </P>
          </Div>
        </Div>
      </Div>

      <Div modifiers={['w75', 'm0Auto']}>
        <P>
          ♦️ <A href="https://drive.google.com/settings/storage" target='_blank'>Google Drive 100GB</A> has a deal for $2/month, which gets you 100GB so you can store all your important files on a cloud. This is a boon for digital nomads who don’t want to carry around an external hard drive. I keep my important documents, music, ebooks, and audiobooks on there. You can even download the desktop app to make your work flow even more fluid.
        </P>
        <P>
          ♦️ <A href="https://www.lastpass.com/" target='_blank'>LastPass</A> is a password management software that can keep track of all your passwords and features a secure note section too.
        </P>
      </Div>
    </Div>

    <hr />

    <Div modifiers={['textLeft', 'my3Auto']}>
      <H1>📚 Web Development Resources</H1>
      <H3>I recommend trying out free courses to see what you like before buying courses.</H3>

      <Div modifiers={['displayFlex', 'justifyCenter', 'textCenter']}>
        <Div modifiers={['flex1']}>
          <Div modifiers={['w100', 'margin0Auto', 'justifyCenter']}>
            <A href='https://www.freecodecamp.org/' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/PuUow45.png' alt='Free Code Camp'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ <A href="https://www.freecodecamp.org/" target='_blank'>Free Code Camp</A> is another great place to learn to code with free exercises and community. It’s considered a real school which you can list on LinkedIn and helps you get in contact with non-profits after you finish your certifications. However, many people get jobs way before they finish their certifications. Though a little vague on instruction sometimes, it’s still a great resource to get you started.
            </P>
          </Div>
        </Div>

        <Div modifiers={['flex1']}>
          <Div>
            <A href='https://www.codecademy.com/' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/BbOxoUm.png' alt='Codecademy'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ <A href="https://www.codecademy.com/" target='_blank'>Codecademy</A> is a very similar learning environment to Free Code Camp. Plenty of exercises and courses for you to sign up on. It’s free and really fun to learn. Instructions are much better but it does not have a large community to interact with others. The best way to learn is to read, apply, and see the results. This is a great place to do just that!
            </P>
          </Div>
        </Div>

        <Div modifiers={['flex1']}>
          <Div>
            <A href='https://www.udemy.com/' target='_blank'>
              <Img modifiers={['mh300px']} src='https://i.imgur.com/ntULx0d.png' alt='Udemy'/>
            </A>
          </Div>
          <Div modifiers={['w75', 'm0Auto']}>
            <P>
              ♦️ <A href="https://www.udemy.com/" target='_blank'>Udemy</A> has plenty of awesome great courses from independent instructors. I recommend Colt Steele, Stephen Grider, Anthony Alicea, Andrew Mead to get start with. There are plenty of other good instructors but those are usually some of the most highly recommended. Please do not spend $200 on the course, Udemy has sales constantly and you can get this course for $10-15 easily.
            </P>
          </Div>
        </Div>
      </Div>

      <Div modifiers={['w75', 'm0Auto']}>
        <P>
          ♦️ <A href="https://www.udemy.com/the-web-developer-bootcamp/" target='_blank'>The Web Developer Bootcamp </A> is my personal favorite course on Udemy with focus on HTML, CSS, JavaScript, Node, Express, MongoDB. It’s taught by Colt Steele who has taught bootcamps in the past. I love the style of the course and how practical it was taught. Coding can be daunting for a beginner but the instructor knows about this and helps you feel like you’re making improvements every day. The technologies are starting with the very basics but you can start implementing ES6 (JavaScript) if you know some. Please do not spend $200 on the course, Udemy has sales constantly and you can get this course for $10-15 easily.
        </P>

        <P>
          ♦️ <A href="https://es6.io/" target='_blank'>ES6 For Everyone </A> is an awesome resource if you’re a JavaScript ninja. Get your chops down and learn all the updates that were released in 2015. Wes Bos is a great teacher and his videos are informative but do not leave you snoring. Wes covers template strings, promises, symbols, generators, proxies, and a ton more! Do yourself a favor if you doing JS, pick this up. Absolutely love this course and recommending to everyone I know!
        </P>

        <P>
          ♦️ <A href="https://reactforbeginners.com/" target='_blank'>React For Beginners </A> is an awesome course to start learning React with the latest technologies, Google's Firebase, and other services as well. It's how I learned React myself and I highly recommend this instructor too. Wes is fun rolled in with high Javascript expertise which makes picking up React a great experience for newbies.
        </P>
      </Div>
    </Div>

    <hr />

    <P modifiers={['bold']}>
      Disclosure: Some of the links in this post are ‘affiliate links.’ This means if you click on the link and purchase the item, I will receive an affiliate commission. This is however at no extra cost to you. You’d just be helping me out 🙂
    </P>
  </Section>
)

export default ResourcesPage