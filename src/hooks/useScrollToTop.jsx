import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Remonte en haut de la page à chaque changement de route.
 */
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default useScrollToTop;
