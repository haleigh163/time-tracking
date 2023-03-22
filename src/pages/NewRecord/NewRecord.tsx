import RecordForm from "@features/RecordForm";
import { Timer } from "@features/Timer";
import { Box, Typography } from "@mui/material";

const NewRecord = () => {
  return (
    <Box>
      <Typography variant="h2" my={2} align="center">
        New Record
      </Typography>
      {/* <Timer /> */}
      <RecordForm />
    </Box>
  );
};

export default NewRecord;
