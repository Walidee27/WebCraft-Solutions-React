import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SubscribeButton({ course, label = "S'inscrire" }) {
  if (!course.available) {
    return (
      <button type="button" className="btn btn-secondary" disabled>
        Complet
      </button>
    );
  }

  return (
    <Link className="btn btn-primary" to={`/inscription/${course.id}`}>
      {label}
    </Link>
  );
}

SubscribeButton.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    available: PropTypes.bool.isRequired
  }).isRequired,
  label: PropTypes.string
};

export default SubscribeButton;
