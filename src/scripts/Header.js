import React from "react";
import {NavLink} from "react-router-dom";
import {Col} from "react-bootstrap";

export default () =>
    <div>
        <header role="banner">
            <nav id="navbar-primary" className="navbar">
                <Col lg={8} sm={9} md={9} xs={12}>
                    <NavLink className="headline" to="/" aria-label="home">
                        <h1 className="text-uppercase"><strong>Bollensdorff-Enkelmann GmbH</strong></h1>
                        <div className="headline-contact">Ihr Haustechnik-Team in und um Berlin</div>
                    </NavLink>
                </Col>
                <Col className="contact-box pull-right" lg={2} sm={3} md={3} xs={12}>
                </Col>
            </nav>
        </header>
    </div>;