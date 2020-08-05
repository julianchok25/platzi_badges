import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import headerLogo from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={headerLogo} alt="Header_Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Julian"
                lastName="Villegas"
                avatarUrl="https://avatars1.githubusercontent.com/u/55106332?s=460&u=0b22d3549bc5949923266768afe212c3e9316b1d&v=4"
                jobTitle="Software Engineer"
                twitter="julianchok25"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
