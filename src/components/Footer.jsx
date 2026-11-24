const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'bi-linkedin' },
  { name: 'GitHub', url: 'https://github.com', icon: 'bi-github' },
  { name: 'X', url: 'https://x.com', icon: 'bi-twitter-x' },
  { name: 'Instagram', url: 'https://www.instagram.com', icon: 'bi-instagram' }
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-logo">WebCraft Solutions</p>
        <nav aria-label="Réseaux sociaux">
          <ul className="social-links">
            {SOCIAL_LINKS.map(link => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.name} de WebCraft Solutions (nouvel onglet)`}
                >
                  <i className={`bi ${link.icon}`} aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer-copy">&copy; {new Date().getFullYear()} WebCraft Solutions. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
