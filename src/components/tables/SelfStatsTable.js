import React, { Component } from 'react';
import moment from "moment";
import { Table, Tab, Flag } from 'semantic-ui-react';

const birthdate = "11.09.1994 09:30:00";

class SelfStatsTable extends Component {
  state = {}
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ age: moment().diff(birthdate, "seconds") });
      this.age = this.state.age / 3.154e+7;
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <Table definition striped color='yellow'>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={3}>Age</Table.Cell>
            <Table.Cell width={5} textAlign='center'>{this.age}</Table.Cell>
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