import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { Container, useTheme, Theme, Typography, Grid } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import b1 from "../assets/images/b1.jpg";
import b2 from "../assets/images/b2.jpg";
import b3 from "../assets/images/b3.jpg";
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { useState } from 'react';
import WhyWithUs from "../components/Home/WhyWithUs/index";
import HotDestinations from "../components/Home/HotDestinations/index";
import TopDestinations from "../components/Home/TopDestinations/index";
import FlexibleMessage from "../components/Home/FlexibleMessage/index";
import TopTours from "../components/Home/TopTours/index";
import Detail from '../components/Detail/detail';
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
    fontSize: '1.75rem',
    lineHeight: '1.2rem',
    paddingBottom: '0.5rem',
    textAlign: 'center',
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
    },

  }

});

const Home = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  const [index, setIndex] = useState(0)
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
  return (
    <>
      <Head>
        <title>Viator</title>
        <meta name="description" content="Viator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/*Home Page {header - slider} - start  */}
        <Slider {...settings}>
          {[b1, b3, b2].map((item) => {
            return <div>
              <div style={{
                width: '100vw',
                height: '400px',
                position: 'relative'
              }} >

                <Image
                  src={item}
                  alt="carousel"
                  fill
                />
              </div>
            </div>
          })}

        </Slider>
        <Grid container style={{ position: 'absolute', zIndex: 1200, top: '20%', left: '0', width: '100%' }}>
          <Grid item xs={12}>
            <Grid container justifyContent={'center'}>
              <Typography variant='h1' sx={sx.heading}>Do more with Viator</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent={'center'}>
              <Typography variant='p' sx={sx.headingBody}>One site, 300,000+ experiences you'll remember.</Typography>

            </Grid>
          </Grid>

          <Grid item xs={12}>
            {/* search field here */}
          </Grid>
        </Grid>
        {/*Home Page {header - slider} - end */}

        {/* Home page {why book with us } - start */}

        <Grid container sx={{ mt: 5 }}>
          <Grid item xs={12}><Grid container justifyContent={'center'}><Typography variant='h2' sx={sx.title} >Why book with Viator?</Typography></Grid></Grid>
        </Grid>
        <WhyWithUs />

        {/* Home page {why book with us } - end */}

        {/* Home page {top attractive } - start */}

        <Grid container sx={{ mt: 5 }}>
          <Grid item xs={12}><Grid container justifyContent={'center'}><Typography variant='h2' sx={sx.title} >Top Destinations</Typography></Grid></Grid>
        </Grid>
        <TopDestinations />

        {/* Home page {top attractive } - end */}
        <FlexibleMessage />
        <Grid container sx={{ mt: 5 }}>
          <Grid item xs={12}><Grid container justifyContent={'center'}><Typography variant='h2' sx={sx.title} >Top Attractions</Typography></Grid></Grid>
        </Grid>
        <HotDestinations />

        <Grid container sx={{ mt: 5 }}>
          <Grid item xs={12}><Grid container justifyContent={'center'}><Typography variant='h2' sx={sx.title} >Top Tours</Typography></Grid></Grid>
        </Grid>
        <TopTours />

      </main>
    </>
  )
}

export default Home;