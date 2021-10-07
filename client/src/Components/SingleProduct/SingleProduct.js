import { useEffect, useState } from 'react';

const axios = require('axios');
// import MayLove from '../MayLove/MayLove';

function SingleProduct() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/product/2')
      .then((datas) => setData(datas))
      .catch((err) => console.log(err));
  });

  return (

    <div>
      {console.log(data)}
      {/* <MayLove /> */}
    </div>
  );
}
export default SingleProduct;
