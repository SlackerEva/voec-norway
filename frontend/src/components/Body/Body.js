import './Body.css';
import Card from '../Card/Card';

function Body(props) {
  return (
    <div className='list'>
      {props.shops.map((shop, index) => {
          if (index < 5) {
            return <Card key={shop._id} shop={shop} />
          }
      })}
    </div>
  );
}

export default Body;