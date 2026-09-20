// Experience levels are descriptive, not measured percentages.
// Valid values: "Core", "Working", "Familiar" — edit per skill honestly.

const skills = [
  {
    category: 'Backend',
    items: [
      { name: 'Java', level: 'Core' },
      { name: 'Spring', level: 'Core' },
      { name: 'Spring Boot', level: 'Core' },
      { name: 'Spring MVC', level: 'Core' },
      { name: 'Spring Security', level: 'Working' },
      { name: 'Hibernate', level: 'Working' },
      { name: 'JPA', level: 'Working' },
      { name: 'REST APIs', level: 'Core' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', level: 'Core' },
      { name: 'CSS3', level: 'Core' },
      { name: 'JavaScript', level: 'Core' },
      { name: 'React.js', level: 'Working' },
      { name: 'Tailwind CSS', level: 'Working' },
      { name: 'Bootstrap', level: 'Working' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', level: 'Core' },
      { name: 'MongoDB', level: 'Working' },
      { name: 'PostgreSQL', level: 'Familiar' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 'Core' },
      { name: 'GitHub', level: 'Core' },
      { name: 'Maven', level: 'Working' },
      { name: 'Postman', level: 'Core' },
      { name: 'IntelliJ IDEA', level: 'Core' },
      { name: 'VS Code', level: 'Core' },
    ],
  },
  {
    category: 'Concepts',
    items: [
      { name: 'OOP', level: 'Core' },
      { name: 'Data Structures', level: 'Working' },
      { name: 'REST Architecture', level: 'Core' },
      { name: 'MVC', level: 'Core' },
      { name: 'Authentication & Authorization', level: 'Working' },
      { name: 'Exception Handling', level: 'Core' },
      { name: 'API Integration', level: 'Working' },
    ],
  },
];

export default skills;
