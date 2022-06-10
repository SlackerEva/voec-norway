import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import defImage from "../images/defaultPhoto.jpg";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase/index';
import React, {useState} from 'react';


function ShopCard({companyName, website, imgPath}) {
  const [imgUrl, setImgUrl] = useState('');

  function getPuth(imgPath) {
    if (imgPath) {
      const spaceRef = ref(storage, imgPath);
      getDownloadURL(spaceRef)
       .then((url) => {
          setImgUrl(url);
 //         console.log(url);
        })
      return imgUrl;
    }
    return defImage
  }

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{height: "100%"}}>
        <CardMedia 
          component="img"
          image={getPuth(imgPath)}
          alt={companyName} 
          title={companyName}
          sx={{ height: 140}}
        />
        <CardContent>
          <Typography>
            {companyName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={"https://"+website} target="_blank">
            {website}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ShopCard;