const dotenv = require('dotenv');
dotenv.config();

console.log(`This is a secret message: ${process.env.secret}`);

module.exports = {
    goodReadsKey: process.env.GRKEY
}