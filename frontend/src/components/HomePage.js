import React from "react";
import SideImage from "../Assets/fridge.svg";

export default function HomePage() {
  return (
    <div className="row">
      <div className="col-6">
        <h2 className="about-app">About</h2>
        <p>
          What’s in the fridge is an application where user inputs x number of
          ingredients found in the fridge and is provided with recipes for a
          fine breakfast, lunch or dinner. Application (via recipe API) will
          find recipes that encompass those ingredients with a visual on the
          side. User can save their recipes under a category (breakfast, lunch,
          dinner) and recall it when logging in again. List can be retrieved to
          determine meals for that day.
        </p>
        <p>
          What’s in the fridge is an application where user inputs x number of
          ingredients found in the fridge and is provided with recipes for a
          fine breakfast, lunch or dinner. Application (via recipe API) will
          find recipes that encompass those ingredients with a visual on the
          side. User can save their recipes under a category (breakfast, lunch,
          dinner) and recall it when logging in again. List can be retrieved to
          determine meals for that day.
        </p>
      </div>
      <div className="col-6">
        <img src={SideImage} alt="fridge" />
      </div>
    </div>
  );
}
