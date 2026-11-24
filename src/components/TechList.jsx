import PropTypes from 'prop-types';

function TechList({ technologies }) {
  return (
    <ul className="tech-list" aria-label="Technologies utilisées">
      {technologies.map(tech => (
        <li className="tech-badge" key={tech}>
          {tech}
        </li>
      ))}
    </ul>
  );
}

TechList.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TechList;
