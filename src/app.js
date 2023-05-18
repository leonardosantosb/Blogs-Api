const express = require('express');
const categoryController = require('./controllers/categoryController');
const userController = require('./controllers/userController');
const blogPostController = require('./controllers/blogPostController');
const { categoryValidator } = require('./middlewares/categoryValidator');
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

app.post('/categories', tokenValidator, categoryValidator, categoryController.createCategory);

app.get('/categories', tokenValidator, categoryController.getAll);

app.get('/post', tokenValidator, blogPostController.getAll);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
