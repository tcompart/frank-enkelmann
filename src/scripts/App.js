import React from 'react';
import {Col} from "react-bootstrap";
import history from './history';
import Heating from "./Heating";
import Footer from "./Footer";
import Water from "./Water";
import Bath from "./Bath";
import Home from "./Home";
import Header from "./Header";
import picture from "../images/bad-3.jpg";
import {BrowserRouter, NavLink, Route} from "react-router-dom";

export default () => {
    return (
        <BrowserRouter history={history} component={this}>
            <div>
                <Header {...this.props} />
                <div className="content">
                    <Col className={"fullscreen-picture"} xs={12} sm={12} lg={12} md={12}>
                        <img alt="" src={picture}/>
                    </Col>
                    <Col className="inner-content" xs={12} md={9} sm={9} lg={10}>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/baeder" component={Bath}/>
                        <Route exact path="/heizungen" component={Heating}/>
                        <Route exact path="/wasser" render={Water}/>
                        <Route exact path="/impressum" render={Water}/>
                    </Col>
                    <Col className="navigation-container pull-right" xs={12} md={3} sm={3} lg={2}>
                        <ul className="nav nav-pills nav-stacked">
                            <li className="row-centered"><NavLink to="/">Allgemein</NavLink></li>
                            <li className="row-centered"><NavLink to="/baeder">Bäder</NavLink></li>
                            <li className="row-centered"><NavLink to="/heizungen">Heizungen</NavLink></li>
                            <li className="row-centered"><NavLink to="/wasser">Wasseraufbereitung</NavLink></li>
                            <li className="row-centered"><NavLink to="/impressum">Impressum</NavLink></li>
                        </ul>
                    </Col>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};