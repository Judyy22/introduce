import React from "react";
import Menubar from "../components/Menubar";
import PortfolioDetail from "../components/Detail/PortfolioDetail";
import { Container } from "react-bootstrap";

const Portfolio = () => {
    return (
        <Container>
            <Menubar />
            <PortfolioDetail />
        </Container>
    );
};

export default Portfolio;
