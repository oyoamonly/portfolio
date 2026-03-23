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
        작은 문제를 발견하고, 더 나은 경험으로 바꿔온 프로젝트들입니다.
      </p>

      <div className="project-list">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}