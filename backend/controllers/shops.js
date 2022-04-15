const Shop = require('../models/shop');

exports.getShops = (req, res) => {
  Shop.find().limit(20)
    .then((shop) => {    
      console.log(shop);
      res.send(shop)}
    )
    .catch(() => {
      res.status(500).send({ message: 'Произошла ошибка' });
    });
};
