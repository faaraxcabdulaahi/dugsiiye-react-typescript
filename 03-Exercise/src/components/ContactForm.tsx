import React, { useState } from "react";

interface IContact {
  onSubmit: (data: { name: string; email: string }) => void;
}

const ContactForm = ({ onSubmit }: IContact) => {
  const [contactForm, setContactForm] = useState({ name: "", email: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactForm({
      ...contactForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(contactForm);
    setContactForm({ name: "", email: "" });
  };

  const { name, email } = contactForm;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="please enter your name"
          value={name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="please enter your email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Save Contacts</button>
      </form>
    </div>
  );
};

export default ContactForm;
