import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
function HeroSection() {
    return (
        <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={4} sx={{ maxWidth: '1000px', justifyContent: 'center' }}>
                <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                    <Box>
                        <Stack sx={{ pt: { xs: 4, md: 10 } }}>
                            <Typography 
                                variant='h4'
                                sx={{
                                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
                                    fontWeight: 'bold',
                                    lineHeight: 1.2
                                }}
                            >
                                Welcome to my Web
                            </Typography>
                            <Typography 
                                variant='h4'
                                sx={{
                                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
                                    fontWeight: 'bold',
                                    lineHeight: 1.2
                                }}
                            >
                                Development Portfolio!
                            </Typography>
                        </Stack>
                        <Box sx={{ py: { xs: 2, md: 1 } }}>
                            <Typography 
                                variant='body1'
                                sx={{
                                    color: 'gray',
                                    fontSize: { xs: '0.875rem', md: '1rem' },
                                    lineHeight: 1.5
                                }}
                            >
                                I'm Deji Afolabi, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.
                            </Typography>
                        </Box>
                        <Stack 
                            direction={{ xs: 'column', sm: 'row' }} 
                            spacing={2} 
                            sx={{ py: 1 }}
                        >
                            <TextField 
                                size='small' 
                                placeholder='Enter your email' 
                                label='Your email' 
                                sx={{
                                    width: '100%',
                                    minWidth: { xs: '100%', sm: '200px' }
                                }} 
                            />
                            <Button 
                                sx={{ 
                                    color: 'white', 
                                    backgroundColor: 'black', 
                                    padding: { xs: '8px 16px', md: '6px 25px' }, 
                                    borderRadius: '10px', 
                                    fontSize: { xs: '0.75rem', md: '0.625rem' }, 
                                    whiteSpace: 'nowrap',
                                    minWidth: 'fit-content'
                                }}
                            >
                                REQUIRE OFFER
                            </Button>
                        </Stack>
                        <Typography 
                            variant='body2' 
                            sx={{ 
                                color: 'gray', 
                                fontSize: { xs: '0.75rem', md: '0.563rem' }, 
                                marginTop: '5px' 
                            }}
                        >
                            Read my <u>Terms and Conditions</u>
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                    <Box sx={{ mt: { xs: 3, md: 0 } }}>
                        <img 
                            src='/Images/developer.png' 
                            alt='Developer'
                            style={{ 
                                width: '100%', 
                                height: 'auto',
                                borderRadius: '10px',
                                maxHeight: '400px',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HeroSection
