import incidentraImg from '../assets/images/incidentra.png';
import aurastoreImg from '../assets/images/aurastore.png';
import serenestayImg from '../assets/images/serenestay.png';

export const projectsData = [
  {
    id: 1,
    title: "Incidentra",
    description: "A Ticket Management platform designed to help organizations streamline incident tracking, and elevate customer satisfaction",
    imageUrl: incidentraImg,
    techStack: ["PHP", "Ajax", "MySQL", "Jquery"],
    challenge: "I design a flexible workflow automation engine that could handle ticket routing and state transitions",
    solution: "I utilized database transactions to ensure data integrity during complex state changes and implemented a role-based access control (RBAC) system to ensure ticket routing to the right agents.",
    liveUrl: "https://incidentra.freedev.app/project/",
    githubUrl: "https://github.com/Abie-collab/Incidentra"
  },
  {
    id: 2,
    title: "Aurastore",
    description: "An e-commerce front-end that delivers a seamless shopping experience, backed by a public API.",
    imageUrl: aurastoreImg,
    techStack: ["React.js", "API"],
    challenge: "Managing complex state for drag-and-drop interactions while keeping API calls to a minimum.",
    solution: "I Implemented React Context API for efficient global state management of the shopping cart.",
    liveUrl: "https://storeaura.page.gd/?i=1",
    githubUrl: "https://github.com/Abie-collab/Aurastore"
  },
  {
    id: 3,
    title: "Serenestay",
    description: "A hotel management system built with Laravel, MySQL, and Blade. It gives hotel admins a centralized dashboard to manage room categories and individual room inventory",
    imageUrl: serenestayImg,
    techStack: ["Laravel", "MySQL", "Blade"],
    challenge: "An Admin interface was needed to manage room inventory, categories and bookings.",
    solution: "I leveraged Laravel's Eloquent ORM to write database queries spanning rooms, categories and booking also built role-based auth with custom middleware.",
    liveUrl: "#",
    githubUrl: "https://github.com/Abie-collab/serenestay"
  }
];

export const skillsData = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap"],
  backend: ["PHP", "Laravel"],
  database: ["MySQL", "MongoDB"],
  devops: ["Git", "GitHub", "Docker", "GitHub Actions (CI/CD)","AWS Amplify", "Route 53"]
};