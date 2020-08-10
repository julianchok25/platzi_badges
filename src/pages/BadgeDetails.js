import React from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import Navbar from "../components/Navbar";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";

export default function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <Navbar />
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Conference Logo" />
            </div>
            <div className="BadgeDetails__hero-attendant-name col-6">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                {/* Renderiza un elemento fuera del nodo principal de nuestra app, fuera de app en el index.html */}
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
