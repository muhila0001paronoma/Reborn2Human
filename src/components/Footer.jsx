import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="site-footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Barber Info */}
        <div className="footer-barber">
          <img
            src="/barber.png"
            alt="Barber"
            className="footer-barber-image"
          />
          <div className="footer-barber-text">
            <p>
              "Reborn 2 Human is more than a barber shop - it's an experience.
              Our mission is to redefine grooming with premium services, expert
              care, and a touch of luxury."
            </p>
            <button>Book Appointment</button>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Service</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>
              Address: No.123 Main Street, Jaffna, Sri Lanka <br />
              Phone: +94 77 123 4567 <br />
              Email: info@reborn2human.com
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-privacy">
        <p>© 2025 Reborn 2 Human. All Rights Reserved.</p>
        <p>Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
