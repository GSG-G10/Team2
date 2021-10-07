import { useEffect, useState } from 'react';
import CardProduct from '../card';
import MayLove from '../MayLove/MayLove';

const axios = require('axios');
// import MayLove from '../MayLove/MayLove';

function SingleProduct() {
  const [data, setData] = useState({});
  console.log(data);
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/product/2')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (

    <div>
      <CardProduct imgUrl={data.imgurl} title={data.name} price={data.price} rate={data.rate} />

      <MayLove />
    </div>
  );
}
export default SingleProduct;
