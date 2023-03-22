import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { capitalize, titleCase } from "src/utils/format/string";

const StyledTextField = styled(TextField)(({ theme }) => ({
  input: {
    color: "#fff",
  },
  label: {
    color: "#fff",
  },
  svg: {
    color: theme.palette.secondary.main,
  },
}));

type DateTimeInputProps = {
  value: DateTime;
  setValue: SetState<DateTime>;
  label?: string;
  type: "date" | "time";
  sx: any;
};

export default function DateTimeInput({
  value,
  setValue,
  label,
  type,
  sx,
}: DateTimeInputProps) {
  const formattedLabel = !label ? capitalize(type) : titleCase(label);

  const renderInput = (props: RestProps) => (
    <StyledTextField fullWidth {...props} sx={sx} variant="filled" />
  );

  const updateValue = (newValue: typeof value) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {type === "date" ? (
        <DatePicker
          renderInput={renderInput}
          label={formattedLabel}
          value={value}
          onChange={updateValue}
        />
      ) : (
        <TimePicker
          renderInput={renderInput}
          label={formattedLabel}
          onChange={updateValue}
          ampm={true}
          openTo="hours"
          views={["hours", "minutes"]}
          inputFormat="HH:mm"
          mask="__:__"
          value={value}
        />
      )}
    </LocalizationProvider>
  );
}
