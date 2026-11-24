import PropTypes from 'prop-types';
import { LEVELS, MOTIVATION_MIN_LENGTH } from '../config/constants.js';
import FormField from './FormField.jsx';
import CharCounter from './CharCounter.jsx';

function CourseFields({ form, courses }) {
  const motivationLength = form.values.motivation.trim().length;

  return (
    <fieldset>
      <legend>Votre formation</legend>
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <FormField name="course" label="Formation" as="select" required form={form}>
            <option value="">Choisissez une formation</option>
            {courses.map(course => (
              <option key={course.id} value={course.id} disabled={!course.available}>
                {course.available ? course.title : `${course.title} (complet)`}
              </option>
            ))}
          </FormField>
        </div>
        <div className="col-12 col-md-6">
          <FormField name="level" label="Votre niveau" as="select" required form={form}>
            <option value="">Choisissez votre niveau</option>
            {LEVELS.map(level => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </FormField>
        </div>
        <div className="col-12">
          <FormField
            name="motivation"
            label="Motivation"
            as="textarea"
            rows="5"
            required
            form={form}
            placeholder="Expliquez-nous en quelques lignes pourquoi vous souhaitez suivre cette formation"
            help={<CharCounter length={motivationLength} minLength={MOTIVATION_MIN_LENGTH} />}
          />
        </div>
      </div>
    </fieldset>
  );
}

CourseFields.propTypes = {
  form: FormField.propTypes.form,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default CourseFields;
