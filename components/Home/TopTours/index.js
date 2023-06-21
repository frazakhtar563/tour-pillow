import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button';
import { Container, useTheme, Theme, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import topTour1 from "../../../assets/images/tt1.jpg";
import Slider from "react-slick";
import Card from "./card"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
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
        minWidth: '240px'

    }

});

const TopTours = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);

    function SampleNextArrow(props) {
        const { className, style, onClick, setCurrentIndex, currentIndex, slide } = props;

        return (
            <div

            style={{position:'absolute',top:'50%',right:-10}}
                onClick={() => {
                    onClick();
                }}
            >
                <ChevronRightIcon />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick, setCurrentIndex, currentIndex, slide } = props;
        return (
            <div style={{position:'absolute',top:'50%',left:-10,zIndex:1000}}
                onClick={() => {
                    onClick();
                }}
            >
                <ChevronLeftIcon />
            </div>
        );
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: true,

        beforeChange: (current, next) => setCurrentIndex(next),
        // afterChange: current => setCurrentIndex(current),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <Grid sx={{ padding: '15px 20px' }}>
            <Container style={{position:'relative'}}>
                <Slider {...settings}>

                    {[1, 2, 3, 4, 5, 6].map(item => {
                        return <Card />
                    })
                    }
                </Slider>
            </Container>
        </Grid>
    )
}

export default TopTours;