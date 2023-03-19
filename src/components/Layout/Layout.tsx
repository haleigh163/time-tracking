import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <Header />
      <Box mt="4em" pt={2}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
