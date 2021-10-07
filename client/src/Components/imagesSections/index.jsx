import { useContext } from 'react';
import './style.css';
import IMG1 from '../../assets/img1.webp';
import IMG2 from '../../assets/img2.webp';
import IMG3 from '../../assets/img3.webp';
import IMG4 from '../../assets/img4.webp';
import Image from '../ImgaesComponent';
import { ProductContext } from '../../contect/productsContext';

const ImagesSection = () => {
  const Data = useContext(ProductContext);
  const { product } = Data;
  // eslint-disable-next-line no-console
  console.log(product);
  return (
    <div className="conatiner">
      <section className="section-one">
        <Image src={IMG1} alt="no" className="img-one" />
        <p className="p-one">
          LED ceiling lamp,
          {' '}
          {' '}
          <br />
          wireless dimmable
        </p>
      </section>

      <section className="section-two">
        <article className="top">
          <Image src={IMG2} alt="no" className="img-two" />
          <p className="p-two">
            LED ceiling lamp,
            {' '}
            {' '}
            <br />
            wireless dimmable
          </p>
        </article>
        <article className="down">
          <article className="sub">
            <Image src={IMG3} alt="no" className="img-three" />
            <p className="p-three">
              LED ceiling lamp,
              {' '}
              {' '}
              <br />
              wireless dimmable
            </p>
          </article>
          <article className="sub2">
            <Image src={IMG4} alt="no" className="img-four" />
            <p className="p-four">
              LED ceiling lamp,
              {' '}
              {' '}
              <br />
              wireless dimmable
            </p>
          </article>
        </article>
      </section>

    </div>
  );
};

export default ImagesSection;
