import ShopCard from './ShopCard';
import { Grid } from '@mui/material';

function ShopsList(props) {
  return (
    <Grid container spacing={2}>
      {props.shops.map((shop) => {
        return <ShopCard key={shop._id} shop={shop} />
      })}
    </Grid>
  );
}

export default ShopsList;