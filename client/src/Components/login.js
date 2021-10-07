import { useState } from 'react';
import {
  Grid, Paper, Avatar, TextField, Button, Typography, Link,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const axios = require('axios');

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: false, password: false });
  const [LoginError, setLoginError] = useState('');

  const [isLogin, setIsLogin] = useState(false);
  if (isLogin) {
    window.location.href = '/';
  }
  const marginBtm = { marginBottom: 10 };
  const paperStyle = {
    padding: 20, height: '70vh', width: 280, margin: '20px auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };

  const handleError = (callback) => {
    if (data.email === '' && data.password === '') {
      setError({ email: true, password: true });
    } else if (data.email === '') {
      setError({ email: true, password: false });
    } else if (data.password === '') {
      setError({ email: false, password: true });
    } else {
      setError({ email: false, password: false });
      callback();
    }
  };

  const loginHandle = () => {
    handleError(() => {
      axios.post('/api/v1/login', {
        email: data.email,
        password: data.password,
      })
        .then(() => {
          setIsLogin(true);
        }, () => {
          setLoginError('email or email not valid');
        });
    });
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} />
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="email"
          placeholder="Enter email"
          fullWidth
          required
          error={!!error.email}
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          helperText={error.email ? 'This Field is required' : null}
          style={marginBtm}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          error={!!error.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          helperText={error.password ? 'This Field is required' : null}
        />
        <FormControlLabel
          control={(
            <Checkbox
              name="checkedB"
              color="primary"
            />
                  )}
          label="Remember me"
        />
        <Typography style={{ color: 'red' }}>

          {LoginError}
        </Typography>
        <Button type="submit" color="primary" variant="contained" style={btnstyle} onClick={loginHandle} fullWidth>Sign in</Button>
        <Typography>
          <Link to="/#">
            Forgot password ?
          </Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link to="/singup">
            Sign Up
          </Link>
        </Typography>
      </Paper>

    </Grid>
  );
};

export default Login;
