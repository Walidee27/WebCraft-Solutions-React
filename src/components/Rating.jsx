import PropTypes from 'prop-types';

function getStarIcon(rating, position) {
  if (rating >= position) {
    return 'bi-star-fill';
  }

  if (rating >= position - 0.5) {
    return 'bi-star-half';
  }

  return 'bi-star';
}

function Rating({ rating, students }) {
  const positions = [1, 2, 3, 4, 5];

  return (
    <p className="course-rating">
      <span className="stars" role="img" aria-label={`Note de ${rating} sur 5`}>
        {positions.map(position => (
          <i key={position} className={`bi ${getStarIcon(rating, position)}`} aria-hidden="true"></i>
        ))}
      </span>
      <strong>{rating}</strong>
      <span className="students">({students} étudiants)</span>
    </p>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  students: PropTypes.number.isRequired
};

export default Rating;
