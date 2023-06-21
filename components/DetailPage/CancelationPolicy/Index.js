import { useTheme, Typography, Grid, Chip, Divider } from '@mui/material';
import { lineHeight } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const makeStyles = (theme) => ({

    title: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: '34px',
        Color: '#2a2d32'
    }

});

const CancelationPolicy = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);
    return (
        <>
            <Grid container style={{ padding: '1rem' }}>
                <Grid container style={{ paddingBottom: "1.5rem" }}>
                    <Typography variant='h2' sx={sx.title}>
                        Cancellation Policy
                    </Typography>

                </Grid>
                <Grid container>
                    <Typography >
                        You can cancel up to 24 hours in advance of the experience for a full refund.
                    </Typography>
                </Grid>

                <Grid container sx={{ paddingTop: '2rem' }}>
                    <Grid container spacing={2}>
                        <Grid item md={6} style={{ padding: '2rem', paddingTop: "0rem", paddingBottom: '0rem' }}>
                            <ul >
                                <li style={{ paddingBottom: "10px" }}>For a full refund, you must cancel at least 24 hours before the experience’s start time.</li>
                                <li style={{ paddingBottom: "10px" }}> If you cancel less than 24 hours before the experience’s start time, the amount you paid will not be refunded.</li>
                                <li style={{ paddingBottom: "10px" }}>Any changes made less than 24 hours before the experience’s start time will not be accepted.</li>

                            </ul>
                        </Grid>
                        <Grid item md={6} style={{ padding: '2rem', paddingTop: '0rem' }}>
                            <ul>
                                <li style={{ paddingBottom: "10px" }}>Near public transportation</li>
                                <li style={{ paddingBottom: "10px" }}>Infants must sit on laps </li>
                                <li style={{ paddingBottom: "10px" }}>Transportation is wheelchair accessible</li>
                            </ul>
                        </Grid>
                        <Divider sx={{ width: '100%', paddingTop: '20px' }} />

                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default CancelationPolicy;
