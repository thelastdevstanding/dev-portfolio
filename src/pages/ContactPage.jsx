import { useState } from "react";
import * as yup from "yup";

const contactSchema = yup.object({
  fullName: yup.string().trim().required("Enter your full name.").min(2, "Enter at least 2 characters."),
  email: yup.string().trim().required("Enter your email address.").email("Enter a valid email address."),
  message: yup.string().trim().required("Write a message.").min(10, "Write at least 10 characters."),
});

export function ContactPage() {
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    try {
      contactSchema.validateSync({ fullName, email, message }, { abortEarly: false });
    } catch (err) {
      const found = {};
      err.inner.forEach((issue) => {
        if (!found[issue.path]) found[issue.path] = issue.message;
      });
      setErrors(found);
      setSent(false);
      return;
    }
    setErrors({});
    console.log("Sending:", fullName.trim(), email.trim(), message.trim());
    setSent(true);
  }

  return (
    <section id="contact" className="card">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="fullName">Full name</label>
        <input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className="error">{errors.email}</p>}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
        {errors.message && <p className="error">{errors.message}</p>}
        <p className="preview">Preview: {message || "Type a message..."}</p>
        <button type="submit" className="btn">Send message</button>
        {sent && <p className="success">Thanks — message received (demo).</p>}
      </form>
    </section>
  );
}