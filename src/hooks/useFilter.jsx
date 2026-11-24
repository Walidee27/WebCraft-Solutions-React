import { useMemo, useState } from 'react';

/**
 * Filtre une liste selon plusieurs critères choisis dans des listes déroulantes.
 * Un critère vide est ignoré. Si le champ de l'élément est un tableau
 * (ex : technologies), on vérifie que la valeur choisie y figure.
 * @param {object[]} items - Liste d'éléments à filtrer.
 * @returns {{ filters: object, setFilter: function, results: object[] }}
 */
function useFilter(items) {
  const [filters, setFilters] = useState({});

  function setFilter(key, value) {
    setFilters(currentFilters => ({ ...currentFilters, [key]: value }));
  }

  const results = useMemo(() => {
    const activeFilters = Object.entries(filters).filter(([, value]) => value !== '');

    return items.filter(item =>
      activeFilters.every(([key, value]) =>
        Array.isArray(item[key]) ? item[key].includes(value) : item[key] === value
      )
    );
  }, [items, filters]);

  return { filters, setFilter, results };
}

export default useFilter;
