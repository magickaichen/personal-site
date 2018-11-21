import React, { Component } from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';
import ResumeItem from '../../components/ResumeItem';
import ResumeData from '../../configs/data/ResumeData';
import ResumeMiscItem from '../../components/ResumeMiscItem';

const styles = {
  contDivHeader: {
    marginTop: 0
  }
}

function ResumePage(props) {
  return (
    <React.Fragment>
      <Segment>
        <Header as='h2' dividing>
          <span><Icon circular name='graduation cap' /></span>
          Education
        </Header>
        {ResumeData.Education.map((entry, i) => (
          <ResumeItem
            key = {i}
            orgName = {entry.orgName}
            location = {entry.location}
            position = {entry.position}
            time = {entry.time}
            desc = {entry.desc}
          />
        ))}
        <Header as='h2' dividing>
          <span><Icon circular name='briefcase'/></span>
          Experiences
        </Header>
        {ResumeData.Experiences.map((entry, i) => (
          <ResumeItem
            key = {i}
            orgName = {entry.orgName}
            location = {entry.location}
            position = {entry.position}
            time = {entry.time}
            desc = {entry.desc}
          />
        ))}
        <Header as='h2' dividing>
          <span><Icon circular name='quidditch' /></span>
          Activities
        </Header>
        {ResumeData.Activities.map((entry, i) => (
          <ResumeMiscItem
            key={i}
            title={Object.keys(entry)[0]}
            content={Object.values(entry)[0]} />
        ))}
      </Segment>
    </React.Fragment>
  );
}

export default ResumePage;