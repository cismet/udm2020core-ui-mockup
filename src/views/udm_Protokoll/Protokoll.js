import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import {Map, TileLayer, ZoomControl} from "react-leaflet";
import {FullscreenControl, LocateControl} from "react-cismap";
import "leaflet/dist/leaflet.css"


import ProtGeoKontext from './ProtGeoKontext';
import ProtGeoSuche from './ProtGeoSuche';
import ProtKommentar from './ProtKommentar';
import ProtPostfilter from './ProtPostfilter';
import ProtExport from './ProtExport';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
        <Col xs="12" sm="12" lg="12">
        <Card>
              <CardHeader>
                <i className="fa fa-history"></i><strong>Protokollsteuerung</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/button-dropdown/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">Hilfe</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <ButtonDropdown isOpen={this.state.dropdownOpen[0]} toggle={() => { this.toggle(0); }}>
                  <DropdownToggle color="success" caret>
                    Aktivieren
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action Disabled</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                {'    '}
                <ButtonDropdown isOpen={this.state.dropdownOpen[0]} toggle={() => { this.toggle(0); }}>
                  <DropdownToggle color="warning" caret>
                    Stoppen
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action Disabled</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                {'    '}
                <ButtonDropdown isOpen={this.state.dropdownOpen[0]} toggle={() => { this.toggle(0); }}>
                  <DropdownToggle color="primary" caret>
                    Speichern
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action Disabled</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                {'    '}
                <ButtonDropdown isOpen={this.state.dropdownOpen[0]} toggle={() => { this.toggle(0); }}>
                  <DropdownToggle color="danger" caret>
                    Löschen
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action Disabled</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </CardBody>
            </Card>        </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="12">
          <ProtKommentar 
               comment="BORIS beinhaltet mehr als 1,5 Mio. Datensätze von über 10.000 Standorten. Die Datenbasis bilden Bodeninformationen des Bundes und der Länder wie die Bodenzustandsinventuren, die das Umweltbundesamt durch BORIS qualitätsgesichert und vergleichbar zur Verfügung stellt. Dadurch können sie z.B. für wissenschaftliche Fragestellungen und für Umweltverträglichkeitsprüfungen genutzt werden. Die BORIS – Datenstruktur sowie Daten-Bereitstellungsdienste entsprechen den Vorgaben der EU – INSPIRE – Richtlinie, die darauf abzielt, eine europäische Geodateninfrastruktur  zu schaffen. Das neue BORIS Datenportal ist eine Kooperation des BMLFUW, des Umweltbundesamtes sowie der Bundesländer Burgenland, Niederösterreich, Oberösterreich, Kärnten, Steiermark, Salzburg, Tirol und Vorarlberg und wurde aus gemeinsamen Mitteln finanziert."/>
          </Col>
        </Row>
       <Row>
        <Col xs="12" sm="12" lg="12">
           <ProtGeoKontext
              zoom={11}
              center={[48.356249029540734, 15.9136962890625
              ]}
           />       
          </Col>
         </Row> 
         <Row>
          <Col xs="12" sm="12" lg="12">
          <ProtKommentar 
               comment="Das neue, webbasierte Geographische Informationssystem ermöglicht die Verschneidung der Daten mit verschiedenen Fach- und/oder Basiskarten wie der Europabodentypenkarte oder der landwirtschaftlichen Bodenkartierung eBOD."/>
          </Col>
        </Row>
         
         <Row>
        <Col xs="12" sm="12" lg="12">
           <ProtGeoSuche
              zoom={9}
              center={[48.356249029540734, 15.9136962890625
                ]}
              ergebnisse={7}
              searchFC={tullnFC}
              resultsFC={pointsFC}
              resultColor='#D82F1C'

           />       
          </Col>
         </Row> 
         
         <Row>
         <Col xs="12" sm="12" lg="12">
           <ProtPostfilter
              ergebnisse={7}
              konfigurierteFilter={2}
              gefilterteSuchergebnisse={4}
              

           />       
          </Col>
         </Row> 
         <Row>
         <Col xs="12" sm="12" lg="12">
           <ProtPostfilter
              ergebnisse={4}
              konfigurierteFilter={1}
              gefilterteSuchergebnisse={3}
              

           />       
          </Col>
         </Row> 
         <Row>
          <Col xs="12" sm="12" lg="12">
          <ProtKommentar 
               comment="Über das neue  BORIS – Bodendatenportal  können UserInnen Standorteigenschaften, Bodenbeschaffenheit sowie Messwerte aus über 40 Untersuchungen abfragen. Die Parameter der Datenabfrage können individuell festgelegt werden."/>
          </Col>
        </Row>
        
        <Row>
        <Col xs="12" sm="12" lg="12">
           <ProtGeoSuche
              zoom={9}
              center={[48.356249029540734, 15.9136962890625
                ]}
              ergebnisse={manyPointsFC.features.length}
              searchFC={tullnFC}
              resultsFC={manyPointsFC}
              resultColor='#902A1F'
           />       
          </Col>
         </Row> 
         <Row>
         <Col xs="12" sm="12" lg="12">
           <ProtPostfilter
              ergebnisse={manyPointsFC.features.length}
              konfigurierteFilter={3}
              gefilterteSuchergebnisse={12}
              

           />       
          </Col>
         </Row> 
         <Row>
         <Col xs="12" sm="12" lg="12">
           <ProtPostfilter
              ergebnisse={12}
              konfigurierteFilter={4}
              gefilterteSuchergebnisse={10}
              

           />       
          </Col>
         </Row> 
         <Row>
          <Col xs="12" sm="12" lg="12">
          <ProtKommentar 
               comment="Das neue BORIS Datenportal ist eine Kooperation des BMLFUW, des Umweltbundesamtes sowie der Bundesländer Burgenland, Niederösterreich, Oberösterreich, Kärnten, Steiermark, Salzburg, Tirol und Vorarlberg und wurde aus gemeinsamen Mitteln finanziert.
               "/>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="12">
          <ProtExport 
               title="Bodenmessstellen-Export"
               desc="10 Bodenmesstellen"
               para={4}
               />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;


const tullnFC={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              15.468749999999998,
              48.472921272487824
            ],
            [
              15.394592285156248,
              48.4765629664158
            ],
            [
              15.342407226562502,
              48.449243890328724
            ],
            [
              15.353393554687498,
              48.40367941865281
            ],
            [
              15.394592285156248,
              48.34894812401375
            ],
            [
              15.457763671875,
              48.33799480425318
            ],
            [
              15.520935058593748,
              48.339820521006125
            ],
            [
              15.567626953125,
              48.3416461723746
            ],
            [
              15.622558593749998,
              48.3416461723746
            ],
            [
              15.67474365234375,
              48.3416461723746
            ],
            [
              15.7269287109375,
              48.33799480425318
            ],
            [
              15.809326171875,
              48.328865239704655
            ],
            [
              15.8807373046875,
              48.31425453625818
            ],
            [
              15.941162109375,
              48.30512072140391
            ],
            [
              16.007080078125,
              48.28684818710906
            ],
            [
              16.10321044921875,
              48.27953734226008
            ],
            [
              16.1883544921875,
              48.26674084583965
            ],
            [
              16.28173828125,
              48.25942712329832
            ],
            [
              16.336669921875,
              48.27405352192057
            ],
            [
              16.36688232421875,
              48.306947615160205
            ],
            [
              16.36962890625,
              48.33799480425318
            ],
            [
              16.3421630859375,
              48.37632112598022
            ],
            [
              16.3092041015625,
              48.398208936781806
            ],
            [
              16.2158203125,
              48.41097247934197
            ],
            [
              16.116943359375,
              48.41826449418746
            ],
            [
              16.040039062499996,
              48.41826449418746
            ],
            [
              15.97412109375,
              48.40914931221878
            ],
            [
              15.897216796874998,
              48.40732607972984
            ],
            [
              15.831298828124998,
              48.41097247934197
            ],
            [
              15.757141113281248,
              48.434667703888834
            ],
            [
              15.68572998046875,
              48.44742209577055
            ],
            [
              15.611572265625,
              48.46563710044979
            ],
            [
              15.468749999999998,
              48.472921272487824
            ]
          ]
        ]
      }
    }
  ]
};

const pointsFC={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.057205200195312,
          48.323158431752525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.906143188476562,
          48.32452812389745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.80108642578125,
          48.4045911084346
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.681266784667967,
          48.36811076994179
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.696716308593748,
          48.39638531208806
        ]
      }
    }
  ]
};

const manyPointsFC={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.455017089843748,
          48.42646676081821
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.47698974609375,
          48.35168608617595
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.481109619140625,
          48.398208936781806
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.542907714843748,
          48.42920055556841
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.603332519531248,
          48.420998730129426
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.542907714843748,
          48.372672242291294
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.547027587890627,
          48.40823770414505
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.5731201171875,
          48.36354888898689
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.637664794921875,
          48.369935407913786
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.659637451171873,
          48.412795581099964
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.698089599609375,
          48.40185599006367
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.682983398437498,
          48.36902309709986
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.722808837890625,
          48.35807409247113
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.7489013671875,
          48.38817819201506
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.794219970703123,
          48.349860794413225
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.689849853515625,
          48.35442390123028
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.788726806640627,
          48.39912072461539
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.832672119140625,
          48.38635420778455
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.843658447265625,
          48.353511312557394
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.14990234375,
          48.35898659941894
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.19384765625,
          48.379057617138244
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.100463867187496,
          48.35989909002194
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.19110107421875,
          48.352598707539315
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.27899169921875,
          48.25942712329832
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.3092041015625,
          48.33343022631068
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.167755126953125,
          48.30603417645622
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.033172607421875,
          48.309687833182515
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.957641601562498,
          48.378145469762444
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.928802490234373,
          48.32156041109599
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.044158935546875,
          48.36537369040198
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.908203125,
          48.36628606659289
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.09222412109375,
          48.30420725000317
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.030426025390625,
          48.35807409247113
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.979614257812498,
          48.350773448467294
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.989227294921873,
          48.30786103751585
        ]
      }
    }
  ]
};