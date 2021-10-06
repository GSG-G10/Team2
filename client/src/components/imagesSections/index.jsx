import './style.css';
import IMG1 from '../../assets/img1.webp';
import IMG2 from '../../assets/img2.webp';
import IMG3 from '../../assets/img3.webp';
import IMG4 from '../../assets/img4.webp';

const ImagesSection = () => (
  <div className="conatiner">
    <section className="section-one">
      <img src={IMG1} alt="no" className="img-one" />
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
        <img src={IMG2} alt="no" className="img-two" />
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
          <img src={IMG3} alt="no" className="img-three" />
          <p className="p-three">
            LED ceiling lamp,
            {' '}
            {' '}
            <br />
            wireless dimmable
          </p>
        </article>
        <article className="sub2">
          <img src={IMG4} alt="no" className="img-four" />
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

export default ImagesSection;
