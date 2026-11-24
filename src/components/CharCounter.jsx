import PropTypes from 'prop-types';

function CharCounter({ length, minLength }) {
  return (
    <>
      {minLength} caractères minimum.{' '}
      <span className={`char-counter ${length >= minLength ? 'is-complete' : ''}`}>
        {length}/{minLength}
      </span>
    </>
  );
}

CharCounter.propTypes = {
  length: PropTypes.number.isRequired,
  minLength: PropTypes.number.isRequired
};

export default CharCounter;
