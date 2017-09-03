import React from "react";
import {Col, Row} from "react-bootstrap";
import bath1 from "../images/bad-1.jpg"
import bath2 from "../images/bad-2.jpg"
import bath3 from "../images/bad-4.jpg"
export default () => <div className="bath">
    <Col xs={12} sm={4} md={4} lg={3}>
        <Row>
           <img alt=""  src={bath1} />
        </Row>
        <Row>
           <img alt=""  src={bath2} />
        </Row>
        <Row>
           <img alt=""  src={bath3} />
        </Row>
    </Col>
    <Col xs={12} sm={8} md={8} lg={9}>
        <h1>Bäder</h1>

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
    </Col>
</div>
