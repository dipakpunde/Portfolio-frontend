import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Finacle Developer.png";
import navIcon1 from "../assets/img/linkdin.png";
import navIcon2 from "../assets/img/email.png";
import navIcon3 from "../assets/img/whatsapp.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="mt-4" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dipak-punde-576811223/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dipakpunde2000@gmail.com&su=Hi%20Dipak&body=I%20want%20to%20connect%20with%20you."><img src={navIcon2} alt="Icon" /></a>
              <a href="https://api.whatsapp.com/send?phone=919657240478"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Designed & Developed by Dipak in 2025</p>
            <p>&copy; 2025. All Rights Reserved.</p>          </Col>
        </Row>
      </Container>
    </footer>
  )
}
