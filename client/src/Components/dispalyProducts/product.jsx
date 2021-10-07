import PropTypes from 'prop-types';

const Product = ({ productsToRender }) => (

  <ul>
    {productsToRender.map((post) => (
      <li key={post.id}>
        <strong>{post.id}</strong>
          &nbsp;
        {post.movieName}
      </li>
    ))}
  </ul>

);

Product.propTypes = {
  productsToRender: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    movieName: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    imdbLink: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,

  })).isRequired,

};
export default Product;
