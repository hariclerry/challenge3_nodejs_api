const userController = require('../controllers/userController');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Weconnect API!',
  }));

  app.post('/api/users/register', userController.register);
  app.post('/api/users/login', userController.signin);
};