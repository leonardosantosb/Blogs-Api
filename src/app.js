const express = require('express');
const userController = require('./controllers/userController');
const { tokenValidator } = require('./middlewares/tokenValidator');
const { userValidator } = require('./middlewares/userValidator');

// ...

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', userController.login);

app.post('/user', userValidator, userController.createUser);

app.get('/user', tokenValidator, userController.getAll);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
