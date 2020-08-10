import React, { Component } from "react";
import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";
import api from "../api";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import { Link } from "react-router-dom";

export default class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    // avoid the interval still workin when component is destroyed
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      // para que funcione el await, se debe declarar la función como async
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading === true && this.state.data === undefined) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <div>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            {/* Link is a react router component */}
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          {/* Now, using the data */}
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
          {this.state.loading && <MiniLoader />}
        </div>
      </div>
    );
  }
}
