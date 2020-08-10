import Gravatar from "./Gravatar";
import React, { useState, useMemo } from "react";

import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import twitterLogo from "../images/Twitter_Logo_Blue.png";

function useSearchBadges(badges) {
  const [query, setQuery] = useState("");
  const [filteredBadges, setFilteredBadges] = useState(badges);
  // Esta forma es muy costosa para la app, para eso se usa el hook useMemo
  /*   const filteredBadges = badges.filter((badge) => {
    return `${badge.firstName} ${badge.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase());
  }); */
  useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
    // Si el query y los badges cambian, se vuelve a calcular el valor
  }, [badges, query]);
  return { query, setQuery, filteredBadges };
}

// Es un componente que tiene una responsabilidad única y que le pertenece
export default function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          {/* Este input es controlado, se le pasa el valor */}
          <input
            type="text"
            className="form-control "
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              // console.log(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new Badge
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="form-group">
        <label>Filter Badges</label>
        {/* Este input es controlado, se le pasa el valor */}
        <input
          type="text"
          className="form-control "
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            // console.log(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {/* Map recibe una función como argumneto, recorre cada uno de los elementos y tiene que regresar otro valor */}
        {filteredBadges.map((badge) => {
          return (
            // Navigate for each element to the edit page
            <Link
              key={badge.id}
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}`}
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
    </div>
  );
}
