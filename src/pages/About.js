import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import SideMenu from '../components/SideMenu';
import MultiLevelRoute from '../components/MultiLevelRoute';
class AboutPage extends Component {
  state = {};
  routes = this.props.routes;
  render() {
    return (
      <Grid stackable>
        <Grid.Column width={4}>
          <React.Fragment>
            <SideMenu />
          </React.Fragment>
        </Grid.Column>
        
        <Grid.Column stretched width={12}>
          {/* Router with rendered tabs */}
          {this.routes.map((route, i) =>(
            <MultiLevelRoute key={i} {...route} />
          ))}
        </Grid.Column>
      </Grid>
    );
  }
}

export default AboutPage;