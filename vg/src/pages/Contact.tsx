import { useState } from 'react';
import { InteractiveMapPins } from './InteractiveMapPins';

function Contact() {
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    phone: '', 
    email: '', 
    message: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const object = {
      // ACTUAL ACCESS KEY:
      access_key: "a51b8eb3-12ac-4cb7-a167-ae684c665255", 
      subject: `New Message from ${formData.firstName} ${formData.lastName}`,
      ...formData
    };
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const resData = await res.json();

      if (resData.success) {
        alert(`Thank you, ${formData.firstName}! Your message has been sent.`);
        setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' }); 
      } else {
        alert("May problema sa pag-send ng message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send. Please check your internet connection.");
    }
  };

  return (
    <section className="contact-page-section">
      <div className="contact-container">
        
        {/* KALIWANG COLUMN: MAPA */}
        <div className="map-column">
          <h2 className="section-title">SATELLITE OFFICES</h2>
          <div className="map-wrapper">
            <InteractiveMapPins />
          </div>
        </div>

        {/* KANANG COLUMN: FORM */}
        <div className="form-column">
          <h2 className="section-title">CONTACT US</h2>
          <div className="clean-form-container">
            <form onSubmit={handleSubmit} className="clean-form">
              
              <div className="form-row">
                <div className="form-group flex-half">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" id="firstName" name="firstName" 
                    value={formData.firstName} onChange={handleChange} required 
                  />
                </div>
                <div className="form-group flex-half">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" id="lastName" name="lastName" 
                    value={formData.lastName} onChange={handleChange} required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group flex-small">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" id="phone" name="phone" 
                    value={formData.phone} onChange={handleChange} 
                  />
                </div>
                <div className="form-group flex-large">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" id="email" name="email" 
                    value={formData.email} onChange={handleChange} required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" name="message" rows={4} 
                  value={formData.message} onChange={handleChange} required 
                ></textarea>
              </div>

              <button type="submit" className="submit-btn-orange">
                SUBMIT
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;