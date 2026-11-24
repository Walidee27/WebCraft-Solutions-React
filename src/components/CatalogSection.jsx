import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import useSearch from '../hooks/useSearch.jsx';
import useFilter from '../hooks/useFilter.jsx';
import SearchBar from './SearchBar.jsx';
import FilterBar from './FilterBar.jsx';
import Modal from './Modal.jsx';
import Loader from './Loader.jsx';
import ErrorMessage from './ErrorMessage.jsx';

function CatalogSection({
  id,
  eyebrow,
  title,
  subtitle,
  isPageTitle = false,
  items,
  isLoading,
  error,
  searchKeys,
  searchPlaceholder,
  filters,
  countLabels,
  renderCard,
  renderDetails
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const { query, setQuery, results: searchResults } = useSearch(items, searchKeys);
  const { filters: filterValues, setFilter, results } = useFilter(searchResults);
  const closeModal = useCallback(() => setSelectedItem(null), []);
  const TitleTag = isPageTitle ? 'h1' : 'h2';

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <p className="section-eyebrow">{eyebrow}</p>
        <TitleTag id={`${id}-title`} className="section-title">
          {title}
        </TitleTag>
        <p className="section-subtitle">{subtitle}</p>

        <div className="row g-2 filters" role="search" aria-label={`Filtrer : ${title}`}>
          <div className="col-12 col-lg-4">
            <SearchBar
              id={`${id}-search`}
              label={searchPlaceholder}
              placeholder={searchPlaceholder}
              value={query}
              onChange={setQuery}
            />
          </div>
          <FilterBar filters={filters} values={filterValues} onChange={setFilter} />
        </div>

        {isLoading && <Loader label={`Chargement en cours : ${title}`} />}
        {error && <ErrorMessage message={error} />}

        {!isLoading && !error && (
          <>
            <p className="results-count" aria-live="polite">
              {results.length} {results.length > 1 ? countLabels.plural : countLabels.singular}
            </p>

            {results.length === 0 ? (
              <p className="no-results">Aucun résultat ne correspond à votre recherche.</p>
            ) : (
              <div className="row g-4">
                {results.map(item => (
                  <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                    {renderCard(item, setSelectedItem)}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {selectedItem && (
        <Modal title={selectedItem.title} onClose={closeModal}>
          {renderDetails(selectedItem)}
        </Modal>
      )}
    </section>
  );
}

CatalogSection.propTypes = {
  id: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isPageTitle: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  filters: FilterBar.propTypes.filters,
  countLabels: PropTypes.shape({
    singular: PropTypes.string.isRequired,
    plural: PropTypes.string.isRequired
  }).isRequired,
  renderCard: PropTypes.func.isRequired,
  renderDetails: PropTypes.func.isRequired
};

export default CatalogSection;
