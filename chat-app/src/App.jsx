
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import store from './store';
import ResponsiveContainer from './components/Layout/ResponsiveContainer';
import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Auth/Login';
import ChatInterface from './components/Chat/ChatInterface';
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Router>
            <ResponsiveContainer>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <ChatInterface />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </ResponsiveContainer>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}

export default App;