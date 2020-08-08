import React, { Component } from "react";
import "./styles/BadgesList.css";
import twitterLogo from "../images/Twitter_Logo_Blue.png";

// Es un componente que tiene una responsabilidad única y que le pertenece

export default class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {/* Map recibe una función como argumneto, recorre cada uno de los elementos y tiene que regresar otro valor */}
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesList__list">
              <img
                className="BadgesList__avatar"
                src={badge.avatarUrl}
                alt="Avatar"
              />
              <div>
                <p className="BadgesList__name">
                  {badge.firstName} {badge.lastName}
                </p>
                <img
                  className="BadgesList__twitter-logo"
                  src={twitterLogo}
                  alt="Twitter Logo"
                />
                <span className="BadgesList__name-twitter">
                  {badge.twitter}
                </span>
                <br />
                {badge.jobTitle}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
