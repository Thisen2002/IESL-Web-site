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
import WorkIcon from '@mui/icons-material/Work';
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
        { name: 'Projects', path: '/projects', icon: WorkIcon },
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
                position="static"
                color="primary"
                sx={{
                    boxShadow: theme.shadows[1],
                    background: "linear-gradient(90deg, #193CB8 0%, #193CB8 100%)",
                    color: "#e4e7ebff",
                }}
            >
                <Toolbar sx={{ 
                    minHeight: { xs: 56, sm: 64 }, // Responsive toolbar height
                    px: { xs: 1, sm: 2 } // Responsive padding
                }}>
                    <img 
                        src="../Images/Uni logo.png" 
                        alt="Logo" 
                        style={{ 
                            height: isSmallMobile ? 32 : 40, // Smaller logo on very small screens
                            marginRight: isSmallMobile ? 8 : 16 
                        }} 
                    />
                    <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ 
                            flexGrow: 1,
                            fontSize: { xs: '0.9rem', sm: '1.25rem' }, // Responsive font size
                            lineHeight: { xs: 1.2, sm: 1.6 },
                            display: { xs: 'none', sm: 'block' } // Hide on very small screens
                        }}
                    >
                        IESL Student Chapter - University of Peradeniya
                    </Typography>
                    <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ 
                            flexGrow: 1,
                            fontSize: '0.8rem',
                            lineHeight: 1.1,
                            display: { xs: 'block', sm: 'none' } // Show only on very small screens
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
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                }
                            }}
                        >
                            <MenuIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    color="inherit"
                                    sx={{ 
                                        textTransform: 'none', 
                                        mx: 0.5,
                                        px: { md: 1, lg: 2 },
                                        fontSize: { md: '0.875rem', lg: '1rem' },
                                        backgroundColor: location.pathname === page.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.15)'
                                        }
                                    }}
                                >
                                    {page.name}
                                </Button>
                            ))}
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
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    sx: {
                        width: { xs: '100%', sm: 280 },
                        maxWidth: '100%',
                        mt: 1,
                        borderRadius: 2,
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                    }
                }}
                MenuListProps={{
                    sx: { py: 1 }
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
                                backgroundColor: isActive ? 'rgba(25, 60, 184, 0.08)' : 'transparent',
                                borderLeft: isActive ? '4px solid #193CB8' : '4px solid transparent',
                                '&:hover': {
                                    backgroundColor: 'rgba(25, 60, 184, 0.04)'
                                },
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <ListItemIcon sx={{ 
                                minWidth: 40,
                                color: isActive ? '#193CB8' : '#666'
                            }}>
                                <IconComponent fontSize="small" />
                            </ListItemIcon>
                            <ListItemText 
                                primary={page.name}
                                primaryTypographyProps={{
                                    fontWeight: isActive ? 600 : 400,
                                    color: isActive ? '#193CB8' : 'text.primary',
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