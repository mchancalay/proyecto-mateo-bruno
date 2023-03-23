import React from "react";
import '../hojas-de-estilo/TrackerTop.css'

function TrackerTop({ name }) {

  return (
    <div className="tracker__top">
      <img className="tracker__img" src={require(`../imagenes/${name}.png`)} />
      <div>{name}</div>
    </div>
  );
}

export default TrackerTop;
