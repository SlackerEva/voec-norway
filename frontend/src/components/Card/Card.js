import './Card.css';

function Card(props) {
  console.log(props.shop);
  return (
    <div className='card'>
      <p className='countryName'>{props.shop.companyName}</p>
      <div className='img-site'>{props.shop.website}</div>
    </div>
  );
}

export default Card;