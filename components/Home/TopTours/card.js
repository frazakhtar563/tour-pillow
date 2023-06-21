import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import topTour1 from "../../../assets/images/tt1.jpg";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 ,margin:'0px 20px'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="190"
        image={'https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/f0/89/9b.jpg'}
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      Las Vegas, Nevada
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Las Vegas Helicopter Night Flight with Optional VIP Transportation
        </Typography>
       
      </CardContent>
      
    </Card>
  );
}