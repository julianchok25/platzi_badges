import React, { Component } from "react";

// Es un componente que tiene una responsabilidad única y que le pertenece

export default class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {/* Map recibe una función como argumneto, recorre cada uno de los elementos y tiene que regresar otro valor */}
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <p>
                {badge.firstName} {badge.lastName}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}
