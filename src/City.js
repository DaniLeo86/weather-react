import React from "react";

export default function City() {
  return (
    <div className="city">
      <div class="overview">
        <h1 id="city"></h1>
        <ul>
          <li>
            Last updated: <span id="date"></span>
          </li>
          <li id="description"></li>
        </ul>
      </div>
    </div>
  );
}
