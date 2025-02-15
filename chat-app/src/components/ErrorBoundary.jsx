import React from 'react';
import { Alert, Button } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert 
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => window.location.reload()}>
              RELOAD
            </Button>
          }
        >
          Something went wrong. Please try again.
        </Alert>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;