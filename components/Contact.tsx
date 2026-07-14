"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setMessage('✅ Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to send message. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="glass">
      <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--text-primary)' }}>Contact</h2>
      <p style={{ marginTop: 8, color: 'var(--text-secondary)' }}>Email: <a href="mailto:adityapujari542@gmail.com" style={{ color: 'var(--accent)' }}>adityapujari542@gmail.com</a></p>
      <p style={{ marginTop: 4, color: 'var(--text-secondary)' }}>LinkedIn: <a href="https://www.linkedin.com/in/adityapujari854" style={{ color: 'var(--accent)' }}>linkedin.com/in/adityapujari854</a></p>
      <div style={{ marginTop: 16 }}>
        <form onSubmit={sendEmail} style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            style={{ padding: 10, borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-primary)' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={{ padding: 10, borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-primary)' }}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            style={{ padding: 10, borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--input-bg)', color: 'var(--text-primary)' }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '10px 16px', borderRadius: 999, background: 'var(--accent)', color: 'var(--bg-secondary)', border: 0, cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 600, opacity: loading ? 0.6 : 1 }}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
          {message && (
            <p style={{ marginTop: 8, color: message.includes('✅') ? '#22c55e' : '#ef4444', fontSize: 14 }}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
