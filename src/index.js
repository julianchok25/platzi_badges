// Usando el API del Dom
/* const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges!';

const container = document.getElementById('app');

container.appendChild(element); */

// Usando React
import React from "react";
import ReactDOM from "react-dom";

// import Badge from "./components/Badge";
import BadgeNew from "./pages/BadgeNew";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

// Esto es JSX, funciona cuando se importa React
// const jsx = <h1>Hello, Platzi Badges from React</h1>;

/* Alternativa de JSX, usando React.createElement, el segundo parámetro son los atributos o props, el tercero
es llamado children, parecido al innerText*/
// const element = React.createElement("h1", {}, "Hola, somos los children");

/* const element = React.createElement(
  "a",
  { href: "https://platzi.com" },
  "Ir a Platzi"
); */

// const name = "Julian";
// const element = React.createElement("h1", {}, `Hola, soy ${name}`);

//Con JSX, {} permite incluir expresiones de JS (algo que se interpreta y evalúa), operaciones aritméticas y funciones
// const jsx = <h1>Hola, Soy {name}</h1>;
/* const jsx = (
  <div>
    <h1>Hola, soy {name}</h1>
    <p>Soy ingeniero de Sistemas</p>
  </div>
); */
const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
/* ReactDOM.render(
  <Badge
    firstName="Julian"
    lastName="Villegas"
    avatarUrl="https://avatars1.githubusercontent.com/u/55106332?s=460&u=0b22d3549bc5949923266768afe212c3e9316b1d&v=4"
    jobTitle="Software Engineer"
    twitter="julianchok25"
  />,
  container
); */

ReactDOM.render(<BadgeNew />, container);
