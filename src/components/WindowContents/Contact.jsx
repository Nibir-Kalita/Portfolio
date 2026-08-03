import { useState } from 'react';
import './WindowContents.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="wc-contact-glass">
      <div className="contact-glass-card__body">
        {/* Left Column: Get In Touch Details */}
        <div className="contact-info-col">
          <h3 className="contact-info-title">Get in touch</h3>

          <div className="contact-info-block">
            <span className="info-label">Email:</span>
            <a href="mailto:hello@nibir.dev" className="info-value">hello@nibir.dev</a>
          </div>

          <div className="contact-info-block">
            <span className="info-label">Phone:</span>
            <p className="info-value">+1 (555) 019-2834</p>
          </div>

          <div className="contact-info-block">
            <span className="info-label">Address:</span>
            <p className="info-value">123 Innovation Avenue, Suite 456<br />Tech District, San Francisco, CA 94107<br />United States</p>
          </div>

          {/* Social Icons Row matching reference image */}
          <div className="contact-social-block">
            <span className="info-label">Follow us:</span>
            <div className="contact-social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <img src="/icons/github.png" alt="GitHub" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <img src="/icons/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="mailto:hello@nibir.dev" className="social-icon-btn" aria-label="Email">
                <img src="/icons/contact.png" alt="Email" />
              </a>
              <a href="#hero" className="social-icon-btn" aria-label="Terminal">
                <img src="/icons/terminal.png" alt="Terminal" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form-col">
          <form className="contact-glass-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-input-group">
                <label htmlFor="win-name">Your Name</label>
                <input
                  id="win-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="win-email">Email address</label>
                <input
                  id="win-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>
            </div>

            <div className="contact-input-group">
              <label htmlFor="win-message">Message</label>
              <textarea
                id="win-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write something..."
                required
              />
            </div>

            <button type="submit" className={`contact-glass-submit ${submitted ? 'contact-glass-submit--sent' : ''}`}>
              <span>{submitted ? '✓ Message Sent!' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
