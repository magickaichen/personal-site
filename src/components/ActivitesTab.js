import React, { Component } from 'react';
import { Header, Segment, List } from "semantic-ui-react";
import ActivityItem from './addons/ActivityItem';
import ActivitiesData from '../configs/data/ActivitiesData'

const Styles = {
  lists: {
    maxWidth: "100%",
    overflow: "auto",
    whiteSpace: "nowrap"
  }
}

const activities = ActivitiesData;

class ActivitesTab extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Header as='h2'>Hackathons</Header>
        <Segment> 
          <List horizontal style={Styles.lists}>
            {activities.map((activity, i) => {
              return (
                <List.Item>
                  <ActivityItem 
                    src={activity.src}
                    name={activity.name}
                  />
                </List.Item>
              )
            })}
          </List>
        </Segment>
      </React.Fragment>
    );
  }
}

export default ActivitesTab;