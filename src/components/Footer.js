/*// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Importe o arquivo de estilo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="/contato">Contato</a></li>
          <li><a href="/parceria">Parceria</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <p>© 2024 Meu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
*/
///////////////////////////////
/*
import React from 'react';
import './Footer.css'; // Importe o arquivo de estilo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="/contato">Contato</a></li>
          <li><a href="/parceria">Parceria</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <p>© 2024 Meu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
*/
////////////////////////////////////

import React from 'react';
import './Footer.css'; // Importe o arquivo de estilo CSS
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <ul className="footer-links">
            <li><a href="/contato">Contato</a></li>
            <li><a href="/parceria">Parceria</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
          <ul className="footer-links">
            <li><a href="/carreira">Carreira</a></li>
            <li><a href="/lojas">Lojas</a></li>
            <li><a href="/atendimento">Atendimento</a></li>
          </ul>
          <div className="footer-subscribe">
            <input
              type="email"
              placeholder="Seu email"
              className="subscribe-input"
            />
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <p>© 2024 Meu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
