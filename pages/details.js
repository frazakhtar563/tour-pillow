import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { Container, useTheme, Theme, Typography, Grid, Divider, Chip } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import { useEffect, useState } from "react";
import TopTours from "../components/Home/TopTours/index";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import DatePicker from "../components/DetailPage/DatePicker/Index";
import CityTours from "../components/Home/CityTours";
import PricingCard from "../components/DetailPage/PricingCard/Index";
import Overview from "../components/DetailPage/Overview/Index";
import WhatsIncluded from "../components/DetailPage/WhatsIncluded/Index";
import WhatToExpect from "../components/DetailPage/WhatToExpect/Index";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ChoosePasangers from "../components/DetailPage/ChoosePasangers/Index"
import AddationalInfo from '../components/DetailPage/AddationalInfo/Index';
import CancelationPolicy from '../components/DetailPage/CancelationPolicy/Index';
import FrequentlyAskedQuestion from '../components/DetailPage/FrequentlyAskedQuestion/Index';
import v2 from "../assets/images/v2.png";
import axios from 'axios';
const makeStyles = (theme) => ({
    buttonClass: {
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "32px",
        lineHeight: "32px",
        color: theme.palette.secondary.main,
    },
    heading: {
        color: theme.palette.primary.light,
        fontSize: "3.75rem",
        lineHeight: "4.5rem",
        paddingBottom: "0.5rem",
        fontWeight: 600,
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            fontSize: "2.25rem",
            lineHeight: "2.7rem",
            paddingBottom: "0.5rem",
        },
    },
    headingBody: {
        color: theme.palette.primary.light,
        fontSize: "1rem",
        lineHeight: "1.5rem",
        paddingBottom: "0.5rem",
        fontWeight: 400,
        textAlign: "center",
    },

    //section2 title
    title: {
        fontSize: '1.75rem',
        lineHeight: '1.2rem',
        paddingBottom: '0.5rem',
        textAlign: 'center',
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.25rem',
        },

    },
    title2: {
        fontSize: '1.75rem',
        lineHeight: '1.2rem',
        paddingBottom: '0.5rem',
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.25rem',
        },

    },

    menuListWidth: {
        width: '25%',
        [theme.breakpoints.down('lg')]: {
            width: '25%',
        },
        [theme.breakpoints.down('md')]: {
            width: '0',
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            width: '0',
            display: 'none'
        },
    },
    detailsList: {
        width: '75%',
        [theme.breakpoints.down('lg')]: {
            width: '75%',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    dateTitle: {
        color: '#2a2d32',
        fontSize: "1.4rem",
        lineHeight: "1.5rem",
        paddingBottom: "0.8rem",
        paddingTop: "1rem",
        fontWeight: 600,
    },
    cancel: {
        color: '#585c63',
        fontSize: "0.85rem",
        lineHeight: "1.3rem",
        paddingBottom: "0.3rem",
        paddingTop: "0.5rem",
        fontWeight: 600,
    },
    cardFooter: {
        color: '#585c63',
        fontSize: "0.85rem",
        lineHeight: "1.3rem",
        paddingBottom: "0.5rem",
        fontWeight: 400,
    },
    lowestPriceTitle: {
        color: '#186b6d',
        fontSize: "1rem",
        lineHeight: "1.5rem",
        paddingBottom: "0.5rem",
        fontWeight: 400,
    },
    priceTitle: {
        color: '#2a2d32',
        fontSize: "1.5rem",
        lineHeight: "1.7rem",
        paddingBottom: "0.5rem",
        fontWeight: 600,

    }

});

const Home = () => {
    const theme = useTheme();
    const sx = makeStyles(theme);
    const [index, setIndex] = useState(0)
    const [detailData, setDetailData] = useState([]);
    const [imagesList, setImagesList] = useState([]);
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i) {
            return (
                <FiberManualRecordOutlinedIcon />
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        afterChange: i => setIndex(i)

    };


    const _renderVideo = (item) => {
        return (
            <div>
                <div className='video-wrapper' >
                    <a
                        className='close-video'
                    //   onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                    >
                    </a>

                    <iframe
                        style={{ height: '400px', background: '#F5F5F5', borderRadius: '25px' }}

                        width="100%" height="315" src={item.original} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>

            </div>
        );
    }
    const _renderImage = (item) => {
        return (
            <div>
                <div className='video-wrapper' >
                    <a
                        className='close-video'
                    //   onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                    >
                    </a>

                    <img
                        style={{ height: '400px', background: '#F5F5F5', borderRadius: '25px' }}

                        width="100%" height="315" src={item.original} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></img>
                </div>

            </div>
        );
    }
    const images = [

        {
            original: 'https://e8df-139-135-38-220.ngrok.io/uploads/1674400839499.jpg',
            thumbnail: 'https://e8df-139-135-38-220.ngrok.io/uploads/1674400839499.jpg',
            renderItem: _renderImage
        },
        {
            original: 'https://www.youtube.com/embed/7rwILyEuDJw',
            thumbnail: "v2.png",
            renderItem: _renderVideo
        }
    ];
    const baseURL = "https://e8df-139-135-38-220.ngrok.io/tour/disneyland_paris_entrance_ticket";
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log('reponse', response.data.data)
            setDetailData(response.data.data);
            if (response.data.data.images) {
                let arr = [];
                for (let index = 0; index < response.data.data.images.length; index++) {
                    const element = response.data.data.images[index];
                    let obj = {
                        original: `https://e8df-139-135-38-220.ngrok.io/uploads/${element.url}`,
                        thumbnail: `https://e8df-139-135-38-220.ngrok.io/uploads/${element.url}`,
                        renderItem: _renderImage
                    }
                    arr.push(obj);
                    console.log("item", obj)
                }
                setImagesList(arr)
            }
        });
    }, []);


    return (
        <>
            <Head>
                <meta name="description" content="Viator" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Grid container style={{ width: '100%', padding: '1.5rem 1rem 1rem 1rem' }}>
                    <Typography variant='h1' sx={sx.title}>
                        Big Bus New York Hop-On Hop-Off Open Top Tour
                    </Typography>

                </Grid>
                <Grid container style={{ width: '100%', padding: '1rem' }} spacing={2}>
                    {imagesList.length > 0 &&

                        <Grid item xs={12} md={8}>
                            <ImageGallery
                                autoPlay={true} items={imagesList} showPlayButton={false} fullscreen showFullscreenButton={false} thumbnailPosition={'left'} />
                        </Grid>}
                    <Grid item xs={12} md={4}>
                        <Grid container style={{
                            background: '#F5F5F5',
                            borderRadius: '15px',
                            padding: '1rem'
                        }}>
                            <Grid container>
                                <Typography
                                    sx={sx.priceTitle}
                                >From AED {detailData?.price}</Typography>
                            </Grid>
                            <Grid container>
                                <Typography sx={sx.lowestPriceTitle}>Lowest Price Guarantee</Typography>
                            </Grid>
                            <Grid container>
                                <Divider style={{ width: '100%' }} />
                            </Grid>
                            <Grid container>
                                <Typography sx={sx.dateTitle}>Select Date and Travelers</Typography>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <DatePicker />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <ChoosePasangers />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Typography sx={sx.cancel}>
                                    Free cancellation
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography sx={sx.cardFooter}>
                                    Up to 24 hours in advance.Learn more
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={sx.menuListWidth}>
                        <CityTours />
                    </Grid>

                    <Grid item sx={sx.detailsList}>
                        <Grid container style={{ padding: '1rem' }}>

                            <Divider sx={{ width: '100%', }} />
                            <Grid container style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                                <Grid item md={3}>


                                    <Grid container>
                                        <Grid item>
                                            <AccessTimeIcon style={{ marginRight: "5px", color: "#186b6d" }} />

                                        </Grid>
                                        <Grid item>
                                            <Typography>
                                                1 hour 30 minutes (approx.)
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid item md={3}>


                                    <Grid container>
                                        <Grid item>
                                            <PhoneAndroidOutlinedIcon style={{ marginRight: "5px", color: "#186b6d" }} />

                                        </Grid>
                                        <Grid item>
                                            <Typography>
                                                1 hour 30 minutes (approx.)
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid item md={3}>


                                    <Grid container>
                                        <Grid item>
                                            <SmsOutlinedIcon style={{ marginRight: "5px", color: "#186b6d" }} />

                                        </Grid>
                                        <Grid item>
                                            <Typography>
                                                1 hour 30 minutes (approx.)
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>

                            </Grid>
                            <Divider sx={{ width: '100%', padding: '2rem 0rem rem 0rem' }} />

                        </Grid>
                        {/* <Grid container>
                            <PricingCard />
                        </Grid> */}
                        <Grid container>
                            <Overview overViewList={detailData.overviewList} overview={detailData.overview} reasonToChooseUs={detailData.reasonToChooseUs} />
                        </Grid>
                        <Grid container>
                            <WhatsIncluded includedItems={detailData.includedItems} />
                        </Grid>
                        <Grid container style={{ padding: "1rem" }}>

                            <Grid item xs={12} >
                                <Typography style={sx.title2} >
                                    Meeting And Pickup
                                </Typography>
                            </Grid>
                            {detailData.meeting?.filter((item) => item.status == true).map((item) => {
                                return <>
                                    <Grid item xs={12} >
                                        <Typography variant='h5' style={{ marginTop: "10px" }} >
                                            {item.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Typography  >
                                            {item.address}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Typography  >
                                            {item.note}
                                        </Typography>
                                    </Grid>
                                </>
                            })}

                        </Grid>
                        <Grid container>
                            <WhatToExpect />
                        </Grid>
                        <Grid container>
                            <AddationalInfo />
                        </Grid>
                        <Grid container>
                            <CancelationPolicy />
                        </Grid>
                        {/* <Grid container>
                            <FrequentlyAskedQuestion />
                        </Grid> */}
                    </Grid>
                </Grid>




            </main>
        </>
    );
};

export default Home;
