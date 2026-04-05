import type { Project, Experience, Education } from "./types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Jobtrackr",
    description: "Full-stack job tracking platform with AI-powered resume matching and automated cover letter generation. Replaces spreadsheet tracking with a centralized dashboard.",
    techStack: ["Angular", "Node.js", "Express", "PostgreSQL", "Gemini API", "Supabase"],
    impactTags: ["AI-powered matching", "Auto cover letters", "Deployed on Render & Netlify"],
    link: "https://jobtrackkr.netlify.app/login",
    image: "/images/jobtrackr.png"
  },
  {
    id: 2,
    title: "Credit Card Fraud Detection",
    description: "ML pipeline for detecting fraudulent transactions using Kaggle dataset. Built neural network model with imbalanced dataset techniques. Achieved F1 score of 0.79.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Jupyter", "Neural Networks"],
    impactTags: ["F1 Score: 0.79", "Kaggle dataset", "Neural network model"],
    link: "https://github.com/AhadAliBaig/Credit-Card-Fraud-Detection",
    image: "/images/creditcardfruaddetection.png"
  },
  {
    id: 3,
    title: "EmotAI",
    description: "Emotion detection app using face detection to identify emotions, specially configured for people with special needs. Features real-time feedback, interactive tutorials, and personalized guidance.",
    techStack: ["Django", "OpenCV", "TensorFlow", "Real-time Processing"],
    impactTags: ["Real-time detection", "Accessibility focused", "ML-powered"],
    link: "https://github.com/AhadAliBaig/EmotAI",
    image: "/images/emotai.png"
  },
  {
    id: 4,
    title: "Study Buddy",
    description: "Scheduler and study management app to help students organize coursework, track assignments, and manage study schedules efficiently.",
    techStack: ["Angular", "Node.js", "Express", "MongoDB"],
    impactTags: ["Full-stack app", "CRUD operations", "User auth"],
    link: "https://study-buddy-unbc.netlify.app/calendar",
    image: "/images/studybuddy.png"
  },
  {
    id: 5,
    title: "Energy Demand & Weather Analysis",
    description: "Analysis of energy demand and weather patterns to optimize energy usage and reduce costs.",
    techStack: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    impactTags: ["Data pipeline", "Visualization", "Pattern analysis"],
    link: "https://github.com/AhadAliBaig/Energy-Demand-generation-and-weather",
    image: "/images/Energy.png"
  },
  {
    id: 6,
    title: "Blackjack",
    description: "Classic Blackjack game built with vanilla JS. Hit, stand, and play new rounds. Focuses on core game logic, DOM manipulation, and clean frontend design.",
    techStack: ["JavaScript", "HTML", "CSS"],
    impactTags: ["Fundamentals & logic design", "DOM manipulation", "Frontend on Netlify"],
    link: "https://blackjackgame9.netlify.app",
    image: "/images/blackjack.png"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    year: "2025",
    location: "Hybrid",
    role: "AI & Data Science Intern",
    company: "Aga Khan University"
  },
  {
    year: "2025",
    location: "Prince George, BC",
    role: "Student Researcher, UNBC Robotics Lab",
    company: "UNBC"
  },
  {
    year: "2025",
    location: "Prince George, BC",
    role: "Senate Committee Member",
    company: "UNBC"
  },
  {
    year: "2023-2025",
    location: "Prince George, BC",
    role: "Student Assistant x3",
    company: "UNBC - Math (2023), Ethics in Computing (2024-2025)"
  },
  {
    year: "2023",
    location: "Prince George, BC",
    role: "Vault & Customer Service",
    company: "The Home Depot"
  },
  {
    year: "2023",
    location: "Edmonton, AB",
    role: "JDC West Competition",
    company: "UNBC - Business Technology Team"
  }
];

export const EDUCATION: Education = {
  period: "2023-2026",
  location: "Prince George, BC",
  institution: "University of Northern British Columbia",
  degree: "B.Sc. Computer Science, Minor in Management Information Systems",
  courses: ["Data Structures", "Database Systems", "Software Engineering", "System Design", "Data Mining", "Networking", "Business Intelligence"],
  awards: [
    {
      title: "Dean's List",
      date: "Sep 2025",
      description: "Top 10% GPA in Faculty of Science and Engineering"
    },
    {
      title: "Raven Scholarship",
      date: "Mar 2023",
      description: "Competitive early entrance scholarship for academic achievement and community leadership"
    }
  ]
};
