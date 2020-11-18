import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        X
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        ZAŁ
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        ROZŁ
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
