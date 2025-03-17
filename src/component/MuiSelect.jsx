import { Box, MenuItem, Stack, TextField } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const multipleHandleChange = (e) => {
    let value = e.target.value;
    setCountries(typeof value == "string" ? value.split(",") : value);
  };
  console.log({ country });

  console.log({ countries });
  return (
    <>
      <Box  p={"10px"} width={"250px"}>
          <TextField
          fullWidth
            label="select your country"
            select
            value={country}
            onChange={handleChange}
          >
            <MenuItem value="IN">India </MenuItem>
            <MenuItem value="US">USA </MenuItem>
            <MenuItem value="AU">Austraila </MenuItem>
          </TextField>
            
          </Box>
          <Box p="10px" width="250px">
          <TextField
          fullWidth
            label="select your country"
            select
            value={countries}
            onChange={multipleHandleChange}
            SelectProps={{
              multiple: true,
            }}
          >
            <MenuItem value="IN">India </MenuItem>
            <MenuItem value="US">USA </MenuItem>
            <MenuItem value="AU">Austraila </MenuItem>
          </TextField>
      </Box>
    </>
  );
};
