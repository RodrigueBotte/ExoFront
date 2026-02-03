import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Merci pour votre message, nous vous contacterons bientôt !");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="color-section size-secondary py-5 d-flex flex-column justify-content-center align-items-center">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Nom
          </label>
          <input
            name="name"
            type="text"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
