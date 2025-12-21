import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", contactMethod: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    console.log("Form Data:", formData); // Log form data before sending

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", phone: "", contactMethod: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error('Error in sending:', error); // Log the error
      setStatus("Error sending message.");
    }
  };

  return (

    <>
    <div className="gradient-container-form">
      <div className="container mt-3">
        <h2 className="mb-3">Contact Us</h2>
        <p className="mb-3">We'd love to hear from you! Send us a message below:</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Your Cell Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Enter your cell phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

<div className="mb-2">
  <label className="form-label">How do you prefer to be contacted?</label>
  <div>
    <label className="me-3">
      <input
        type="radio"
        name="contactMethod"
        value="text"
        checked={formData.contactMethod === "text"}
        onChange={handleChange}
      />{" "}
      Text
    </label>
    <label className="me-3">
      <input
        type="radio"
        name="contactMethod"
        value="email"
        checked={formData.contactMethod === "email"}
        onChange={handleChange}
      />{" "}
      Email
    </label>
    <label>
      <input
        type="radio"
        name="contactMethod"
        value="call"
        checked={formData.contactMethod === "call"}
        onChange={handleChange}
      />{" "}
      Call
    </label>
  </div>
</div>


          <div className="mb-2">
            <label className="form-label">Your Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          

          <button type="submit" className="btn text-dark btn-dark">
            Send Message
          </button>

          {status && <p className="mt-2">{status}</p>}
        </form>



      </div>

      
      
    </div>

            <div className="gradient-container-form mt-5 text-center">
          <h4 className="mb-3">Stay in the Loop</h4>
          <p className="mb-3">Sign up to get updates about photo fundraisers, discounts, and mini sessions!</p>
          <a
            href="https://mailchi.mp/32df8461f963/stamp-in-time-photography-llc" // replace with your actual Mailchimp link
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-dark btn-dark"
          >
            Join Email List
          </a>
        </div>
    </>

    

    
  );
}

export default Contact;
