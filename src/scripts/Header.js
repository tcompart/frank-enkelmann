import React from "react";
import {NavLink} from "react-router-dom";
import {Col} from "react-bootstrap";
import PhoneNumber from "./PhoneNumber";
import Mail from "./Mail";

export default (props) =>
    <div>
        <header role="banner">
            <nav id="navbar-primary" className="navbar navbar-default">
                <Col lg={8} sm={9} md={9} xs={12}>
                    <NavLink className="headline" to="/" aria-label="home">
                        <h1 className="h1">Bollensdorff-Enkelmann GmbH</h1>
                        <h2 className="h2">Heizung und Sanitär in und um Berlin</h2>
                    </NavLink>
                </Col>
                <Col className="contact-box pull-right" lg={2} sm={3} md={3} xs={12}>
                    <p>
                        <span className="glyphicon glyphicon-phone">&nbsp;<PhoneNumber isLinked={true} number="0151 56 000 686"/></span>
                    </p>
                    <p>
                        <span className="glyphicon glyphicon-phone-alt">&nbsp;<PhoneNumber isLinked={true} number="030 944 16 128"/></span>
                    </p>
                    <p>
                        <span className="glyphicon glyphicon-envelope">&nbsp;<Mail mailTo="info@heizungneu.de"/></span>
                    </p>
                </Col>
            </nav>
        </header>
    </div>;