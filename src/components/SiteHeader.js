import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";
import HeaderMenu from "./HeaderMenu";
class SiteHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div />
        <Header as="h1" icon textAlign="center">
          <Icon name="code" />
          Mike Xiao
          <Header.Subheader>Write Code & Build Awesome</Header.Subheader>
        </Header>
        <HeaderMenu />
      </React.Fragment>
    );
  }
}

export default SiteHeader;
