export const projectsData = [
  {
    id: 1,
    title: "Incidentra",
    description: "A comprehensive IT Service Management (ITSM) platform designed to help organizations streamline incident tracking, automate ticket workflows, and elevate customer satisfaction from a single, intelligent dashboard.",
    techStack: ["PHP", "Ajax", "MySQL", "Jquery"],
    challenge: "I design a flexible workflow automation engine that could handle complex ticket routing and state transitions",
    solution: "I utilized database transactions to ensure data integrity during complex state changes and implemented a role-based access control (RBAC) system to ensure ticket routing to the right agents.",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Aurastore",
    description: "An e-commerce front-end that delivers a seamless shopping experience, backed by a public API.",
    techStack: ["React.js", "API", ],
    challenge: "Managing complex state for drag-and-drop interactions while keeping API calls to a minimum.",
    solution: "I Implemented React Context API for efficient global state management of the shopping cart.",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Serenestay",
    description: "A boilerplate repository demonstrating automated testing, building, and deployment for a PHP/Laravel application.",
    techStack: ["Laravel", "MySQL", "Blade"],
    challenge: "An Admin interface was needed to manage room inentory,categories and bookings .",
    solution: "I Leveraged Laravel’s Eloquent ORM to write database queries spanning rooms, categories and booking alos built role-based auth with custom middleware. On the frontend, I implemented optimized asset loading and Laravel Blade templating to ensure rapid page loads and a premium user experience.",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const skillsData = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap"],
  backend: ["PHP", "Laravel"],
  database: ["MySQL", "MongoDB"],
  devops: ["Git", "GitHub", "Docker", "GitHub Actions (CI/CD)"]
};