import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Html from '../assets/Html.jpeg';
import JavaScript from '../assets/Html.jpeg';
import Reactcert from '../assets/Html.jpeg';
import OS from '../assets/os.jpeg';
import UI from '../assets/Ui ux.jpeg';

function CertificateViewer() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Array of certificates with the correct image references
  const certificates = [
    { name: "JavaScript", link: JavaScript },
    { name: "React", link: Reactcert },
    { name: "OS", link: OS },
    { name: "CSS", link: Html }, // Assuming CSS uses Html image for now
    { name: "HTML", link: Html },
    { name: "UI & UX", link: UI },
  ];

  const index = parseInt(id, 10); // Ensure id is an integer
  const certificate = certificates[index];

  // Navigate to the previous or next certificate
  const handleNext = () => {
    if (index < certificates.length - 1) {
      navigate(`/certificate/${index + 1}`);
    }
  };

  const handleBack = () => {
    navigate('/skills');
  };

  return (
    <div className="certificate-viewer">
      {certificate ? (
        <>
          <h2>{certificate.name} Certificate</h2>
          <img
            src={certificate.link}
            alt={`${certificate.name} Certificate`}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div className="buttons">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext} disabled={index >= certificates.length - 1}>Next</button>
          </div>
        </>
      ) : (
        <p>Certificate not found.</p>
      )}
    </div>
  );
}

export default CertificateViewer;
