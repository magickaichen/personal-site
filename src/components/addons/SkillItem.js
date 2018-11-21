import React from 'react';
import { Image } from "semantic-ui-react";

function SkillItem(props) {
  return (
    <div>
      <Image src={props.src} avatar />
      <span><b>{props.name}</b></span>
    </div>
  )
}

export default SkillItem;