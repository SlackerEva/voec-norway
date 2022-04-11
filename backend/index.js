const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { errors } = require('celebrate');
const {shopsRoutes} = require('./routes/shops');

dotenv.config();

const { PORT = 3002, MONGO_URL = 'mongodb://localhost:27017/voec' } = process.env;
const app = express();

app.use(cors()); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(shopsRoutes);

app.use((req, res, next) => {
  res.status(404).send({ message: 'Ресурс не найден!' });
  next();
});

app.use(errors());

async function main() {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  });

  await app.listen(PORT);
}

main();