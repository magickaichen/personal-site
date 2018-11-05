import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const routerMap = {
  "bio": "bio",
  "resume": "resume",
  "stats" : "stats"
}

class SideMenu extends Component {
  state = { activeItem: 'bio' }

  setActiveItem = (name) => this.setState({ activeItem: name });
  handleMenuClick = (e, { name }) => this.setActiveItem(name);
  
  componentDidMount() {
    // get the relative location and set the active menu item
    let link = window.location.href.split('/');
    let loc = routerMap[link[4]];
    this.setActiveItem(loc)  
  }

  render() {
    const { activeItem } = this.state;
    return (
      <React.Fragment>
        <Menu fluid vertical tabular>
          <Menu.Item 
            as={Link} to="/home/bio"
            name='bio' active={activeItem === 'bio'} 
            onClick={this.handleMenuClick} />
          <Menu.Item 
            as={Link} to="/home/resume"
            name='resume' active={activeItem === 'resume'} 
            onClick={this.handleMenuClick} />
          <Menu.Item
            as={Link} to="/home/stats"
            name='stats' active={activeItem === 'stats'}
            onClick={this.handleMenuClick}
          />
        </Menu>
        
      </React.Fragment>
    );
  }
}

export default SideMenu;