import jsonwebtoken from 'jsonwebtoken';
import config from '../config/config.json' assert {type: 'json'};

const createJWT = payload => {
   return jsonwebtoken.sign(payload, config.jwt.secret_key, {
      expiresIn: config.jwt.expiresIn,
   });
};
export default createJWT;