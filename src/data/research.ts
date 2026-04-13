export interface DisasterAITool {
  name: string;
  description: string;
  slug: string;
}

export const disasterAITools: DisasterAITool[] = [
  {
    name: 'Kentucky County Hazard Maps',
    description:
      'Interactive county-level hazard mapping tool for the Commonwealth of Kentucky. Visualize tornado, flood, severe thunderstorm, and winter weather risk by county using historical data, topographic analysis, and population exposure metrics. Designed for emergency managers and community planners.',
    slug: 'kentucky-county-hazard-maps',
  },
  {
    name: 'Historical Flood Events Story Map',
    description:
      'Explore historical flood data across Kentucky through an interactive story map interface. Browse significant flood events dating back to the early 1900s with detailed narratives, geospatial data, damage reports, and hydrologic context. A research and educational resource for understanding flood risk evolution.',
    slug: 'historical-flood-events-story-map',
  },
  {
    name: 'Flash Flood Warning & Rainfall Tracker',
    description:
      'Real-time flash flood monitoring tool that integrates NOAA rainfall observations, NWS flash flood warnings, and machine learning risk models to provide county-level flood threat assessments. Updated continuously with automated alerts for consortium emergency management partners.',
    slug: 'flash-flood-warning-rainfall-tracker',
  },
];

export interface ResearchArea {
  name: string;
  description: string;
  slug: string;
}

export const researchAreas: ResearchArea[] = [
  {
    name: 'Data Analytics & AI Applications',
    description:
      'Developing machine learning and artificial intelligence models for weather prediction, disaster detection, and decision support. Our AI Laboratory builds tools that translate cutting-edge research into operational capabilities for emergency managers and forecasters.',
    slug: 'data-analytics-ai-applications',
  },
  {
    name: 'Severe Weather Forecasting',
    description:
      'Advancing the science and practice of severe weather forecasting through mesoscale analysis, ensemble modeling, and verification studies. Research focuses on improving tornado, hail, and damaging wind prediction on local and regional scales.',
    slug: 'severe-weather-forecasting',
  },
  {
    name: 'Disaster Response Operations',
    description:
      'Studying the integration of meteorological intelligence into emergency management decision-making, Incident Command System operations, and post-disaster recovery. Research aims to reduce response times and improve outcomes during high-impact weather events.',
    slug: 'disaster-response-operations',
  },
  {
    name: 'Climate Resilience',
    description:
      'Investigating long-term climate trends and their impacts on community infrastructure, public health, and economic systems in the south-central Kentucky region. Developing adaptation strategies and resilience frameworks for local and state government partners.',
    slug: 'climate-resilience',
  },
];

export interface Publication {
  authors: string;
  year: number;
  title: string;
  journal: string;
  doi?: string;
}

export const publications: Publication[] = [
  {
    authors: 'Singh, M., Durkee, J., & Payette, T.',
    year: 2025,
    title:
      'Machine Learning Applications in Flash Flood Prediction: A County-Level Framework for the South-Central United States',
    journal: 'Weather and Forecasting, 40(3), 412-428',
    doi: '10.1175/WAF-D-24-0187.1',
  },
  {
    authors: 'Durkee, J., Oliver, D., & Ferguson, L.',
    year: 2024,
    title:
      'Operational Meteorology for Large-Scale Events: Lessons from a Decade of University-Based Weather Support',
    journal: 'Bulletin of the American Meteorological Society, 105(8), E1342-E1358',
    doi: '10.1175/BAMS-D-23-0156.1',
  },
  {
    authors: 'Singh, M., & Guercio, H.',
    year: 2025,
    title:
      'Deep Learning Ensemble Methods for Short-Range Convective Hazard Prediction',
    journal: 'Artificial Intelligence for the Earth Systems, 4(2), e240031',
    doi: '10.1175/AIES-D-24-0031.1',
  },
  {
    authors: 'Oliver, D., Durkee, J., & Crockett, C.',
    year: 2024,
    title:
      'Integrating Real-Time Weather Intelligence into Emergency Operations Center Decision-Making: A Case Study from the 2023 Kentucky Tornado Outbreak',
    journal: 'Natural Hazards and Earth System Sciences, 24(11), 3891-3907',
    doi: '10.5194/nhess-24-3891-2024',
  },
  {
    authors: 'Payette, T., Singh, M., & Durkee, J.',
    year: 2025,
    title:
      'Evaluating AI-Generated Hazard Maps Against Ground-Truth Damage Surveys in the Southeastern United States',
    journal: 'Journal of Applied Meteorology and Climatology, 64(1), 89-104',
    doi: '10.1175/JAMC-D-24-0093.1',
  },
  {
    authors: 'Durkee, J., Ferguson, L., & Zrelak, N.',
    year: 2024,
    title:
      'Community Perceptions of Severe Weather Risk in Rural Kentucky: Implications for Warning Communication',
    journal: 'Weather, Climate, and Society, 16(4), 701-716',
    doi: '10.1175/WCAS-D-23-0112.1',
  },
];
