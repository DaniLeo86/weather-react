import React from "react";

export default function Forecast() {
  return (
    <div className="forecast">
      {" "}
      <div class="row">
        <div class="col-6">
          <div class="clearfix weather-temperature">
            <img src="" alt="" class="float-left" id="icon" />
            <div class="float-left">
              <strong id="temperature"></strong>
              <span class="units">°F</span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> mph
            </li>
          </ul>
        </div>
      </div>
      <div class="weather-forecast" id="weather-forecast"></div>{" "}
    </div>
  );
}
