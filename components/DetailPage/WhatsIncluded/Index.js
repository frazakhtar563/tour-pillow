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

const WhatsIncluded = ({ includedItems }) => {
    const theme = useTheme();
    const sx = makeStyles(theme);
    return (
        <>
            <Grid container style={{ padding: '1rem' }}>
                <Grid container style={{ paddingBottom: "1.5rem" }}>
                    <Typography variant='h2' sx={sx.title}>
                        What's Included
                    </Typography>
                </Grid>
                <Grid container>
                    <Grid item md={6}>
                        {console.log("RReeeeeeee", includedItems)}
                        {includedItems?.filter((item) => item?.status == true).map((item) => {
                            return <Grid container style={{ paddingBottom: "8px", paddingTop: '5px' }}>
                                <Grid item style={{ width: "30px" }}>
                                    <CheckIcon style={{ marginRight: "5px" }} />

                                </Grid>
                                <Grid item style={{ width: 'calc(100% - 30px)' }}>
                                    <Typography>
                                        {item?.title}
                                    </Typography>
                                </Grid>

                            </Grid>
                        })}
                        {/* <Grid container style={{ paddingBottom: "8px", paddingTop: '5px' }}>
                            <Grid item style={{ width: "30px" }}>
                                <CheckIcon style={{ marginRight: "5px" }} />

                            </Grid>
                            <Grid item style={{ width: 'calc(100% - 30px)' }}>
                                <Typography>
                                    Hop-on hop-off, open-top, sightseeing bus tour
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid container style={{ paddingBottom: "8px", paddingTop: '5px' }}>
                            <Grid item style={{ width: "30px" }}>
                                <CheckIcon style={{ marginRight: "5px" }} />

                            </Grid>
                            <Grid item style={{ width: 'calc(100% - 30px)' }}>
                                <Typography>
                                    Live bus tracking through Big Bus app
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid container style={{ paddingBottom: "8px", paddingTop: '5px' }}>
                            <Grid item style={{ width: "30px" }}>
                                <CheckIcon style={{ marginRight: "5px" }} />

                            </Grid>
                            <Grid item style={{ width: 'calc(100% - 30px)' }}>
                                <Typography>
                                    2 Routes - Uptown (red route) and Downtown (blue route)
                                </Typography>
                            </Grid>

                        </Grid> */}
                    </Grid>
                    <Grid item md={6}>
                        {includedItems?.filter((item) => item?.status == false).map((item) => {
                            return <Grid container style={{ paddingBottom: "8px", paddingTop: '5px', color: "#7b7e84" }}>
                                <Grid item style={{ width: "30px" }}>
                                    <ClearIcon style={{ marginRight: "5px" }} />

                                </Grid>
                                <Grid item style={{ width: 'calc(100% - 30px)' }}>
                                    <Typography >
                                        {item.title}
                                    </Typography>
                                </Grid>

                            </Grid>
                        })}


                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default WhatsIncluded;
