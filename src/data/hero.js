export const heroData = {
  name: 'Your Name',
  title: 'Software Developer + AI Engineer',
  intro: "Hi, I'm",
  tagline: 'Building software that scales.',
  summary:
    'I design and build systems—from ML pipelines to full-stack applications and cloud infrastructure—with a focus on clarity, reliability, and maintainability.',
  badges: ['AI / ML', 'Full Stack', 'Cloud / DevOps', 'Open to Opportunities'],
  ctas: [
    { label: 'View Projects', to: '/projects', primary: true },
    { label: 'Contact Me', to: '/contact', primary: false },
    { label: 'Download Resume', href: '/resume.pdf', external: true }, // match public/resume.pdf
  ],
}

export const stats = [
  { value: 'AI Projects', label: 'Shipped' },
  { value: 'Cloud', label: 'Infrastructure' },
  { value: 'Full Stack', label: 'Builds' },
]

export const strengths = [
  {
    title: 'Systems thinking',
    description: 'Design for scale, observability, and maintainability from day one.',
  },
  {
    title: 'AI & ML',
    description: 'From training pipelines to production inference and evaluation.',
  },
  {
    title: 'Full-stack delivery',
    description: 'Frontend, backend, and DevOps—ship end-to-end with quality.',
  },
]

export const aboutStory = {
  headline: 'Background & approach',
  paragraphs: [
    "I'm a software engineer focused on building reliable systems—from machine learning pipelines to APIs and developer tools. I care about clean architecture, clear documentation, and teams that ship.",
    'My work spans full-stack development, cloud infrastructure, and AI/ML. I prefer pragmatic solutions over hype: the right tool for the problem, tested and maintainable.',
    'I approach engineering and AI systems with a product mindset: understand the problem, measure impact, iterate. When I\'m not coding, I\'m usually reading, writing, or exploring new tech. I believe in continuous learning and leaving codebases better than I found them.',
  ],
  workOn: ['ML pipelines & model deployment', 'APIs & backend systems', 'Cloud infrastructure & DevOps', 'Developer tools & DX'],
  approach: 'Understand the problem first. Ship incrementally. Measure. Iterate. Document as you go.',
}
