import PropTypes from 'prop-types';

function FormField({ name, label, as = 'input', required = false, form, help, children, ...inputProps }) {
  const error = form.errors[name];
  const isTouched = form.touched[name] && form.values[name] !== '';
  const Control = as;
  const baseClass = as === 'select' ? 'form-select' : 'form-control';
  const statusClass = error ? 'is-invalid' : isTouched ? 'is-valid' : '';
  const describedBy = [help && `${name}-help`, `${name}-error`].filter(Boolean).join(' ');

  return (
    <>
      <label htmlFor={name} className="form-label">
        {label}{' '}
        {required && (
          <span className="required" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <Control
        id={name}
        name={name}
        ref={form.registerField(name)}
        className={`${baseClass} ${statusClass}`}
        value={form.values[name]}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        {...inputProps}
      >
        {children}
      </Control>
      {help && (
        <div id={`${name}-help`} className="form-text">
          {help}
        </div>
      )}
      <div id={`${name}-error`} className="invalid-feedback">
        {error}
      </div>
    </>
  );
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  as: PropTypes.oneOf(['input', 'select', 'textarea']),
  required: PropTypes.bool,
  form: PropTypes.shape({
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    registerField: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
  }).isRequired,
  help: PropTypes.node,
  children: PropTypes.node
};

export default FormField;
