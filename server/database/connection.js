const {Pool} = require('pg')
require('env2')('../config.env')
const DB_Url = process.env.DB_Url;


const options = {
    connectionString: DB_Url,
    ssl: { rejectUnauthorized: false },
  };
  
  module.exports = new Pool(options);