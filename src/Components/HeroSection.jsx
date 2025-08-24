import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
function HeroSection() {
    return (
        <Container maxWidth='md'>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                    <Box>
                        <Stack sx={{ pt: 10 }}>
                            <Typography variant='h4'>
                                Welcome to my Web
                            </Typography>
                            <Typography variant='h4'>
                                Development Portfolio!
                            </Typography>
                        </Stack>
                        <Box sx={{ py: 1 }}>
                            <Typography variant='body2' size='small' sx={{
                                color: 'gray',
                            }}>
                                I'm Deji Afolabi, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.
                            </Typography>
                        </Box>
                        <Stack direction={'row'} spacing={2} sx={{ py: 1 }}>
                            <TextField size='small' placeholder='Enter your email' label='Your email' sx={{
                                width: '100%',
                            }} />
                            <Button sx={{ color: 'white', backgroundColor: 'black', padding: '2px 25px', borderRadius: '10px', fontSize: '10px', whiteSpace: 'nowrap' }}>REQUIRE OFFER</Button>
                        </Stack>
                        <Typography variant='body2' sx={{ color: 'gray', fontSize: '9px', marginTop: '5px' }}>Read my <u>Terms and Conditions</u></Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                    <Box>
                        <img src='/Images/developer.png' style={{ width: '100%', borderRadius: '10px' }}></img>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HeroSection
