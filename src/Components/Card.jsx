import { Box, Typography, } from '@mui/material'
function Cards({ header, description }) {
    return (
      <Box sx={{ 
        width: { xs: '100%', sm: '200px', md: '175px' }, 
        textAlign: 'center', 
        marginTop: { xs: '30px', md: '50px' },
        padding: { xs: '16px', md: '8px' }
      }}>
        <Typography variant='h6' sx={{
            fontWeight: 'bold',
            fontSize: { xs: '14px', sm: '12px', md: '10px' },
            marginBottom: '8px'
        }}>{header}</Typography>
        <Typography variant='body2' sx={{
            color: 'gray',
            fontSize: { xs: '12px', sm: '10px', md: '8px' },
            lineHeight: 1.4
        }}>{description}</Typography>
      </Box>
    )

}

export default Cards