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
          <div className="contact-badge-pill">DIRECT INQUIRIES</div>

          <div className="contact-info-block">
            <span className="info-label">EMAIL:</span>
            <a href="mailto:hello@nibir.dev" className="info-value">hello@nibir.dev</a>
          </div>

          <div className="contact-info-block">
            <span className="info-label">PHONE:</span>
            <p className="info-value">+1 (555) 019-2834</p>
          </div>

          <div className="contact-info-block">
            <span className="info-label">ADDRESS:</span>
            <p className="info-value">123 Innovation Avenue, Suite 456<br />Tech District, San Francisco, CA 94107<br />United States</p>
          </div>

          {/* Social Icons Row matching reference image */}
          <div className="contact-social-block">
            <span className="info-label">FOLLOW US:</span>
            <div className="contact-social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="mailto:hello@nibir.dev" className="social-icon-btn" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a href="#hero" className="social-icon-btn" aria-label="Terminal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" x2="20" y1="19" y2="19" />
                </svg>
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
