import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/authSlice';

const Login = () => {
  const [credentials, setCredentials] = useState({ identifier: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error, token } = useSelector((state) => state.auth);

  useEffect(() => {
    // If user is already logged in, redirect to home
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login(credentials)).unwrap();
      if (result) {
        navigate('/');
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        mt: 4,
        maxWidth: '400px',
        mx: 'auto',
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'white'
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>Login</Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        value={credentials.identifier}
        onChange={(e) => setCredentials({...credentials, identifier: e.target.value})}
        required
      />
      
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        required
      />
      
      <Button 
        type="submit" 
        variant="contained" 
        fullWidth 
        sx={{ mt: 3 }}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Logging in...' : 'Login'}
      </Button>
    </Box>
  );
};

export default Login;