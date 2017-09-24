import React from "react";
import {NavLink} from "react-router-dom";
import {Col} from "react-bootstrap";
import PhoneNumber from "./PhoneNumber";
import Mail from "./Mail";

export default (props) =>
    <div>
        <header role="banner">
            <nav id="navbar-primary" className="navbar">
                <Col lg={8} sm={9} md={9} xs={12}>
                    <NavLink className="headline" to="/" aria-label="home">
                        <h1 className="text-uppercase"><strong>Bollensdorff-Enkelmann GmbH</strong></h1>
                        <div className="headline-contact"><span className="glyphicon glyphicon-phone"><PhoneNumber isLinked={true} number="0151 56 000 686"/></span>&nbsp;|&nbsp;<span className="glyphicon glyphicon-phone-alt"><PhoneNumber isLinked={true} number="030 944 16 128"/></span>&nbsp;|&nbsp;<span className="glyphicon glyphicon-envelope"><Mail mailTo="info@heizungneu.de"/></span></div>
                    </NavLink>
                </Col>
                <Col className="contact-box pull-right" lg={2} sm={3} md={3} xs={12}>
                </Col>
            </nav>
        </header>
    </div>;