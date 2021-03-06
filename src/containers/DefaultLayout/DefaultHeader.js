import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/udm2020_logo.svg'
import minLogo from '../../assets/img/brand/uba_logo_min.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, height: 35, alt: 'UIM2020 Logo' }}
          minimized={{ src: minLogo, width: 30, height: 30, alt: 'UIM2020 Logo' }}
        >
        </AppNavbarBrand>
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
            <NavLink href="#/recherche">Recherche</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/merkliste">Merkliste</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/auswertung">Auswertung</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/protokoll">Protokoll</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>

          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="fa fa-map"></i></NavLink>
          </NavItem>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Nachrichten<Badge color="success">3</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Kommentare<Badge color="warning">1</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Einstellungen</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Benutzerprofil</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Systemeinstellungen</DropdownItem>
              <DropdownItem><i className="fa fa-lock"></i> Abmelden</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
