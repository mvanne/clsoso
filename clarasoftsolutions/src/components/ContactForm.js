
import React, { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent!");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
            