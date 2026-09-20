// PLACEHOLDER PROJECT DATA — these projects are examples only and do not
// represent real, shipped work. Replace `title`, `description`, `problem`,
// `features`, `github` and `demo` with your actual project details, and set
// `placeholder: false` once an entry is real. Do not deploy with
// `placeholder: true` entries presented as genuine work.

const projects = [
  {
    placeholder: true,
    id: 'employee-management-system',
    title: 'Employee Management System',
    category: 'Full Stack',
    description:
      'A system for managing employee records, departments and roles with role-based access control.',
    problem:
      'Example: manual spreadsheet-based HR tracking was slow and error-prone for a growing team.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL'],
    features: [
      'CRUD operations for employees and departments',
      'Role-based authentication (Admin / HR / Employee)',
      'Search and filter by department, role or status',
      'REST API secured with JWT',
    ],
    github: '',
    demo: '',
    image: null,
  },
  {
    placeholder: true,
    id: 'ecommerce-application',
    title: 'E-Commerce Application',
    category: 'Full Stack',
    description: 'An online storefront with product catalog, cart, and secure checkout flow.',
    problem: 'Example: showcasing a full order lifecycle from browsing to payment confirmation.',
    technologies: ['Spring Boot', 'React', 'MySQL', 'JWT'],
    features: [
      'Product catalog with category filters',
      'Cart and order management',
      'JWT-based authentication',
      'Admin dashboard for inventory',
    ],
    github: '',
    demo: '',
    image: null,
  },
  {
    placeholder: true,
    id: 'banking-finance-system',
    title: 'Banking / Finance Management System',
    category: 'Backend',
    description: 'Core banking operations: accounts, transactions and statements.',
    problem: 'Example: modeling transactional integrity for money transfers between accounts.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL'],
    features: [
      'Account creation and balance management',
      'Transaction history with audit trail',
      'Input validation to prevent invalid transfers',
      'Layered service/repository architecture',
    ],
    github: '',
    demo: '',
    image: null,
  },
  {
    placeholder: true,
    id: 'task-management-application',
    title: 'Task Management Application',
    category: 'Full Stack',
    description: 'A Kanban-style task tracker for teams, backed by a document database.',
    problem: 'Example: giving a small team a lightweight, self-hosted alternative to a SaaS tool.',
    technologies: ['React', 'Spring Boot', 'MongoDB'],
    features: [
      'Drag-and-drop task boards',
      'Task assignment and due dates',
      'Real-time-style status updates',
      'MongoDB document schema for flexible task fields',
    ],
    github: '',
    demo: '',
    image: null,
  },
];

export const projectCategories = ['All', ...new Set(projects.map((p) => p.category))];

export default projects;
