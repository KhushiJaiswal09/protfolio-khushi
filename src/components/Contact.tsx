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
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <form
            method="POST"
            action="https://formspree.io/f/mjvnqvla"
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
                  style: { color: '#000' } // Set text color to black
                }}
                InputLabelProps={{
                  style: { color: '#000' } // Set label color to black
                }}
              />
              <TextField
                required
                id="email"
                name="email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={formDetails.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputProps={{
                  style: { color: '#000' } // Set text color to black
                }}
                InputLabelProps={{
                  style: { color: '#000' } // Set label color to black
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
                style: { color: '#000' } // Set text color to black
              }}
              InputLabelProps={{
                style: { color: '#000' } // Set label color to black
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
    </div>
  );
};

export default Contact;
