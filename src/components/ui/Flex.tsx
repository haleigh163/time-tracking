import { Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export type FlexProps = {
  align?: string;
  justify?: string;
  spacing?: number;
  direction?: "row";
} & PropsWithChildren &
  RestProps;

const Flex: FC<FlexProps> = ({
  align,
  justify,
  spacing = 2,
  direction,
  children,
  ...rest
}) => {
  return (
    <Stack
      // mb={3}
      alignItems={align}
      justifyContent={justify}
      spacing={spacing}
      direction={direction}
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default Flex;
