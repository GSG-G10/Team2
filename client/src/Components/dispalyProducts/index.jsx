import { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../../contect/productsContext';
import Product from './product';

const productsPerPage = 3;
let arrayForHoldingProduds = [];
const DisplayProduct = () => {
  const Data = useContext(ProductContext);
  const { product } = Data;
  const [productsToShow, setProductsToShow] = useState([{
    id: 7,
    movieName: 'name of movie',
    rate: '8.5',
    imdbLink: 'link',
    details: 'some movie description',
    likes: 33,
  }]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedProduts = product.slice(start, end);
    arrayForHoldingProduds = [...arrayForHoldingProduds, ...slicedProduts];
    setProductsToShow(arrayForHoldingProduds);
  };

  useEffect(() => {
    loopWithSlice(0, productsPerPage);
  }, []);

  const handleShowMoreProducts = () => {
    loopWithSlice(next, next + productsPerPage);
    setNext(next + productsPerPage);
  };

  return (
    <div>
      <Product productsToRender={productsToShow} />
      <button type="submit" onClick={handleShowMoreProducts}>Load more</button>
    </div>
  );
};

export default DisplayProduct;
