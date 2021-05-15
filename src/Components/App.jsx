import React, { useState } from "react";
import Header from "./Header";
import Gender from "./Gender";
import Height from "./Height";
import Weight from "./Weight";
import Age from "./Age";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
function App() {
  let height, weight, bmi;

  // const [h, updateHeight] = useState(100);
  // const [w, updateWeight] = useState(50);
  const [dimension, updateDimension] = useState({ h: 100, w: 50 });

  function getHeight(value) {
    updateDimension((prevValue) => {
      return { h: value, w: prevValue.w };
    });
    return dimension;
  }
  function getWeight(value) {
    updateDimension((prevValue) => {
      return { h: prevValue.h, w: value };
    });
    return dimension;
  }
  function calculate(value) {
    height = getHeight();
    weight = getWeight();
    bmi = (weight.w * 100 * 100) / (height.h * height.h);
    console.log("Height: " + height.h + " Weight: " + weight.w);
    console.log("bmi: " + bmi);
  }
  return (
    <div className="container">
      <Header title="GENDER" />
      <div className="gender">
        <Gender
          gender=<img src="https://img.icons8.com/android/50/f50057/male.png" />
          genderTitle="MALE"
        />
        <Gender
          gender=<img src="https://img.icons8.com/material/50/f50057/female.png" />
          genderTitle="FEMALE"
        />
      </div>
      <div className="heightandweight">
        <Height toGetData={getHeight} />
        <Weight toGetData={getWeight} />
      </div>
      <Age />
      <Button id="submitButton" variant="contained" onClick={calculate}>
        <ArrowForwardIcon />
      </Button>
    </div>
  );
}
export default App;
