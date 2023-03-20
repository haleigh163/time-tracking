import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledTimerDisplayValueProps extends TypographyProps {
  value?: string;
}

export const StyledTimerDisplayValue = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "value",
})<StyledTimerDisplayValueProps>(({ value }) => ({
  fontSize: `${value !== ":" ? 3 : 1}em`,
}));
