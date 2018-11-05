import React, { Component } from "react";
import { Menu, Icon, Header, Container, Segment } from "semantic-ui-react";
import SkillLabels from "./SkillLabels";

class SkillsTab extends Component {
  state = { activeItem: 'closest' }
  
  setActiveItem = (name) => this.setState({ activeItem: name });
  handleMenuClick = (e, { name }) => this.setActiveItem(name);

  render() {
    const { activeItem } = this.state
    return (
      <React.Fragment>
        <Segment color='blue'>
          <Menu text secondary>
            <Menu.Item header>Filter By</Menu.Item>
            <Menu.Item
              name='all'
              active={activeItem === 'all'}
              onClick={this.handleMenuClick}
            />
            <Menu.Item
              name='lang'
              active={activeItem === 'lang'}
              onClick={this.handleMenuClick}>
              Programming Languages
            </Menu.Item>
            <Menu.Item
              name='webdev'
              active={activeItem === 'webdev'}
              onClick={this.handleMenuClick}>
              Web Development
            </Menu.Item>
            <Menu.Item
              name='gamedev'
              active={activeItem === 'gamedev'}
              onClick={this.handleMenuClick}>
              Game Engines
            </Menu.Item>
            <Menu.Item
              name='ml'
              active={activeItem === 'ml'}
              onClick={this.handleMenuClick}>
              Machine Learning
            </Menu.Item>
          </Menu>
          <Container>
            <SkillLabels />
          </Container>
        </Segment>
      </React.Fragment>
    );
  }
}

export default SkillsTab;
