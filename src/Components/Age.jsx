import React from "react";
import Header from "./Header";
import DiscreteSlider from "./DiscreteSlider";
function Age(props) {
  function getValue(val) {
    // console.log("age: " + val);
  }
  return (
    <div>
      <Header title="AGE (years)" />
      <DiscreteSlider
        title="age"
        defaultValue={10}
        step={1}
        min={0}
        max={100}
        toGetValue={getValue}
      />
    </div>
  );
}

export default Age;
