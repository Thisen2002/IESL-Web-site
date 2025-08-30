import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        {/* 404 Number */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '6rem', md: '8rem' },
            fontWeight: 800,
            color: '#2c3e50',
            mb: 2,
            letterSpacing: '-0.02em',
          }}
        >
          404
        </Typography>

        {/* Error Message */}
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 600,
            color: '#34495e',
            mb: 1,
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            color: '#7f8c8d',
            mb: 4,
            maxWidth: '400px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          The page you're looking for doesn't exist. Let's get you back on track.
        </Typography>

        {/* Action Button */}
        <Button
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          onClick={() => navigate('/')}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: 2,
            textTransform: 'none',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
            },
          }}
        >
          Go Home
        </Button>
      </Container>
    </Box>
  );
}
