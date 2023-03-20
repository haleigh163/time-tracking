import { Box } from "@mui/material";
import Layout from "./components/Layout";
import Router from "./routes/Router";

const App = () => {
  return (
    <Box my={4}>
      <Layout>
        <Router />
      </Layout>
    </Box>
  );
};

export default App;
