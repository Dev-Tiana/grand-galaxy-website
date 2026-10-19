export type Status = 'verified' | 'needs approval' | 'historical reference';

export type Programme = {
  slug: string;
  title: string;
  category: string;
  format: string;
  summary: string;
  details: string[];
  status: Status;
  sourceLabel: string;
  sourceHref: string;
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  deliverables: string[];
  process: string[];
  caution?: string;
};

export const brand = {
  name: 'La Grande Galaxie',
  shortName: 'LGGx',
  email: 'info@grandgalaxy.ng',
  phone: '+234 810 504 3903',
  phoneHref: 'tel:+2348105043903',
  whatsappHref: 'https://wa.me/2348105043903',
  logoSrc: '/lggx-logo.png'
};

export const programmes: Programme[] = [
  {
    slug: 'data-analysis-with-spss-and-excel',
    title: 'Data analysis with SPSS and Excel',
    category: 'Data skills',
    format: 'Online learning listed on the current site',
    summary: 'A practical programme built around Excel, SPSS, and an introduction to AI for data analysis.',
    details: ['Excel foundations and useful workflows', 'SPSS analysis practice', 'A practical introduction to AI for data analysis'],
    status: 'needs approval',
    sourceLabel: 'View the published programme page',
    sourceHref: 'https://grandgalaxy.ng/product/data-analysis-with-spss-excel/'
  },
  {
    slug: 'data-science-and-analytics-mentorship',
    title: 'Data science and analytics mentorship',
    category: 'Data skills',
    format: 'Live and recorded online learning listed on the current site',
    summary: 'A mentorship offer that covers Excel, SQL, Power BI, and Python according to the published page.',
    details: ['Excel and SQL foundations', 'Power BI practice', 'Python and data analytics support'],
    status: 'needs approval',
    sourceLabel: 'View the published programme page',
    sourceHref: 'https://grandgalaxy.ng/product/data-science-and-analytics-mentorship-program/'
  },
  {
    slug: 'data-visualization-with-tableau',
    title: 'Data visualization with Tableau',
    category: 'Data skills',
    format: 'Online learning listed on the current site',
    summary: 'A Tableau focused masterclass presented as an applied data visualization programme.',
    details: ['Dashboard thinking', 'Visual storytelling with data', 'Practical Tableau exercises'],
    status: 'historical reference',
    sourceLabel: 'View the published programme page',
    sourceHref: 'https://grandgalaxy.ng/courses/data-visualization-with-tableau/'
  },
  {
    slug: 'spss-simplified',
    title: 'SPSS simplified',
    category: 'Data skills',
    format: 'Online learning listed on the current site',
    summary: 'A focused learning group presented around SPSS recordings, materials, guidance, and questions.',
    details: ['Recorded lessons', 'Learning materials', 'Guidance for data analysis questions'],
    status: 'needs approval',
    sourceLabel: 'View the published programme page',
    sourceHref: 'https://grandgalaxy.ng/product/exclusive-group-for-spss-simplified/'
  },
  {
    slug: 'thirty-day-excel-challenge',
    title: 'Thirty day Excel challenge',
    category: 'Data skills',
    format: 'Online learning listed on the current site',
    summary: 'A structured Excel practice challenge presented as a daily learning experience.',
    details: ['Daily Excel practice', 'A clear sequence for building confidence', 'An applied learning rhythm'],
    status: 'historical reference',
    sourceLabel: 'View the published programme page',
    sourceHref: 'https://grandgalaxy.ng/product/30daysexcelchallenge/'
  },
  {
    slug: 'r-and-stata-data-analysis',
    title: 'R and Stata data analysis training',
    category: 'Data skills',
    format: 'Online learning listed on the current site',
    summary: 'A data analysis programme presented around R and Stata tools.',
    details: ['R based analysis', 'Stata based analysis', 'Guided practice around data work'],
    status: 'needs approval',
    sourceLabel: 'View the published programme page',
    sourceHref: 'https://grandgalaxy.ng/product/r-stata-data-analysis-training/'
  }
];

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web development',
    eyebrow: 'Digital delivery',
    summary: 'Web development support for organizations that need a clear, useful digital presence.',
    problem: 'A website can look active and still make it difficult for people to understand the offer or take the next step. The published service describes responsive front end and back end work.',
    deliverables: ['Responsive website planning', 'Front end and back end development', 'A clear content and conversion structure'],
    process: ['Clarify the business need and audience', 'Shape the page structure and content', 'Build, review, and prepare the handoff'],
    caution: 'Scope, technology, timeline, hosting, maintenance, and proof examples need confirmation for each enquiry.'
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile app development',
    eyebrow: 'Digital delivery',
    summary: 'Mobile application support for ideas that need a focused experience on iOS or Android.',
    problem: 'A mobile idea needs more than a screen design. It needs a clear user need, a sensible release scope, and a path from first build to useful feedback.',
    deliverables: ['Product discovery support', 'Mobile experience planning', 'Development discussion for iOS and Android'],
    process: ['Clarify the users and their task', 'Prioritize a useful first release', 'Plan development, review, and next steps'],
    caution: 'Platforms, integrations, delivery timeline, maintenance, and previous work need confirmation.'
  },
  {
    slug: 'online-tutoring-and-training',
    title: 'Online tutoring and training',
    eyebrow: 'Learning support',
    summary: 'Online learning support for people who need a clear route through a new topic or tool.',
    problem: 'Learning becomes difficult when the content is disconnected from the learner’s task. The published service describes personalized online tutoring and training.',
    deliverables: ['Topic and goal clarification', 'Guided online learning', 'A practical route for questions and feedback'],
    process: ['Understand the learner or team need', 'Set a useful learning sequence', 'Review progress and next steps'],
    caution: 'Subjects, cohort dates, class size, delivery tools, fees, and certificate policy need confirmation.'
  },
  {
    slug: 'professional-data-analysis',
    title: 'Professional data analysis',
    eyebrow: 'Evidence and insight',
    summary: 'Data analysis support for teams that need to turn information into a clearer decision process.',
    problem: 'Raw data does not answer a business question by itself. The published service describes data collection, cleansing, analysis, and visualization.',
    deliverables: ['Data preparation discussion', 'Analysis and visualization planning', 'A clear explanation of findings and limits'],
    process: ['Clarify the decision and available data', 'Agree the analysis scope and outputs', 'Review the findings and handoff'],
    caution: 'Data access, confidentiality, tools, timelines, and sample work need confirmation.'
  },
  {
    slug: 'research-writing-services',
    title: 'Research writing support',
    eyebrow: 'Writing and learning',
    summary: 'Writing support for research work, with a clear boundary around academic integrity.',
    problem: 'Research writing can stall when the question, structure, evidence, or presentation needs careful attention. Support should help the learner understand and improve their own work.',
    deliverables: ['Research structure guidance', 'Editing and clarity support', 'A review of questions, evidence, and presentation'],
    process: ['Clarify the stage of the research work', 'Agree the support that is appropriate', 'Review changes with the learner or client'],
    caution: 'La Grande Galaxie should confirm its academic integrity policy, permitted support, review rounds, and examples before publishing a detailed offer.'
  }
];

export const resources = [
  { title: 'How to choose a practical learning path', type: 'Learning guide', summary: 'A simple way to compare time, format, practice, support, and the next useful step.', href: '/resources#learning-path' },
  { title: 'Questions to ask before a data project', type: 'Business guide', summary: 'A grounded checklist for the decision, data, scope, and handoff conversations that shape useful analysis.', href: '/resources#data-project' },
  { title: 'A clearer brief for a digital project', type: 'Project guide', summary: 'The information a business can gather before requesting a website or mobile app conversation.', href: '/resources#digital-brief' }
];

export const faqs = [
  { question: 'Are the programmes currently open for registration?', answer: 'The public site contains current and historical programme information, but the new catalogue marks dates, fees, and cohort status as needing confirmation. Use the registration form and the team can confirm the next available option.' },
  { question: 'How are learning sessions delivered?', answer: 'The public site references online delivery through channels such as Microsoft Teams, WhatsApp, and Zoom. The exact channel depends on the approved programme or cohort.' },
  { question: 'Can a business request training for its team?', answer: 'Yes. Use the business enquiry path to describe the team, the skill need, the preferred format, and the practical result you want to work toward. Custom scope and pricing need confirmation.' },
  { question: 'Do you publish course fees?', answer: 'Fees on the current site are not consistent across older programme pages and the shop. The new experience does not present an unconfirmed fee as current. The team can confirm the approved fee for a specific programme.' },
  { question: 'Will I receive a certificate?', answer: 'Certificate policy depends on the specific programme and needs confirmation. The new site does not promise a certificate without an approved programme detail.' },
  { question: 'What does research writing support include?', answer: 'The proposed boundary is guidance, editing, structure, and clarity support that helps the learner understand and improve their own work. It should not replace the learner’s authorship or complete assessed work for them.' }
];

export const statusLabel: Record<Status, string> = {
  verified: 'Verified information',
  'needs approval': 'Details need approval',
  'historical reference': 'Historical reference'
};

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
