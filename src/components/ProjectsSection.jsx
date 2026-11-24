import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch.jsx';
import { PROJECTS_API_URL } from '../config/api.js';
import CatalogSection from './CatalogSection.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectDetails from './ProjectDetails.jsx';

const SEARCH_KEYS = ['title', 'client'];

function ProjectsSection({ isPageTitle = false }) {
  const { data, isLoading, error } = useFetch(PROJECTS_API_URL);

  const filters = [
    {
      id: 'project-tech',
      key: 'technologies',
      label: 'Filtrer les projets par technologie',
      allLabel: 'Toutes les technologies',
      options: data?.technologies || []
    },
    {
      id: 'project-category',
      key: 'category',
      label: 'Filtrer les projets par catégorie',
      allLabel: 'Toutes les catégories',
      options: data?.categories || []
    }
  ];

  return (
    <CatalogSection
      id="projets"
      eyebrow="Portfolio clients"
      title="Nos projets clients"
      subtitle="Découvrez les sites et applications réalisés pour nos clients."
      isPageTitle={isPageTitle}
      items={data?.projects || []}
      isLoading={isLoading}
      error={error}
      searchKeys={SEARCH_KEYS}
      searchPlaceholder="Rechercher un projet ou un client"
      filters={filters}
      countLabels={{ singular: 'projet trouvé', plural: 'projets trouvés' }}
      renderCard={(project, onSelect) => <ProjectCard project={project} onSelect={onSelect} />}
      renderDetails={project => <ProjectDetails project={project} />}
    />
  );
}

ProjectsSection.propTypes = {
  isPageTitle: PropTypes.bool
};

export default ProjectsSection;
