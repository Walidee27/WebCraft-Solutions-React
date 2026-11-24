import { useState } from 'react';
import { sendSignup } from '../utils/signup.js';

/**
 * Gère l'envoi d'une inscription : état d'envoi, erreur et confirmation.
 * @param {object[]} courses - Liste des formations, pour retrouver le titre choisi.
 * @returns {{ submitSignup: function, isSubmitting: boolean, submitError: string|null, confirmation: object|null, clearConfirmation: function }}
 */
function useSignup(courses) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  async function submitSignup(values) {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      const result = await sendSignup(values);
      const course = courses.find(item => String(item.id) === values.course);

      setConfirmation({ id: result.id, firstname: values.firstname.trim(), courseTitle: course.title });
      return true;
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'inscription :", error);
      setSubmitError("L'envoi de votre inscription a échoué. Vérifiez votre connexion internet puis réessayez.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }

  return { submitSignup, isSubmitting, submitError, confirmation, clearConfirmation: () => setConfirmation(null) };
}

export default useSignup;
