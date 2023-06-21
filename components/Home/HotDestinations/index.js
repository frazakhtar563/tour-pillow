import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button';
import { Container, useTheme, Theme, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import hot1 from "../../../assets/images/hot1.jpg";

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
        textAlign: 'left',
        marginTop:'1rem',
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.25rem',
        },

    },
    border:{
        borderRadius:'5px',
       
    }

});

const HotDestinations = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);

    return (
        <>
            <Grid container sx={{ mt: 5 }} spacing={2}>
                {[1, 2, 3,4,5,6].map(item => {
                    return <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Grid container spacing={2} justifyContent={'center'}>
                            <Grid item   >
                                <Image
                                    className="h-96 ml-12"
                                    height={87}
                                    width={87}
                                    src={hot1}
                                    alt={'hot1'}
                                    priority
                                    style={sx.border}
                                   
                                />
                            </Grid>
                            <Grid item >
                                <Grid container >
                                    <Typography variant='h2' sx={sx.title} >Hoover Dam</Typography>
                                </Grid>
                                <Grid container >
                                    <Typography variant='p' sx={{ textAlign: 'center' ,color:'#585C63'}} >
                                        101 Tours and Activities
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                })
                }
            </Grid>

        </>
    )
}

export default HotDestinations;