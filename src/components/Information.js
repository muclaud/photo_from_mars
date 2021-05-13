import React from 'react';
import { Item } from 'semantic-ui-react';

const Information = () => (
  <Item.Group>
    <Item>
      <Item.Image
        size='medium'
        src='https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg'
      />

      <Item.Content>
        <Item.Header as='a'>Curiosity (rover)</Item.Header>
        <Item.Description>
          <p>
            Curiosity is a car-sized Mars rover designed to explore the Gale
            crater on Mars as part of NASA's Mars Science Laboratory (MSL)
            mission. Curiosity was launched from Cape Canaveral (CCAFS) on 26
            November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside
            Gale crater on Mars on 6 August 2012, 05:17:57 UTC. The Bradbury
            Landing site was less than 2.4 km (1.5 mi) from the center of the
            rover's touchdown target after a 560 million km (350 million mi)
            journey.
          </p>
          <p>
            The rover's goals include an investigation of the Martian climate
            and geology, assessment of whether the selected field site inside
            Gale has ever offered environmental conditions favorable for
            microbial life (including investigation of the role of water), and
            planetary habitability studies in preparation for human exploration.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image
        size='medium'
        src='https://solarsystem.nasa.gov/system/content_pages/main_images/1057_1057_rover2_768.jpg'
      />

      <Item.Content>
        <Item.Header as='a'>Opportunity (rover)</Item.Header>
        <Item.Description>
          <p>
            Opportunity, also known as MER-B (Mars Exploration Rover – B) or
            MER-1, and nicknamed "Oppy", is a robotic rover that was active on
            Mars from 2004 until mid-2018. Opportunity was operational on Mars
            for 5110 sols (5250 days; 14 years, 136 days). Launched on July 7,
            2003, as part of NASA's Mars Exploration Rover program, it landed in
            Meridiani Planum on January 25, 2004, three weeks after its twin
            Spirit (MER-A) touched down on the other side of the planet. With a
            planned 90-sol duration of activity (slightly less than 92.5 Earth
            days), Spirit functioned until it got stuck in 2009 and ceased
            communications in 2010, while Opportunity was able to stay
            operational for 5111 sols after landing, maintaining its power and
            key systems through continual recharging of its batteries using
            solar power, and hibernating during events such as dust storms to
            save power. This careful operation allowed Opportunity to operate
            for 57 times its designed lifespan, exceeding the initial plan by 14
            years, 46 days (in Earth time). By June 10, 2018, when it last
            contacted NASA, the rover had traveled a distance of 45.16
            kilometers (28.06 miles).
          </p>
          <p>
            Mission highlights included the initial 90-sol mission, finding
            meteorites such as Heat Shield Rock (Meridiani Planum meteorite),
            and over two years of exploring and studying Victoria crater. The
            rover survived moderate dust storms and in 2011 reached Endeavour
            crater, which has been described as a "second landing site". The
            Opportunity mission is considered one of NASA's most successful
            ventures.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image
        size='medium'
        src='https://cdn.mos.cms.futurecdn.net/EYoiusNmH87rrMTCMaBZbH.jpg'
      />

      <Item.Content>
        <Item.Header as='a'>Spirit (rover)</Item.Header>
        <Item.Description>
          <p>
            Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2,
            is a robotic rover on Mars, active from 2004 to 2010. Spirit was
            operational on Mars for 2208 sols (2249 days; 6 years, 77 days). It
            was one of two rovers of NASA's Mars Exploration Rover Mission
            managed by the Jet Propulsion Laboratory (JPL). Spirit landed
            successfully within the impact crater Gusev on Mars at 04:35 Ground
            UTC on January 4, 2004, three weeks before its twin, Opportunity
            (MER-B), which landed on the other side of the planet. Its name was
            chosen through a NASA-sponsored student essay competition. The rover
            became stuck in a "sand trap" in late 2009 at an angle that hampered
            recharging of its batteries; its last communication with Earth was
            sent on March 22, 2010.
          </p>
          <p>
            The rover completed its planned 90-sol mission (slightly less than
            92.5 Earth days). Aided by cleaning events that resulted in more
            energy from its solar panels, Spirit went on to function effectively
            over twenty times longer than NASA planners expected. Spirit also
            logged 7.73 km (4.8 mi) of driving instead of the planned 600 m (0.4
            mi), allowing more extensive geological analysis of Martian rocks
            and planetary surface features. Initial scientific results from the
            first phase of the mission (the 90-sol prime mission) were published
            in a special issue of the journal Science.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default Information;
