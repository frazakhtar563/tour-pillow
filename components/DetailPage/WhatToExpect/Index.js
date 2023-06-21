import { useTheme, Typography, Grid, Chip, Divider } from '@mui/material';
import { lineHeight } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import VerticalStepper from './Steper';

const makeStyles = (theme) => ({

    title: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: '34px',
        Color: '#2a2d32'
    }


});

const WhatToExpect = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);
    return (
        <>
            <Grid container style={{ padding: '1rem' }}>
                <Grid container style={{ paddingBottom: "1.5rem" }}>
                    <Typography variant='h2' sx={sx.title}>
                        What To Expect
                    </Typography>
                </Grid>
                <Grid container >
                    <Grid item >
                        <Typography >
                            Show your paper or mobile voucher to a member of the Big Bus staff at any of the 5 stops along your route to redeem and board the bus to begin your tour. Learn about the history of the city from your guide as you go.
                        </Typography>
                        <Typography style={{ paddingTop: "20px" }}>
                            Show your paper or mobile voucher to a member of the Big Bus staff at any of the 5 stops along your route to redeem and board the bus to begin your tour. Learn about the history of the city from your guide as you go.
                        </Typography>
                        <Typography style={{ paddingTop: "20px" }}>
                            Upgrade to the Empire State entry ticket to see the sights from up above.
                        </Typography>
                    </Grid>
                    <Grid item style={{ backgroundColor: "#186b6d", padding: "2px 3px", borderRadius: "3px", marginTop: "10px" }}>
                        <Typography style={{ color: 'white' }}>Downtown - Red Route</Typography>

                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Typography style={{ color: '#585c63' }}>10 Stops</Typography>

                        </Grid>


                    </Grid>
                    <Grid container style={{ marginTop: "10px" }}>
                        <Grid item>
                            <Typography style={{ color: '#585c63' }}>12 Points of Interest</Typography>

                        </Grid>


                    </Grid>
                    <Grid container style={{ marginTop: "10px" }}>
                        <Grid item>
                            <Typography ><strong>Duration</strong>: 1 hour 30 minutes</Typography>

                        </Grid>


                    </Grid>
                    <Grid container style={{ marginTop: "10px" }}>
                        <Grid item>
                            <Typography ><strong>Operating Schedule: </strong>9:30 AM (from Stop #1 - M&amp;M'S World) - 4:30 PM

                                Every 20 to 30 minutes, totally route takes 90 minutes

                                Customers are advised to visit the Big Bus website or to download the Big Bus app to see the most up to date bus stop locations and timings. For live bus tracking on the day of travel - please download the Big Bus App in advance of arrival.</Typography>

                        </Grid>


                    </Grid>
                    <Grid container style={{ marginTop: "10px" }}>
                        <VerticalStepper />


                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default WhatToExpect;
