import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="section text-center">
      <div className="container">
        <p className="section-eyebrow">Erreur 404</p>
        <h1 className="section-title">Page introuvable</h1>
        <p className="section-subtitle">La page que vous cherchez n’existe pas ou a été déplacée.</p>
        <Link className="btn btn-primary" to="/">
          Retour à l’accueil
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
