import React from "react";

function Welcome(props) {
  let name = (props.match && props.match.params.mame) || props.name;

  return <div className="Welcome">welcome, {props.name}!</div>;
}

export default Welcome;
