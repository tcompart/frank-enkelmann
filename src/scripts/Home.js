import React from 'react';
import {Col, Row} from "react-bootstrap";
import PhoneNumber from "./PhoneNumber";
import Mail from "./Mail";

export default () =>
    <div className="home">
        <p>Wir stehen seit 20 Jahren als inhabergeführter Handwerksbetrieb für Qualität und Verlässlichkeit in den
            Bereichen
            Heizung und Sanitär in und um Berlin.
        </p>
        <p>
            Unser Leistungsspektrum reicht von Neu- und Ausbauprojekten in Ein- und Mehrparteienhäusern über Wartungen
            und
            Reparaturen bis zur Schadenabwicklung zum Beispiel nach Wasserschäden.
        </p>
        <p>
            Für unsere Kunden bieten wir einen 24-Stunden Notdienst 0151 56 000 686
        </p>
        <p>
            Vereinbaren Sie einfach telefonisch einen Beratungstermin oder schreiben Sie uns
        </p>
        <Col xs={1} sm={1} lg={1} md={1}>
            <Row>
                Telefon:
            </Row>
            <Row>
                Email:
            </Row>
            <Row>
                Büro-Adresse:
            </Row>
        </Col>

        <Col xs={11} sm={11} lg={11} md={11}>
            <Row>
                <PhoneNumber isLinked={true} number="030 944 161 28"/>
            </Row>
            <Row>
                <Mail mailTo="info@heizungneu.de"/>
            </Row>
            <Row>
                Alt Zepernick 2, 16341 Berlin
            </Row>
        </Col>
    </div>