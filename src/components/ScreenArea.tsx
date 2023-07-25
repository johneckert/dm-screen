import Grid from '@mui/material/Unstable_Grid2';

const ScreenArea = () => {
    return (
       <Grid container columns={4} spacing={1}>
        <Grid xs={4} sm={2} md={1}>
            <div>1</div>
        </Grid>
        <Grid xs={4} sm={2} md={1}>
            <div>2</div>
        </Grid>
        <Grid xs={4} sm={2} md={1}>
            <div>3</div>
        </Grid>
        <Grid xs={4} sm={2} md={1}>
            <div>4</div>
        </Grid>
       </Grid>
    );
};

export default ScreenArea;