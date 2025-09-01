import './App.css'
import Header from './Components/Header'
import { Box } from '@mui/material'

function App() {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%'
    }}>
      <Header />
    </Box>
  )
}

export default App
