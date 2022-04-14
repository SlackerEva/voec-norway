import { Grid } from '@mui/material';
import './ShopCard.css';

function ShopCard(props) {
  const { companyName, website } = props.shop;

  return (
    <Grid item xs={12} md={4}>
      <p className='countryName'>{companyName}</p>
      <div className='img-site'>{website}</div>
    </Grid>
  );
}

export default ShopCard;