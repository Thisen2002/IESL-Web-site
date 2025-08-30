import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function AppBar1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  // Define pages for navigation with icons
  const pages = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About', path: '/about', icon: InfoIcon },
    { name: 'Events', path: '/events', icon: EventIcon },
    { name: 'Registrations', path: '/registrations', icon: EventIcon },
    { name: 'Contact Us', path: '/contactUs', icon: ContactMailIcon }
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(25, 60, 184, 0.85)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          color: '#fff',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 1, sm: 2 }
          }}
        >
          <img
            src="../Images/Uni logo.png"
            alt="Logo"
            style={{
              height: isSmallMobile ? 32 : 42,
              marginRight: isSmallMobile ? 8 : 16,
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: { xs: '0.9rem', sm: '1.25rem' },
              fontWeight: 600,
              display: { xs: 'none', sm: 'block' },
              letterSpacing: '0.5px'
            }}
          >
            IESL Student Chapter - University of Peradeniya
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: '0.85rem',
              fontWeight: 600,
              display: { xs: 'block', sm: 'none' }
            }}
          >
            IESL - UoP
          </Typography>
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{
                p: { xs: 1, sm: 1.5 },
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.15)' }
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {pages.map((page) => {
                const isActive = location.pathname === page.path;
                return (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    color="inherit"
                    sx={{
                      position: 'relative',
                      textTransform: 'none',
                      fontWeight: isActive ? 600 : 500,
                      mx: 0.5,
                      px: { md: 1.5, lg: 2 },
                      fontSize: { md: '0.9rem', lg: '1rem' },
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: isActive ? '100%' : '0%',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: '#fff',
                        transition: 'width 0.3s ease-in-out'
                      },
                      '&:hover:after': { width: '100%' }
                    }}
                  >
                    {page.name}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 280 },
            borderRadius: 3,
            mt: 1,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            overflow: 'hidden'
          }
        }}
      >
        {pages.map((page) => {
          const IconComponent = page.icon;
          const isActive = location.pathname === page.path;

          return (
            <MenuItem
              key={page.name}
              component={Link}
              to={page.path}
              onClick={handleMenuClose}
              sx={{
                py: 1.5,
                px: 2,
                borderLeft: isActive ? '4px solid #fff' : '4px solid transparent',
                backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.15)'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: isActive ? '#fff' : '#ddd' }}>
                <IconComponent fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={page.name}
                primaryTypographyProps={{
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '0.95rem'
                }}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
