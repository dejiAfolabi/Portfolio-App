import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function Type({ header, description,}) {
    return (
        <Box sx={{
            width: '200px',
            marginTop: '50px'
        }}>
            <Box>
                <img src='./Images/desktop.png' alt='mobile' style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '2px 2px',
                }}>
                </img>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '15px'
                }}>
                    {header}
                </Typography>
                <Typography sx={{
                    color: 'gray',
                    fontSize: '10px'
                }}>
                    {description}
                </Typography>
                <Button sx={{
                    textTransform: 'uppercase',
                    backgroundColor: '#000',
                    color: '#fff',
                    borderRadius: '10px',
                    padding: '5px 15px',
                    fontSize: '10px',
                    marginTop: '15px'
                }}>see details</Button>
            </Box>
        </Box>
    )
}

export default Type