import PropTypes from 'prop-types';
import TechList from './TechList.jsx';

function ProjectCard({ project, onSelect }) {
  return (
    <article className="card item-card h-100">
      <img src={project.image} className="card-img-top" alt={`Aperçu du projet ${project.title}`} loading="lazy" />
      <div className="card-body d-flex flex-column">
        <span className="category-badge">{project.category}</span>
        <h3 className="card-title h5">{project.title}</h3>
        <p className="card-client">Client : {project.client}</p>
        <TechList technologies={project.technologies} />
        <button type="button" className="btn btn-primary mt-auto" onClick={() => onSelect(project)}>
          Voir détails
        </button>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default ProjectCard;
