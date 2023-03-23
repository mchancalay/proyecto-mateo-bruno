import React from "react";

function TrackerTop({ name }) {

  return (
    <div className="tracker_top">
      <img className="tracker_img" src={require(`../imagenes/${name}.png`)} />
      <div>{name}</div>
    </div>
  );
}

export default TrackerTop;
