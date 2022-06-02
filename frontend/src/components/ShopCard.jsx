import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import defImage from "../images/defaultPhoto.jpg";
//import cardImg from "../../../backend/statics/Ableton AG.png";



function ShopCard({companyName, website, imgPath}) {
/*  const { companyName, website } = props.shop;*/
//  let cardImg = "../images/" + companyName + ".png";
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{height: "100%"}}>
        <CardMedia 
          component="img"
          //src="/static/media/defaultPhoto.fe985ad3.jpg"
          image={imgPath || defImage}
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