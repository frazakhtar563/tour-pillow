import { useTheme, Typography, Grid, Chip } from '@mui/material';

const makeStyles = (theme) => ({

    pricingBox: {
        borderLeft: '1px solid #DFE0E2',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
            borderTop: '1px solid #DFE0E2',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: '0px solid #DFE0E2',

        },
    },
    pricingItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
            justifyContent: 'center',
        },
    }


});
let dataList = [
    {
        tourType: 'deluxe', //deluxe , classic , premium
        title: '3-Day Deluxe Ticket',
        noOfDays: 3,
        noOfRoutes: 2,
        details: 'Downtown route (red route) Uptown route (blue route) Free Bike Rental: 1-hour free bike rental with the purchase of 1-hour from Unlimited Biking at any of their New York locations.',
        price: '7626.11'
    },
    {
        tourType: 'classic', //deluxe , classic , premium
        title: '2- Day Premium Ticket',
        noOfDays: 2,
        noOfRoutes: 2,
        details: 'Downtown route (red route) Uptown route (blue route) Free Bike Rental: 1-hour free bike rental with the purchase of 1-hour from Unlimited Biking at any of their New York locations.',
        price: '4,574.74'
    },
    {
        tourType: 'classic', //deluxe , classic , premium
        title: '1-Day Classic Ticket',
        noOfDays: 1,
        noOfRoutes: 2,
        details: 'Downtown route (red route) Uptown route (blue route) Free Bike Rental : 1-hour free bike rental with the purchase of 1-hour from Unlimited Biking at any of their New York locations.',
        price: '6,099.93'
    }

]
const PricingCard = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);
    return (
        <>
            {dataList.map((item, index) => {
                return <Grid container>
                    <Grid container style={{
                        border: '1px solid #DFE0E2',
                        borderRadius: '0.5rem',
                        margin: '1rem'
                    }}>
                        <Grid item
                            xs={12} sm={12} md={8} lg={8}
                            style={{
                                padding: '1rem'

                            }}>
                            <Grid container>
                                <Grid item xs={12} sx={{ marginBottom: '0.5rem' }}>
                                    <Chip label={`Option ${index + 1}`} />

                                </Grid>
                                <Grid item xs={12}>
                                    <Typography style={{
                                        fontWeight: 600,
                                        Size: '18px',
                                        lineHeight: '22px',
                                        color: "#2a2d32"
                                    }}>{item.title}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        style={{
                                            fontWeight: 400,
                                            Size: '16px',
                                            lineHeight: '24px',
                                            color: "#2a2d32"
                                        }}>{`Duration: ${item.noOfDays} days`}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        style={{
                                            fontWeight: 400,
                                            Size: '16px',
                                            lineHeight: '24px',
                                            color: "#2a2d32"
                                        }}>{item.details}</Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}
                            sx={sx.pricingBox}
                        >
                            <Grid container>
                                <Grid item xs={6} sm={6} md={12} lg={12}

                                    sx={sx.pricingItem}

                                >
                                    <Typography
                                        style={{
                                            fontWeight: 600,
                                            Size: '16px',
                                            lineHeight: '24px',
                                            color: "#2a2d32"
                                        }}
                                    >{item.price}</Typography>
                                </Grid>
                                <Grid item xs={6} sm={6} md={12} lg={12}
                                    sx={sx.pricingItem}
                                >
                                    <Typography
                                        style={{
                                            fontWeight: 400,
                                            Size: '14px',
                                            lineHeight: '21px',
                                            color: "#2a2d32"
                                        }}
                                    >
                                        4 Adults x AED 7,626.11</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            })}

        </>
    );
};

export default PricingCard;
