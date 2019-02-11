import React from "react";
import { Image } from 'semantic-ui-react';
import shvlogo from '../../images/logos/sh19.jpg';

function ActivityItem(props) {
	return (
		<div style={{ textAlign: "center", width: "150px" }}>
			<Image 
				src={props.src}
				style={{ display: "block", margin: "auto" }}
				size='tiny'
				circular />
			<br />
      <span><b>{props.name}</b></span>
    </div>
	)
}

export default ActivityItem;