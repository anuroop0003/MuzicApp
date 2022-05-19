import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Albums } from './Data/data';
import { Box, color } from '@mui/system';

export default function MainPage() {
  return (
    <Box sx={{display:"flex", flexWrap:"wrap", gap:"39px", mx:"8px", backgroundColor:"black"}}>
        {Albums.map((album) =>
        <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          image={album.album}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
            {album.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>)}
    </Box>
  );
}
