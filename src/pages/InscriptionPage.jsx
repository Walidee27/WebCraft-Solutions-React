import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.jsx';
import { COURSES_API_URL } from '../config/api.js';
import InscriptionForm from '../components/InscriptionForm.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

function InscriptionPage() {
  const { courseId = '' } = useParams();
  const { data, isLoading, error } = useFetch(COURSES_API_URL);

  return (
    <section className="section" aria-labelledby="inscription-title">
      <div className="container">
        <div className="form-wrapper">
          <p className="section-eyebrow">Rejoindre une formation</p>
          <h1 id="inscription-title" className="section-title">
            Inscription à une formation
          </h1>
          <p className="section-subtitle">
            Remplissez le formulaire ci-dessous, notre équipe vous recontacte sous 48 heures. Les champs marqués d’un
            astérisque (<span className="required">*</span>) sont obligatoires.
          </p>

          {isLoading && <Loader label="Chargement des formations en cours" />}
          {error && <ErrorMessage message={error} />}
          {data && <InscriptionForm courses={data.courses} selectedCourseId={courseId} />}
        </div>
      </div>
    </section>
  );
}

export default InscriptionPage;
