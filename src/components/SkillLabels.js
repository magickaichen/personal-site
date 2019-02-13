import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import SkillItem from './addons/SkillItem';
import SkillsData from '../configs/data/SkillsData';

const skills = SkillsData;
class SkillLabels extends Component {
  state = {}
  render() {
    console.log(this.props.filter);
    return (
      <React.Fragment>
        <Grid columns={5} padded stackable>
          {skills.map((skill, i) => {
            if (this.props.filter === 'all' || skill.type.includes(this.props.filter)) {
              return (
                <Grid.Column key={i}>
                  <SkillItem src={skill.src} name={skill.name} key={i}/>
                </Grid.Column>
              )
            }
          })}
        </Grid>
      </React.Fragment>
    );
  }
}

export default SkillLabels;