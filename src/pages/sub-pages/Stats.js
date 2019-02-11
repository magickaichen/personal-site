import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";
import moment from "moment";
import SelfStatsTable from "../../components/tables/SelfStatsTable";
import SkillsTab from "../../components/SkillsTab";
import ActivitesTab from "../../components/ActivitesTab";

class StatsPage extends Component {
  state = {};
  age = 0;
  
  render() {
    return (
      <React.Fragment>
        <Segment style={{ textAlign: "left" }}>
          <Header as="h2">
            About Me
          </Header>
          <SelfStatsTable />
          <Header as="h2">
            My Skills
          </Header>
          <SkillsTab />
          <ActivitesTab />
        </Segment>
      </React.Fragment>
    );
  }
}

export default StatsPage;
