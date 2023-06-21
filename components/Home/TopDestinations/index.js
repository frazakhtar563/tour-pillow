import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button';
import { Container, useTheme, Theme, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import td1 from "../../../assets/images/td1.jpg";

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
        marginTop: '1rem',
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.25rem',
        },

    },
    border: {
        borderRadius: '5px',
        minWidth: '220px'

    }

});

const TopDestinations = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);

    return (
        <>
            <Grid container sx={{ mt: 5, justifyContent: 'center' }} spacing={2} >
                {[1, 2, 3, 4, 5, 6].map(item => {
                    return <Grid item style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        <Image
                            className="h-96 ml-12"
                            height={150}
                            width={'100%'}
                            src={td1}
                            alt={'Top Destinations'}
                            priority
                            style={sx.border}
                        />
                        <div style={{
                            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'
                            , position: 'absolute', top: '10', left: '10', height: '150px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}>
                            <div >
                                <h3 style={{
                                    fontWeight: 600, color: '#fff', lineHeight: '30px', fontSize: '20px'
                                }}>Las Vegas</h3>
                            </div>
                        </div>
                    </Grid>
                })
                }
            </Grid>

        </>
    )
}

export default TopDestinations;