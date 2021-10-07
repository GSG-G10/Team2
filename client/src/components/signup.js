import { useState } from 'react';
import {
  Grid, Paper, Avatar, Typography, TextField, Button,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const axios = require('axios');

const Signup = () => {
  const [data, setData] = useState({
    name: '', email: '', image: '', password: '', password2: '',
  });
  const [error, setError] = useState({
    name: false, email: false, image: false, password: false, password2: false,
  });
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const mediumRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');

  const handleError = (callback) => {
    if (data.name === '') {
      setError({
        name: true, email: false, image: false, password: false, password2: false,
      });
    } else if (data.email === '' || !emailRegex.test(data.email)) {
      setError({
        email: true, image: false, password: false, password2: false,
      });
    } else if (data.image === '') {
      setError({
        password: false, name: false, email: false, image: true, password2: false,
      });
    } else if (data.password === '' || !mediumRegex.test(data.password)) {
      setError({
        password: true, name: false, email: false, image: false, password2: false,
      });
    } else if (data.password !== data.password2) {
      setError({
        password2: true, name: false, email: false, image: false, password: false,
      });
    } else {
      setError({
        password2: false, name: false, email: false, image: false, password: false,
      });
      callback();
    }
  };

  const signupHandler = () => {
    handleError(() => {
      axios.post('/signup', {
        name: data.name,
        email: data.email,
        image: data.image,
        password: data.password,
        password2: data.password2,
      })
        .then((response) => {
          console.log(response);
        }, (err) => {
          console.log(err);
        });
    });
  };

  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const marginBtm = { marginBottom: 10 };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} />
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            className="input"
            style={marginBtm}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
            error={!!error.name}
            helperText={error.name ? 'This Field is required' : null}
          />
          <br />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            style={marginBtm}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
            error={!!error.email}
            helperText={error.email ? 'Enter valid email' : null}
          />

          <TextField
            fullWidth
            label="image url"
            placeholder="Enter your image url"
            style={marginBtm}
            onChange={(e) => {
              setData({ ...data, image: e.target.value });
            }}
            error={!!error.image}
            helperText={error.image ? 'This Field is required' : null}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            style={marginBtm}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
            error={!!error.password}
            helperText={error.password ? 'Enter valid password' : null}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            style={marginBtm}
            onChange={(e) => {
              setData({ ...data, password2: e.target.value });
            }}
            error={!!error.password2}
            helperText={error.password2 ? "password doesn't match" : null}
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button variant="contained" color="primary" onClick={signupHandler}>Sign up</Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
