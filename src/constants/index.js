import {
  mobile,
  backend,
  creator,
  web,
  //work
  ingskill,
  iic,
  //skillset
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bonsaiGarden,
  //projects
  sonicpulse,
  foodServe,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Ing Skill Academy",
    icon: ingskill,
    iconBg: "#fff",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Developing the Server Side of web app using Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Volunteering in IIC Quest 2.0",
    company_name: "Itahari International College",
    icon: iic,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Assisted in organizing and managing event logistics, ensuring smooth operations throughout the event.",
      "Collaborated with team members to coordinate tasks and provide support to attendees and participants.",
      "Helped set up and dismantle event spaces, ensuring timely and efficient transitions.",
      "Engaged with participants, providing information and assistance to enhance their event experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is passionate about new projects, always bringing fresh ideas and enthusiasm to the team. His dedication to learning and improving makes him a valuable team member.",
    name: "Ram Karki",
    designation: "Frontend Developer",
    company: "Ing Skill Academy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "As a junior student, I found him to be an excellent mentor who simplifies complex topics. His guidance and support have been essential to my learning journey.",
    name: "Arpan Karki",
    designation: "Student",
    company: "Itahari International College",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Working with him on projects has been a fantastic experience due to his positivity and teamwork. He always contributes meaningfully, making collaboration enjoyable and highly productive.",
    name: "Anir Jung Thapa",
    designation: "Teaching Assistant",
    company: "Itahari International College",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SonicPulse",
    description:
      "Web-based online store for headphones, featuring secure login, role-based access, and a user-friendly interface for browsing, ordering, and managing products.",
    tags: [
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "htmlcss",
        color: "blue-text-gradient",
      },
    ],
    image: sonicpulse,
    source_code_link: "https://github.com/Anjil0/Java-Server-Page-and-Servlet",
  },
  {
    name: "Food Serve",
    description:
      "It was my first project and is a basic canteen management web application where users can order food, delete orders, and manage their profiles.",
    tags: [
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: foodServe,
    source_code_link: "https://github.com/Anjil0/SYP-Food-Serve",
  },
  {
    name: "Bonsai Garden",
    description:
      "A user-friendly e-commerce website for bonsai plants, featuring product listings, discounts, and pages for home, blog, and research.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: bonsaiGarden,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
