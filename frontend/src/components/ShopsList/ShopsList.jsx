import './ShopsList.css';
import ShopCard from '../ShopCard/ShopCard';
import { Grid } from '@mui/material';

function ShopsList(props) {
  return (
    <Grid container spacing={2}>
      {props.shops.map((shop, index) => {
          if (index < 5) {
            return <ShopCard key={shop._id} shop={shop} />
          }
      })}
    </Grid>
  );
}

export default ShopsList;