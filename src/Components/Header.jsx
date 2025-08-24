import * as React from 'react';
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
import HeroSection from './HeroSection.jsx';
import Companies from './Companies.jsx';
import Cards from './Card.jsx';
function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth='md'>
        <AppBar position="static" sx={{ color: 'black', backgroundColor: '#fff', boxShadow: 'none' }}>
          <Toolbar>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, fontWeight: 'bold' }}
                >
                  Deji Afolabi
                </Typography>


              </Grid>
              <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <FolderCopyIcon />
                  <Typography sx={{
                    display: 'flex',
                    marginRight: '10px',
                  }}>
                    Page
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <AccountCircleIcon />
                  <Typography sx={{
                    display: 'flex',
                    marginRight: '10px',
                  }}>
                    Account
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <InsertDriveFileIcon />
                  <Typography>
                    Docs
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>

              </Grid>
            </Grid>
            <Button color="inherit" sx={{ marginLeft: 'auto', }}>SIGN IN</Button>
            <Button sx={{
              color: '#fff',
              backgroundColor: '#000',
              marginLeft: '10px',
              borderRadius: '10px',
              padding: '5px 15px'
            }}>Blocks</Button>
          </Toolbar>
        </AppBar>
        <HeroSection />
        <Companies />
      </Container>

    </Box>
  );
}

export default Header