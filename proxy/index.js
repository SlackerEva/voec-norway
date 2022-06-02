const proxy = require('express-http-proxy');
const app = require('express')();  

app.use('/images', proxy('http://localhost:3002')); 
app.use('/storage', proxy('http://localhost:3002/storage')); 
app.use('/', proxy('http://localhost:3000')); 

const PORT = 2500;

async function main() {
  await app.listen(PORT);
}

main();
