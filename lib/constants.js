import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs, FaPython, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux, SiMui, SiChakraui, SiVite, SiElectron, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiSupabase, SiPrisma, SiMongoose, SiDrizzle, SiShadcnui, SiZod, SiSass, SiGooglecloud, SiStripe, SiJsonwebtokens, SiGmail } from 'react-icons/si';

export const PROJECTS = [
  {
    num: "01",
    title: "Coding Platform",
    description:
      "Built to automate a coding event for custom problem allotment, auto scoring system, tracking time solving time, leaderboards etc.",
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> }
    ],
    image: "https://i.postimg.cc/9FSMBGZD/image.png",
    live: "https://thecodingauction.vercel.app/",
    github: "https://github.com/aashxx/coding-platform-client",
  },
  {
    num: "02",
    title: "Healthcare app",
    description:
      "Nutriverse is an health care startup that provides services like personalized diet plans, food recipes and medical assistance to elderly people.",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Shadcn UI", icon: <SiShadcnui /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Zod", icon: <SiZod /> },
      { name: "Stripe", icon: <SiStripe /> }
    ],      
    image: "https://i.postimg.cc/BZLQnMJP/image.png",
    live: "https://nutriversefoods.vercel.app/",
    github: "https://github.com/aashxx/recipes-app",
  },
  {
    num: "03",
    title: "Social Media App",
    description:
      "Similar to an instagram clone where users can upload posts, like others posts and also comment on posts.",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ],
    image: "https://i.postimg.cc/zDdFSDhR/image.png",
    live: "https://dup-instagram.vercel.app/",
    github: "https://github.com/aashxx/instagram-clone",
  },
  {
    num: "04",
    title: "Mass Mail Dispatcher",
    description:
      "A platform to send bulk or mass emails in a single click. It can also filter out all the valid and invalid emails from the uploaded csv file.",
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "SMTP", icon: <SiGmail />}
  ],
    image: "https://i.postimg.cc/90k5PtW8/image.png",
    live: "https://mail-pilot.vercel.app/",
    github: "https://github.com/aashxx/Mail-Pilot",
  },
  {
    num: "05",
    title: "Attendance Manager",
    description:
      "An attendance management system that can track the number of classes you have attended and calculate your percentage accordingly",
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "JSON Web Tokens", icon: <SiJsonwebtokens /> }
    ],
    image: "https://i.postimg.cc/6pdTMTD6/image.png",
    live: "https://attendify-aashxx.vercel.app/",
    github: "https://github.com/aashxx/attendify-frontend",
  }
];

export const EXPERIENCE = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Over the last two years, I've worked for the development of two automation startups and also handled multiple freelance projects.",
  info: [
    {
      company: "Allotrix",
      position: "Developer Intern",
      duration: "Oct 2023 - Jun 2024",
    },
    {
      company: "Dream Clerk",
      position: "Freelance Web Developer",
      duration: "Jun 2024 - Jul 2024",
    },
    {
      company: "Tribesflix",
      position: "Freelance Web Developer",
      duration: "Feb 2024 - Jun 2024",
    },
    {
      company: "Exposys Data Labs",
      position: "Web Developer Intern",
      duration: "Jun 2023 - Jul 2023",
    },
  ],
};

export const EDUCATION = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I hold a Bachelor's degree in Computer Science with a GPA of 9.6 and have earned additional certifications in software development.",
  info: [
    {
      institution: "University of Helsinki",
      degree: "Full Stack Open",
      duration: "2023",
    },
    {
      institution: "freeCodeCamp",
      degree: "JavaScript Algorithms and Data Structures",
      duration: "2022",
    },
    {
      institution: "BSA Crescent Univ.",
      degree: "BTech Computer Science and Engg.",
      duration: "2021 - 2025",
    },
    {
      institution: "Don Bosco Hr. Sec. School",
      degree: "Schooling",
      duration: "2007 - 2021",
    },
  ],
};

export const SKILLS = {
  title: "My skills",
  description:
    "I have acquired expertise in the latest technologies including frontend and backend development, UI libraries, serverless frameworks, databases, caching systems and more",
  info: [
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiVite />,
      name: "Vite",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <FaSass />,
      name: "SCSS",
    },
    {
      icon: <SiShadcnui />,
      name: "ShadCN UI",
    },
    {
      icon: <SiMui />,
      name: "MUI",
    },
    {
      icon: <SiChakraui />,
      name: "Chakra UI",
    },
    {
      icon: <SiElectron />,
      name: "ElectronJS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJs",
    },
    {
      icon: <SiMongodb />,
      name: "Mongo DB",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiSupabase />,
      name: "Supabase",
    },
    {
      icon: <SiMongoose />,
      name: "Mongoose",
    },
    {
      icon: <SiDrizzle />,
      name: "Drizzle",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
  ],
};

export const SERVICES = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive, dynamic websites and webapps with modern technologies and best practices.",
    href: "#contact",
  },
  {
    num: "02",
    title: "App Development",
    description:
      "Creating efficient and user-friendly and cross platform mobile applications. ",
    href: "#contact",
  },
  {
    num: "03",
    title: "Desktop Development",
    description:
      "Building desktop applications with high quality that suit the needs of your business",
    href: "#contact",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Enhancing search engine visibility with strategic optimization and analytics.",
    href: "#contact",
  },
];

export const ABOUT = {
  title: "About me",
  description:
    "Fullstack software engineer proficient in developing web and cross platform mobile applications excelling in both frontend and backend development",
  info: [
    {
      fieldName: "Name",
      feildValue: "Mohamed Aashir",
    },
    {
      fieldName: "Phone",
      feildValue: "+91 7358728447",
    },
    {
      fieldName: "Experience",
      feildValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      feildValue: "Indian",
    },
    {
      fieldName: "Email",
      feildValue: "tmohamedaashir@gmail.com",
    },
    {
      fieldName: "Freelance",
      feildValue: "Available",
    },
    {
      fieldName: "Languages",
      feildValue: "English, Hindi, Tamil",
    },
  ],
};

export const CONTACT = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 7358728447",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tmohamedaashir@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Chennai, India",
  },
];

export const ANIMATIONS = {

  left: {
    initial: {
      x: -100,
      opacity: 0
    },

    whileInView: {
      x: 0,
      opacity: 1
    },

    transition: {
      delay: 0.2,
      duration: 0.7
    },

    viewport: {
      once: true
    }
  },

  right: {
    initial: {
      x: 100,
      opacity: 0
    },

    whileInView: {
      x: 0,
      opacity: 1
    },

    transition: {
      delay: 0.2,
      duration: 0.7
    },

    viewport: {
      once: true
    }
  },

  up: {
    initial: {
      y: 100,
      opacity: 0
    },

    whileInView: {
      y: 0,
      opacity: 1
    },

    transition: {
      delay: 0.2,
      duration: 0.7
    },

    viewport: {
      once: true
    }
  },

  open: {
    initial: {
      opacity: 0
    },

    whileInView: {
      opacity: 1
    },

    transition: {
      delay: 0.2,
      duration: 0.7,
      ease: "easeIn"
    },

    viewport: {
      once: true
    }
  }
}
