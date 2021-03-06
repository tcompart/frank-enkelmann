import React from 'react';
import {Col} from "react-bootstrap";
import PhoneNumber from "./PhoneNumber";
import Mail from "./Mail";

export default () =>
    <div className="home">
        <h2 className="">Heizung und Sanitär in und um Berlin</h2>
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
            Für unsere Kunden bieten wir einen <span className="bold"><span className="text-nowrap">24-Stunden Notdienst</span> <PhoneNumber isLinked={true} number="0151 56 000 686" />.</span>
        </p>
        <p>
            Vereinbaren Sie einfach telefonisch einen Beratungstermin oder schreiben Sie uns.
        </p>

        <Col className="padding-zero" xs={3} sm={3} lg={2} md={3}>Telefon:</Col>
        <Col className="padding-zero"  xs={9} sm={9} lg={10} md={9}><PhoneNumber isLinked={true} number="030 944 161 28"/></Col>
        <Col className="padding-zero"  style={{paddingLeft: 0}}  xs={3} sm={3} lg={2} md={3}>Email:</Col>
        <Col className="padding-zero"  xs={9} sm={9} lg={10} md={9}><Mail mailTo="info@heizungneu.de"/></Col>
        <Col className="padding-zero"  style={{paddingLeft: 0}}  xs={3} sm={3} lg={2} md={3}>Büro-Adresse:</Col>
        <Col className="padding-zero"  xs={9} sm={9} lg={10} md={9}>Alt Zepernick 2, 16341 Berlin</Col>
    </div>