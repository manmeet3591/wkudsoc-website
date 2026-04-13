export interface DSOCEvent {
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'upcoming' | 'past';
  featured?: boolean;
}

export const events: DSOCEvent[] = [
  // Upcoming Events
  {
    title: 'Shamrock Shuffle 2026',
    date: '2026-03-22',
    location: 'Chicago, IL',
    description:
      'DSOC will provide on-site weather monitoring and real-time forecasting support for the annual Shamrock Shuffle road race through downtown Chicago. The team will deliver pre-race weather briefings and continuous condition updates to race organizers.',
    type: 'upcoming',
    featured: true,
  },
  {
    title: 'Cherry Blossom Festival 2026',
    date: '2026-03-20 - 2026-04-12',
    location: 'Washington, D.C.',
    description:
      'DSOC returns to support the National Cherry Blossom Festival with daily weather forecasts, peak bloom predictions, and event-day weather intelligence for festival organizers and attendees across the multi-week celebration.',
    type: 'upcoming',
    featured: true,
  },
  {
    title: 'Summer Weather Workshop 2026',
    date: '2026-06-15',
    location: 'WKU Campus, Bowling Green, KY',
    description:
      'An intensive one-day workshop for regional emergency managers and first responders covering severe weather preparedness, radar interpretation, and DSOC decision-support tools. Open to all consortium members and partners.',
    type: 'upcoming',
  },
  {
    title: 'Louder Than Life 2026',
    date: '2026-09-18 - 2026-09-21',
    location: 'Louisville, KY',
    description:
      'DSOC will provide comprehensive meteorological support for the Louder Than Life music festival at the Highland Festival Grounds, including severe weather monitoring, heat safety advisories, and real-time lightning tracking.',
    type: 'upcoming',
    featured: true,
  },

  // Past Events
  {
    title: 'Bank of America Chicago Marathon 2025',
    date: '2025-10-12',
    location: 'Chicago, IL',
    description:
      'DSOC provided full-spectrum weather support for the 2025 Chicago Marathon, including pre-race forecasting, real-time wind and temperature monitoring along the course, and medical weather advisories for over 45,000 runners.',
    type: 'past',
    featured: true,
  },
  {
    title: 'Special Olympics Indiana 2025',
    date: '2025-06-06 - 2025-06-08',
    location: 'Indianapolis, IN',
    description:
      'The DSOC team deployed to Indianapolis to provide on-site weather safety support for the Special Olympics Indiana Summer Games, delivering hourly briefings and lightning safety protocols for outdoor competitions.',
    type: 'past',
  },
  {
    title: 'Holley LS Fest 2025',
    date: '2025-09-05 - 2025-09-07',
    location: 'Bowling Green, KY',
    description:
      'DSOC supported Holley LS Fest at Beech Bend Raceway with continuous weather monitoring for drag racing, autocross, and drift events, ensuring safe conditions for competitors and spectators throughout the weekend.',
    type: 'past',
  },
  {
    title: 'NASCAR Cup Series - Nashville Superspeedway 2025',
    date: '2025-06-22',
    location: 'Lebanon, TN',
    description:
      'DSOC provided supplemental weather intelligence and severe thunderstorm monitoring for the NASCAR Cup Series race at Nashville Superspeedway, supporting race operations with hyper-local forecasting and lightning detection.',
    type: 'past',
  },
  {
    title: 'Cherry Blossom Festival 2025',
    date: '2025-03-20 - 2025-04-13',
    location: 'Washington, D.C.',
    description:
      'DSOC delivered daily operational weather briefings and peak bloom forecasts throughout the 2025 National Cherry Blossom Festival, helping organizers plan parade logistics and outdoor programming.',
    type: 'past',
  },
  {
    title: 'Kentucky Severe Weather Awareness Week 2025',
    date: '2025-03-03 - 2025-03-07',
    location: 'Statewide, KY',
    description:
      'DSOC partnered with Warren County Emergency Management to lead community outreach events during Kentucky Severe Weather Awareness Week, delivering public presentations on tornado safety and preparedness.',
    type: 'past',
  },
];
