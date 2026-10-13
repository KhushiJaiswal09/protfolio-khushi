import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

interface FormDetails {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formDetails, setFormDetails] = useState<FormDetails>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact_wrapper">
          <div className="section-heading">
            <p className="section-eyebrow">LET’S CONNECT</p>
            <h2>Have something in mind?</h2>
            <p>For opportunities, collaborations, or questions, get in touch.</p>
          </div>
          <div className="contact-details">
            <a href="mailto:jaiswalkhushi677@gmail.com">jaiswalkhushi677@gmail.com</a>
            <a href="tel:+919415053377">+91 94150 53377</a>
          </div>
          <form
            method="POST"
            action="https://formspree.io/f/maeqpdaw"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="name"
                name="name"
                label="Your Name"
                placeholder="What's your name?"
                value={formDetails.name}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputProps={{
                  style: { color: 'var(--text)' }
                }}
                InputLabelProps={{
                  style: { color: 'var(--muted)' }
                }}
              />
              <TextField
                required
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="How can I reach you?"
                value={formDetails.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputProps={{
                  style: { color: 'var(--text)' }
                }}
                InputLabelProps={{
                  style: { color: 'var(--muted)' }
                }}
              />
            </div>
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={6}
              value={formDetails.message}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              InputProps={{
                style: { color: 'var(--text)' }
              }}
              InputLabelProps={{
                style: { color: 'var(--muted)' }
              }}
              className="body-form"
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
