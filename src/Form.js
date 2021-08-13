import React from "react";
import "./styles.css";

export default function Form() {
  return (
    <div className="form">
      <form id="search-form" class="mb-3">
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              class="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="search" class="btn btn-primary w-100" />
          </div>
        </div>
      </form>
    </div>
  );
}
