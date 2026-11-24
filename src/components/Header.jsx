import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/formations', label: 'Formations' }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md site-navbar sticky-top" aria-label="Navigation principale">
        <div className="container">
          <Link className="navbar-brand site-logo" to="/" onClick={closeMenu}>
            <span className="logo-mark" aria-hidden="true">
              WC
            </span>
            <span>
              WebCraft <span className="logo-light">Solutions</span>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="main-nav"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="main-nav">
            <ul className="navbar-nav mx-auto">
              {NAV_LINKS.map(link => (
                <li className="nav-item" key={link.to}>
                  <NavLink className="nav-link" to={link.to} end onClick={closeMenu}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink className="btn btn-accent nav-cta" to="/inscription" onClick={closeMenu}>
              Inscription <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
