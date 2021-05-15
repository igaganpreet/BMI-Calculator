import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 350
  }
});

function DiscreteSlider(props) {
  function valuetext(value) {
    return value;
  }
  function handleChange(event, value) {
    return props.toGetValue(value);
  }
  const classes = useStyles();

  return (
    <div className={classes.root} id="sliderDiv">
      <Slider
        onChange={handleChange}
        id="slider"
        defaultValue={props.defaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={props.min}
        max={props.max}
      />
    </div>
  );
}
export default DiscreteSlider;
