import React from "react";
import Header from "./Header";
import Gender from "./Gender";
import HeightWeightAge from "./HeightWeightAge";

function App() {
  return (
    <div className="container">
      <Header title="GENDER" />
      <div className="gender">
        <Gender
          gender=<img src="https://img.icons8.com/metro/70/000000/male.png" />
          genderTitle="MALE"
        />
        <Gender
          gender=<img src="https://img.icons8.com/material/70/000000/female.png" />
          genderTitle="MALE"
        />
      </div>
      <HeightWeightAge title="HEIGHT" />
      <HeightWeightAge title="WEIGHT" />
      <HeightWeightAge title="AGE" />
    </div>
  );
}
export default App;
