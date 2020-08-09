import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";

export default function App() {
  // Al usar una función, no es necesario el método render() como cuando se define después de la clase,
  // Esta función pertenece a la clase component
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route exact path="/badges/:badgeID/edit" component={BadgeEdit} />
      </Switch>
    </BrowserRouter>
  );
}
