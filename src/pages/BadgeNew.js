import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import headerLogo from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    form: {
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                avatarUrl="https://avatars1.githubusercontent.com/u/55106332?s=460&u=0b22d3549bc5949923266768afe212c3e9316b1d&v=4"
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
