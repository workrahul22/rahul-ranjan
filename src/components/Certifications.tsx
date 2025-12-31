import React from 'react';
import '../assets/styles/Certifications.scss';

function Certifications() {
  return (
    <div id="certifications">
      <div className="items-container">
        <h1>Certifications</h1>
        <ul className="cert-list">
          <li>
            <a href="https://www.coursera.org/account/accomplishments/certificate/VJZ3H2TY3VQG" target="_blank" rel="noopener noreferrer">
              Machine Learning — Coursera (Stanford University)
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Networking Concepts With Security — HPES Technical Solutions Ltd (05/2015 - 06/2015)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Certifications;
