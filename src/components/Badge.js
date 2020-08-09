import React from "react";
import Gravatar from "./Gravatar";
import confLogo from "../images/badge-header.svg";

import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    // Se puede usar destructuring en lugar de escribir this.props en todos los valores
    // const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        {/* Header */}
        <div className="Badge__header">
          {/* lo que está encerrado en {} se llaman props */}
          <img src={confLogo} alt="Conference_logo"></img>
        </div>
        {/* Body */}
        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        {/* Sección de información */}
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        {/* Footer */}
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
