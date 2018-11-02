import React, { Component } from 'react';
import { Header, Segment, Divider } from 'semantic-ui-react';

function ResumePage(props) {
  return (
    <React.Fragment>
      <Segment>
        <Header as='h2'>Education</Header>
        <Divider />
      </Segment>
    </React.Fragment>
  );
}

export default ResumePage;