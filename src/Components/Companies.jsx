import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import HeroSection from './HeroSection.jsx';
import Cards from './Card.jsx';
import Type from './Types.jsx';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ExtensionIcon from '@mui/icons-material/Extension';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { FormLabel } from '@mui/material';
function Companies() {
    const companyData = [
        { name: 'coinbase', img: '/Images/coinbase.png' },
        { name: 'spotify', img: '/Images/spotify.png' },
        { name: 'pinterest', img: '/Images/pinterest.png' },
        { name: 'Google', img: '/Images/google.png' },
        { name: 'Amazon', img: '/Images/amazon.png' },
        { name: 'netflix', img: '/Images/netflix.png' },
    ]

    const typeData = [
        { img: '/Images/phone.png', text: 'Mobile App Development', subText: 'Mobile app designed to help users discover and explore local restaurants and cuisines.' },
        { img: '/Images/idk.png', text: 'Landing Page Development', subText: 'Promotional landing page for a fitness website Summer Campaign. Form development included.' },
        { img: '/Images/desktop.png', text: 'Mobile App Development', subText: 'Mobile app designed to help users discover and explore local restaurants and cuisines.' },
        { img: '/Images/stand.png', text: 'E-commerce development', subText: 'Ecommerce website offering access to the latest and greatest gadgets and accessories.' },
        { img: '/Images/phone.png', text: 'Mobile App Development', subText: 'Mobile app designed to help users discover and explore local restaurants and cuisines.' },
        { img: '/Images/idk.png', text: 'Landing Page Development', subText: 'Promotional landing page for a fitness website Summer Campaign. Form development included.' },
        { img: '/Images/desktop.png', text: 'Mobile App Development', subText: 'Mobile app designed to help users discover and explore local restaurants and cuisines.' },
        { img: '/Images/stand.png', text: 'E-commerce development', subText: 'Ecommerce website offering access to the latest and greatest gadgets and accessories.' }
    ]
    return (
        <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: '1000px' }}>
                <Typography sx={{
                    display: 'flex',
                    color: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '12px', md: '10px' },
                    fontWeight: 'bold',
                    marginTop: { xs: '60px', md: '100px' }
                }}>
                    My awesome clients
                </Typography>
                <Box sx={{ mt: { xs: 2, md: 3 } }}>
                    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                        {companyData.map((data, index) => (
                            <Grid key={index} size={{ xs: 6, sm: 4, md: 2, lg: 2, xl: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
                                    <img 
                                        src={data.img} 
                                        alt={data.name} 
                                        style={{ 
                                            width: '70%', 
                                            maxWidth: '80px',
                                            height: 'auto'
                                        }} 
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Typography sx={{
                    display: 'flex',
                    color: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '12px', md: '10px' },
                    fontWeight: 'bold',
                    marginTop: { xs: '60px', md: '100px' },
                    textTransform: 'uppercase'
                }}>
                    my skills
                </Typography>
                <Typography variant='h5' sx={{
                    display: 'flex',
                    color: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: { xs: '1.5rem', md: '1.5rem' },
                    marginTop: { xs: '20px', md: '30px' },
                }}>
                    What I do
                </Typography>
                <Stack sx={{ px: { xs: 2, md: 0 } }}>
                    <Typography variant='body2' sx={{
                        display: 'flex',
                        color: 'gray',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: { xs: '14px', md: '14px' },
                        marginTop: { xs: '20px', md: '30px' },
                        px: { xs: 1, md: 0 }
                    }}>
                        I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling.
                    </Typography>
                    <Typography variant='body2' sx={{
                        display: 'flex',
                        color: 'gray',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: { xs: '14px', md: '14px' },
                        mt: 1,
                        px: { xs: 1, md: 0 }
                    }}>
                        Discover below how I can help you.
                    </Typography>
                </Stack>
                <Stack direction={'row'} sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4, lg: 4, xl: 4 }}>
                            <Cards header='Frontend Web development' description='Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.' />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4, lg: 4, xl: 4 }}>
                            <Cards header='Mobile App development' description='I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.' />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4, lg: 4, xl: 4 }}>
                            <Cards header='Technology Stack' description="I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native." />
                        </Grid>
                    </Grid>
                </Stack>
                <Stack direction={'row'} sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4, lg: 4, xl: 4 }}>
                            <Cards header='Frontend Web development' description='Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.' />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4, lg: 4, xl: 4 }}>
                            <Cards header='Mobile App development' description='I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.' />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4, lg: 4, xl: 4 }}>
                            <Cards header='Technology Stack' description="I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native." />
                        </Grid>
                    </Grid>
                </Stack>
                <Typography variant='h5' sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '1.5rem', md: '1.5rem' },
                    marginTop: { xs: '40px', md: '60px' },
                    textAlign: 'center'
                }}>
                    My Projects
                </Typography>
                <Stack sx={{ px: { xs: 2, md: 0 } }}>
                    <Typography variant='body2' sx={{
                        color: 'gray',
                        textAlign: 'center',
                        fontSize: { xs: '12px', md: '10px' },
                        mt: 2
                    }}>
                        Whether you have a mobile app idea that needs to come to life
                    </Typography>
                    <Typography sx={{
                        color: 'gray',
                        textAlign: 'center',
                        fontSize: { xs: '12px', md: '10px' }
                    }}>
                        or a website that requires a facelift, I'm here to turn your digital dreams
                    </Typography>
                    <Typography sx={{
                        color: 'gray',
                        textAlign: 'center',
                        fontSize: { xs: '12px', md: '10px' }
                    }}>
                        into reality.
                    </Typography>
                </Stack>
                <Grid container spacing={2} sx={{
                    marginTop: '50px'
                }}>
                    {typeData.map((data, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
                            <Box sx={{ p: { xs: 1, md: 0 } }}>
                                <img 
                                    src={data.img} 
                                    alt={data.name} 
                                    style={{ 
                                        width: '100%', 
                                        borderRadius: '10px', 
                                        height: '110px', 
                                        objectFit: 'cover' 
                                    }} 
                                />
                                <Typography sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '14px', md: '12px' },
                                    mt: 1
                                }}>
                                    {data.text}
                                </Typography>
                                <Typography sx={{
                                    color: 'gray',
                                    fontSize: { xs: '12px', md: '10px' },
                                    lineHeight: 1.4,
                                    mt: 0.5
                                }}>
                                    {data.subText}
                                </Typography>
                                <Box sx={{
                                    marginTop: '10px'
                                }}>
                                    <Button sx={{
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        padding: { xs: '6px 12px', md: '2px 10px' },
                                        borderRadius: '7px',
                                        fontSize: { xs: '10px', md: '9px' },
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold'
                                    }}>SEE DETAILS
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 8, lg: 8, xl: 8 }}>
                        <Box sx={{
                            width: '85%',
                            marginRight: '50px',
                            marginTop: '100px'
                        }}>
                            <Box sx={{
                                width: '400px'
                            }}>
                                <Typography variant='h5' sx={{
                                    fontWeight: 'bold',
                                    color: '#28343c ',
                                }}>
                                    My resume
                                </Typography>
                                <Typography variant='body2' sx={{
                                    color: 'gray',
                                    fontSize: '13px'
                                }}>
                                    Highly skilled and creative Web Developer with 5+ years of experience in crafting visually stunning and functionally robust websites and web applications.


                                </Typography>
                            </Box>

                            <Button sx={{
                                textTransform: 'uppercase',
                                color: '#000',
                                fontSize: '10px',
                                padding: '2px 25px',
                                fontWeight: 'bold',
                                marginTop: '20px'
                            }}>
                                View More
                            </Button>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, lg: 4, xl: 4 }}>
                        <Box sx={{
                            width: '100px',
                            height: '100px',
                            marginTop: '85px'
                        }}>
                            <Stack direction={'row'}>
                                <SignalCellularAltIcon sx={{
                                    color: '#fff',
                                    fontSize: '10px',
                                    marginTop: '20px',
                                    backgroundColor: '#000',
                                    borderRadius: '7px',
                                    padding: '7px 7px',
                                }} />
                                <Typography sx={{
                                    width: '300px',
                                    fontSize: '8px',
                                    color: 'gray',
                                    whiteSpace: 'nowrap',
                                    marginTop: '20px',
                                    marginLeft: '10px'
                                }}>
                                    Bachelor of Science in Computer Science
                                </Typography>
                            </Stack>
                            <Stack direction={'row'}>
                                <ExtensionIcon sx={{
                                    color: '#fff',
                                    backgroundColor: '#000',
                                    borderRadius: '7px',
                                    marginTop: '10px',
                                    padding: '7px 7px',
                                    fontSize: '10px',
                                    alignItems: 'center',
                                }} />
                                <Typography sx={{
                                    width: '300px',
                                    fontSize: '8px',
                                    color: 'gray',
                                    whiteSpace: 'nowrap',
                                    marginTop: '10px',
                                    marginLeft: '10px'
                                }}>
                                    Certified Web Developer
                                </Typography>
                            </Stack>
                            <Stack direction={'row'}>
                                <AdsClickIcon sx={{
                                    color: '#fff',
                                    backgroundColor: '#000',
                                    borderRadius: '7px',
                                    marginTop: '10px',
                                    padding: '7px 7px',
                                    fontSize: '10px',
                                    alignItems: 'center',
                                }} />
                                <Typography sx={{
                                    width: '300px',
                                    fontSize: '8px',
                                    color: 'gray',
                                    whiteSpace: 'nowrap',
                                    marginTop: '10px',
                                    marginLeft: '10px'
                                }}>
                                    Frontend Framework Proficiency Certification
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{
                    marginTop: '50px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    <Typography variant='h5' sx={{
                        fontWeight: 'bold'
                    }}>
                        What Clients Say
                    </Typography>
                    <Stack>
                        <Typography variant='body2' sx={{
                            color: 'gray'
                        }}>
                            Discover what clients have to say about their experiences working
                        </Typography>
                        <Typography variant='body2' sx={{
                            color: 'gray'
                        }}>
                            with me. My client's satisfaction is my greatest achievement!
                        </Typography>
                    </Stack>
                </Box>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                        <Box sx={{
                            width: '400px',
                            marginTop: '50px'
                        }}>
                            <Stack>
                                <Typography sx={{
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}>
                                    Mobile App
                                </Typography>
                                <Typography sx={{
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}>
                                    Development
                                </Typography>
                            </Stack>
                            <Typography variant='body2' sx={{
                                color: 'gray',
                                marginLeft: '150px',
                                fontSize: '10px'

                            }}>
                                I had the pleasure of working with Deji on a critical web development project, and I can confidently say that their expertise and professionalism exceeded my expectations.
                            </Typography>
                            <Typography variant='body2' sx={{
                                color: '#000',
                                fontWeight: 'bold',
                                fontSize: '10px',
                                textAlign: 'center',
                                marginLeft: '35px',
                                marginTop: '10px'
                            }}>
                                Michaeal - Technical Manager
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                        <img src='./Images/client.png' style={{ width: '150px', height: '200px', borderRadius: '10px', objectFit: 'cover', marginTop: '20px', marginLeft: '65px' }}></img>
                    </Grid>
                </Grid>
                <Box sx={{
                    marginTop: '50px'
                }}>
                    <Typography variant='body2' sx={{
                        color: 'gray',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        fontSize: '8px',
                        fontWeight: 'bold'
                    }}>
                        Popular Clients
                    </Typography>
                </Box>
                <Box sx={{
                    marginTop: '10px',
                    textAlign: 'center',
                }}>
                    <Stack>
                        <Typography sx={{
                            fontWeight: 'bold'
                        }}>
                            Trusted by over 10,000+
                        </Typography>
                        <Typography sx={{
                            fontWeight: 'bold'
                        }}>
                            clients
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{
                    marginTop: '30px'
                }}>
                    <Grid container spacing={2} >
                        {companyData.map((data, index) => (
                            <Grid key={index} size={{ xs: 6, md: 2, lg: 2, xl: 2 }}>
                                <img src={data.img} alt={data.name} style={{ width: '50%', }} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{
                    marginTop: '50px'
                }}>
                <Grid container spacing={2}></Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6   }}>

                    

                    <Typography variant='h5' sx={{
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        Contact Us
                    </Typography>
                    <Stack sx={{
                        marginTop: '10px'
                    }}>
                        <Typography variant='body2' sx={{
                            color: 'gray',
                            textAlign: 'center',
                            fontSize: '10px'

                        }}>
                            Ready to get started? Feel free to reach out through the
                        </Typography>
                        <Typography variant='body2' sx={{
                            color: 'gray',
                            textAlign: 'center',
                            fontSize: '10px'
                        }}>
                            contact form, and let's embark on a journey of innovation and
                        </Typography>
                        <Typography varaint='body2' sx={{
                            color: 'gray',
                            textAlign: 'center',
                            fontSize: '10px'
                        }}>
                            success.
                        </Typography>
                    </Stack>
                    </Grid>
                </Box>
                <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}></Grid>
                <Box sx={{
                    width: { xs: '95%', md: '75%' },
                    border: '1px solid gray',
                    borderRadius: '10px',
                    minHeight: { xs: 'auto', md: '300px' },
                    margin: 'auto',
                    marginTop: { xs: '30px', md: '50px' },
                    boxShadow: '1px 2px',
                    p: { xs: 2, md: 0 }
                }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box sx={{
                                width: '100%',
                                marginTop: { xs: 0, md: '10px' },
                                marginLeft: { xs: 0, md: '10px' },
                                minHeight: { xs: 'auto', md: '280px' },
                                backgroundColor: '#212121',
                                borderRadius: '10px',
                                p: 2
                            }}>
                                <Typography variant='body2' sx={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: { xs: '16px', md: '14px' },
                                    mb: 2
                                }}>
                                    Contact Information
                                </Typography>
                                <Typography variant='body2' sx={{
                                    color: 'gray',
                                    fontSize: { xs: '12px', md: '10px' },
                                    mb: 3
                                }}>
                                    Fill up the form and our Team will get back to you within 24 hours.
                                </Typography>
                                
                                <Stack spacing={2}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <LocalPhoneIcon sx={{
                                            color: '#fff',
                                            fontSize: { xs: '16px', md: '14px' }
                                        }} />
                                        <Typography variant='body2' sx={{
                                            color: '#fff',
                                            fontSize: { xs: '12px', md: '10px' },
                                            fontWeight: 'bold'
                                        }}>
                                            +1(424) 535 3523
                                        </Typography>
                                    </Box>
                                    
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <EmailIcon sx={{ 
                                            color: '#fff', 
                                            fontSize: { xs: '16px', md: '14px' }
                                        }} />
                                        <Typography variant='body2' sx={{
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '12px', md: '10px' }
                                        }}>
                                            hello@mail.com
                                        </Typography>
                                    </Box>
                                    
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <ConfirmationNumberIcon sx={{
                                            fontSize: { xs: '16px', md: '14px' },
                                            color: 'white'
                                        }} />
                                        <Typography sx={{
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '12px', md: '10px' }
                                        }}>
                                            Open Support Ticket
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                        
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box sx={{ p: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 } }}>
                                <Stack spacing={2}>
                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                        <TextField 
                                            size='small' 
                                            variant='standard' 
                                            placeholder='eg. Lucas' 
                                            label='First Name' 
                                            fullWidth
                                        />
                                        <TextField 
                                            size='small' 
                                            variant='standard' 
                                            placeholder='eg. Jones' 
                                            label='Last Name' 
                                            fullWidth
                                        />
                                    </Stack>
                                    
                                    <TextField 
                                        size='small' 
                                        variant='standard' 
                                        placeholder='eg. Lucas@mail.com' 
                                        label='Email' 
                                        fullWidth
                                    />
                                    
                                    <Box>
                                        <Typography variant='body2' sx={{
                                            color: 'gray',
                                            fontSize: { xs: '12px', md: '10px' },
                                            mb: 1
                                        }}>
                                            What are you interested in?
                                        </Typography>
                                        <FormControl>
                                            <RadioGroup defaultValue="outlined" name="radio-buttons-group">
                                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Radio size='small' value="outlined" />
                                                        <Typography variant="body2" sx={{ fontSize: { xs: '12px', md: '10px' } }}>Web Dev</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Radio size='small' value="soft" />
                                                        <Typography variant="body2" sx={{ fontSize: { xs: '12px', md: '10px' } }}>Mobile</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Radio size='small' value="solid" />
                                                        <Typography variant="body2" sx={{ fontSize: { xs: '12px', md: '10px' } }}>Design</Typography>
                                                    </Box>
                                                </Stack>
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                    
                                    <TextField 
                                        variant='standard' 
                                        label='Your Message' 
                                        multiline
                                        rows={3}
                                        fullWidth
                                    />
                                    
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                        <Button sx={{
                                            backgroundColor: '#000',
                                            padding: { xs: '8px 16px', md: '6px 12px' },
                                            color: '#fff',
                                            fontSize: { xs: '12px', md: '10px' },
                                            borderRadius: '8px'
                                        }}>
                                            Send Message
                                        </Button>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Companies 