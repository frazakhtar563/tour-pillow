import Button from '@mui/material/Button';
import { Container, useTheme, Theme, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';

const Detail = () => {
    const theme = useTheme();

    return <div>
        <Grid container >
            <Typography style={{ fontSize: "1.75rem", fontWeight: "600" }} >Overview</Typography>
        </Grid>
        <Grid container justifyContent={'center'}>
            <Typography variant='p' >See the highlights of New York City without the hassle of navigating traffic or public transportation by booking a Big Bus tour. The hop-on hop-off tour enables busy travelers to relax and enjoy the sights from the double-decker bus. Along the way, you can choose the attractions that interest you most rather than being caught up on a group tour.</Typography>

        </Grid>

    </div>;
};

export default Detail;
