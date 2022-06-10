import ShopCard from './ShopCard';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

function ShopsList() {
  const shops = useSelector(state => state.shops.shops);

  return (
    <Grid container spacing={2}>
      {shops.map((shop) => {
        return <ShopCard key={shop._id} {...shop} />
      })}
    </Grid>
  );
}

export default ShopsList;