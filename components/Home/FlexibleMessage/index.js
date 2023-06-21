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
        marginTop: '12px',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.25rem',
        },

    }

});

const FlexibleMessage = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);

    return (
        <>
            <Grid container sx={{ background:'#EFF6F6',py:5,my:4 }} justifyContent="center">
                <Grid container >

                    <Grid container justifyContent={'center'}>
                        <Typography variant='h2' sx={sx.title} >Keep things flexible</Typography>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography variant='p' sx={{ textAlign: 'center' }} >Use Reserve Now & Pay Later to secure the activities you don't want to miss without being locked in.</Typography>
                    </Grid>

                </Grid>
            </Grid>

        </>
    )
}

export default FlexibleMessage;