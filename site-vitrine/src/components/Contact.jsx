import React, { useState } from "react"

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm((prevForm) =>({
            ...prevForm,
            [name]: value
        }))
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form submitted:", form);
        alert("Merci pour votre message, nous vous contacterons bientôt !");
        setForm({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <section id="contact" className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit">Envoyer</button>
      </form>
    </section>
    )
}

export default Contact;