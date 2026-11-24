import PropTypes from 'prop-types';

function FilterBar({ filters, values, onChange }) {
  return (
    <>
      {filters.map(filter => (
        <div className="col-12 col-sm" key={filter.key}>
          <label htmlFor={`filter-${filter.id}`} className="visually-hidden">
            {filter.label}
          </label>
          <select
            id={`filter-${filter.id}`}
            className="form-select"
            value={values[filter.key] || ''}
            onChange={event => onChange(filter.key, event.target.value)}
          >
            <option value="">{filter.allLabel}</option>
            {filter.options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </>
  );
}

FilterBar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      allLabel: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

export default FilterBar;
