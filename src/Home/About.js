import React from "react";
import Menubar from "../components/Menubar";
import AboutDetail from "../components/Detail/AboutDetail";
import { Container } from "react-bootstrap";

const About = () => {
    return (
        <Container>
            <Menubar />
            <AboutDetail />
        </Container>
    );
};

export default About;
