import React from "react";
import Header from "./Header";
import Gender from "./Gender";
import Height from "./Height";
import WeightAndAge from "./WeightAndAge";

function App() {
  return (
    <div className="container">
      <Header />
      <div class="gender">
        <Gender
          gender=<img src="https://img.icons8.com/metro/70/000000/male.png" />
        />
        <Gender
          gender=<img src="https://img.icons8.com/material/70/000000/female.png" />
        />
      </div>
      <Height />
      <WeightAndAge title="WEIGHT" />
      <WeightAndAge title="AGE" />
    </div>
  );
}
export default App;
