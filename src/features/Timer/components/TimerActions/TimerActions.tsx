import React from "react";
import { ButtonGroup } from "@mui/material";
import Button from "@ui/Button";
import Row from "@ui/Row";

type TimerActionsButtonProps = {
  text: string;
  disabled?: boolean;
};

const TimerActionsButton = ({ text, disabled }: TimerActionsButtonProps) => {
  return <Button text={text} disabled={disabled} size="large" />;
};

const TimerActions = () => {
  return (
    <Row>
      <TimerActionsButton text="Start" />
      <TimerActionsButton text="Pause" disabled={true} />
      <TimerActionsButton text="Reset" disabled={true} />
    </Row>
    // <ButtonGroup size="large" variant="text" sx={{ "*": { px: 2 } }}>
    //   <Button text="Start" />
    //   <Button text="Pause" disabled={true} />
    //   <Button text="Reset" disabled={true} />
    // </ButtonGroup>
  );
};

export default TimerActions;
