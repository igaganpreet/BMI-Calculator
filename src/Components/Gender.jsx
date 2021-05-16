import React from "react";
import Button from "@material-ui/core/Button";

function Gender(props) {
  return (
    <Button id="genderButton" variant="contained">
      {props.gender}
      {props.genderTitle}
    </Button>
  );
}

export default Gender;
