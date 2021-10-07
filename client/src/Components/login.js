import { useState } from 'react';
import {
  Grid, Paper, Avatar, TextField, Button, Typography, Link,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Redirect } from 'react-router-dom';

const axios = require('axios');

const Login = () => {
  const [data, setData] = useState({ username: '', password: '' });
  const [error, setError] = useState({ username: false, password: false });
  const [LoginError, setLoginError] = useState('');

  const [isLogin, setIsLogin] = useState(false);
  if (isLogin) {
    window.location.href = '/home';
  }
  const marginBtm = { marginBottom: 10 };
  const paperStyle = {
    padding: 20, height: '70vh', width: 280, margin: '20px auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };
  const handleError = (callback) => {
    if (data.username === '' && data.password === '') {
      setError({ username: true, password: true });
    } else if (data.username === '') {
      setError({ username: true, password: false });
    } else if (data.password === '') {
      setError({ username: false, password: true });
    } else {
      setError({ username: false, password: false });
      callback();
    }
  };

  const loginHandle = () => {
    handleError(() => {
      axios.post('/login', {
        username: data.username,
        password: data.password,
      })
        .then(() => {
          setIsLogin(true);
        }, () => {
          setLoginError('erorrrrrrr');
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
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          error={!!error.username}
          value={data.username}
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
          helperText={error.username ? 'This Field is required' : null}
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
          <Link to="/#">
            Sign Up
          </Link>
        </Typography>
      </Paper>
      {/* <Router> */}

      {isLogin ? <Redirect to="/somewhere/else" /> : null}
      {/* </Router> */}

    </Grid>
  );
};

export default Login;
