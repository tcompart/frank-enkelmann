import React from "react";
import {NavLink} from "react-router-dom";
import {Col} from "react-bootstrap";

export default () =>
    <div>
        <header role="banner">
            <nav id="navbar-primary" className="navbar">
                <Col lg={12} sm={12} md={12} xs={12}>
                    <NavLink className="headline" to="/" aria-label="home">
                        <h1 className="text-uppercase"><strong>Bollensdorff-Enkelmann GmbH</strong></h1>
                        <div className="sub-headline">Ihr Haustechnik-Team in und um Berlin</div>
                    </NavLink>
                </Col>
            </nav>
        </header>
    </div>;