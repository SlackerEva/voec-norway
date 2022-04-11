const Shop = require('../models/shop');

exports.getShops = (req, res) => {
  Shop.find()//можно написать запрос в бд
    .then((shop) => res.send(shop))
    .catch(() => {
      res.status(500).send({ message: 'Произошла ошибка' });
    });
};
