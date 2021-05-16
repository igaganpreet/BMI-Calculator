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

    if (!isClicked) {
      if (isNaN(bmi)) {
        updateDesc("Please re-select values to check your BMI");
        updateIcon(false);
      } else {
        updateBmi(bmi);
        updateLog(true);
        updateDesc(() => {
          if (bmi <= 18.5) {
            return "You are underweight";
          } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "You have a normal body weight. Great job!";
          } else if (bmi > 24.9) {
            return "You are overweight.";
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
            <h4>Your BMI</h4>
            <Header title={bmiValue} />
          </div>
        ) : null}
        <Button
          style={
            isBmilogged ? { marginLeft: 50 + "%" } : { marginLeft: 70 + "%" }
          }
          id="submitButton"
          variant="contained"
          onClick={calculate}
        >
          {isClicked ? <LoopIcon /> : <ArrowForwardIcon />}
        </Button>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L34.3,186.7C68.6,181,137,171,206,160C274.3,149,343,139,411,149.3C480,160,549,192,617,208C685.7,224,754,224,823,197.3C891.4,171,960,117,1029,106.7C1097.1,96,1166,128,1234,117.3C1302.9,107,1371,53,1406,26.7L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg> */}
      <Description desc={desc} />
    </div>
  );
}
export default App;
