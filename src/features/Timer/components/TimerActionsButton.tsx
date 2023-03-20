import { Button } from "@mui/material";

type TimerActionsButtonProps = {
  text: string;
  disabled?: boolean;
};

const TimerActionsButton = ({ text, disabled }: TimerActionsButtonProps) => {
  return (
    <Button size="large" disabled={disabled}>
      {text}
    </Button>
  );
};

export default TimerActionsButton;
