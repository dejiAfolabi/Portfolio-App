import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HeroSection from './HeroSection.jsx';
import Companies from './Companies.jsx';
import Cards from './Card.jsx';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { icon: <FolderCopyIcon />, text: 'Page' },
    { icon: <AccountCircleIcon />, text: 'Account' },
    { icon: <InsertDriveFileIcon />, text: 'Docs' }
  ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {navigationItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button>
          <ListItemText primary="SIGN IN" />
        </ListItem>
        <ListItem>
          <Button 
            fullWidth
            sx={{
              color: '#fff',
              backgroundColor: '#000',
              borderRadius: '10px',
              padding: '8px 16px'
            }}
          >
            Blocks
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <AppBar position="static" sx={{ color: 'black', backgroundColor: '#fff', boxShadow: 'none' }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ 
                flexGrow: 1, 
                fontWeight: 'bold',
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              Deji Afolabi
            </Typography>
            
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {navigationItems.map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {item.icon}
                    <Typography variant="body2">{item.text}</Typography>
                  </Box>
                ))}
                <Button color="inherit" sx={{ ml: 2 }}>SIGN IN</Button>
                <Button sx={{
                  color: '#fff',
                  backgroundColor: '#000',
                  borderRadius: '10px',
                  padding: '5px 15px',
                  ml: 1
                }}>Blocks</Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
        <HeroSection />
        <Companies />
      </Container>

    </Box>
  );
}

export default Header