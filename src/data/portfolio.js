export const profile = {
  name: 'Nilay Pant',
  role: 'Data Solutions Professional',
  location: 'Noida, India',
  email: 'nilay.pant@icloud.com',
  phone: '+91-9690323069',
  portfolioUrl: 'https://nilaypant.github.io/',
  linkedInUrl: 'https://www.linkedin.com/in/nilay-pant',
  resumeSummary:
    'Data professional with 5+ years of experience across machine learning, data engineering, artificial intelligence and their applications in analytics solutions across various domains.',
  positioning:
    'Data engineering, machine learning, applied AI, decision systems and creative systems',
};

export const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'work', label: 'Work' },
  { id: 'study', label: 'Study' },
  { id: 'play', label: 'Play' },
];

export const impactStats = [
  { value: '5+', label: 'Years in data and analytics' },
  { value: '2', label: 'Industries; \n Adobe : Product Analytics, Innovaccer : Healthcare Data Science' },
  { value: '98.6', label: 'CAT 2020 Percentile Score' },
  { value: '28', label: 'Completed revolutions around the Sun' },
];

export const skills = [
  {
    group: 'Data',
    items: ['Engineering',
           'Architecture',
           'Business Intelligence',
           'Product Analytics',
           'Advanced MS-Suite',  
           'Power BI'
          ],
  },
  {
    group: 'ML/AI',
    items: ['Time-Series Forecasting',
            'SARIMA',
            'Prophet',
            'PCA',
            'ICA',
            'Support Vector Classification'
          ],
  },
  {
    group: 'Engineering',
    items: ['Python',
            'PySpark',
            'Django',
            'Javascript-React',
            'SQL',
            'KustoQL',
            'Git',
            'Generative AI'
          ],
  },
  {
    group: 'Platforms',
    items: ['Azure Databricks',
            'Snowflake',
            'Splunk',
            'Amplitude',
            'AVO',
            'JIRA'
          ],
  },
];

export const experiences = [
  {
    company: 'Adobe Systems Pvt. Ltd.',
    location: 'Noida, India',
    role: 'Data Science Engineer II',
    period: "Apr '25 - Present",
    summary:
      'Working across product analytics and Azure Databricks data pipelines for analytics use cases.',
    highlights: [
      'Designed and maintained data pipelines in Azure Databricks using PySpark.',
      'Worked with product analytics tooling including Splunk, AVO, and Amplitude.',
      'Applied Python, PySpark, and advanced analysis workflows to support analytics initiatives.',
    ],
    tags: ['Python', 'PySpark', 'Azure Databricks', 'Splunk', 'AVO', 'Amplitude'],
  },
  {
    company: 'Innovaccer Inc.',
    location: 'Noida, India',
    role: 'Senior Data Analyst',
    period: "Aug '21 - Apr '25",
    summary:
      'Built analytics and business insights products for healthcare, insurance, and internal operating teams.',
    highlights: [
      'Designed high-performance Power BI dashboards that improved operational insights and reduced decision-making time by 30%.',
      'Developed SARIMA and Prophet forecasting models, integrating outputs with Power BI for real-time insights.',
      'Tuned KustoQL and built Azure Synapse pipelines to improve data processing efficiency by up to 50%.',
      'Created JIRA-integrated tooling that increased SCRUM process efficiency by 80%.',
    ],
    tags: ['Power BI', 'Python', 'SQL', 'KustoQL', 'MongoDB', 'Django', 'Figma', 'JIRA'],
  },
];

export const projects = [
  {
    title: 'Face Recognition with FERET and FEI Datasets',
    category: 'Machine Learning',
    area: 'study',
    featured: true,
    status: 'Case study first, interactive demo planned',
    description:
      'Bachelor thesis exploring subspace reduction techniques such as PCA and ICA with support vector classification for face recognition.',
    impact: 'Achieved a 4% improvement in face recognition accuracy.',
    tags: ['PCA', 'ICA', 'SVC', 'Computer Vision', 'Face Recognition'],
    links: [
      {
        label: 'Springer listing',
        href: 'https://link.springer.com/chapter/10.1007/978-981-16-6285-0_62',
      },
    ],
  },
  {
    title: 'STAR-II Automated Rural Solar Project',
    category: 'Analytics Research',
    area: 'study',
    featured: true,
    status: 'Research project',
    description:
      'Analyzed weather and SCADA sensor data to visualize and predict prototype efficiency under changing environmental conditions.',
    impact:
      'Joint work under the Department of Science and Technology, India and Province of Trento, Italy.',
    tags: ['SCADA', 'Weather Data', 'Solar Energy', 'Analytics'],
    links: [],
  },
  {
    title: 'Healthcare BI and Forecasting Systems',
    category: 'Professional Analytics',
    area: 'work',
    featured: true,
    status: 'Professional project family',
    description:
      'Dashboarding, forecasting, data modeling, and pipeline work for operational healthcare and insurance analytics.',
    impact:
      'Improved decision speed, data processing efficiency, and forecasting accessibility for business teams.',
    tags: ['Power BI', 'Azure Synapse', 'Forecasting', 'KustoQL'],
    links: [],
  },
  {
    title: 'Movie Recommendation Playground',
    category: 'Interactive Demo',
    area: 'study',
    featured: false,
    status: 'Planned',
    description:
      'A future browser-friendly recommender demo using static datasets, explainable ranking, and interactive preference controls.',
    impact: 'Designed to become a resume-friendly ML demo hosted directly in the portfolio.',
    tags: ['Recommendation Systems', 'React', 'Client-Side ML'],
    links: [],
  },
  {
    title: 'Autonomous Ground Vehicle',
    category: 'Robotics and Computer Vision',
    area: 'study',
    featured: false,
    status: 'Archived project',
    description:
      'Contributed to AGV-DTU autonomous driving bot software using OpenCV and PyQT-based GUI tools.',
    impact: 'Selected to represent the institute internationally in the US.',
    tags: ['OpenCV', 'PyQT', 'Robotics', 'GUI Tools'],
    links: [],
  },
];

export const workSystems = [
  {
    title: 'Reusable Work Setup',
    description:
      'A future shareable template for the Chrome bookmarks, folder structure, and operating rituals I use when joining or running data workstreams.',
    tags: ['Operating System', 'Team Hygiene', 'Reusable Templates'],
  },
  {
    title: 'Analytics Delivery Practices',
    description:
      'A living section for notes on data governance, dashboard performance, metric definitions, stakeholder reviews, and release discipline.',
    tags: ['Best Practices', 'Data Governance', 'BI Delivery'],
  },
];

export const education = {
  institution: 'Delhi Technological University (Formerly DCE)',
  location: 'Delhi, India',
  degree: 'B.Tech in Computer Science Engineering',
  period: "Aug '17 - Jul '21",
};

export const playItems = [
  {
    title: 'Photography Gallery',
    description:
      'A future gallery for selected photographs, grouped by theme, location, and visual style.',
    status: 'Awaiting curated images',
  },
  {
    title: 'Short Films and Visual Stories',
    description:
      'A future home for short films, behind-the-scenes notes, and links to published work.',
    status: 'Awaiting film links',
  },
  {
    title: 'Creative Experiments',
    description:
      'A space for small browser games, visual toys, and interactive sketches that make the portfolio feel alive.',
    status: 'Planned',
  },
];
