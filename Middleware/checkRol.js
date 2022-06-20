const jwt = require('jsonwebtoken');
const usuarios = require('../data/Usuarios');

const checkRols = (...roles) => async (req, _res, next) => {
    try{
      const token = req.header('Authorization')?.replace('Bearer ', '');
      const response = jwt.verify(token, process.env.SECRET);
      const user = await usuarios.getUsuarioById(response._id);
      console.log('user')
      console.log(user)
      if (roles.includes(user.rol)) {
        next();
      } else {
        _res.status(401).send({error: 'No está autorizado'});
      }
    } catch(e){
        _res.status(401).send({error: 'No está autorizado2'});
    }    
};

module.exports = {checkRols};