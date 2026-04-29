import "./AboutUs.css";
import "../fontawsome/fontawsome.js";
import { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Bringing good food closer to you</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-container">
          {/* Story Section */}
          <div className="story-section">
            <h2>Our Story</h2>
            <p>
              We started with a simple mission: to make great food accessible to everyone. 
              Founded in 2020, our platform connects hungry customers with their favorite local restaurants 
              and talented home chefs, ensuring fast and reliable delivery every single time.
            </p>
            <p>
              Today, we serve thousands of customers across multiple cities, partnering with 
              hundreds of restaurants to bring diverse cuisines right to your doorstep.
            </p>
          </div>

          {/* Tabs Section */}
          <div className="tabs-section">
            <div className="tabs-header">
              <button
                className={`tab-btn ${activeTab === "mission" ? "active" : ""}`}
                onClick={() => setActiveTab("mission")}
              >
                <i className="fas fa-bullseye"></i> Our Mission
              </button>
              <button
                className={`tab-btn ${activeTab === "values" ? "active" : ""}`}
                onClick={() => setActiveTab("values")}
              >
                <i className="fas fa-heart"></i> Our Values
              </button>
              <button
                className={`tab-btn ${activeTab === "team" ? "active" : ""}`}
                onClick={() => setActiveTab("team")}
              >
                <i className="fas fa-users"></i> Our Team
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === "mission" && (
                <div className="tab-pane active">
                  <h3>Our Mission</h3>
                  <p>
                    To revolutionize the food delivery experience by connecting customers 
                    with the best local restaurants and chefs, ensuring every meal is fresh, 
                    delicious, and delivered on time.
                  </p>
                  <ul>
                    <li>Quality food from trusted partners</li>
                    <li>Fast and reliable delivery</li>
                    <li>Exceptional customer service</li>
                    <li>Sustainable and eco-friendly practices</li>
                  </ul>
                </div>
              )}

              {activeTab === "values" && (
                <div className="tab-pane active">
                  <h3>Our Core Values</h3>
                  <div className="values-grid">
                    <div className="value-card">
                      <i className="fas fa-star"></i>
                      <h4>Quality First</h4>
                      <p>We never compromise on the quality of food and service</p>
                    </div>
                    <div className="value-card">
                      <i className="fas fa-handshake"></i>
                      <h4>Trust & Transparency</h4>
                      <p>Honest dealings with customers and restaurant partners</p>
                    </div>
                    <div className="value-card">
                      <i className="fas fa-bolt"></i>
                      <h4>Speed & Efficiency</h4>
                      <p>Delivering your food quickly without compromising quality</p>
                    </div>
                    <div className="value-card">
                      <i className="fas fa-leaf"></i>
                      <h4>Sustainability</h4>
                      <p>Committed to eco-friendly delivery and packaging practices</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "team" && (
                <div className="tab-pane active">
                  <h3>Our Amazing Team</h3>
                  <p>
                    We're a diverse team of food enthusiasts, tech innovators, and delivery experts 
                    working together to make your dining experience exceptional.
                  </p>
                  <div className="team-stats">
                    <div className="stat">
                      <h4>500+</h4>
                      <p>Team Members</p>
                    </div>
                    <div className="stat">
                      <h4>15+</h4>
                      <p>Cities Served</p>
                    </div>
                    <div className="stat">
                      <h4>2M+</h4>
                      <p>Happy Customers</p>
                    </div>
                    <div className="stat">
                      <h4>10M+</h4>
                      <p>Orders Delivered</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="about-cta">
            <h2>Join Us Today</h2>
            <p>Experience the best food delivery service in your city</p>
            <button className="cta-btn">Download Our App</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
