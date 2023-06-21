import { useTheme, Typography, Grid, Chip, Divider, Button } from '@mui/material';
import { lineHeight } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { MarginSharp } from '@mui/icons-material';

const makeStyles = (theme) => ({

    title: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: '34px',
        Color: '#2a2d32'
    }

});

const FrequentlyAskedQuestion = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);
    return (
        <>
            <Grid container style={{ padding: '1rem' }}>
                <Grid container style={{ paddingBottom: "1.5rem" }}>
                    <Typography variant='h2' sx={sx.title}>
                        Frequently Asked Question
                    </Typography>

                </Grid>
                <Grid container>
                    <Typography style={{ fontSize: "12px" }}>
                        The answers provided below are based on answers previously given by the tour provider to customers’ questions.
                    </Typography>
                </Grid>

                <Grid container sx={{ paddingTop: '2rem' }}>
                    <Typography >
                        Filter by:
                    </Typography>
                    <Grid container spacing={2} style={{ paddingTop: "10px" }}>
                        <Grid item >
                            <Button variant="outlined" sx={{
                                textTransform: 'capitalize',
                                borderColor: '#186B6D',
                                fontWeight: "600",
                                color: '#186B6D',
                                "&.MuiButton-root:hover": {
                                    background: '#186B6D !important',
                                    color: "#fff"
                                }
                            }}>Accessibility</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" sx={{
                                textTransform: 'capitalize',
                                borderColor: '#186B6D',
                                fontWeight: "600",
                                color: '#186B6D',
                                "&.MuiButton-root:hover": {
                                    background: '#186B6D !important',
                                    color: "#fff"
                                }
                            }}>Itinerary details</Button>
                        </Grid> <Grid item>
                            <Button variant="outlined" sx={{
                                textTransform: 'capitalize',
                                borderColor: '#186B6D',
                                fontWeight: "600",
                                color: '#186B6D',
                                "&.MuiButton-root:hover": {
                                    background: '#186B6D !important',
                                    color: "#fff"
                                }
                            }}>Meeting & Pickup</Button>
                        </Grid> <Grid item>
                            <Button variant="outlined" sx={{
                                textTransform: 'capitalize',
                                borderColor: '#186B6D',
                                fontWeight: "600",
                                color: '#186B6D',
                                "&.MuiButton-root:hover": {
                                    background: '#186B6D !important',
                                    color: "#fff"
                                }
                            }}>Other</Button>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ paddingTop: "20px" }}>
                        <Grid item>
                            <Typography> <strong>Q:</strong>
                                How often does a bus arrive at each stop during the Big Bus New York Hop-On Hop-Off Open Top Tour?
                            </Typography>
                        </Grid>
                        <Grid item sx={{ padding: "50px", MarginTop: "20px", backgroundColor: "#f5f5f5" }}>
                            <Typography> <strong>A:</strong>
                                How often does a bus arrive at each stop during the Big Bus New York Hop-On Hop-Off Open Top Tour?
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ paddingTop: "20px" }}>
                        <Grid item>
                            <Typography> <strong>Q:</strong>
                                How often does a bus arrive at each stop during the Big Bus New York Hop-On Hop-Off Open Top Tour?
                            </Typography>
                        </Grid>
                        <Grid item sx={{ padding: "50px", MarginTop: "20px", backgroundColor: "#f5f5f5" }}>
                            <Typography> <strong>A:</strong>
                                How often does a bus arrive at each stop during the Big Bus New York Hop-On Hop-Off Open Top Tour?
                            </Typography>
                        </Grid>
                    </Grid>   <Grid container sx={{ paddingTop: "20px" }}>
                        <Grid item>
                            <Typography> <strong>Q:</strong>
                                How often does a bus arrive at each stop during the Big Bus New York Hop-On Hop-Off Open Top Tour?
                            </Typography>
                        </Grid>
                        <Grid item sx={{ padding: "50px", MarginTop: "20px", backgroundColor: "#f5f5f5" }}>
                            <Typography> <strong>A:</strong>
                                How often does a bus arrive at each stop during the Big Bus New York Hop-On Hop-Off Open Top Tour?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default FrequentlyAskedQuestion;
