import { useRef, useState } from 'react';
import { validateField, validateForm } from '../utils/validation.js';

/**
 * Gère les valeurs, les erreurs et la validation en temps réel d'un formulaire.
 * Un champ n'est validé qu'après avoir été quitté une première fois (blur),
 * pour ne pas afficher d'erreur pendant la première saisie.
 * À l'envoi, le focus est placé sur le premier champ invalide.
 * @param {object} initialValues - Valeurs de départ des champs.
 * @returns {object} values, errors, touched, registerField, handleChange, handleBlur, validateAll, resetForm.
 */
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const fieldRefs = useRef({});

  function registerField(name) {
    return element => {
      fieldRefs.current[name] = element;
    };
  }

  function updateError(name, value) {
    setErrors(currentErrors => ({ ...currentErrors, [name]: validateField(name, value) }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setValues(currentValues => ({ ...currentValues, [name]: value }));

    if (touched[name] || event.target.tagName === 'SELECT') {
      updateError(name, value);
    }
  }

  function handleBlur(event) {
    const { name, value } = event.target;

    setTouched(currentTouched => ({ ...currentTouched, [name]: true }));
    updateError(name, value);
  }

  function validateAll() {
    const formErrors = validateForm(values);

    setErrors(formErrors);
    setTouched(Object.fromEntries(Object.keys(values).map(name => [name, true])));

    const firstErrorField = Object.keys(formErrors)[0];

    if (firstErrorField) {
      fieldRefs.current[firstErrorField]?.focus();
      return false;
    }

    return true;
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }

  return { values, errors, touched, registerField, handleChange, handleBlur, validateAll, resetForm };
}

export default useForm;
