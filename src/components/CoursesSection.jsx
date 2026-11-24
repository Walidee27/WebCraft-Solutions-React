import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch.jsx';
import { COURSES_API_URL } from '../config/api.js';
import CatalogSection from './CatalogSection.jsx';
import CourseCard from './CourseCard.jsx';
import CourseDetails from './CourseDetails.jsx';

const SEARCH_KEYS = ['title', 'instructor'];

function CoursesSection({ isPageTitle = false }) {
  const { data, isLoading, error } = useFetch(COURSES_API_URL);

  const filters = [
    {
      id: 'course-category',
      key: 'category',
      label: 'Filtrer les formations par catégorie',
      allLabel: 'Toutes les catégories',
      options: data?.categories || []
    },
    {
      id: 'course-level',
      key: 'level',
      label: 'Filtrer les formations par niveau',
      allLabel: 'Tous les niveaux',
      options: data?.levels || []
    },
    {
      id: 'course-tech',
      key: 'technologies',
      label: 'Filtrer les formations par technologie',
      allLabel: 'Toutes les technologies',
      options: data?.technologies || []
    }
  ];

  return (
    <CatalogSection
      id="formations"
      eyebrow="Catalogue de formations"
      title="Nos formations"
      subtitle="Montez en compétences avec nos formations techniques animées par des experts."
      isPageTitle={isPageTitle}
      items={data?.courses || []}
      isLoading={isLoading}
      error={error}
      searchKeys={SEARCH_KEYS}
      searchPlaceholder="Rechercher une formation ou un formateur"
      filters={filters}
      countLabels={{ singular: 'formation trouvée', plural: 'formations trouvées' }}
      renderCard={(course, onSelect) => <CourseCard course={course} onSelect={onSelect} />}
      renderDetails={course => <CourseDetails course={course} />}
    />
  );
}

CoursesSection.propTypes = {
  isPageTitle: PropTypes.bool
};

export default CoursesSection;
