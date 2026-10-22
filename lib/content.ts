import programmeRecords from './programmes.json';

export type ProgrammeKind = 'Course' | 'Category' | 'Mentorship' | 'Diploma' | 'Professional training';

export type Programme = {
  slug: string;
  title: string;
  category: string;
  kind: ProgrammeKind;
  format: string;
  price?: string;
  summary: string;
  overview: string;
  outcomes: string[];
  audience: string[];
  topics: string[];
  curriculum: string[];
  duration: string | null;
  level: string | null;
  requirements: string | null;
  certificate: string | null;
  instructor: string | null;
  registrationNote: string;
  image: string;
  relatedSlugs: string[];
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  deliverables: string[];
  process: string[];
  image: string;
};

export type ResourceArticle = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  intro: string;
  image: string;
  sections: { heading: string; body: string }[];
  conclusion: string;
  nextStep: string;
  relatedHref: string;
  relatedLabel: string;
};

export const brand = {
  name: 'La Grande Galaxie Consult',
  shortName: 'LGGx',
  email: 'info@grandgalaxy.ng',
  phone: '+234 810 504 3903',
  phoneHref: 'tel:+2348105043903',
  whatsappHref: 'https://wa.me/2348105043903',
  logoSrc: '/lggx-logo.png',
  facebook: 'https://www.facebook.com/profile.php?id=61554990984436',
  instagram: 'https://www.instagram.com/lagrandegalaxieconsults/',
  x: 'https://x.com/lggconsults',
  telegram: 'https://t.me/+2K-bKsh7hV0zOWE0'
};

export const programmes: Programme[] = programmeRecords as Programme[];

export const services: Service[] = [
  { slug: 'web-development', title: 'Web Development', eyebrow: 'Digital solutions', summary: 'Dynamic and responsive websites built around your audience, goals, and digital presence.', problem: 'Your website should make your offer clear, support your customers, and work reliably across devices.', deliverables: ['Responsive website planning', 'Front end and back end development', 'A clear content and conversion structure'], process: ['Clarify the business need and audience', 'Shape the page structure and content', 'Build, review, and prepare the handoff'], image: '/assets/service-web-development.webp' },
  { slug: 'mobile-app-development', title: 'Mobile Application Development', eyebrow: 'Digital solutions', summary: 'Custom mobile applications that bring together useful functionality, thoughtful design, and a clear user experience.', problem: 'A mobile idea needs a focused release scope, a useful user experience, and a practical path from concept to launch.', deliverables: ['Product discovery support', 'Mobile experience planning', 'Development discussion for iOS and Android'], process: ['Clarify the users and their task', 'Prioritize a useful first release', 'Plan development, review, and next steps'], image: '/assets/service-mobile-development.webp' },
  { slug: 'online-tutoring-and-training', title: 'Online Tutorials and Training', eyebrow: 'Learning support', summary: 'Personalized online tutoring and training for people building academic, digital, and professional skills.', problem: 'Learning becomes more useful when the topic, pace, examples, and feedback connect to the learner’s real goals.', deliverables: ['Topic and goal clarification', 'Guided online learning', 'A practical route for questions and feedback'], process: ['Understand the learner or team need', 'Set a useful learning sequence', 'Review progress and next steps'], image: '/assets/service-online-tutoring.webp' },
  { slug: 'professional-data-analysis', title: 'Professional Data Analysis', eyebrow: 'Evidence and insight', summary: 'Turn raw information into clearer findings through data collection, cleansing, analysis, and visualization.', problem: 'Good analysis starts with the decision behind the data and ends with an explanation people can use.', deliverables: ['Data preparation discussion', 'Analysis and visualization planning', 'A clear explanation of findings and limits'], process: ['Clarify the decision and available data', 'Agree the analysis scope and outputs', 'Review the findings and handoff'], image: '/assets/service-data-analytics.webp' },
  { slug: 'research-writing-services', title: 'Research and Report Writing', eyebrow: 'Research support', summary: 'Structured support for projects, dissertations, theses, reports, and research communication.', problem: 'Research writing needs a clear question, a thoughtful structure, sound evidence, and careful presentation.', deliverables: ['Research structure guidance', 'Editing and clarity support', 'A review of questions, evidence, and presentation'], process: ['Clarify the stage of the research work', 'Agree the support that is appropriate', 'Review changes with the learner or client'], image: '/assets/research-writing.webp' }
];

export const resources: ResourceArticle[] = [
  { slug: 'choose-the-right-digital-skill', title: 'How to Choose the Right Digital Skill to Learn', type: 'Learning guide', summary: 'Compare your interests, available time, current skills, and professional goals before choosing a learning path.', intro: 'Choosing a digital skill is easier when you begin with the work you want to do, not only the tool that looks popular. A clear learning choice gives you a better reason to practise and a better way to notice progress.', image: '/assets/technology-learning.webp', sections: [
    { heading: 'Start with the work you want to do', body: 'Think about the tasks you want to handle more confidently. You might want to build websites, understand business data, improve a campaign, create better presentations, or organise a project. The task points you toward the skill family that will matter most.' },
    { heading: 'Be honest about your time', body: 'A learning path should fit the time you can protect each week. A focused course with regular practice can be more useful than a broad catalogue you never have time to use. Choose a rhythm you can sustain.' },
    { heading: 'Look for practice and feedback', body: 'Practical work helps you move from recognition to confidence. Before you register, ask what you will practise, how feedback works, and what kind of support is available when you get stuck.' }
  ], conclusion: 'The right skill is the one that connects your interests to a real task and gives you a realistic way to practise it.', nextStep: 'Explore the training catalogue and compare the topics that fit your next goal.', relatedHref: '/training', relatedLabel: 'Explore training' },
  { slug: 'excel-spss-power-bi', title: 'Excel, SPSS and Power BI: Understanding Their Different Uses', type: 'Data guide', summary: 'See how three familiar tools support different kinds of data work and learning goals.', intro: 'Excel, SPSS, and Power BI can all appear in a data conversation, but they support different parts of the work. Understanding the difference helps you choose a better starting point.', image: '/assets/analytics-dashboard.webp', sections: [
    { heading: 'Excel is a flexible starting point', body: 'Excel is useful for organising tables, checking calculations, exploring small datasets, and building familiar working routines. It is often a comfortable first environment for learning how data is structured.' },
    { heading: 'SPSS supports statistical analysis', body: 'SPSS is commonly used for structured statistical analysis. It can help learners work through variables, tests, and outputs in a focused analysis environment.' },
    { heading: 'Power BI supports dashboards and communication', body: 'Power BI helps users connect data to interactive reports and dashboards. Its strength is often in presenting patterns and measures in a way that supports discussion and decisions.' },
    { heading: 'Choose based on the question', body: 'Start with the question you want to answer. A simple table may need Excel. A structured research analysis may need SPSS. A recurring management report may benefit from Power BI. Learning more than one tool can help you understand how the stages connect.' }
  ], conclusion: 'The best tool depends on the data, the question, and the people who need to use the result.', nextStep: 'Explore data analysis training and choose the tool that matches your goal.', relatedHref: '/training/data-analysis', relatedLabel: 'View data analysis training' },
  { slug: 'before-enrolling', title: 'What to Consider Before Enrolling in a Professional Training Programme', type: 'Professional learning guide', summary: 'Use a simple checklist to compare learning objectives, curriculum, format, prerequisites, and support.', intro: 'A training programme should make the outcome, learning experience, and next step easy to understand. A few questions before registration can help you choose with more confidence.', image: '/assets/business-collaboration.webp', sections: [
    { heading: 'Name the skill you want to build', body: 'Write down what you want to do after the programme. A specific goal helps you compare course content and decide if the programme is relevant.' },
    { heading: 'Read the curriculum as a sequence', body: 'Look at the topics in order. A good sequence should show how the learner moves from foundations to practice and then toward a useful application.' },
    { heading: 'Ask about format and support', body: 'Check if the programme is live, recorded, or mixed. Ask how questions are handled, how practice is reviewed, and what happens when you need help.' },
    { heading: 'Clarify the commitment', body: 'Before paying, confirm the current dates, fee, delivery channel, access period, and any certificate or refund terms that apply to the specific programme.' }
  ], conclusion: 'A useful programme is not only a list of topics. It is a clear learning experience with a practical reason to continue.', nextStep: 'Compare programmes in the Grand Galaxy training catalogue.', relatedHref: '/training', relatedLabel: 'Browse training programmes' },
  { slug: 'data-analysis-business-decisions', title: 'How Data Analysis Helps Businesses Make Better Decisions', type: 'Business guide', summary: 'Understand how a clearer data question can improve planning, operations, and customer conversations.', intro: 'Data analysis becomes valuable when it helps a team make a better decision. The process starts before a dashboard or spreadsheet is opened.', image: '/assets/service-data-analytics.webp', sections: [
    { heading: 'Begin with a decision', body: 'Ask what the business needs to decide. The question could relate to sales, customers, operations, people, or a project. A clear decision keeps the analysis focused.' },
    { heading: 'Check the information', body: 'Useful analysis depends on knowing where the data came from, what each field means, and what may be missing. A careful data check prevents false confidence.' },
    { heading: 'Choose a readable output', body: 'The result may be a table, chart, dashboard, report, or conversation. Choose the format that helps the people involved understand the finding and act on it.' },
    { heading: 'Explain limits as well as findings', body: 'A good analysis makes its limits visible. It explains what the information supports and what it cannot answer yet.' }
  ], conclusion: 'The strongest data work connects a well formed question to a clear explanation and a decision someone can act on.', nextStep: 'Discuss a professional data analysis need with Grand Galaxy.', relatedHref: '/services/professional-data-analysis', relatedLabel: 'Explore data analysis services' },
  { slug: 'effective-business-website', title: 'What Makes a Business Website Effective?', type: 'Digital project guide', summary: 'A practical view of clarity, usability, trust, search visibility, and conversion for business websites.', intro: 'A business website has a simple job: help the right people understand the offer and take a useful next step. Design matters, but clarity and reliability matter just as much.', image: '/assets/service-web-development.webp', sections: [
    { heading: 'Make the offer clear quickly', body: 'A visitor should understand what the business does, who it helps, and what they can do next without decoding abstract language.' },
    { heading: 'Build around real questions', body: 'Useful pages answer the questions people bring with them. Training pages explain the learning offer. Service pages explain the problem, scope, and route to an enquiry.' },
    { heading: 'Support trust with evidence', body: 'Clear contact details, useful examples, accurate descriptions, accessible pages, and honest terms all help a visitor decide if they want to continue.' },
    { heading: 'Treat search and conversion as connected', body: 'Search visibility brings a relevant visitor to the page. A clear page helps that visitor understand the offer and move forward. Both parts need attention.' }
  ], conclusion: 'An effective website is a working part of the business. It explains the offer, supports trust, and helps people move from interest to action.', nextStep: 'Share your website or digital project brief with Grand Galaxy.', relatedHref: '/contact', relatedLabel: 'Talk about your project' }
];

export const faqs = [
  { question: 'How do I choose a training programme?', answer: 'Start with the skill or work you want to improve. Compare the topic, format, practice, and support offered, then contact the team for the current programme details.' },
  { question: 'How are learning sessions delivered?', answer: 'Grand Galaxy provides online learning and training. The delivery channel depends on the programme and may include live sessions, recorded materials, Microsoft Teams, WhatsApp, or Zoom.' },
  { question: 'Can a business request training for its team?', answer: 'Yes. Use the business enquiry form to describe your team, the skill need, the preferred format, and the practical result you want to work toward.' },
  { question: 'What services are available?', answer: 'Professional services include web development, mobile application development, online tutorials and training, professional data analysis, and research and report writing.' },
  { question: 'What does research and report writing support include?', answer: 'Support can include structure guidance, editing, clarity, research organisation, and report development. Academic integrity remains central, so the learner or client retains responsibility for their own work and decisions.' },
  { question: 'How can I contact Grand Galaxy?', answer: 'Email info@grandgalaxy.ng, call +234 810 504 3903, or send a WhatsApp message. You can also use the project enquiry form.' }
];

export function getProgramme(slug: string) { return programmes.find((programme) => programme.slug === slug); }
export function getService(slug: string) { return services.find((service) => service.slug === slug); }
export function getResource(slug: string) { return resources.find((resource) => resource.slug === slug); }
