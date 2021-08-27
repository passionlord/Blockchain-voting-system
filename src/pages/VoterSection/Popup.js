import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popupInner">
        <button className="closeBtn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
