import React from 'react';
import {Col} from "react-bootstrap";
import Heating from "./Heating";
import Footer from "./Footer";
import Water from "./Water";
import Bath from "./Bath";
import Home from "./Home";
import Header from "./Header";
import Imprint from "./Impressum";
import picture from "../images/bad-3.jpg";
import {BrowserRouter, Link, Route} from "react-router-dom";

export default () => {
    return (
        <BrowserRouter component={this}>
            <div>
                <Header {...this.props} />
                <div className="content">
                    <Col className={"fullscreen-picture"} xs={12} sm={12} lg={12} md={12}>
                        <img alt="" src={picture}/>
                    </Col>
                    <Col className="navbar-collapse collapse" xs={12} mdOffset={1} md={10} smOffset={1} sm={9} lgOffset={3} lg={6}>
                        <ul className="nav navbar-nav">
                            <li className="row-centered"><Link to="/" >Allgemein</Link></li>
                            <li className="row-centered"><Link to="/baeder">Bäder</Link></li>
                            <li className="row-centered"><Link to="/heizungen">Heizungen</Link></li>
                            <li className="row-centered"><Link to="/wasser">Wasseraufbereitung</Link></li>
                            <li className="row-centered"><Link to="/impressum">Impressum</Link></li>
                        </ul>
                    </Col>
                    <Col className="inner-content" xs={12} md={9} sm={9} lg={10}>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/baeder" component={Bath}/>
                        <Route exact path="/heizungen" component={Heating}/>
                        <Route exact path="/wasser" render={Water}/>
                        <Route exact path="/impressum" render={Imprint}/>
                    </Col>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};