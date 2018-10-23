import React, {Component} from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
  Collapse,
  Fade
} from 'reactstrap';
import {Link} from "react-scroll";

import {Map, TileLayer, ZoomControl} from "react-leaflet";
import usersData from './ResultsData'
import "leaflet/dist/leaflet.css"
import {FullscreenControl, LocateControl} from "react-cismap";
import Scroll from "react-scroll"

var scroll = Scroll.animateScroll;
function ResultRow(props) {
  const resRow = props.user

  const getBadge = (status) => {
    return status === 'Active'
      ? 'success'
      : status === 'Inactive'
        ? 'secondary'
        : status === 'Pending'
          ? 'warning'
          : status === 'Banned'
            ? 'danger'
            : 'primary'
  }

  return (
    <tr key={resRow.id}>
      <th scope="row">

        <i className="fa fa-eyedropper"/>
      </th>
      <td>
        <a href={"#"}>{resRow.name}</a>
      </td>
      <td>{resRow.thema}</td>
      <td>{resRow.beschreibung}</td>
      <td>
        {resRow
          .schadstoffe
          .map((item, key) => {
            return (

              <Badge
                key={key}
                href={""}
                color="warning"
                style={{
                marginLeft: "5px"
              }}>{item}</Badge>

            );
          })}

      </td>
      <td>
        <Button
          onClick={() => {
          scroll.scrollToBottom()
        }}
          block
          outline
          color="primary">
          <i className="fa fa-plus-square"/></Button>
      </td>

    </tr>
  )
}

class Merkliste extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeIn: true,
      collapse: true,
      timeout: 300
    };

    this.toggle = this
      .toggle
      .bind(this);
  }
  toggle() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    const position = [48.210033, 16.363449];
    const userList = usersData.filter((user) => user.id < 10)
    console.log(FullscreenControl)

    return (
      <div className="animated fadeIn" id="resultsDIV">
        <Row>
          <Col>
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i>
                  Ergebnisstabelle
                  <small className="text-muted">{"  "}(5 Themen, 105 Schadstoffe, aktueller Kartenausschnitt)</small>
                  <div className="card-header-actions">
                    <a
                      className="card-header-action btn btn-minimize"
                      data-target="#collapseExample"
                      onClick={() => {
                      scroll.scrollToTop();
                    }}>
                      <i className="fa fa-table"></i>
                    </a>
                    <a
                      className="card-header-action btn btn-minimize"
                      data-target="#collapseExample"
                      onClick={() => {
                      scroll.scrollToBottom();
                    }}>
                      <i className="fa fa-map"></i>
                    </a>

                    {/*
              <a
                className="card-header-action btn btn-minimize"
                data-target="#collapseExample"
                onClick={this.toggle}
                style={{
                marginLeft: "25px"
              }}>
                <i className="fa fa-exchange"></i>
              </a> */}
                  </div>
                </CardHeader>
                <CardBody>
                  <Collapse isOpen={this.state.collapse} id="collapseExample">

                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Name</th>
                          <th scope="col">Thema</th>
                          <th scope="col">Beschreibung</th>
                          <th scope="col">Schadstoffe</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {userList.map((user, index) => <ResultRow key={index} user={user}/>)}
                      </tbody>
                    </Table>
                  </Collapse>
                </CardBody>
              </Card>
            </Fade>

          </Col>
        </Row>
        <Row>
          <Col>
            <div name="resultsinmap">
              <Card >
                <CardBody>
                  <Map
                    style={{
                    height: 500
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
                <CardHeader>
                  <i className="fa fa-align-justify"></i>
                  Ergebnisse in der Karte
                  <small className="text-muted">{"  "}(5 Themen, 105 Schadstoffe, aktueller Kartenausschnitt)</small>
                  <div className="card-header-actions">
                    <a
                      className="card-header-action btn btn-minimize"
                      data-target="#collapseExample"
                      onClick={() => {
                      scroll.scrollToTop();
                    }}>
                      <i className="fa fa-table"></i>
                    </a>
                    <a
                      className="card-header-action btn btn-minimize"
                      data-target="#collapseExample"
                      onClick={() => {
                      scroll.scrollToBottom();
                    }}>
                      <i className="fa fa-map"></i>
                    </a>

                    {/*
              <a
                className="card-header-action btn btn-minimize"
                data-target="#collapseExample"
                onClick={this.toggle}
                style={{
                marginLeft: "25px"
              }}>
                <i className="fa fa-exchange"></i>
              </a> */}
                  </div>
                </CardHeader>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Merkliste;
