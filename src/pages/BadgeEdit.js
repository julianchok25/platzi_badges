import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import api from "../api";

import headerLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeID);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = (e) => {
    // Haciendo una copia de cada valor en form para ir creando las keys, hay 2 formas de hacerlo
    // Con la copia declarativa o con el spread
    /*     const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value; */

    this.setState({
      form: {
        // Con esto recupera todos los valores que hay en el formulario, antes de sobrescribir
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });
    try {
      await api.badges.update(this.props.match.params.badgeID, this.state.form);
      this.setState({ loading: false });
      //returning to badges list, history is prop from component
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  render() {
    // Esto es para el caso de que loading sea true
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    return (
      <div>
        <Navbar />
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={headerLogo}
            alt="Header_Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                avatarUrl="https://avatars1.githubusercontent.com/u/55106332?s=460&u=0b22d3549bc5949923266768afe212c3e9316b1d&v=4"
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                twitter={this.state.form.twitter || "twitter"}
                email={this.state.form.email || "EMAIL"}
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeEdit;
