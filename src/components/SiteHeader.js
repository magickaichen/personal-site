import React, { Component } from "react";
import { Header, Divider, Icon, Menu } from "semantic-ui-react";
class SiteHeader extends Component {
  state = { activeItem: "about-me" };

  handleMenuClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <div />
        <Header as="h2" icon textAlign="center">
          <Icon name="code" />
          Mike Xiao
          <Header.Subheader>Write Code & Build Awesome</Header.Subheader>
        </Header>
        {/* Menu */}
        <Menu pointing secondary>
          <Menu.Item
            name="about-me"
            active={activeItem === "about-me"}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
            name="resume"
            active={activeItem === "resume"}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
            name="portfolio"
            active={activeItem === "portfolio"}
            onClick={this.handleMenuClick}
          />
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

export default SiteHeader;
