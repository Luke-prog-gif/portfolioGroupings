import { useState } from "react";
import "../Projects.css";
import fishingGame from "../assets/fishingGame.jpg";
import userManagementSystem from "../assets/userManagementSystem.png";

// ---------- Types ----------

interface ProjectItem {
  id: number;
  type: "Project" | "Course";
  title: string;
  year: number;
  description: string;
  tags: string[];
  author: string;
  link: string;
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
      "A full-stack analytics platform with live data streaming, customizable widgets, and role-based access control. Handles 50k+ events per second.",
    tags: ["Java", "NetBeans", "Pixilart"],
    author: "Jay Dominguez & Ivory Mariano",
    link: "#",
  },
  {
    id: 2,
    type: "Project",
    title: "Forma — Design System & Component Library",
    image: userManagementSystem,
    year: 2025,
    description:
      "An accessible, themeable component library with 40+ components, Storybook docs, and full TypeScript support. Published on npm.",
    tags: ["React", "TypeScript", "Storybook", "CSS"],
    author: "Jordan Kim",
    link: "#",
  },
  {
    id: 3,
    type: "Project",
    title: "Kestrel — Kubernetes Deployment Automation",
    image: fishingGame,
    year: 2024,
    description:
      "A CLI tool that automates zero-downtime deployments to Kubernetes clusters with health checks, rollback support, and Slack notifications.",
    tags: ["Python", "Docker", "Kubernetes", "AWS"],
    author: "Sam Torres",
    link: "#",
  },
  {
    id: 4,
    type: "Course",
    title: "Advanced Algorithms & Data Structures",
    image: fishingGame,
    year: 2024,
    description:
      "Graduate-level coursework covering graph algorithms, dynamic programming, and computational complexity theory.",
    tags: ["Algorithms", "Java", "Theory"],
    author: "Prof. Elena Marsh",
    link: "#",
  },
  {
    id: 5,
    type: "Course",
    title: "Human-Computer Interaction",
    image: fishingGame,
    year: 2023,
    description:
      "Principles of usability, accessibility, and interaction design, applied through iterative prototyping and user testing.",
    tags: ["UX Research", "Figma", "Accessibility"],
    author: "Prof. David Nkemelu",
    link: "#",
  },
  {
    id: 6,
    type: "Course",
    title: "Cloud Systems & Distributed Computing",
    image: fishingGame,
    year: 2023,
    description:
      "Covers consensus protocols, replication, and fault tolerance, with hands-on labs deploying distributed services.",
    tags: ["Distributed Systems", "Go", "gRPC"],
    author: "Prof. Alicia Renn",
    link: "#",
  },
];

// ---------- ProjectCard sub-component ----------
// Pure presentational component — only reads from props, never from projectsData.

function ProjectCard(props: ProjectItem) {
  const { type, title, image, year, description, tags, author, link } = props;

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
      <a href={link} className="project-card__link">
        View ↗
      </a>
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
    <section className="projects-section">
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