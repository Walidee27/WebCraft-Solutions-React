import PropTypes from 'prop-types';
import { LEVEL_CLASSES } from '../config/constants.js';

function CourseBadges({ course }) {
  return (
    <div className="card-badges">
      <span className="category-badge">{course.category}</span>
      <span className={`level-badge ${LEVEL_CLASSES[course.level]}`}>{course.level}</span>
      <span className={`availability-badge ${course.available ? 'available' : 'full'}`}>
        {course.available ? 'Disponible' : 'Complet'}
      </span>
    </div>
  );
}

CourseBadges.propTypes = {
  course: PropTypes.shape({
    category: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired
  }).isRequired
};

export default CourseBadges;
