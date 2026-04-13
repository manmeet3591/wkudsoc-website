export interface TeamMember {
  name: string;
  title: string;
  role: string;
  image?: string;
  category: 'administrator' | 'graduate' | 'undergraduate';
  bio: string;
  email?: string;
  phone?: string;
}

export const teamMembers: TeamMember[] = [
  // Administrators
  {
    name: 'Dr. Josh Durkee',
    title: 'Professor of Meteorology',
    role: 'Director WKU DSOC, University Meteorologist',
    category: 'administrator',
    bio: 'Dr. Durkee founded WKU DSOC and has led its growth into Kentucky\'s primary hub for weather intelligence and disaster resilience. With over 15 years of operational meteorology experience, he specializes in severe weather forecasting and large-scale event support.',
    email: 'josh.durkee@wku.edu',
    phone: '(270) 745-5983',
  },
  {
    name: 'Dr. David Oliver',
    title: 'Director Environmental Health and Safety',
    role: 'Co-Director WKU DSOC, University Emergency Manager',
    category: 'administrator',
    bio: 'Dr. Oliver brings deep expertise in emergency management and environmental safety to WKU DSOC. As University Emergency Manager, he leads disaster preparedness and response initiatives across the campus and surrounding communities.',
    email: 'david.oliver@wku.edu',
    phone: '(270) 745-2014',
  },
  {
    name: 'Dr. Manmeet Singh',
    title: 'Assistant Professor of Meteorology',
    role: 'Lead DSOC AI Laboratory',
    category: 'administrator',
    bio: 'Dr. Singh leads the DSOC AI Laboratory, pioneering the application of machine learning and artificial intelligence to disaster science. His research focuses on AI-driven weather prediction, flood tracking, and building next-generation decision-support tools.',
  },

  // Graduate Students
  {
    name: 'Luke Ferguson',
    title: 'Graduate Research Assistant',
    role: 'Graduate Research Assistant',
    category: 'graduate',
    bio: 'Luke\'s research focuses on severe convective storm environments and operational forecasting techniques. He actively supports DSOC event operations and contributes to the development of real-time monitoring dashboards.',
  },
  {
    name: 'Harmony Guercio',
    title: 'Graduate Research Assistant',
    role: 'Graduate Research Assistant',
    category: 'graduate',
    bio: 'Harmony studies disaster response logistics and community resilience in the context of recurring severe weather events. She plays a key role in DSOC\'s outreach and training programs with regional emergency managers.',
  },
  {
    name: 'Thomas Payette',
    title: 'Graduate Research Assistant',
    role: 'Graduate Research Assistant',
    category: 'graduate',
    bio: 'Thomas specializes in mesoscale meteorology and data analytics, applying machine learning models to improve short-range severe weather forecasts. He supports DSOC\'s AI Laboratory and assists with field deployments.',
  },

  // Undergraduate Students
  {
    name: 'Carly Crockett',
    title: 'Undergraduate Research Assistant',
    role: 'Undergraduate Research Assistant',
    category: 'undergraduate',
    bio: 'Carly contributes to DSOC\'s event support operations and assists with data collection for severe weather research. She is pursuing a degree in meteorology with a focus on broadcast communication.',
  },
  {
    name: 'Wyatt Crutcher',
    title: 'Undergraduate Research Assistant',
    role: 'Undergraduate Research Assistant',
    category: 'undergraduate',
    bio: 'Wyatt supports DSOC field operations and assists with the development of hazard mapping tools. He is an active storm chaser and contributes ground-truth observations during severe weather events.',
  },
  {
    name: 'Addison Summitt',
    title: 'Undergraduate Research Assistant',
    role: 'Undergraduate Research Assistant',
    category: 'undergraduate',
    bio: 'Addison works on the White Squirrel Weather daily report and supports DSOC\'s social media and public outreach. She is studying meteorology with interests in climate resilience and public engagement.',
  },
  {
    name: 'Nick Zrelak',
    title: 'Undergraduate Research Assistant',
    role: 'Undergraduate Research Assistant',
    category: 'undergraduate',
    bio: 'Nick assists with DSOC\'s disaster response training exercises and contributes to the flash flood tracking research project. He is pursuing meteorology with a minor in data science.',
  },
];
