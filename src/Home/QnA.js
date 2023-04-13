import React from "react";
import Menubar from "../components/Menubar";
import QnADetail from "../components/Detail/QnADetail";
import { Container } from "react-bootstrap";

const QnA = () => {
    return (
        <Container>
            <Menubar />
            <QnADetail />
        </Container>
    );
};

export default QnA;
