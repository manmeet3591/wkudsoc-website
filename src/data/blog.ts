export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  slug: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'DSOC Team Presents at AMS Conference in Houston',
    date: '2026-01-15',
    excerpt:
      'WKU DSOC researchers presented three papers at the 2026 American Meteorological Society Annual Meeting in Houston, showcasing our latest work in AI-driven severe weather prediction, operational event meteorology, and community resilience planning. Dr. Singh\'s keynote session on Disaster AI drew significant attention from industry professionals.',
    category: 'News',
    slug: 'dsoc-team-presents-ams-conference-houston-2026',
    featured: true,
  },
  {
    title: 'Spring Severe Weather Outlook 2026',
    date: '2026-03-01',
    excerpt:
      'As spring approaches, the DSOC meteorological team breaks down what south-central Kentucky and the broader region can expect for the 2026 severe weather season. With La Nina conditions weakening, our analysis points to a near-normal tornado season but elevated flash flood risk through May. Here is what you need to know to stay prepared.',
    category: 'Weather',
    slug: 'spring-severe-weather-outlook-2026',
    featured: true,
  },
  {
    title: 'AI-Powered Flood Tracking Tool Launch',
    date: '2025-11-10',
    excerpt:
      'The DSOC AI Laboratory is proud to announce the launch of our Flash Flood Warning and Rainfall Tracker, a real-time monitoring tool that integrates machine learning models with NOAA rainfall data to provide county-level flood risk assessments across Kentucky. The tool is now available to our consortium emergency management partners.',
    category: 'Research',
    slug: 'ai-powered-flood-tracking-tool-launch',
    featured: true,
  },
  {
    title: 'DSOC Deploys to Cherry Blossom Festival',
    date: '2025-04-02',
    excerpt:
      'For the fourth consecutive year, DSOC deployed a team to Washington, D.C. to provide weather support for the National Cherry Blossom Festival. Our meteorologists delivered daily forecast briefings, peak bloom predictions, and severe weather monitoring throughout the multi-week event, helping organizers navigate a particularly rainy stretch in early April.',
    category: 'Events',
    slug: 'dsoc-deploys-cherry-blossom-festival-2025',
  },
  {
    title: 'How AI is Transforming Severe Weather Prediction',
    date: '2026-02-12',
    excerpt:
      'From ensemble models to deep learning architectures, artificial intelligence is reshaping how we forecast severe weather. Dr. Manmeet Singh explores the current state of AI in meteorology, how DSOC\'s AI Laboratory is contributing to the field, and what the next generation of prediction tools will look like for emergency managers and first responders.',
    category: 'Research',
    slug: 'how-ai-is-transforming-severe-weather-prediction',
  },
  {
    title: 'Student Spotlight: Storm Chase Season 2025',
    date: '2025-05-20',
    excerpt:
      'WKU meteorology students hit the road for storm chase season 2025, documenting supercell thunderstorms and tornadoes across the Great Plains. DSOC undergraduate researchers Wyatt Crutcher and Nick Zrelak share their experiences from the field, including close encounters with a long-track tornado near Woodward, Oklahoma.',
    category: 'Student Life',
    slug: 'student-spotlight-storm-chase-season-2025',
  },
  {
    title: "DSOC's Role in Kentucky Tornado Recovery",
    date: '2025-12-11',
    excerpt:
      'In the aftermath of a significant tornado outbreak across western Kentucky, DSOC activated its disaster response protocols and deployed personnel to support local emergency management agencies. This post recaps our response operations, lessons learned, and the critical role that real-time weather intelligence played in keeping communities safe.',
    category: 'Disaster Response',
    slug: 'dsoc-role-kentucky-tornado-recovery-2025',
  },
];
