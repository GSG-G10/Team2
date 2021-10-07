/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Card from './card';
import './categoryPage.css';

const CategoryItems = ({ categoryId }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState([]);

  console.log(items, 'before');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(`/api/v1/product/category/${categoryId}`);
        setItems(res.data.data);
      } catch (e) {
        setError(...error, e);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <div className="container">
        {items.map((item) => (
          <Card
            imgUrl={item.imgurl}
            title={item.name}
            price={item.price}
            rate={item.rate}
          />
        ))}
      </div>

    </>
  );
};

CategoryItems.propTypes = {
  categoryId: PropTypes.number.isRequired,

};

export default CategoryItems;
