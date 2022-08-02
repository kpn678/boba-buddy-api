const express = require('express');
const app = express();
const cors = require('cors');
const shops = require('./data.js');

app.use(cors());
app.use(express.json());

app.locals.title = 'Boba Buddy API';
app.locals.shops = shops;

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/', (request, response) => {
  response.status(200).json(app.locals.shops);
});

