import React from "react";
import "./App.css";
import Welcome from "./componantes/welcome/Welcome";
import Clock from "./componantes/clock/Clock";
import Contact from "./componantes/contact/Contact";
function App() {
  return (
    <div className="App">
      <Welcome name="Laxman" />
      <Clock />
      <Contact />
    </div>
  );
}

export default App;
