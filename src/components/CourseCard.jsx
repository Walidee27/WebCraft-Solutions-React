import PropTypes from 'prop-types';
import CourseBadges from './CourseBadges.jsx';
import Rating from './Rating.jsx';
import SubscribeButton from './SubscribeButton.jsx';
import TechList from './TechList.jsx';

function CourseCard({ course, onSelect }) {
  return (
    <article className="card item-card h-100">
      <img
        src={course.image}
        className="card-img-top"
        alt={`Illustration de la formation ${course.title}`}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <CourseBadges course={course} />
        <h3 className="card-title h5">{course.title}</h3>
        <Rating rating={course.rating} students={course.students} />
        <ul className="course-meta">
          <li>
            <i className="bi bi-clock" aria-hidden="true"></i> {course.duration}
          </li>
          <li className="course-price">{course.price} €</li>
        </ul>
        <TechList technologies={course.technologies} />
        <div className="card-actions mt-auto">
          <button type="button" className="btn btn-outline-primary" onClick={() => onSelect(course)}>
            Voir détails
          </button>
          <SubscribeButton course={course} />
        </div>
      </div>
    </article>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    students: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CourseCard;
