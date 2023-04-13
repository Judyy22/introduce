import React from "react";
import Menubar from "../components/Menubar";
import ContactDetail from "../components/Detail/ContactDetail";
import { Container } from "react-bootstrap";

const Contact = () => {
    return (
        <Container>
            <Menubar />
            <ContactDetail />
        </Container>
    );
};

export default Contact;
