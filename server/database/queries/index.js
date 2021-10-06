const addUserQuery = require('./addUserQuery');
const getProductslast4Query = require('./getProductslast4Query');
const getCategoryQuery = require('./getCategoryQuery');
const getSingleProduct = require('./getSingleProduct');
const addCartQuery = require('./addCartQuery');
const getCartQuery = require('./getCartQuery');
const clearCartQuery = require('./clearCartQuery');
const deleteCartQuery = require('./deleteCartQuery');

module.exports = {
  addUserQuery,
  addCartQuery,
  getCartQuery,
  clearCartQuery,
  deleteCartQuery,
  getSingleProduct,
  getProductslast4Query,
  getCategoryQuery,
};
