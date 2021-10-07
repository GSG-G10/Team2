/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ProductContext = React.createContext();

const placeholderImage = 'https://via.placeholder.com/300';

const productList = [
  {
    id: 1,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '7.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 2,
  },
  {
    id: 2,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '8.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 32,
  },
  {
    id: 3,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '7.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 25,
  },
  {
    id: 4,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '8.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 33,
  },
  {
    id: 5,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '8.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 33,
  },
  {
    id: 6,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '8.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 33,
  },
  {
    id: 7,
    movieName: 'name of movie',
    poster: placeholderImage,
    rate: '8.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 33,
  },
];
const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(productList);
  useEffect(() => {
    axios.get('/api/v1/getlast4/1')
      .then((response) => {
        console.log('resss', response.data.data);
        // setProduct(response.data);
      })
      .catch((err) => console.log('errrror', err));
  }, []);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
ProductProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProductProvider;
