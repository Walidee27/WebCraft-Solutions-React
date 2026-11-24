import PropTypes from 'prop-types';

function Loader({ label = 'Chargement en cours' }) {
  return (
    <div className="loader" role="status">
      <span className="visually-hidden">{label}</span>
    </div>
  );
}

Loader.propTypes = {
  label: PropTypes.string
};

export default Loader;
