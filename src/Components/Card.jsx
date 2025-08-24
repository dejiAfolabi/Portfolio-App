import { Box, Typography, } from '@mui/material'
function Cards({ header, description }) {
    return (
      <Box sx={{ width: '175px', textAlign: 'center', marginTop: '50px'}}>
        <Typography variant='h6' sx={{
            fontWeight: 'bold',
            fontSize : '10px',
        }}>{header}</Typography>
        <Typography variant='body2' sx={{
            color: 'gray',
            fontSize : '8px',
        }}>{description}</Typography>
      </Box>
    )

}

export default Cards