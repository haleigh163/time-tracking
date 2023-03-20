import { TimerDisplayValueProps } from "./types";
import { StyledTimerDisplayValue } from "./styles";

const TimerDisplayValue = ({ value }: TimerDisplayValueProps) => {
  return (
    <StyledTimerDisplayValue value={value}>{value}</StyledTimerDisplayValue>
  );
};

export default TimerDisplayValue;
