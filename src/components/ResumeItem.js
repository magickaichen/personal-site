import React, { Component } from "react";
import PropTypes from 'prop-types';

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
