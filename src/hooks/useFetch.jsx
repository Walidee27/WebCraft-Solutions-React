import { useEffect, useState } from 'react';

const cache = new Map();

/**
 * Charge des données JSON depuis une API.
 * Les réponses sont gardées en cache : une même URL n'est appelée qu'une fois
 * même si plusieurs pages l'utilisent (ex : formations sur l'accueil et l'inscription).
 * @param {string} url - Adresse de l'API à appeler.
 * @returns {{ data: object|null, isLoading: boolean, error: string|null }}
 */
function useFetch(url) {
  const [data, setData] = useState(() => cache.get(url) || null);
  const [isLoading, setIsLoading] = useState(() => !cache.has(url));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache.has(url)) {
      setData(cache.get(url));
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const json = await response.json();
        cache.set(url, json);
        setData(json);
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          console.error(`Erreur lors du chargement de ${url} :`, fetchError);
          setError('Impossible de charger les données pour le moment. Veuillez réessayer plus tard.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
