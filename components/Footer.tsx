import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-column">
          <h3 className="footer-title">About Me</h3>
          <p className="footer-text">
            I'm a passionate full-stack developer specializing in modern web development using tools like React, Node.js, Prisma, PostgreSQL, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/projects" className="footer-link">Projects</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-text"><FaEnvelope className="footer-icon" /> francis@example.com</p>
          <p className="footer-text"><FaPhoneAlt className="footer-icon" /> +254 712 345 678</p>
        </div>

        {/* Socials */}
        <div className="footer-column">
          <h3 className="footer-title">Follow Me</h3>
          <div className="footer-socials">
            <a href="https://github.com/yourhandle" target="_blank" className="footer-social" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="footer-social" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" className="footer-social" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" className="footer-social" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">&copy; {new Date().getFullYear()} Francis Muiruri. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
