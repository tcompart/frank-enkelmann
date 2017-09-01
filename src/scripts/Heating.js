import React from "react";
import heating1 from "../images/heizung-1.jpg"
import heating2 from "../images/heizung-2.jpg"
import heating3 from "../images/radiator-250558_640.jpg"
import {Col, Row} from "react-bootstrap";

const content = <div>
    <p>
        Verlässlichkeit und Langlebigkeit sind wesentliche Merkmale, die jeder Bauherr von seiner Heizungsanlage
        erwartet. Hinzu kommen Emissionsanforderungen und regenerative Techniken.
    </p>

    <p>
        Wir bauen Heizungen, die alle geltenden Vorschriften erfüllen und zugleich auf Ihre Bedürfnisse
        zugeschnitten sind.
    </p>

    <p>
        Zu unserem Leistungsspektrum zählen klassische Gasbrennwertanlagen, Solaranlagen, Pelletöfen, Holzvergaser
        und kombinierte Anlagen z.B. aus Gas, Solar und wasserführenden Kaminen.
    </p>

    <p>
        Unsere Anlagen orientieren sich dabei an Ihren Anforderungen und Möglichkeiten. Dabei ist alles denkbar.
        Möchten Sie z.B. den Komfort klassischen Gasanlagen mit der Unabhängigkeit aus regenerativen Komponenten wie
        Solar oder Holz verbinden? Kein Problem – sprechen Sie uns gern an!
    </p>
</div>

export default () => <div className="heating">
    <h2>Heizungen</h2>
    <Col xs={12} sm={4} md={4} lg={3}>
        <Row>
            <img className="padding img-responsive" alt=""  src={heating1} />
        </Row>
        <Col xs={12} smHidden={true} mdHidden={true} lgHidden={true}>
            {content}
        </Col>
        <Row>
            <img className="padding img-responsive" alt=""  src={heating3} />
        </Row>
        <Row>
            <img className="padding img-responsive" alt=""  src={heating2} />
        </Row>
    </Col>
    <Col xsHidden={true} sm={8} md={8} lg={9}>{content}</Col>
</div>

