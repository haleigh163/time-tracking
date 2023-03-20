import Flex from "@ui/Flex";
import TimerDisplayValue from "./TimerDisplayValue";

const TimerDisplay = () => {
  return (
    <Flex direction="row">
      <TimerDisplayValue value="00" />
      <TimerDisplayValue value=":" />
      <TimerDisplayValue value="00" />
      <TimerDisplayValue value=":" />
      <TimerDisplayValue value="00" />
    </Flex>
  );
};

export default TimerDisplay;
