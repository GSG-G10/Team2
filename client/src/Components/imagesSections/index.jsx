import './style.css';
import IMG1 from '../../assets/img1.webp';
import IMG2 from '../../assets/img2.webp';
import IMG3 from '../../assets/img3.webp';
import IMG4 from '../../assets/img4.webp';
import Image from '../ImgaesComponent';

const ImagesSection = () => (
  <div className="conatiner">
    <section className="image-container section-one">
      <Image src={IMG1} alt="no" className="img" />
      <p className="paragraph">
        LED ceiling lamp,
        {' '}
        {' '}
        <br />
        wireless dimmable
      </p>
    </section>

    <section className="section-two">
      <article className="image-container top">
        <Image src={IMG2} alt="no" className="img" />
        <p className="paragraph">
          LED ceiling lamp,
          {' '}
          {' '}
          <br />
          wireless dimmable
        </p>
      </article>
      <article className="down">
        <article className="image-container sub">
          <Image src={IMG3} alt="no" className="img" />
          <p className="paragraph">
            LED ceiling lamp,
            {' '}
            {' '}
            <br />
            wireless dimmable
          </p>
        </article>
        <article className="image-container sub2">
          <Image src={IMG4} alt="no" className="img" />
          <p className="paragraph">
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

export default ImagesSection;
