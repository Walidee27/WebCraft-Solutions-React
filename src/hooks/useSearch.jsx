import { useEffect, useMemo, useState } from 'react';
import { SEARCH_DELAY } from '../config/constants.js';

/**
 * Recherche en temps réel dans une liste, avec un délai (debounce)
 * pour ne pas filtrer à chaque frappe.
 * @param {object[]} items - Liste d'éléments à parcourir.
 * @param {string[]} searchKeys - Champs texte dans lesquels chercher.
 * @returns {{ query: string, setQuery: function, results: object[] }}
 */
function useSearch(items, searchKeys) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), SEARCH_DELAY);

    return () => clearTimeout(timer);
  }, [query]);

  const results = useMemo(() => {
    const searchTerm = debouncedQuery.toLowerCase().trim();

    if (searchTerm === '') {
      return items;
    }

    return items.filter(item => searchKeys.some(key => item[key].toLowerCase().includes(searchTerm)));
  }, [items, searchKeys, debouncedQuery]);

  return { query, setQuery, results };
}

export default useSearch;
