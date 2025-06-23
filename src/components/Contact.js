import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/Contact.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useAdmin } from "../hook/useAdmin";

export const Contact = () => {
  const { saveContactus, loading } = useAdmin();

  const formInitial = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(formInitial);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const message = await saveContactus(formData); // <- message is defined here
      console.log("Returned message from backend:", message); // ✅ move inside try block

      setStatus({ success: true, message });
      setFormData(formInitial);
    } catch (error) {
      setStatus({ success: false, message: error.message });
    } finally {
      setButtonText("Send");
      setTimeout(() => setStatus({ success: null, message: "" }), 3000);
    }
  };



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      {["firstName", "lastName", "email", "phone"].map((field, index) => (
                        <Col size={12} sm={6} className="px-1" key={index}>
                          <input
                            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                            name={field}
                            value={formData[field]}
                            placeholder={field.replace(/([A-Z])/g, " $1")}
                            onChange={handleChange}
                            required
                          />
                        </Col>
                      ))}
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={formData.message}
                          placeholder="Message"
                          onChange={handleChange}
                          required
                        />
                        <button type="submit" disabled={loading}>
                          <span>{buttonText}</span>
                        </button>

                        {/* 🟢 Move the status message here */}
                        {status.message && (
                          <p
                            style={{
                              fontSize: "1rem",
                              color: "#ffffff",
                              backgroundColor: status.success ? "#28a745" : "#dc3545",
                              padding: "8px 16px",
                              borderRadius: "6px",
                              fontWeight: "500",
                              display: "inline-block",
                              marginTop: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            {status.message}
                          </p>
                        )}
                      </Col>


                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
