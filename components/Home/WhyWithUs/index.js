import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button';
import { Container, useTheme, Theme, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import quality from "../../../assets/icons/quality.svg";
import memorable from "../../../assets/icons/memorable.svg";
import flexibility from "../../../assets/icons/flexibility.svg";
import award from "../../../assets/icons/award.svg";

const makeStyles = (theme) => ({
    buttonClass: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '32px',
        lineHeight: '32px',
        color: theme.palette.secondary.main
    },
    heading: {
        color: theme.palette.primary.light,
        fontSize: '3.75rem',
        lineHeight: '4.5rem',
        paddingBottom: '0.5rem',
        fontWeight: 600,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '2.25rem',
            lineHeight: '2.7rem',
            paddingBottom: '0.5rem',
        },

    },
    headingBody: {
        color: theme.palette.primary.light,
        fontSize: '1rem',
        lineHeight: '1.5rem',
        paddingBottom: '0.5rem',
        fontWeight: 400,
        textAlign: 'center',

    },
    //section2 title
    title: {
        fontSize: '1.25rem',
        lineHeight: '1.2rem',
        paddingBottom: '0.5rem',
        textAlign: 'center',
        fontWeight: 600,
        marginTop:'12px',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.25rem',
        },

    }

});

const WhyWithUs = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);

    return (
        <>
            <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container justifyContent={'center'}>
                        <Image
                            className="h-96 ml-12"
                            height={40}
                            width={50}
                            src={flexibility}
                            alt={'flexibility'}
                            priority
                        />
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography variant='h2' sx={sx.title} >Ultimate flexibility</Typography>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography variant='p' sx={{ textAlign: 'center' }} >You’re in control, with free cancellation and payment options to satisfy any plan or budget.</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container justifyContent={'center'}>
                        <Image
                            className="h-96 ml-12"
                            height={40}
                            width={50}
                            src={memorable}
                            alt={'memorable'}
                            priority
                        />
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography variant='h2' sx={sx.title} >Memorable experiences</Typography>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography variant='p' sx={{ textAlign: 'center' }} >
                            Browse and book tours and activities so incredible, you’ll want to tell your friends.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container justifyContent={'center'}>
                        <Image
                            className="h-96 ml-12"
                            height={40}
                            width={50}
                            src={quality}
                            alt={'quality'}
                            priority
                        />
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography variant='h2' sx={sx.title} >Quality at our core</Typography>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography variant='p' sx={{ textAlign: 'center' }} >
                            High quality standards. Millions of reviews. A Tripadvisor company.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container justifyContent={'center'}>
                        <Image
                            className="h-96 ml-12 "
                            height={40}
                            width={50}
                            src={award}
                            alt={'award'}
                            priority
                        />
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography variant='h2' sx={sx.title} >Award-winning support</Typography>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography variant='p' sx={{ textAlign: 'center' }} >
                            New price? New plan? No problem. We’re here to help, 24/7.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default WhyWithUs;