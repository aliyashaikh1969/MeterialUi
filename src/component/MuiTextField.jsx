import { Stack, TextField, Typography, InputAdornment } from "@mui/material";

export const MuiTextField = () => {
  return (
    <>
      <Stack p={"30px"} spacing={4}>
        <Typography> type of inputField</Typography>
        <Stack direction={"row"} spacing={2}>
          <TextField label="deafult outlined" />
          <TextField label="filled" variant="filled" />
          <TextField label="standard" variant="standard" />
        </Stack>
        <Typography>size and colors in input field</Typography>
        <Stack direction={"row"} spacing={2}>
          <TextField label="small" size="small" color="secondary" />
          <TextField label="medium" size="medium" color="success" />
          <TextField label="large" size="large" color="warning" />
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <TextField label="disable" disabled />
          <TextField
            label="adding helperText"
            helperText="add a valid password"
            type="password"
          />
          <TextField
            label="read only"
            aria-readonly
            InputProps={{ readOnly: "true" }}
          />
          <TextField required label="required" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="amount"
            InputProps={{
              startAdornment: <InputAdornment position="start"> $</InputAdornment>,
            }}
          />
          <TextField
            label="weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};
