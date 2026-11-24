import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <p className="hero-tag">Studio web &amp; centre de formation</p>
        <h1 id="hero-title" className="hero-title">
          On code le web <span className="hero-highlight">à la main</span>, et on vous apprend à faire pareil.
        </h1>
        <p className="hero-subtitle">
          WebCraft Solutions accompagne les entreprises dans leurs projets digitaux et forme les développeurs aux
          technologies d’aujourd’hui.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-accent btn-lg" to="/projets">
            Voir nos projets
          </Link>
          <Link className="btn btn-outline-dark btn-lg" to="/formations">
            Découvrir les formations
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
