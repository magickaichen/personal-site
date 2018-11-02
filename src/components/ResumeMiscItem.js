import React from 'react';

const styles = {
  master: {
    textAlign: "left"
  }
};

function ResumeMiscItem(props) {
  return (
    <p style={styles.master}>
      <b>{props.title}:</b>{props.content}
    </p>
  )
}

export default ResumeMiscItem;