import PropTypes from 'prop-types';
import TechList from './TechList.jsx';

function ProjectDetails({ project }) {
  return (
    <>
      <img src={project.image} className="modal-image" alt={`Aperçu du projet ${project.title}`} />
      <p>{project.description}</p>
      <ul className="modal-infos">
        <li>
          <strong>Client :</strong> {project.client}
        </li>
        <li>
          <strong>Catégorie :</strong> {project.category}
        </li>
        <li>
          <strong>Année :</strong> {project.year}
        </li>
        <li>
          <strong>Durée :</strong> {project.duration}
        </li>
      </ul>
      <h3 className="h6">Technologies</h3>
      <TechList technologies={project.technologies} />
      <h3 className="h6">Fonctionnalités</h3>
      <ul className="feature-list">
        {project.features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a href={project.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
        Voir le site <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
      </a>
    </>
  );
}

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default ProjectDetails;
