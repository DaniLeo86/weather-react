import React from "react";
import ReactDOM from "react-dom";

import Form from "./Form";
import City from "./City";
import Forecast from "./Forecast";
function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <Form />
            <City />
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
