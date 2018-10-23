import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '2' })}
                     onClick={() => {
                       this.toggle('2');
                     }}>
              <i className="icon-speech"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '3' })}
                     onClick={() => {
                       this.toggle('3');
                     }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={'div'}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Recherche 1</ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-info list-group-item-divider">
                <div className="avatar float-right">1
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>BORIS beinhaltet mehr als 1,5 Mio. Datensätze  </div>
                <small className="text-muted mr-3">
                  <i className="fa fa-comment"></i>&nbsp; 09:12
                </small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-success list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Tullner Feld</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-map"></i>&nbsp; 09:20
                </small>
              
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-info list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Neues GIS</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-comment"></i>&nbsp; 09:22
                </small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-success list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Suche nach EPRTR</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-search"></i>&nbsp; 09:30
                </small> 
                <small className="text-muted mr-3">
                  <i className="fa fa-list"></i>&nbsp; 7 Treffer
                </small>
              
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Einschränken der Treffermenge</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-filter"></i>&nbsp; 09:32
                </small>
                <small className="text-muted mr-3">
                  <i className="fa fa-list"></i>&nbsp; 4 Ergebnisse
                </small>
              
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Einschränken der Treffermenge</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-filter"></i>&nbsp; 09:36
                </small>
                <small className="text-muted mr-3">
                  <i className="fa fa-list"></i>&nbsp; 3 Ergebnisse
                </small>
              
              </ListGroupItem>


               <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-info list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Bodendatenportal</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-comment"></i>&nbsp; 09:40
                </small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-success list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Suche nach Bodenmessstellen</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-search"></i>&nbsp; 09:45
                </small> 
                <small className="text-muted mr-3">
                  <i className="fa fa-list"></i>&nbsp; 35 Treffer
                </small>
              
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Filtern nach Zeit</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-filter"></i>&nbsp; 09:50
                </small>
                <small className="text-muted mr-3">
                  <i className="fa fa-list"></i>&nbsp; 12 Ergebnisse
                </small>
              
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Filtern nach Schadstoffen</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-filter"></i>&nbsp; 09:55
                </small>
                <small className="text-muted mr-3">
                  <i className="fa fa-list"></i>&nbsp; 10 Ergebnisse
                </small>
              
              </ListGroupItem>

<ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-success list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Kooperation mit BMLFUW</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-comment"></i>&nbsp; 10:00
                </small>
              </ListGroupItem>

<ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-danger list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Export nach Excel</div>
                <small className="text-muted mr-3">
                  <i className="fa fa-file"></i>&nbsp; 10:10
                </small>
                <small className="text-muted mr-3">
                  <i className="icon-settings"></i>&nbsp; 4 Parameter
                </small>
              </ListGroupItem>
















              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Kommentare</ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-success list-group-item-divider">
                <div>Erweiterung der Ausgangsgeometrie</div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 10:00 - 11:45</small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#/protokoll" className="list-group-item-accent-danger list-group-item-divider">
                <div><strong>Ergebnissdiskussion</strong></div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 08:00 - 16:00</small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <h6>Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><b>Option 1</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'}/>
              </div>
              <div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 2</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} size={'sm'}/>
              </div>
              <div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 3</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'} disabled/>
                <div>
                  <small className="text-muted">Option disabled.</small>
                </div>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 4</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'} />
              </div>
            </div>

            <hr />
            <h6>System Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small><b>CPU Usage</b></small>
            </div>
            <Progress className="progress-xs" color="info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>Memory Usage</b></small>
            </div>
            <Progress className="progress-xs" color="warning" value="70" />
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 1 Usage</b></small>
            </div>
            <Progress className="progress-xs" color="danger" value="95" />
            <small className="text-muted">243GB/256GB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 2 Usage</b></small>
            </div>
            <Progress className="progress-xs" color="success" value="10" />
            <small className="text-muted">25GB/256GB</small>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
