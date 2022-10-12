import React, { useState } from "react";

function Popup(props) {
  if (!props.open) return null;

  return (
    <div onClick={props.onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={props.img} alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={props.onClose}>
            X
          </p>
          <div className="content">
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <p>{props.shortDesc}</p>
          </div>
          <div className=" ps-4 pb-4">
            <button className="btnPrimary">View Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
