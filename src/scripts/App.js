import React from 'react';
import {Col} from "react-bootstrap";
import Heating from "./Heating";
import Footer from "./Footer";
import Water from "./Water";
import Bath from "./Bath";
import Home from "./Home";
import Header from "./Header";
import Imprint from "./Impressum";
import Privacy from "./Privacy";
import {BrowserRouter, Link, Route} from "react-router-dom";
import FullScreenPicture from "./FullScreenPicture";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        }
    }

    toggle = (e) => {
      this.setState({toggle: !this.state.toggle});
    };

    render() {
        return (
            <BrowserRouter component={this}>
                <div>
                    <Header {...this.props} />
                    <div className="content">
                        <FullScreenPicture/>
                        <Col className="navbar-collapse collapse hidden-xs" role="navigation">
                            <ul className="nav navbar-nav">
                                <li className="row-centered"><Link to="/">Allgemein</Link></li>
                                <li className="row-centered"><Link to="/baeder">Bäder</Link></li>
                                <li className="row-centered"><Link to="/heizungen">Heizungen</Link></li>
                                <li className="row-centered"><Link to="/wasser">Wasseraufbereitung</Link></li>
                            </ul>
                        </Col>
                        <Col className="inner-content" xs={12} md={11} sm={11} lg={10}>
                            <nav className="hidden-sm hidden-md hidden-lg">
                                <div>
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" onClick={this.toggle.bind(this)}
                                                data-toggle="collapse" data-target="#myNavbar">
                                            <span className="icon-bar"/>
                                            <span className="icon-bar"/>
                                            <span className="icon-bar"/>
                                        </button>
                                    </div>
                                    <div className={(this.state.toggle ? "collapse " : "") + "navbar-collapse"} id="myNavbar">
                                        <ul className="nav navbar-nav pull-right" onClick={this.toggle.bind(this)}>
                                            <li className="row-centered"><Link to="/">Allgemein</Link></li>
                                            <li className="row-centered"><Link to="/baeder">Bäder</Link></li>
                                            <li className="row-centered"><Link to="/heizungen">Heizungen</Link></li>
                                            <li className="row-centered"><Link to="/wasser">Wasseraufbereitung</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/baeder" component={Bath}/>
                            <Route exact path="/heizungen" component={Heating}/>
                            <Route exact path="/wasser" render={Water}/>
                            <Route exact path="/impressum" render={Imprint}/>
                            <Route exact path="/datenschutz" render={Privacy}/>
                        </Col>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
};