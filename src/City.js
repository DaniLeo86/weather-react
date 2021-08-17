import React from "react";

export default function City() {
  return (
    <div className="city">
      <div class="overview">
        <h1 id="city">New York</h1>
        <ul>
          <li>
            Last updated: <span id="date">loading...</span>
          </li>
          <li id="description">loading...</li>
        </ul>
      </div>
    </div>
  );
}
