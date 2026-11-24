import PropTypes from 'prop-types';

function SearchBar({ id, label, placeholder, value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <i className="bi bi-search" aria-hidden="true"></i>
      <input
        type="search"
        id={id}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
