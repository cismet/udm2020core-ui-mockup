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
  Pagination,
  PaginationItem,PaginationLink,ListGroup,ListGroupItem
} from 'reactstrap';
import Widget03 from '../Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { AppSwitch } from '@coreui/react'
import {Map, TileLayer, ZoomControl} from "react-leaflet";
import {FullscreenControl, LocateControl} from "react-cismap";
import "leaflet/dist/leaflet.css"

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
    const position = [48.210033, 16.363449];

    return (
      <div className="animated fadeIn">
        <Row>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">25,5 km&sup2;</div>
                <div>Kartenausschnitt</div>
                <br/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Alle</DropdownItem>
                      <DropdownItem>Keine</DropdownItem>
                      <DropdownItem>Keine</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">5 </div>
                <div>Themen</div>
                <br/>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">16 </div>
                <div>Schadstoffe</div>
                <br/>

              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">-</div>
                <div>Zeitfilter</div>
              </CardBody>
              <br/>
            </Card>
          </Col>

        </Row>
        <Row>
        <Col xs="12" lg="3">
  <Card style={{
                    height: '100%'
                  }}>
    <CardHeader>
                  <i className="fa fa-align-justify"></i>
                  Ergebnissübersicht
                  <small className="text-muted">{"  "}</small>
    </CardHeader>
    <CardBody>
    <Table responsive size="sm">
    
                  <tbody>
                  <tr>
                    <td><i className="fa fa-eyedropper"/>{' '}<a href='#'>184042</a>
                    <Badge color="success" className="float-right" pill><i className="fa fa-plus"/></Badge>
                    <div style={{fontSize:'9px'}}>Burgenländische Bodenzustandsinventur. ...</div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-eyedropper"/>{' '}<a href='#'>184042</a>
                    <Badge color="success" className="float-right" pill><i className="fa fa-plus"/></Badge>
                    <div style={{fontSize:'9px'}}>Burgenländische Bodenzustandsinventur. ...</div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-eyedropper"/>{' '}<a href='#'>184042</a>
                    <Badge color="success" className="float-right" pill><i className="fa fa-plus"/></Badge>
                    <div style={{fontSize:'9px'}}>Burgenländische Bodenzustandsinventur. ...</div>
                    </td>
                  </tr>
                  </tbody>
                  <tr>
                    <td><i className="fa fa-eyedropper"/>{' '}<a href='#'>184042</a>
                    <Badge color="success" className="float-right" pill><i className="fa fa-plus"/></Badge>
                    <div style={{fontSize:'9px'}}>Burgenländische Bodenzustandsinventur. ...</div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-eyedropper"/>{' '}<a href='#'>184042</a>
                    <Badge color="success" className="float-right" pill><i className="fa fa-plus"/></Badge>
                    <div style={{fontSize:'9px'}}>Burgenländische Bodenzustandsinventur. ...</div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-eyedropper"/>{' '}<a href='#'>184042</a>
                    <Badge color="success" className="float-right" pill><i className="fa fa-plus"/></Badge>
                    <div style={{fontSize:'9px'}}>Burgenländische Bodenzustandsinventur. ...</div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-eyedropper"/>{' '}<a href='#'>184042</a>
                    <Badge color="success" className="float-right" pill><i className="fa fa-plus"/></Badge>
                    <div style={{fontSize:'9px'}}>Burgenländische Bodenzustandsinventur. ...</div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-eyedropper"/>{' '}<a href='#'>184042</a>
                    <Badge color="success" className="float-right" pill><i className="fa fa-plus"/></Badge>
                    <div style={{fontSize:'9px'}}>Burgenländische Bodenzustandsinventur. ...</div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-eyedropper"/>{' '}<a href='#'>184042</a>
                    <Badge color="success" className="float-right" pill><i className="fa fa-plus"/></Badge>
                    <div style={{fontSize:'9px'}}>Burgenländische Bodenzustandsinventur. ...</div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-eyedropper"/>{' '}<a href='#'>184042</a>
                    <Badge color="success" className="float-right" pill><i className="fa fa-plus"/></Badge>
                    <div style={{fontSize:'9px'}}>Burgenländische Bodenzustandsinventur. ...</div>
                    </td>
                  </tr>
                </Table>
   
    </CardBody>
    <CardFooter>
    <Pagination width='100%'>
        <PaginationItem><PaginationLink previous tag="button">{'<<'}</PaginationLink></PaginationItem>
        <PaginationItem active>
        <PaginationLink tag="button">1</PaginationLink>
        </PaginationItem>
       
        <PaginationItem><PaginationLink next tag="button">{'>>'}</PaginationLink></PaginationItem>
      </Pagination>
      </CardFooter>
  </Card>
</Col>
          <Col  xs="12" lg="9">
            <Card style={{
                    height: '100%'
                  }}>
              <CardBody>

               <Map
                    style={{
                    height: window.innerHeight-470
                  }}
                    center={position}
                    zoom={10}
                    attributionControl={false}
                    zoomControl={false}>
                    <TileLayer
                      noattribution='&copy; <a href="http://basemap.at">Basemap.at</a>'
                      subdomains={['maps', 'maps1', 'maps2', 'maps3', 'maps4']}
                      url='https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png'
                      opacity={0.5}
                      cssFilter='filter:grayscale(0.9)brightness(0.9)invert(1);'/>
                    <ZoomControl
                      position="topleft"
                      zoomInTitle="Vergr&ouml;ßern"
                      zoomOutTitle="Verkleinern"/>
                    <FullscreenControl
                      title="Vollbildmodus"
                      forceSeparateButton={true}
                      titleCancel="Vollbildmodus beenden"
                      position="topleft"/>
                    <LocateControl
                      setView="once"
                      flyTo={true}
                      strings={{
                      title: "Mein Standort",
                      metersUnit: "Metern",
                      feetUnit: "Feet",
                      popup: "Sie befinden sich im Umkreis von {distance} {unit} um diesen Punkt.",
                      outsideMapBoundsMsg: "Sie gefinden sich wahrscheinlich außerhalb der Kartengrenzen."
                    }}/>
                  </Map>

              </CardBody>
              <CardFooter>
                <Row className="text-center">
                <Col sm={0} md={9} className="mb-sm-2 mb-0 d-md-down-2">
                <Progress style={{height:30,marginTop: '2px' }}striped animated color="info" value={100} className="mb-3" >
                Die Suche im UIM2020-DI Indexdatenbestand wird durchgeführt
                </Progress>
                </Col>
                  <Col sm={12} md={3} className="mb-sm-2 mb-0 d-md-down-2">
                   
                    <Button block color="success"><i className="fa fa-search"></i> Suche auslösen</Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>

  


        
      </div>
    );
  }
}

export default Dashboard;
