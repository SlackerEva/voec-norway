const Shop = require('../models/shop');

exports.getShops = (req, res) => {
  Shop.find().limit(20)
    .then((shops) => { 
      res.send(shops)}
    )
    .catch(() => {
      res.status(500).send({ message: 'Произошла ошибка' });
    });
};

exports.getCountriesCode = (req, res) => {
  Shop.distinct("countryCode")
    .then((codes) => {    
      res.send(codes)}
    )
    .catch(() => {
      res.status(500).send({ message: 'Произошла ошибка' });
    });
};

exports.getFilteredShops = (req, res) => {
  let data = [...req.body.codes];
  let countries = data.reduce((AllCountry, country) => {
    AllCountry.push(country.code + " - " + country.country)
    return AllCountry;
  }, []);

  Shop.find({ countryCode: { $in: countries} } )
    .then((shops) => {   
      console.log(shops); 
      res.send(shops)}
    )
    .catch(() => {
      res.status(500).send({ message: 'Произошла ошибка' });
    });
};

exports.getImageFromStorage = (req, res) => {
   console.log(req.url);
   res.status(200).send();
};
