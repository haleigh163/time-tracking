import React from "react";
import { Box } from "@mui/material";
import TimerDisplay from "./TimerDisplay/";
import TimerActions from "./TimerActions";
import Column from "@ui/Column";

const Timer = () => {
  return (
    <Column>
      <TimerDisplay />
      <TimerActions />
    </Column>
  );
};

export default Timer;
