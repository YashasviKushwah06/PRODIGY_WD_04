import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end custom-padding-top">
                        <div className="social-icon">
                        <a href='#'><FontAwesomeIcon icon={faLinkedin} inverse/></a>
                        <a href='#'><FontAwesomeIcon icon={faGithub} inverse/></a>
                        <a href='#'><FontAwesomeIcon icon={faInstagram} inverse/></a>
                        </div>
                        <p>Copyright 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}