import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import './style.css';

const Footer = () => (
  <footer className="footer">
    <div className="copy-rihgt">
      <p className="footer-copyright">Copyright © 2021 Molla Store. All Rights Reserved.</p>
      <div className="footer-menu">
        <a href="#s">Terms Of Use |</a>
        <a href="#s">Privacy Policy</a>
      </div>
    </div>
    <div className="social-icons">
      <a href="#s" className="social-facebook">
        <FacebookIcon />
      </a>
      <a href="#s" className="social-twitter">
        <TwitterIcon />
      </a>
      <a href="#s" className="social-instagram">
        <InstagramIcon />
      </a>
      <a href="#s" className="social-pinterest">
        <PinterestIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
