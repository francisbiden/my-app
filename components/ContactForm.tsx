// ContactForm.tsx
"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const SERVICE_ID = 'service_0jw9uxn';
const TEMPLATE_ID = 'template_10nuy59';
const PUBLIC_KEY = 'UYFQewZIK5uFwapGq';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState<string | undefined>('');
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSent(true);
        setIsLoading(false);
        formRef.current?.reset();
        setPhone('');
      })
      .catch((err) => {
        console.error('Email send error:', err);
        setError('Something went wrong. Please try again.');
        setIsLoading(false);
      });
  };

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Name</label>
        <input type="text" name="user_name" required className="form-input" />
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input type="email" name="user_email" required className="form-input" />
      </div>

      <div className="form-group">
        <label className="form-label">Phone</label>
        <PhoneInput
          name="user_phone"
          value={phone}
          onChange={setPhone}
          required
          defaultCountry="KE"
          className="form-input-phone"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Subject</label>
        <input type="text" name="subject" required className="form-input" />
      </div>

      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea name="message" required className="form-textarea" />
      </div>

      {error && <p className="form-error">{error}</p>}
      {isSent && <p className="form-success">Message sent successfully!</p>}

      <button type="submit" className="form-button" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
