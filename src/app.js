const express = require('express');
const categoryController = require('./controllers/categoryController');
const userController = require('./controllers/userController');
const { tokenValidator } = require('./middlewares/tokenValidator');
const { userValidator, OneValidator } = require('./middlewares/userValidator');

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

app.get('/user/:id', tokenValidator, OneValidator, userController.getOne);

app.post('/categories', tokenValidator, categoryController.createCategory);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
