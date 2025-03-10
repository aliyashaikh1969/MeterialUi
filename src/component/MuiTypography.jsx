import { Typography } from "@mui/material"

export const MuiTypography = ()=>{
    return(
        <>

        <div>

        <h1>typography in materaila ui</h1>
        <Typography variant="h1" gutterBottom>heading h1</Typography>
        <Typography variant="h2" component="h1">heading h2</Typography>
        <Typography variant="h3">heading h3</Typography>
        <Typography variant="h4">heading h4</Typography>
        <Typography variant="h5">heading h5</Typography>
        <Typography variant="h6">heading h6</Typography>
        <Typography variant="subtitle1">subtitle 1</Typography>
        <Typography variant="subtitle2`">subtitle 2</Typography>
        <Typography >body</Typography>
        <Typography variant="body1">body1</Typography>

        <Typography variant="body2">body2</Typography>
        </div>
    
        </>
    )
}