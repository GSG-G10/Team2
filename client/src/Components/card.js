import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

const CardProduct = ({
  imgUrl, title, price, rate,
}) => (
  <>
    <Card sx={{
      maxWidth: 200, height: 380, boxShadow: 'none', margin: '10px',
    }}
    >
      <CardMedia
        component="img"
        height="230"
        image={imgUrl}
        alt="green iguana"
      />
      <CardContent sx={{ paddingTop: '10px', paddingBottom: 0 }}>
        <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: '1rem' }} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          sx={{
            display: 'flex', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: 'black',
          }}
          variant="body2"
          color="text.secondary"
        >
          {`${price}$`}
        </Typography>
        <Rating name="read-only" sx={{ display: 'flex', justifyContent: 'center', fontSize: '1.3rem' }} value={rate} readOnly />

      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', paddingTop: 0 }}>

        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  </>

);
CardProduct.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,

<<<<<<< HEAD
CardProduct.propTypes = {

  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,

=======
>>>>>>> 74589dccca48fa72e6db5eeaf78492ee74ffc51c
};
export default CardProduct;
