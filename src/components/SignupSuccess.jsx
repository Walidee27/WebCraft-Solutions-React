import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal from './Modal.jsx';

function SignupSuccess({ confirmation, onClose }) {
  const footer = (
    <>
      <Link className="btn btn-outline-primary" to="/formations">
        Voir les formations
      </Link>
      <button type="button" className="btn btn-primary" onClick={onClose}>
        Fermer
      </button>
    </>
  );

  return (
    <Modal title="Inscription envoyée !" onClose={onClose} footer={footer}>
      <div className="text-center">
        <i className="bi bi-check-circle-fill success-icon" aria-hidden="true"></i>
        <p>
          Merci {confirmation.firstname}, votre demande d’inscription à la formation « {confirmation.courseTitle} » a
          bien été enregistrée sous le numéro {confirmation.id}. Nous vous recontactons sous 48 heures.
        </p>
      </div>
    </Modal>
  );
}

SignupSuccess.propTypes = {
  confirmation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    courseTitle: PropTypes.string.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
};

export default SignupSuccess;
