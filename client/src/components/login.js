import React,{useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
// import LockOutlinedIcon from '@mui/material/icons/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Login=()=>{
    const [data, setData] = useState({username:'',password:''})
    const [error, setError] = useState({username:false,password:false})


    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const handleError = () => { 
        if (data.username === '' && data.password === '' ) {
            setError({username:true,password:true})
        }else if(data.username === '') {
            setError({username:true,password:false})
        }else if(data.password === '') {
            setError({username:false,password:true})
        }else{
            setError({username:false,password:false})
        }
    }

    const loginHandle = () => {
        handleError()
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}>
                     </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required error={error.username ? true : false} value={data.username}  onChange={(e)=>{
                        
                    setData({...data,username:e.target.value})
                }} helperText={error.username ? 'This Field is required':null}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required error={error.password ? true : false} onChange={(e)=>{
                    setData({...data,password:e.target.value})
                }} helperText={error.password ? 'This Field is required':null}/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={loginHandle} fullWidth >Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;