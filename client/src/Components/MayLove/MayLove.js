import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './MayLove.css';

export default function MayLove() {
  return (
    <div>
      <Typography variant="h5">You May Love </Typography>
      <div className="card">
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://www.ikea.com/images/bror-system-08641cc19a88e6d0444de9d2b55b9d5e.jpg?f=xs"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BROR system
            </Typography>
            <Typography variant="body2" color="text.secondary">
              220$-550$
            </Typography>
          </CardContent>

        </Card>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://www.ikea.com/us/en/images/products/hemnes-6-drawer-chest-dark-gray-stained__0524637_pe644431_s5.jpg?f=xl"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wall shelf
            </Typography>
            <Typography variant="body2" color="text.secondary">
              99$-150$
            </Typography>
          </CardContent>

        </Card>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://www.ikea.com/us/en/images/products/misterhult-pendant-lamp-bamboo-handmade__0794605_pe765667_s5.jpg?f=xxs"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lights Room
            </Typography>
            <Typography variant="body2" color="text.secondary">
              100$-150$
            </Typography>
          </CardContent>

        </Card>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://www.ikea.com/us/en/images/products/buskbo-armchair-rattan-djupvik-white__0700959_pe723853_s5.jpg?f=xxs"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Chair Room
            </Typography>
            <Typography variant="body2" color="text.secondary">
              99$-150$
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  );
}
