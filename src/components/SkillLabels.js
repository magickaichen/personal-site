import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';
import jslogo from '../images/logos/js.png';
import pylogo from '../images/logos/python.png';
import reactlogo from '../images/logos/react.png'
class SkillLabels extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <List horizontal divided relaxed='very'>
          <List.Item>
            <Image avatar src={jslogo}/>
            <List.Content>
              <List.Header>JavaScript</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src={pylogo}/>
            <List.Content>
              <List.Header>Python</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src={reactlogo}/>
            <List.Content>
              <List.Header>React</List.Header>
            </List.Content>
          </List.Item>
        </List>
      </React.Fragment>
    );
  }
}

export default SkillLabels;