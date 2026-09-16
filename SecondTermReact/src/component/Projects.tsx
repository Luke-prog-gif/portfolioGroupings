import { useState } from "react";
import "../Projects.css";
import fishingGame from "../assets/img/fishingGame.jpg";
import userManagementSystem from "../assets/img/userManagementSystem.png";
import labAnalyzer from "../assets/img/LabAnalyzer.jpg";
import toffeeBean from "../assets/img/toffeebean.png";
import taskManagementSystem from "../assets/img/taskManagementSystem.png";
import lukePortfolio from "../assets/img/lukePortfolio.png";
import jayPortfolio from "../assets/img/jayPortfolio.png";
import ivoPortfolio from "../assets/img/ivoPortfolio.png";
import memoryAllocation from "../assets/img/memoryAllocation.png";
import lukeAgileCert from "../assets/img/LukeAgileCert.png";
import jayAgileCert from "../assets/img/jayAgileCert.jpg";
import ivoAgileCert from "../assets/img/ivoAgileCert.jpg";
  
// ---------- Types ----------

interface ProjectItem {
  id: number;
  type: "Project" | "Course";
  title: string;
  year: number;
  description: string;
  tags: string[];
  author: string;
  image:string;
}

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

// ---------- Data ----------

const projectsData: ProjectItem[] = [
  {
    id: 1,
    type: "Project",
    title: "Fishing Game",
    image: fishingGame,
    year: 2025,
    description:
      "A 2D game where players catch and sell different fish to earn cash, with prices based on species, rarity, and weight. The goal is to get richer and collect various fish and rods.",
    tags: ["Java", "NetBeans", "Pixilart"],
    author: "Jay Dominguez & Ivory Mariano",
    
  },
  {
    id: 2,
    type: "Project",
    title: "User Management System",
    image: userManagementSystem,
    year: 2025,
    description:
      "It manages user information and access within a web application. It stores details such as user data, login credentials, and roles, allowing secure authentication and easy management of user accounts, including creating, updating, and deleting user records.",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
    author: "Ivory Mariano",
    
  },
  {
    id: 3,
    type: "Project",
    title: "Lab Analyzer",
    image: labAnalyzer,
    year: 2024,
    description:
      "A smart laboratory analysis system designed to simplify and speed up sample testing. It combines automated analysis with a user-friendly interface to help users obtain and understand laboratory results more efficiently.",
    tags: ["Python", "HTML", "JavaScript", "CSS"],
    author: "Jay Dominguez",
    
  },
  {
    id: 4,
    type: "Project",
    title: "Toffee Bean Website",
    image: toffeeBean,
    year: 2024,
    description:
      "ToffeeBean is a WordPress-based website developed for a client-owned café. The website showcases the café’s brand, menu, products, and offerings through a clean, user-friendly design, providing customers with an engaging online experience.",
    tags: ["WordPress"],
    author: "Jay, Ivory, & Luke",
    
  },
  {
    id: 5,
    type: "Project",
    title: "Task Management System",
    image: taskManagementSystem,
    year: 2025,
    description:
      "The Task Management System is a Java-based desktop application for IT students that organizes tasks by subject, due date, and priority, with subjects dynamically shown based on year level and supported by email notifications to improve time management.",
    tags: ["Java", "NetBeans"],
    author: "Luke Reyes",
    
  },
  {
    id: 6,
    type: "Project",
    title: "Memory Allocation Visualizer",
    image: memoryAllocation,
    year: 2025,
    description:
      "A web-based tool that visualizes memory allocation using First Fit and Best Fit algorithms, helping users understand how memory management works.",
    tags: ["JavaScript", "HTML", "CSS"],
    author: "Jay, Ivory, & Luke",
    
  },

   {
    id: 7,
    type: "Project",
    title: "Luke's Portfolio",
    image: lukePortfolio,
    year: 2023,
    description:
      "A personal portfolio website built with WordPress to showcase my skills, projects, experience, and professional background through a clean and responsive design.",
    tags: ["WordPress"],
    author: "Luke Reyes",
    
  },

   {
    id: 8,
    type: "Project",
    title: "Jay's Portfolio",
    image: jayPortfolio,
    year: 2023,
    description:
      "A personal website built with WordPress and hosted through Hostinger. It showcases my projects, skills, and experience through a responsive and organized design.",
    tags: ["WordPress"],
    author: "Jay Dominguez",
    
  },
   {
    id: 9,
    type: "Project",
    title: "Ivory's Portfolio",
    image: ivoPortfolio,
    year: 2023,
    description:
      "A personal portfolio that showcases Ivory’s life skills, knowledge, experiences, and growth. It reflects what she has learned, the skills she has developed, and the journey that continues to shape who she is today.",
    tags: ["WordPress"],
    author: "Ivory Mariano",
    
  },
  {
    id: 10,
    type: "Course",
    title: "Ivory's Agile Essentials Certificate",
    image: ivoAgileCert,
    year: 2023,
    description:
      "Completed training focused on Agile principles, practices, and methodologies, including iterative development, collaboration, adaptability, and effective team workflows.",
    tags: ["Agile", "Scrum", "Project Management"],
    author: "Ivory Mariano",
    
  },
  {
    id: 11,
    type: "Course",
    title: "Jay's Agile Essentials Certificate",
    image: jayAgileCert,
    year: 2023,
    description:
      "Completed training focused on Agile principles, practices, and methodologies, including iterative development, collaboration, adaptability, and effective team workflows.",
    tags: ["Agile", "Scrum", "Project Management"],
    author: "Jay Dominguez",
    
  },
  {
    id: 12,
    type: "Course",
    title: "Luke's Agile Essentials Certificate",
    image: lukeAgileCert,
    year: 2023,
    description:
      "Completed training focused on Agile principles, practices, and methodologies, including iterative development, collaboration, adaptability, and effective team workflows.",
    tags: ["Agile", "Scrum", "Project Management"],
    author: "Luke Reyes",
    
  },
  
];

// ---------- ProjectCard sub-component ----------
// Pure presentational component — only reads from props, never from projectsData.

function ProjectCard(props: ProjectItem) {
  const { type, title, image, year, description, tags, author } = props;

  return (
  <div className="project-card">
    <img src={image} alt={title} className="project-card__image" />
    <span className="project-card__badge">{type}</span>

    <div className="project-card__header">
      <h3 className="project-card__title">{title}</h3>
      <span className="project-card__year">{year}</span>
    </div>

    <p className="project-card__description">{description}</p>

    <div className="project-card__tags">
      {tags.map((tag) => (
        <span key={tag} className="project-card__tag">
          {tag}
        </span>
      ))}
    </div>

    <div className="project-card__footer">
      <span className="project-card__author">{author}</span>
    </div>
  </div>
);
}

// ---------- FilterTabs sub-component ----------
// Controlled component — holds no state, just reports clicks upward via onFilterChange.

function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  const filters = ["All", "Project", "Course"];

  return (
    <div className="filter-tabs">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`filter-tabs__button ${
              isActive ? "filter-tabs__button--active" : ""
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

// ---------- Main Projects component ----------
// Owns the state and the data; passes read-only props down to the sub-components above.

function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((item) => item.type === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-section__container">
        <div className="projects-section__heading-row">
          <div>
            <p className="projects-section__eyebrow">Work &amp; Learning</p>
            <h2 className="projects-section__title">Projects &amp; Courses</h2>
            <p className="projects-section__count">
              Showing {filteredProjects.length} of {projectsData.length} items
            </p>
          </div>

          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className="projects-section__grid">
          {filteredProjects.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;