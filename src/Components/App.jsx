import React, { useState } from "react";
import Header from "./Header";
import Gender from "./Gender";
import Height from "./Height";
import Weight from "./Weight";
import Age from "./Age";
import Description from "./Description";

import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LoopIcon from "@material-ui/icons/Loop";

function App() {
  let height, weight, bmi;
  const generalDesc =
    "Body Mass Index, BMI is used to determine whether you are in healthy weight range for your height.";
  const [dimension, updateDimension] = useState({ h: 100, w: 50 });
  const [isClicked, updateIcon] = useState(false);
  const [desc, updateDesc] = useState(generalDesc);
  const [bmiValue, updateBmi] = useState(0);
  const [isBmilogged, updateLog] = useState(false);

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
    bmi = ((weight.w * 100 * 100) / (height.h * height.h)).toFixed(2);

    isClicked ? updateIcon(false) : updateIcon(true);
    isClicked ? updateLog(false) : updateLog(true);
    if (!isClicked) {
      if (isNaN(bmi)) {
        updateDesc("Please re-select values to check your BMI");
        updateIcon(false);
        updateLog(false);
      } else {
        updateBmi(bmi);
        updateLog(true);
        updateDesc(() => {
          if (bmi <= 18.5) {
            return "You are underweight !";
          } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "You have a normal body weight. Great job!";
          } else if (bmi > 24.9) {
            return "You are overweight !";
          }
        });
      }
    } else {
      updateDesc(generalDesc);
    }
  }

  return (
    <div className="container">
      <Header title="GENDER" />
      <div className="gender">
        <Gender
          gender=<img
            src="https://img.icons8.com/android/50/f50057/male.png"
            alt="Male"
          />
          genderTitle="MALE"
        />
        <Gender
          gender=<img
            src="https://img.icons8.com/material/50/f50057/female.png"
            alt="Female"
          />
          genderTitle="FEMALE"
        />
      </div>
      <Height toGetData={getHeight} />
      <Weight toGetData={getWeight} />
      <Age />
      <div className="resultDisplay">
        {isBmilogged ? (
          <div className="bmiDisplay">
            <Description desc="Your BMI" />
            <h1>{bmiValue}</h1>
          </div>
        ) : null}
        <Button
          style={
            isBmilogged ? { marginLeft: 43 + "%" } : { marginLeft: 70 + "%" }
          }
          id="submitButton"
          variant="contained"
          onClick={calculate}
        >
          {isClicked ? <LoopIcon /> : <ArrowForwardIcon />}
        </Button>
      </div>

      <Description desc={desc} />
    </div>
  );
}
export default App;
