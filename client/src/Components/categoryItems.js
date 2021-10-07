/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './card';
import './categoryPage.css';

const CategoryItems = () => {
  const [items, setItems] = useState([]);

  console.log(items, 'before');

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get('/api/v1/product/category/1');
      setItems(res.data.data);
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

export default CategoryItems;
