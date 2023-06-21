import { useTheme, Typography, Grid, Chip, Divider } from '@mui/material';
import { lineHeight } from '@mui/system';

const makeStyles = (theme) => ({

    title: {
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '34px',
        Color: '#2a2d32'
    },
    title2: {
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '34px',
        Color: '#2a2d32',
        marginTop: "10px"
    }


});

const PricingCard = ({ overViewList, overview, reasonToChooseUs }) => {
    const theme = useTheme();
    const sx = makeStyles(theme);
    return (
        <>
            <Grid container style={{ padding: '1rem' }}>
                <Grid container>
                    <Typography sx={sx.title}>
                        Overview
                    </Typography>
                </Grid>
                <Grid container>
                    <Typography>
                        {overview}
                    </Typography>
                </Grid>
                <Grid container sx={{ paddingLeft: '1.5rem', paddingTop: '0.5rem' }}>
                    <ul>
                        {overViewList?.map((list, index) => {
                            return (
                                <li>{list.itemList}</li>

                            )
                        })}
                        {/* <li>See the highlights of New York City on a guided tour</li>
                        <li>Hear informative commentary on the history and people that shaped NYC</li>
                        <li>Snap pics of Lady Liberty, Ellis Island, and the city skyline from a cruise</li>
                        <li>View the 9/11 Memorial at the former World Trade Center site</li> */}
                    </ul>
                </Grid>

                <Grid container >
                    <Grid item xs={12}>
                        <Typography sx={sx.title2}>
                            Why Travelers Choose This Tour
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='p'>
                            {reasonToChooseUs}
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container>
                    <Divider sx={{ width: '100%', padding: '1rem 1rem 3rem 1rem' }} />
                </Grid>

            </Grid>
        </>
    );
};

export default PricingCard;
