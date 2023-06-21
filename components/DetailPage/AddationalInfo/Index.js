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

const AddationalInfo = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);
    return (
        <>
            <Grid container style={{ padding: '1rem' }}>
                <Grid container style={{ paddingBottom: "1.5rem" }}>
                    <Typography variant='h2' sx={sx.title}>
                        Addational Info
                    </Typography>
                </Grid>



                <Grid container spacing={2} >
                    <Grid item md={6} style={{ padding: '2rem', paddingTop: "0rem", paddingBottom: '0rem' }}>
                        <ul>
                            <li style={{ paddingBottom: "10px" }}>Confirmation will be received at time of booking</li>
                            <li style={{ paddingBottom: "10px" }}>Wheelchair accessible</li>
                            <li style={{ paddingBottom: "10px" }}>24 Hour - Classic tickets will be valid for same day use. Tickets with multiple days must be used consecutively.</li>

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
        </>
    );
};

export default AddationalInfo;
