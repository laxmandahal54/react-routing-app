import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Welcome from "./componantes/welcome/Welcome";
import Clock from "./componantes/clock/Clock";
import Contact from "./componantes/contact/Contact";
import Navigation from "./componantes/navigation/Navigation";

import Error from "./componantes/error/Error";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route
        exact
        path="/"
        render={(props) => <Welcome {...props} name="Laxman" />}
      />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route path="/Welcome/:name" component={Welcome} />
      <Route component={Error} />
    </div>
  );
}

export default App;
