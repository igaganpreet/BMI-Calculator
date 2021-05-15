import React from "react";
import Header from "./Header";
import DiscreteSlider from "./DiscreteSlider";

function Weight(props) {
  function getValue(val) {
    // console.log("height: " + val);
    return props.toGetData(val);
  }
  return (
    <div>
      <Header title="WEIGHT (kg)" />
      <DiscreteSlider
        title="weight"
        defaultValue={50}
        step={1}
        min={1}
        max={150}
        toGetValue={getValue}
      />
    </div>
  );
}

export default Weight;
