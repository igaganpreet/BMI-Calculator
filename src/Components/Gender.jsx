import React from "react";

import Button from "@material-ui/core/Button";

function Gender(props) {
  return (
    <Button className="genderButton" variant="contained" color="secondary">
      {props.gender}
      {props.genderTitle}
    </Button>
  );
}

export default Gender;
