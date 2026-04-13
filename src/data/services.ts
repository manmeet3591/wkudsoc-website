export interface Service {
  name: string;
  icon: string;
  description: string;
  keyPoints: string[];
  slug: string;
}

export const services: Service[] = [
  {
    name: 'Event Support',
    icon: 'Calendar',
    description:
      'DSOC provides comprehensive weather forecasting and monitoring for major events across the nation. Our team delivers real-time weather intelligence, safety assessments, and on-site meteorological support to event organizers, ensuring participant safety and operational continuity.',
    keyPoints: [
      'On-site meteorological teams with real-time monitoring capabilities',
      'Pre-event weather risk assessments and contingency planning',
      'Notable events: Bank of America Chicago Marathon, Special Olympics Indiana, Cherry Blossom Festival',
      'Holley LS Fest and Louder Than Life festival weather operations',
      'Post-event analysis and after-action reporting',
    ],
    slug: 'event-support',
  },
  {
    name: 'Meteorological Services',
    icon: 'CloudLightning',
    description:
      'From hyper-local daily forecasts to severe weather tracking, DSOC delivers precise, actionable weather intelligence. Our flagship White Squirrel Weather daily report keeps the WKU campus and Bowling Green community informed with tailored forecasts and weather awareness.',
    keyPoints: [
      'White Squirrel Weather daily forecast report for campus and community',
      'Hyper-local forecasting for Bowling Green and south-central Kentucky',
      'Severe weather tracking, monitoring, and real-time alerting',
      'Custom forecast products for partners and clients',
      'Seasonal outlooks and climate trend briefings',
    ],
    slug: 'meteorological-services',
  },
  {
    name: 'Disaster Response',
    icon: 'ShieldAlert',
    description:
      'DSOC maintains ICS-trained personnel ready for rapid deployment during disaster events. We provide real-time storm monitoring, Emergency Operations Center support, and field intelligence to aid first responders and emergency managers in making critical decisions.',
    keyPoints: [
      'ICS-trained personnel for rapid deployment to disaster zones',
      'Emergency Operations Center (EOC) meteorological support',
      'Real-time field intelligence and ground-truth reporting',
      'Coordination with county emergency management agencies across Kentucky',
      'Post-disaster damage assessment and documentation',
    ],
    slug: 'disaster-response',
  },
  {
    name: 'Research & Data Analytics',
    icon: 'BarChart3',
    description:
      'The DSOC AI Laboratory leads cutting-edge research at the intersection of artificial intelligence and disaster science. Our team develops purpose-driven tools and models that improve forecasting accuracy, flood detection, and community resilience planning.',
    keyPoints: [
      'AI and machine learning applications for severe weather prediction',
      'Disaster AI tools including flood tracking and hazard mapping',
      'Purpose-driven research aligned with community and partner needs',
      'Data analytics pipelines for historical weather and disaster events',
      'Collaboration with federal partners including NOAA and FBI',
    ],
    slug: 'research-data-analytics',
  },
  {
    name: 'Educational Outreach',
    icon: 'GraduationCap',
    description:
      'DSOC is committed to building public weather awareness and preparing communities for natural disasters. We design and deliver training programs, tabletop exercises, and outreach initiatives for schools, organizations, and emergency management agencies.',
    keyPoints: [
      'Public weather awareness campaigns and community presentations',
      'Organizational training for emergency preparedness',
      'Tabletop exercise design and facilitation for disaster scenarios',
      'K-12 STEM outreach with hands-on meteorology demonstrations',
      'Student mentorship and professional development in disaster science',
    ],
    slug: 'educational-outreach',
  },
  {
    name: 'DSOC Pro',
    icon: 'Briefcase',
    description:
      'DSOC Pro provides professional-grade meteorological services tailored for business, industry, and government clients. From bourbon distilleries to major financial institutions, we deliver the weather intelligence that drives informed operational decisions.',
    keyPoints: [
      'Custom meteorological consulting for business and industry',
      'Clients include Jim Beam, Maker\'s Mark, Bank of America, and Cruzan Rum',
      'Government and municipal weather support services',
      'Risk assessment and weather-sensitive operations planning',
      'Dedicated account management and on-call forecasting',
    ],
    slug: 'dsoc-pro',
  },
];
