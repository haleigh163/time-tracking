import Flex from "@ui/Flex";
import DateTimeInput from "@ui/inputs/DateTimeInput";
import React from "react";

const RecordForm = () => {
  return (
    <Flex>
      <Flex direction="row">
        <DateTimeInput type="date" sx={{ width: "50%" }} />
      </Flex>
      <Flex direction="row">
        <DateTimeInput type="time" label="start time" />
        <DateTimeInput type="time" label="End Time" />
      </Flex>
    </Flex>
  );
};

export default RecordForm;
