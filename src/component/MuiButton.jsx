import { Button, Stack, IconButton ,ButtonGroup} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
  return (
    <>
      <Stack spacing={4} p="3rem">
        <Stack spacing={2} direction={"row"}>
          <Button variant="text">text</Button>
          <Button variant="contained">text</Button>
          <Button variant="outlined">text</Button>
          <Button href="https://www.google.com " target="_blank">
            using as a link tag
          </Button>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <Button variant="text" color="primary">
            primary
          </Button>
          <Button variant="text" color="secondary">
            secondary
          </Button>
          <Button variant="text" color="error">
            error
          </Button>
          <Button variant="text" color="success">
            success
          </Button>
          ``
          <Button variant="text" color="warning">
            warning
          </Button>
          <Button variant="text" color="info">
            info
          </Button>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <Button variant="outlined" color="primary">
            primary
          </Button>
          <Button variant="outlined" color="secondary">
            secondary
          </Button>
          <Button variant="outlined" color="error">
            error
          </Button>
          <Button variant="outlined" color="success">
            success
          </Button>
          <Button variant="outlined" color="warning">
            warning
          </Button>
          <Button variant="outlined" color="info">
            info
          </Button>
        </Stack>
        <Stack display={"block"} spacing={2} direction={"row"}>
          <Button variant="contained" size="small">
            small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>
        <Stack spacing={2} direction={"row"} display={"block"}>
          <Button variant="contained" startIcon={<SendIcon />} disableRipple onClick={()=>alert("click")}> disable only ripple effect
            send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation> 
            send disable button
           </Button>
          <IconButton aria-label="send" color="success" size="small">
            <SendIcon /> 
          </IconButton>
        </Stack>
        <Stack direction={"row"}>
            <ButtonGroup variant="contained" orientation="vertical" color="secondary" aria-label="alignment button-group" > 
            <Button onClick={()=>alert("left")}>left</Button>
            <Button>center</Button>
            <Button>right</Button>
        
            </ButtonGroup>

        </Stack>
      </Stack>
    </>
  );
};
