const User =  require('../models').User;

const register = (req, res) => {
  return User
    .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    .then( regUser => res.status(201).send(regUser))
    .catch(error => res.status(400).send(error));
}

const signin = (req, res) => {
  User.findOne({
    where: { email: req.body.email }
  }).then(user => {
		if (!user) {
			return res.status(404).send('User Not Found.');
		}
		
		res.status(200).send('Login successful');
		
  }).catch(error => res.status(400).send(error));
}
  
  module.exports = {
    register,
    signin
  };