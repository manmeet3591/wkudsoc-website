export interface Partner {
  name: string;
  category: 'internal' | 'emergency-response' | 'federal' | 'industry' | 'client';
  description?: string;
}

export const partners: Partner[] = [
  // Internal
  {
    name: 'WKU Athletics',
    category: 'internal',
    description: 'Game-day weather monitoring and severe weather safety protocols for WKU sporting events.',
  },
  {
    name: 'WKU Administration',
    category: 'internal',
    description: 'Campus-wide weather intelligence and emergency preparedness coordination.',
  },
  {
    name: 'WKU Police',
    category: 'internal',
    description: 'Collaborative severe weather response and campus safety operations.',
  },

  // Emergency Response
  {
    name: 'Warren County Emergency Management',
    category: 'emergency-response',
    description: 'Primary county partner for severe weather monitoring, EOC support, and disaster response coordination.',
  },
  {
    name: 'Warren County Fire',
    category: 'emergency-response',
    description: 'Joint operations for weather-related emergency response and community safety.',
  },
  {
    name: 'Bowling Green Fire Department',
    category: 'emergency-response',
    description: 'Urban disaster response collaboration and public safety weather briefings.',
  },

  // Federal
  {
    name: 'FBI',
    category: 'federal',
    description: 'Partnership in weather-related threat assessment and critical infrastructure protection.',
  },
  {
    name: 'NOAA',
    category: 'federal',
    description: 'Collaborative research, data sharing, and operational forecast coordination.',
  },

  // Industry
  {
    name: 'WeatherSTEM',
    category: 'industry',
    description: 'Weather observation network integration and STEM education technology partnership.',
  },
  {
    name: 'EM1.Com',
    category: 'industry',
    description: 'Emergency management technology and communication platform collaboration.',
  },
  {
    name: 'Fern River Outdoors',
    category: 'industry',
    description: 'Outdoor recreation weather safety and environmental monitoring partnership.',
  },
  {
    name: 'CLIMBS',
    category: 'industry',
    description: 'Climate data analytics and resilience research collaboration.',
  },

  // Clients
  {
    name: 'Jim Beam',
    category: 'client',
    description: 'Professional meteorological services for distillery operations and outdoor event support.',
  },
  {
    name: "Maker's Mark",
    category: 'client',
    description: 'Weather intelligence for bourbon production facilities and visitor experience events.',
  },
  {
    name: 'Bank of America',
    category: 'client',
    description: 'Event weather support for the Bank of America Chicago Marathon.',
  },
  {
    name: 'Cruzan Rum',
    category: 'client',
    description: 'Tropical weather monitoring and event meteorological services.',
  },
  {
    name: 'Cherry Blossom Festival',
    category: 'client',
    description: 'Multi-week event weather forecasting and daily operational briefings.',
  },
  {
    name: 'Special Olympics Indiana',
    category: 'client',
    description: 'Comprehensive weather safety planning and on-site meteorological support.',
  },
];

export interface ConsortiumMember {
  name: string;
  county: string;
}

export const consortiumMembers: ConsortiumMember[] = [
  {
    name: 'Warren County Emergency Management',
    county: 'Warren',
  },
  {
    name: 'Barren County Emergency Management',
    county: 'Barren',
  },
  {
    name: 'Hart County Emergency Management',
    county: 'Hart',
  },
  {
    name: 'Simpson County Emergency Management',
    county: 'Simpson',
  },
  {
    name: 'Allen County Emergency Management',
    county: 'Allen',
  },
  {
    name: 'Butler County Emergency Management',
    county: 'Butler',
  },
  {
    name: 'Edmonson County Emergency Management',
    county: 'Edmonson',
  },
  {
    name: 'Logan County Emergency Management',
    county: 'Logan',
  },
  {
    name: 'Monroe County Emergency Management',
    county: 'Monroe',
  },
  {
    name: 'Metcalfe County Emergency Management',
    county: 'Metcalfe',
  },
  {
    name: 'Todd County Emergency Management',
    county: 'Todd',
  },
  {
    name: 'Muhlenberg County Emergency Management',
    county: 'Muhlenberg',
  },
];
