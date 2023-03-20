import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledTimerDisplayValueProps extends TypographyProps {
  value?: string;
}
const StyledTimerDisplayValue = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "value",
})<StyledTimerDisplayValueProps>(({ value }) => ({
  fontSize: `${value !== ":" ? 3 : 1}em`,
}));

export type TimerDisplayValueProps = {
  value: string;
};

const TimerDisplayValue = ({ value }: TimerDisplayValueProps) => {
  return (
    <StyledTimerDisplayValue value={value}>{value}</StyledTimerDisplayValue>
  );
};

export default TimerDisplayValue;
