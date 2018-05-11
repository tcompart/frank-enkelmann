import React from "react";
import {NavLink} from "react-router-dom";
import {Col} from "react-bootstrap";
import logo from "../images/logo.png";


export default () =>
    <div>
        <header role="banner">
            <nav id="navbar-primary" className="navbar">
                <Col lg={12} sm={12} md={12} xs={12}>
                    <NavLink className="headline justify-content-between" to="/" aria-label="home">
                        <div className="col-lg-10 col-sm-9">
                            <h1 className="text-uppercase"><strong>Bollensdorff-Enkelmann GmbH</strong></h1>
                            <h2 className="sub-headline">Ihr Haustechnik-Team in und um Berlin</h2>
                        </div>
                        <div className="col-lg-2 col-sm-3 pull-right padding-zero margin-zero">
                            <h1>
                                <img className="logo hidden-xs pull-right" src={logo} alt="Bollensdorff-Enkelmann GmbH" />
                            </h1>
                        </div>
                    </NavLink>
                </Col>
            </nav>
        </header>
    </div>;