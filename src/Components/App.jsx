import React from "react";
import Header from "./Header";
import Gender from "./Gender";
import DiscreteSlider from "./DiscreteSlider";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
function App() {
  let height, weight;
  function getValue(obj) {
    if (obj.title === "height") {
      height = obj.value;
    } else if (obj.title === "weight") {
      weight = obj.value;
    }
    console.log("height: " + height + "and weight: " + weight);
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
      <Header title="HEIGHT (cm)" />
      <DiscreteSlider
        title="height"
        defaultValue={100}
        step={1}
        min={10}
        max={300}
        onGetValue={getValue}
      />
      <Header title="WEIGHT (kg)" />
      <DiscreteSlider
        title="weight"
        defaultValue={50}
        step={1}
        min={1}
        max={150}
        onGetValue={getValue}
      />
      <Header title="AGE (years)" />
      <DiscreteSlider
        title="age"
        defaultValue={10}
        step={1}
        min={0}
        max={100}
        onGetValue={getValue}
      />
      <Button id="submitButton" variant="contained" onClick={getValue}>
        <ArrowForwardIcon />
      </Button>
    </div>
  );
}
export default App;
