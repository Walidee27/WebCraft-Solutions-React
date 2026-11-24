import { MOTIVATION_MIN_LENGTH } from '../config/constants.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+[1-9]\d{7,14}$/;

/**
 * Vérifie un champ du formulaire d'inscription.
 * @param {string} name - Nom du champ (firstname, email...).
 * @param {string} value - Valeur saisie.
 * @returns {string} Message d'erreur, ou chaîne vide si le champ est valide.
 */
export function validateField(name, value) {
  const trimmedValue = String(value).trim();

  switch (name) {
    case 'firstname':
      return trimmedValue.length < 2 ? 'Le prénom doit contenir au moins 2 caractères (exemple : Léa).' : '';
    case 'lastname':
      return trimmedValue.length < 2 ? 'Le nom doit contenir au moins 2 caractères (exemple : Martin).' : '';
    case 'email':
      return EMAIL_REGEX.test(trimmedValue)
        ? ''
        : "L'adresse email doit contenir un @ et un nom de domaine (exemple : lea.martin@gmail.com).";
    case 'phone':
      return PHONE_REGEX.test(trimmedValue.replace(/[\s.-]/g, ''))
        ? ''
        : "Le numéro doit commencer par l'indicatif du pays, +33 pour la France (exemple : +33 6 12 34 56 78).";
    case 'course':
      return trimmedValue === '' ? 'Veuillez choisir une formation dans la liste.' : '';
    case 'level':
      return trimmedValue === '' ? 'Veuillez indiquer votre niveau : Débutant, Intermédiaire ou Avancé.' : '';
    case 'motivation':
      return trimmedValue.length < MOTIVATION_MIN_LENGTH
        ? `Votre motivation doit contenir au moins ${MOTIVATION_MIN_LENGTH} caractères, il en manque ${MOTIVATION_MIN_LENGTH - trimmedValue.length}.`
        : '';
    case 'experience':
      if (trimmedValue === '') {
        return '';
      }
      return Number(trimmedValue) < 0 || Number(trimmedValue) > 50
        ? "L'expérience doit être un nombre d'années entre 0 et 50 (exemple : 3)."
        : '';
    default:
      return '';
  }
}

/**
 * Vérifie tous les champs du formulaire.
 * @param {object} values - Valeurs du formulaire, indexées par nom de champ.
 * @returns {object} Erreurs indexées par nom de champ (seuls les champs invalides sont présents).
 */
export function validateForm(values) {
  const errors = {};

  Object.entries(values).forEach(([name, value]) => {
    const message = validateField(name, value);

    if (message) {
      errors[name] = message;
    }
  });

  return errors;
}
