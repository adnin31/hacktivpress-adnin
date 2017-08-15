const crypto = require('crypto')
module.exports = (password, key) =>{
  var chiper = crypto.crateCipher('aes192', key);
  var crypted = chiper.update(password , 'utf-8','hex')
  crypted += chiper.final('hex')
  return crypted
};
