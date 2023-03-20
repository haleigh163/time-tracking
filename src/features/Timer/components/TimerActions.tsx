import Flex from "@ui/Flex";
import TimerActionsButton from "@features/Timer/components/TimerActionsButton";

const TimerActions = () => {
  return (
    <Flex direction="row">
      <TimerActionsButton text="Start" />
      <TimerActionsButton text="Pause" disabled={true} />
      <TimerActionsButton text="Reset" disabled={true} />
    </Flex>
  );
};

export default TimerActions;
