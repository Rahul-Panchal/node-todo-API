const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// var data = {
//   id:10
// };
//
// var token = jwt.sign(data,'salt123');
// console.log(token);
//
// var decoded = jwt.verify(token,'salt123');
// console.log('Decoded value' ,decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message : ${message}`);
// console.log(`HAsh : ${hash}`);

// var data = {
//   id:4
// };
//
// var token = {
//   data,
//   hash : SHA256(JSON.stringify(data)+'somesecretsaltvalue').toString()
// };

//testing for manipulation
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data)+'somesecretsaltvalue').toString();
//
// if(resultHash === token.hash){
//   console.log('Data was not changed');
// }else{
//   console.log('Data manipulated');
// }

var password = 'salt123';

// bcrypt.genSalt(10,(err,salt) => {
//   bcrypt.hash(password ,salt, (err, hash) => {
//     console.log(hash)
//   });
// });

var hashedPassword = '$2a$10$VkKqq5NWXBorFPHebCLRZ.Wt7aKpHlmhTh3WElcfmqsMk5e9YTB6K';
bcrypt.compare(password,hashedPassword,(err,res) => {
  console.log(res);
});
