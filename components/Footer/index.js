import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image'

import Logo from "../../assets/icons/logo.svg"
import { Grid } from '@mui/material';




function Footer() {




    return (
        <Box sx={{ p: 2, backgroundColor: 'black' }}>
            <Grid container style={{ display: "flex", justifyContent: "space-between" }}>
                <Grid item>
                    <Typography style={{ color: "white" }}>Tour Pillow</Typography>

                </Grid>
                <Grid item>
                    <Typography style={{ color: "white" }}>All rights reserved © 2023 by tour pillow</Typography>


                </Grid>
            </Grid>
        </Box>
    );
}
export default Footer;
