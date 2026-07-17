import { useState } from 'react';
import { useInView } from 'react-intersection-observer';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form  submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <section className="contact">
      <h1 className={`section-title ${inView ? 'fade-in' : ''}`}>Get In Touch</h1>
      <div className="contact-grid" ref={ref}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Send Message →</button>
        </form>

        <div className={`contact-info ${inView ? 'scroll-reveal' : ''}`}>
          <h3>Contact Information</h3>
          <div className="contact-detail">
            <strong>Address</strong>
            <p>Mombasa, Kenya</p>
          </div>
          <div className="contact-detail">
            <strong>Email</strong>
            <p>charlocean[at]gmail.com</p>
          </div>
          <div className="contact-detail">
            <strong>Phone</strong>
            <p>+254 711 188 414</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;