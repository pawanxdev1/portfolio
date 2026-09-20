// ---------------------------------------------------------------------------
// EDIT THIS FILE to personalize the entire site. Nothing here is hardcoded
// into components — change a value once and it updates everywhere it's used.
// ---------------------------------------------------------------------------

const profile = {
  name: 'Pawan Prajapati',
  initials: 'PP',
  role: 'Java Full Stack Developer',
  roleTagline: 'Spring Boot · React · REST APIs · MySQL · MongoDB',
  tagline:
    'I build scalable, secure and user-focused web applications using Java, Spring Boot, React and modern database technologies.',
  location: 'India',
  availability: 'Available for opportunities',

  // Set to a real image path in /public (e.g. "/profile.jpg") once you have one.
  photo: null,

  email: 'pawan.prajapati@example.com',
  phone: '+91 00000 00000',

  socials: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    email: 'mailto:pawan.prajapati@example.com',
  },

  // Place your actual PDF at client/public/resume.pdf and this will link to it.
  resumeUrl: '/resume.pdf',

  seo: {
    title: 'Pawan Prajapati | Java Full Stack Developer',
    description:
      'Portfolio of Pawan Prajapati, a Java Full Stack Developer specializing in Java, Spring Boot, React, REST APIs and databases.',
  },

  // These stats are placeholders — replace with real, verifiable numbers.
  // Nothing here should be presented as fact until you've filled it in.
  stats: [
    { label: 'Projects Completed', value: '0', placeholder: true },
    { label: 'Technologies', value: '15+', placeholder: false },
    { label: 'Certifications', value: '0', placeholder: true },
    { label: 'Years of Experience', value: '0', placeholder: true },
  ],

  about: {
    paragraphs: [
      "I'm a Java Full Stack Developer focused on backend engineering with Spring Boot, paired with React on the front end to ship complete, production-shaped applications.",
      'My work centers on REST API design, relational and document database schemas, and writing code that stays readable as a codebase grows — clean layering between controllers, services and repositories, sensible error handling, and tests that catch regressions before users do.',
      "I care about the parts of an application that don't show up in a demo: authentication that's actually secure, queries that scale past a few hundred rows, and APIs documented well enough that a teammate can use them without asking me first.",
    ],
    highlights: [
      {
        title: 'Java Development',
        description: 'Core Java, OOP design and clean, maintainable backend code.',
      },
      {
        title: 'Spring Boot',
        description: 'REST services, Spring Security, Data JPA and layered architecture.',
      },
      {
        title: 'React Development',
        description: 'Component-driven UIs, state management and responsive interfaces.',
      },
      {
        title: 'REST APIs',
        description: 'Designing, documenting and securing APIs consumed by real clients.',
      },
    ],
  },

  services: [
    {
      title: 'Full Stack Web Development',
      description: 'End-to-end applications from database schema to deployed UI.',
    },
    {
      title: 'Java Backend Development',
      description: 'Spring Boot services built around clear domain boundaries.',
    },
    {
      title: 'REST API Development',
      description: 'Well-documented, versioned APIs designed for real client needs.',
    },
    {
      title: 'React Frontend Development',
      description: 'Fast, accessible interfaces that hold up on every screen size.',
    },
    {
      title: 'Database Design',
      description: 'Schema design across MySQL, PostgreSQL and MongoDB.',
    },
    {
      title: 'API Integration',
      description: 'Connecting third-party services without leaking their complexity.',
    },
    {
      title: 'Authentication & Authorization',
      description: 'JWT, session-based and role-based access control done correctly.',
    },
  ],
};

export default profile;
