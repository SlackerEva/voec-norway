import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import defImage from "../images/defaultPhoto.jpg";

function ShopCard({companyName, website}) {
/*  const { companyName, website } = props.shop;*/
  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{height: "100%"}}
      >
        <CardMedia 
          component="img"
          image={defImage}
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