import PropTypes from 'prop-types';
import useForm from '../hooks/useForm.jsx';
import useSignup from '../hooks/useSignup.jsx';
import FormField from './FormField.jsx';
import CourseFields from './CourseFields.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import SignupSuccess from './SignupSuccess.jsx';

function InscriptionForm({ courses, selectedCourseId = '' }) {
  const form = useForm({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    course: selectedCourseId,
    level: '',
    motivation: '',
    company: '',
    experience: ''
  });
  const { submitSignup, isSubmitting, submitError, confirmation, clearConfirmation } = useSignup(courses);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.validateAll()) {
      return;
    }

    if (await submitSignup(form.values)) {
      form.resetForm();
    }
  }

  return (
    <>
      {submitError && <ErrorMessage message={submitError} />}

      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend>Vos coordonnées</legend>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <FormField name="firstname" label="Prénom" required form={form} autoComplete="given-name" />
            </div>
            <div className="col-12 col-md-6">
              <FormField name="lastname" label="Nom" required form={form} autoComplete="family-name" />
            </div>
            <div className="col-12 col-md-6">
              <FormField
                name="email"
                label="Email"
                type="email"
                required
                form={form}
                autoComplete="email"
                placeholder="exemple@domaine.fr"
              />
            </div>
            <div className="col-12 col-md-6">
              <FormField
                name="phone"
                label="Téléphone"
                type="tel"
                required
                form={form}
                autoComplete="tel"
                placeholder="+33 6 12 34 56 78"
              />
            </div>
          </div>
        </fieldset>

        <CourseFields form={form} courses={courses} />

        <fieldset>
          <legend>
            Informations complémentaires <span className="optional">(facultatif)</span>
          </legend>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <FormField name="company" label="Entreprise" form={form} autoComplete="organization" />
            </div>
            <div className="col-12 col-md-6">
              <FormField name="experience" label="Expérience (en années)" type="number" min="0" max="50" form={form} />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="btn btn-primary btn-lg w-100" disabled={isSubmitting}>
          {isSubmitting && <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>}
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon inscription'}
        </button>
      </form>

      {confirmation && <SignupSuccess confirmation={confirmation} onClose={clearConfirmation} />}
    </>
  );
}

InscriptionForm.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired
    })
  ).isRequired,
  selectedCourseId: PropTypes.string
};

export default InscriptionForm;
