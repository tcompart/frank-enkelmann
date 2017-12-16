import React from "react";
import {Col} from "react-bootstrap";
import commonPicture from "../images/bad-3.jpg";
import bathPicture from "../images/bad-12.jpg";
import heaterPicture from "../images/heizung-5.jpg";
import waterPicture from "../images/wasser-3.jpg";
import {withRouter} from "react-router-dom";

class FullScreenPicture extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: props.location.pathname
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            text: props.location.pathname
        });
    }

    calculatePicture() {
        switch (this.state.text) {
            case "/baeder":
                return bathPicture;
            case "/heizungen":
                return heaterPicture;
            case "/wasser":
                return waterPicture;
            default:
                return commonPicture;
        }
    }

    render() {
        const picture = this.calculatePicture();
        return <div>

            <Col className={"fullscreen-picture"} xs={12} sm={12} lg={12} md={12}>
                <img alt="" src={picture}/>
            </Col>
        </div>;
    }
};

export default withRouter(FullScreenPicture);