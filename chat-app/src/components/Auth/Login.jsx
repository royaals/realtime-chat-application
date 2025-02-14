import  { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h5">Login</Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        value={credentials.email}
        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;