import React, { Component } from 'react';
import moment from "moment";
import { Table, Tab, Flag } from 'semantic-ui-react';

const birthdate = '1994-11-09T09:30:00';

class SelfStatsTable extends Component {
  state = {}
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 25);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date(birthdate);
    this.setState({ age: ((Date.now() - birthTime) / divisor).toFixed(10) });
  }

  render() {
    return (
      <Table definition striped color='yellow'>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={3}>Age</Table.Cell>
            <Table.Cell width={5} textAlign='center'>{this.state.age}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Lives At</Table.Cell>
            <Table.Cell textAlign='center'><Flag name='us' />Dallas, TX</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Hometown</Table.Cell>
            <Table.Cell textAlign='center'><Flag name='cn' />Wuhan, China</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Countries/Regions Visited</Table.Cell>
            <Table.Cell textAlign='center'>5</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default SelfStatsTable;