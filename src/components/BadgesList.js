import React, { Component } from "react";
import Gravatar from "./Gravatar";

import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import twitterLogo from "../images/Twitter_Logo_Blue.png";

// Es un componente que tiene una responsabilidad única y que le pertenece

export default class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {/* Map recibe una función como argumneto, recorre cada uno de los elementos y tiene que regresar otro valor */}
        {this.props.badges.map((badge) => {
          return (
            // Navigate for each element to the edit page
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}/edit`}
            >
              <li key={badge.id} className="BadgesList__list">
                <Gravatar
                  className="BadgesList__avatar"
                  email={badge.email}
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
            </Link>
          );
        })}
      </ul>
    );
  }
}
