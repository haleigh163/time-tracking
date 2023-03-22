import React from "react";
import { TextField, useTheme, InputAdornment } from "@mui/material";

type NumberInputProps = {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const NumberInput = ({ label, value, onChange }: NumberInputProps) => {
  const theme = useTheme();

  const secondaryCol = theme.palette.secondary.main;

  return (
    <TextField
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{
              "*": {
                color: "#fff",
                opacity: 0.7,
                textAlign: "end",
              },
            }}
          >
            {label}
          </InputAdornment>
        ),
      }}
      InputLabelProps={{ shrink: true }}
      id="outlined-controlled"
      // label={label}
      value={value}
      onChange={onChange}
      sx={{
        input: {
          color: "#fff",
        },
        label: {
          color: "#fff",
        },
        svg: {
          color: secondaryCol,
        },
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    />
  );
};

export default NumberInput;
