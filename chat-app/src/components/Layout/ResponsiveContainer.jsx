
import { Box, useTheme, useMediaQuery } from '@mui/material';

const ResponsiveContainer = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        padding: isMobile ? '1rem' : '2rem',
        maxWidth: {
          sm: '540px',
          md: '720px',
          lg: '1140px',
        },
        margin: '0 auto',
      }}
    >
      {children}
    </Box>
  );
};

export default ResponsiveContainer;