import PropTypes from 'prop-types';

function ErrorMessage({ message }) {
  return (
    <div className="alert alert-danger api-error" role="alert">
      <i className="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
      {message}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
