import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>

      <p className="page-description">
        Selected projects across product planning, UX improvement, growth,
        automation, and AI service design.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}