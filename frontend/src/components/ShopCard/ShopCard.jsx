import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import './ShopCard.css';
import defImage from "../../images/defaultPhoto.jpg";

function ShopCard(props) {
  const { companyName, website } = props.shop;

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
          <Button size="small">{website}</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ShopCard;