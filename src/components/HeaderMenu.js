import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const routerMap = {
  "home": "about-me",
  "blog": "blog"
}

class HeaderMenu extends Component {
  state = { activeItem: "about-me" };
  setActiveItem = (name) => this.setState({ activeItem: name });
  handleMenuClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    // get the relative location and set the active menu item
    let link = window.location.href.split('/');
    let loc = routerMap[link[3]];
    this.setActiveItem(loc)  
  }
  render() {  
    const { activeItem } = this.state;
    return (
      <React.Fragment>
        <Menu pointing secondary>
          <Menu.Item as={Link} to= "/home" name="about-me"
            active={activeItem === "about-me"}
            onClick={this.handleMenuClick}
          />
          <Menu.Item as={Link} to= "/portfolio" name="portfolio"
            active={activeItem === "portfolio"}
            onClick={this.handleMenuClick}
          />
          {/* Link to external link */}
          <Menu.Item 
            as='a' href= "https://magickaichen.com" 
            target="_blank" rel="noopener noreferrer" name="blog">
            <Icon name="external alternate" /> Blog
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={this.handleMenuClick}
            />
          </Menu.Menu>
        </Menu>
      </React.Fragment>
    );
  }
}

export default HeaderMenu;