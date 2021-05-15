import React from "react";
import Header from "./Header";
import DiscreteSlider from "./DiscreteSlider";
function Height(props) {
  function getValue(val) {
    // console.log("height: " + val);
    return props.toGetData(val);
  }

  return (
    <div>
      <Header title="HEIGHT (cm)" />
      <DiscreteSlider
        title="height"
        defaultValue={100}
        step={1}
        min={10}
        max={300}
        toGetValue={getValue}
      />
    </div>
  );
}

export default Height;
