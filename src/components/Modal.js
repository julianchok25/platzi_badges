import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";

export default function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    //   Div para el fondo Oscuro
    <div className="Modal">
      <div className="Modal__container">
        {/* Div para la tarjeta blanca */}
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>
        {/* Contenido del Modal, vienen a traves de los children (Es lo que viene dentro del elemento) */}
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
