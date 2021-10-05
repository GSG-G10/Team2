const connection = require('../connection');

const filterItems = (keyword, value, categoryId) => {
  const sql = {
    text: ` SELECT I.imgUrl, P.* FROM Category C INNER JOIN Product P ON P.category_id = C.id  INNER JOIN item I ON P.id= I.product_id  WHERE P.${keyword} = $1 AND P.category_id = ${categoryId}  `,

    values: [value],
  };

  return connection.query(sql);
};

module.exports = filterItems;
