import "./ContactUs.css";
import "../fontawsome/fontawsome.js";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-us">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message!</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content">
        <div className="contact-container">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visit Us</h3>
              <p>123 Food Street, Downtown</p>
              <p>Food City, FC 12345</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
              <p>Mon - Fri, 9am - 6pm</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>support@foodapp.com</p>
              <p>We'll reply within 24 hours</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Hours</h3>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday - Sunday: 10am - 4pm</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>

            {submitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Thank You!</h3>
                <p>
                  Your message has been sent successfully. We'll get back to you
                  soon!
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="social-container">
          <h2>Follow Us</h2>
          <p>Stay updated with our latest news and offers</p>
          <div className="social-links">
            <a href="#" className="social-link facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-items">
            <div className="faq-item">
              <h3>
                <i className="fas fa-question-circle"></i>
                How long does delivery take?
              </h3>
              <p>
                Most deliveries are completed within 30-45 minutes from the time
                your order is confirmed. Delivery time may vary based on your
                location and current demand.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                <i className="fas fa-question-circle"></i>
                What are your delivery charges?
              </h3>
              <p>
                Delivery charges depend on your location and order value. Most
                orders include free delivery when you spend above a certain
                minimum amount. Check your app for specific details.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                <i className="fas fa-question-circle"></i>
                Can I cancel my order?
              </h3>
              <p>
                Yes, you can cancel your order within 2 minutes of placing it.
                After that, the order will be confirmed with the restaurant.
                Contact us immediately if you need further assistance.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                <i className="fas fa-question-circle"></i>
                Do you support contactless delivery?
              </h3>
              <p>
                Absolutely! You can select the contactless delivery option
                during checkout. Your order will be left at your doorstep
                safely.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                <i className="fas fa-question-circle"></i>
                How do I report an issue with my order?
              </h3>
              <p>
                If you experience any issues, please contact our support team
                through the app or email us at support@foodapp.com. We're here
                to help and will resolve it quickly!
              </p>
            </div>

            <div className="faq-item">
              <h3>
                <i className="fas fa-question-circle"></i>
                What payment methods do you accept?
              </h3>
              <p>
                We accept credit cards, debit cards, digital wallets, and cash
                on delivery. Choose your preferred payment method during
                checkout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
