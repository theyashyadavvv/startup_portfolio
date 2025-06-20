import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets';

import icon from '../assets/company/App_icon.png';
import project5 from '../assets/project5 - Copy.webp';
import project6 from '../assets/project6.jpg';
import project7 from '../assets/project7.webp';

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'work', title: 'Work' },
  { id: 'contact', title: 'Contact' },
];

const services = [
  { title: 'Full-Stack Developer', icon: web },
  { title: 'Frontend Developer', icon: mobile },
  { title: 'Backend Developer', icon: backend },
  { title: 'Ui UX Designer', icon: creator },
];

const technologies = [
  { name: 'HTML 5', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'React JS', icon: reactjs },
  { name: 'gsap', icon: gsap },
  { name: 'framer', icon: framer },
  { name: 'Three JS', icon: threejs },
  { name: 'figma', icon: figma },
  { name: 'Redux Toolkit', icon: redux },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Material Ui', icon: mui },
  { name: 'Node JS', icon: nodejs },
  { name: 'Express Js', icon: express },
  { name: 'AWS', icon: aws },
  { name: 'MongoDB', icon: mongodb },
  { name: 'MySql', icon: mysql },
  { name: 'git', icon: git },
];

const experiences = [
  {
    title: 'Cura.ai',
    icon: icon,
    iconBg: '#383E56',
    date: 'Jan 20225 - present',
    points: [
      'Developing and maintaining web applications using MERN technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Building features to securely store and manage medical-related documents in PDF and other formats, ensuring data privacy and compliance with healthcare standards.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Yash  proved me wrong.",
    name: 'MD Mustaqeem',
    designation: 'Ecommerce',
    company: 'QuickMart',
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Yash  does.",
    name: 'Abdul Raheman',
    designation: 'Ecommerce Business',
    company: 'justbuyz',
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Yash optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'James Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: 'Tekisky Mart',
    description:
      'Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwind', color: 'white-text-gradient' },
      { name: 'node', color: 'pink-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
    ],
    image: project2,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'GearXpert',
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'emailJs', color: 'green-text-gradient' },
      { name: 'Gsap', color: 'pink-text-gradient' },
    ],
    image: gearXpert,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'GoGroove-Ecommerce',
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'express', color: 'white-text-gradient' },
      { name: 'node', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
    ],
    image: project3,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Lucid',
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      { name: 'tailwind', color: 'blue-text-gradient' },
      { name: 'Html', color: 'blue-text-gradient' },
      // { name: 'react', color: 'blue-text-gradient' },
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'emailJs', color: 'green-text-gradient' },
      { name: 'Gsap', color: 'pink-text-gradient' },
    ],
    image: project7,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Habit_tracker_app',
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      { name: 'Flutter', color: 'blue-text-gradient' },
      { name: 'emailJs', color: 'green-text-gradient' },
      { name: 'firebase', color: 'pink-text-gradient' },
    ],
    image: project5,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'LearEd',
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      { name: 'HTML', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'blue-text-gradient' },
      { name: 'css', color: 'blue-text-gradient' },
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'emailJs', color: 'green-text-gradient' },
      { name: 'Gsap', color: 'pink-text-gradient' },
    ],
    image: project6,
    source_code_link: 'https://theyashyadavvv.github.io/theyashyadavv.github.io/',
  },
];

export { services, technologies, experiences, testimonials, projects };
