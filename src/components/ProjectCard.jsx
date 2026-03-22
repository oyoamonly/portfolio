import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-text">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <p className="project-date">{project.date}</p>

        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="project-thumb">IMG</div>
    </Link>
  );
}