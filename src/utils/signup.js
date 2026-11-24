import { SIGNUP_API_URL } from '../config/api.js';

/**
 * Envoie une demande d'inscription à l'API.
 * @param {object} signupData - Données du formulaire.
 * @returns {Promise<object>} Réponse de l'API (contient l'identifiant de l'inscription).
 * @throws {Error} Si le serveur répond avec une erreur.
 */
export async function sendSignup(signupData) {
  const response = await fetch(SIGNUP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(signupData)
  });

  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }

  return response.json();
}
