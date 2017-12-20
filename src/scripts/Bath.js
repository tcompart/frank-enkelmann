import React from "react";
import {Col, Row} from "react-bootstrap";
import bath1 from "../images/bad-16.jpg"
import bath2 from "../images/bad-17.jpg"
import bath3 from "../images/bad-18.jpg"

export default () => <div className="bath">
    <Row>
        <h2>Bäder</h2>

        <p>
            Ob Neu- oder Umbau – wir bauen für Sie das komplette Bad.
        </p>
        <p>
            Von der Beratung über die Rohrinstallation und Trockenbau, Elektroarbeiten und Fliesenlegearbeiten bis
            zur Auswahl und Montage der Badewanne, Dusche und Waschtisch bekommen Sie von uns alles aus einer Hand.
            So entfällt für Sie die schwierige Terminierung zwischen den Gewerken und es bleibt mehr Zeit für die
            Vorfreude auf Ihr neues Bad!
        </p>
        <p>
            Wir bauen sowohl Standardausstattungen als auch hochwertige Bäder für den privaten und gewerblichen
            Bereich. Unsere Referenzen reichen von raumsparenden Lösungen für Dachgeschosse und Arztpraxen bis zu
            groß angelegten Erholungstempeln.
        </p>
        <p>
            Als zertifizierte Partner im Bau barrierefreier Konzepte bieten wir auch maßgeschneiderte Lösungen für
            Menschen mit Behinderungen. Barrierefreie Bäder bedeuten dabei heute keine Einschränkung bei Design und
            Komfort – wir beraten Sie gern.
        </p>
    </Row>
    <Row>
        <Col xs={4} sm={4} md={4} lg={4}>
            <img alt="" src={bath1}/>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
            <img alt="" src={bath2}/>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
            <img alt="" src={bath3}/>
        </Col>
    </Row>
</div>
