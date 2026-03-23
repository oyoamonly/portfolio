import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const sortedProjects = [...projects].sort((a, b) => {
    const [aYear, aMonth] = a.date.split(".").map(Number);
    const [bYear, bMonth] = b.date.split(".").map(Number);

    if (bYear !== aYear) return bYear - aYear;
    return bMonth - aMonth;
  });

  return (
    <section>
      <h1>Projects 🕹️</h1>

      <p className="page-description">
        Things I've built, problems I've solved, and what I've learned along the way.
      </p>

      <div className="project-list">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}