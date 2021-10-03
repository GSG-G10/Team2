const connection = require('../connection');

const addUser = (name, email, password) => {
  const sql = {
    text: 'INSERT INTO users (username, password, email) VALUES($1,$2,$3) RETURNING *',
    values: [username, password, email],
  };

  return connection.query(sql);
};
module.exports = addUser;
