import Flex from "@ui/Flex";
import TimerDisplay from "./TimerDisplay";
import TimerActions from "./TimerActions";

const Timer = () => {
  return (
    <Flex>
      <TimerDisplay />
      <TimerActions />
    </Flex>
  );
};

export default Timer;
