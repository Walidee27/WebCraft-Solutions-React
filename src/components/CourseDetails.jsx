import PropTypes from 'prop-types';
import CourseBadges from './CourseBadges.jsx';
import Rating from './Rating.jsx';
import SubscribeButton from './SubscribeButton.jsx';
import TechList from './TechList.jsx';

function CourseDetails({ course }) {
  return (
    <>
      <img src={course.image} className="modal-image" alt={`Illustration de la formation ${course.title}`} />
      <CourseBadges course={course} />
      <p className="mt-3">{course.description}</p>
      <Rating rating={course.rating} students={course.students} />
      <ul className="modal-infos">
        <li>
          <strong>Formateur :</strong> {course.instructor}
        </li>
        <li>
          <strong>Durée :</strong> {course.duration}
        </li>
        <li>
          <strong>Prix :</strong> {course.price} €
        </li>
      </ul>
      <h3 className="h6">Technologies</h3>
      <TechList technologies={course.technologies} />
      <h3 className="h6">Programme de la formation</h3>
      <ol className="feature-list">
        {course.modules.map(module => (
          <li key={module}>{module}</li>
        ))}
      </ol>
      <SubscribeButton course={course} label="S'inscrire maintenant" />
    </>
  );
}

CourseDetails.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    students: PropTypes.number.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    modules: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default CourseDetails;
