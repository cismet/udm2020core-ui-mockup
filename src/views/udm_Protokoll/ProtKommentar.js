import React, { Component } from 'react';
import {Map, TileLayer, ZoomControl} from "react-leaflet";
import {FullscreenControl, LocateControl} from "react-cismap";
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
class ProtKommentar extends Component {
    constructor(props) {
      super(props);
  
  
      this.state = {
        
      };
    }
    render() {
        return (
            <Card className="text-white" color="info">
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
              <div className="text-value"><i className="fa fa-comment"/>  Kommentar</div>
              <div>{this.props.comment}</div>
              <br/>
            </CardBody>
          </Card>
        );
    }
}

export default ProtKommentar;