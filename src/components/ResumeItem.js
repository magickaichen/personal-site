import React, { Component } from "react";
import PropTypes from 'prop-types';
import { List } from "semantic-ui-react";

const styles = {
  entry: {
    textAlign: "left"
  },
  title: {
    fontSize: "larger",
    fontWeight: "bold"
  }
};

function ResumeItem(props) {
  let descList = (props.desc.length > 0) ?
  <List style={styles.entry} bulleted>
  {props.desc.map((descItem, i) => (
    <List.Item key={i}>{descItem.item}</List.Item>
  ))}
  </List> : '';
  return (
    <React.Fragment>
      <p style={styles.entry}>
        <span style={styles.title}>
          <span>{props.orgName}</span>
          <span style={{float: 'right'}}>{props.location}</span>
        </span>
        <br />
        <span>{props.position}</span>
        <span style={{float: 'right'}}>{props.time}</span>
      </p>
      {descList}
      {props.children}
    </React.Fragment>
  );
}

ResumeItem.propTypes = {
  orgName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}


export default ResumeItem;
