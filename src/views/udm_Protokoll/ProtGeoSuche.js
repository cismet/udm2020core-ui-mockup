import React, { Component } from 'react';
import {Map, TileLayer, ZoomControl} from "react-leaflet";
import {FullscreenControl, LocateControl, FeatureCollectionDisplay} from "react-cismap";
import "leaflet/dist/leaflet.css"
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
class ProtGeoSuche extends Component {
    constructor(props) {
      super(props);
  
  
      this.state = {
        
      };
    }
    render() {
        return (
        <Card className="text-white bg-green" >
              <CardBody className="pb-0">
              <ButtonGroup className="float-right">
              <Button color="transparent"> Suche erneut ausführen</Button>
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Löschen</DropdownItem>
                      <DropdownItem>Kartenausschnitt wiederherstellen</DropdownItem>
                      <DropdownItem>Koordinaten in Zwischenablage kopieren</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value"> <i className="fa fa-search"/> Geo-Suche</div>
                <br></br>
                <Map
                    style={{
                    height: 200
                  }}
                    center={this.props.center}
                    zoom={this.props.zoom}
                    attributionControl={false}
                    zoomControl={false}
                    dragging={false}
                    keyboard={false}
                    minZoom={this.props.zoom}
                    maxZoom={this.props.zoom}>
                    <TileLayer
                      noattribution='&copy; <a href="http://basemap.at">Basemap.at</a>'
                      subdomains={['maps', 'maps1', 'maps2', 'maps3', 'maps4']}
                      url='https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png'
                      opacity={0.5}
                      cssFilter='filter:grayscale(0.9)brightness(0.9)invert(1);'/>
                      <FeatureCollectionDisplay
        
        featureCollection={this.props.searchFC.features}
        clusteringEnabled={false}
        // style={getFeatureStyler(currentMarkerSize, getColorForProperties)}
        style={()=>({color:"#4dbd74"})}
        featureStylerScalableImageSize={30}
        // mapRef={this.leafletMap}
        showMarkerCollection={false}
      />
      <FeatureCollectionDisplay
        
        featureCollection={this.props.resultsFC.features}
        clusteringEnabled={false}
        // style={getFeatureStyler(currentMarkerSize, getColorForProperties)}
        style={()=>({color:this.props.resultColor})}
        featureStylerScalableImageSize={30}
        // mapRef={this.leafletMap}
        showMarkerCollection={false}
      />
                  </Map>
                  <br></br>
                  <Button color="transparent"> 1 ausgewähltes Suchthema anzeigen</Button>
                  <Button color="transparent"> {this.props.ergebnisse} Suchergebnisse anzeigen</Button>
                  <br/><br/>              </CardBody>
            </Card>
        );
    }
}

export default ProtGeoSuche;