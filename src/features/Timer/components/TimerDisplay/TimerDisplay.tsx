import Row from "@ui/Row";
import { TimerDisplayProps } from "./types";
import TimerDisplayValue from "../TimerDisplayValue";

const TimerDisplay = ({}: TimerDisplayProps) => {
  return (
    <Row justify="">
      <TimerDisplayValue value="00" />
      <TimerDisplayValue value=":" />
      <TimerDisplayValue value="00" />
      <TimerDisplayValue value=":" />
      <TimerDisplayValue value="00" />
    </Row>
  );
};

export default TimerDisplay;
